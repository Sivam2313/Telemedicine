import React, { useEffect, useRef, useState } from 'react'
import { useHistory } from 'react-router-dom';
import io from 'socket.io-client';
import Peer from 'peerjs';
import './style.css';
const socket = io.connect("http://localhost:5000")

const Conference = () => {
    const [message, setMessage] = useState();
    const [messageList, setMessageList] = useState([]);
    const [isCallable, setIsCallable] = useState(false)
    const [peerId, setPeerId] = useState('');
    const [remotePeerIdValue, setRemotePeerIdValue] = useState('');
    const remoteVideoRef = useRef(null);
    const currentUserVideoRef = useRef(null);
    const peerInstance = useRef(null);
    const [audio,setAudio]=useState(true)
    const [video,setVideo]=useState(true)
    const [record,setRecord]=useState(false)
     let peer;
    const history = useHistory();
     let myStream;
     
  useEffect(() => {
     peer = new Peer();
    const room = localStorage.getItem('room')
    console.log(room)
    peer.on('open', (id) => {
      setPeerId(id)
      socket.emit('join-room',room,id)
    });

    peer.on('call', (call) => {
      var getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia;

      getUserMedia({ video: true, audio: true }, (mediaStream) => {
        myStream=mediaStream
        currentUserVideoRef.current.srcObject = myStream;
        currentUserVideoRef.current.play();
        // console.log(myStream.getVideoTracks())
        // myStream.getVideoTracks()[0].enabled=false
        // call.answer(mediaStream)
        call.answer(myStream)
        call.on('stream', function(remoteStream) {

          remoteVideoRef.current.srcObject = remoteStream   
          remoteVideoRef.current.play();
        });
      });
    })

    peerInstance.current = peer;
  }, [])
   let recorder; 
  const startScreenCapture = async () => {
    const stream = await navigator.mediaDevices.getDisplayMedia({ video: true,audio:true });
    recorder = new MediaRecorder(stream, { mimeType: 'video/webm' });
    const data = [];
  
    recorder.ondataavailable = (event) => {
      data.push(event.data);
    };
  
    recorder.onstop = () => {
      console.log('Stop Recording')
      const blob = new Blob(data, { type: 'video/webm' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'screen-capture.webm';
      a.click();
      const video = document.createElement('video');
      video.src = url;
      document.body.appendChild(video);
    };
    recorder.start();
  };
  const stopScreenCapture = () => {
    recorder.stop();
  };
  const videoPause = () => {
    setVideo(!video)
    console.log('video pause ho')
    var getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia;
    getUserMedia({ video: true, audio: true }, (mediaStream) => {
      // myStream=mediaStream
      // console.log(mediaStream.getVideoTracks())
      mediaStream.getVideoTracks()[0].enabled = !(mediaStream.getVideoTracks()[0].enabled);
      // mediaStream.active=!(mediaStream.active)
    })

   
    
  }
    const sendMessage = ()=>{
        if (!message)
            return;
        // console.log(message);
        const data = {
            message:message,
            alignment:'flex-end',
        }
        const arr = [...messageList]
        setMessageList((arr)=>[...arr,data])
        const room = localStorage.getItem('room');
        socket.emit("send-message",message,room)

    }
    
    const endCall = () => {
        const room = localStorage.getItem('room')
        socket.emit('leave-room',room,peerId)

        peerInstance.current.disconnect()
        if(localStorage.getItem('DoctorOnline')){
        const path = '/prescription/'+room;
        history.push(path);
        window.location.reload()
        }
        if(localStorage.getItem('HwOnline')){
          const path='/HealthWorker';
          history.push(path)
          window.location.reload()
        }

    }

    useEffect(() => {
        socket.off('recieve-message').on('recieve-message', message=>{
            const data = {
                message:message,
                alignment:'initial',
            }
            const arr = [...messageList]
            setMessageList((arr)=>[...arr,data])
        })
        socket.on('user-connected',id=>{
            const data = {
                message:"User Connected",
                alignment:'center',
            }
            const arr = [...messageList]
            setMessageList((arr)=>[...arr,data])
            setIsCallable(true);
            setRemotePeerIdValue(id);
            call(id);
        })
        socket.on('user-disconnected',id => {
          const data={
            message:`User Disconnected with ${id}`,
            alignment:'center',
          }
          const arr=[...messageList]
          setMessageList((arr) => [...arr,data])
          
        })
        
    }, [socket])


  function call(remotePeerId) {

    if(!remotePeerId){
      return;
    }

    var getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia;

    getUserMedia({ video: true, audio: true }, (mediaStream) => {
      myStream=mediaStream
      currentUserVideoRef.current.srcObject = myStream;
      currentUserVideoRef.current.play();

      const call = peerInstance.current.call(remotePeerId, myStream)

      call.on('stream', (remoteStream) => {
        remoteVideoRef.current.srcObject = remoteStream
        remoteVideoRef.current.play();
      });
    });
  }

  return (
    <div>
            <div className="header">
      <div className="logo">
        <h3>Conference</h3>
      </div>
    </div>  
    <div className="main">  
    <div className="main__left">
      <div className="videos__group">
        <div id="video-grid">
            <video ref={currentUserVideoRef} />
            <video ref={remoteVideoRef} />
        </div>
      </div>
      <div className="options">
        <div className="options__left">
          <div id="stopVideo" className="options__button">
              {video===true ? (
                <i className="fa fa-video" onClick={() => {videoPause()}}></i>
              ):(
                <i className="fa fa-video-slash" onClick={() => {videoPause()}}></i>
              )}
             
          </div>
          <div id="muteButton" className="options__button">
            {audio?(
             <i className="fa fa-microphone" onClick={() => {setAudio(!audio)}}></i>):
             (
            <i className="fa fa-microphone-slash" onClick={() => {setAudio(!audio)}}></i>)
            }
          </div>
          <div className="options__button">
            <i onClick={endCall} className="fa fa-phone"></i>
          </div>
          <div className="options__button">
            <i onClick={() => {if(record){stopScreenCapture(); setRecord(!record)}else{startScreenCapture();setRecord(!record)}}} className="fa fa-camera"></i>
          </div>
        </div>
        <div className="options__right">
          <button onClick={()=>{call(remotePeerIdValue)}} id="inviteButton" className="options__button">
            <i className="fas fa-user-plus"></i>
          </button>
        </div>
      </div>
    </div>
    <div className="main__right">
      <div className="main__chat_window">
          {
            messageList.map((item,idx)=>{
                return(
                    <div key={idx} className='message' style={{alignSelf:item.alignment}}>
                        {item.message}
                    </div>
                )
            })
          }
      </div>
      <div className="main__message_container">
        <input id="chat_message" type="text" placeholder="Type message here..." onChange={(e)=>{setMessage(e.target.value)}} />
        <button id="send" className="options__button" type='submit' onClick={sendMessage}>
          <i className="fa fa-plus" aria-hidden="true"></i>
        </button>
      </div>
    </div>
  </div>
    </div>
  )
}

export default Conference