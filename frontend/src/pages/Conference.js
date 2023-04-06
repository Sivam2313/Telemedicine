import React, { useEffect, useRef, useState } from 'react'
import io from 'socket.io-client';
import Peer from 'peerjs';
import './style.css';
var socket;
const Conference = () => {
    const [message, setMessage] = useState();
    const [messageList, setMessageList] = useState([]);
    const [isCallable, setIsCallable] = useState(false)
    const [peerId, setPeerId] = useState('');
    const [remotePeerIdValue, setRemotePeerIdValue] = useState('');
    const remoteVideoRef = useRef(null);
    const currentUserVideoRef = useRef(null);
    const peerInstance = useRef(null);
    const downloadBtn = useRef(null);
    const peer = new Peer()


  useEffect(() => {
    const peer = new Peer();
    const room = localStorage.getItem('room');
    const port = localStorage.getItem('port');
    socket = io("https://production-production-2583.up.railway.app/")

    peer.on('open', (id) => {
      setPeerId(id)
      socket.emit('join-room',room,id)
    });

    peer.on('call', (call) => {
      var getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia;

      getUserMedia({ video: true, audio: true }, (mediaStream) => {
        currentUserVideoRef.current.srcObject = mediaStream;
        currentUserVideoRef.current.play();
        call.answer(mediaStream)
        call.on('stream', function(remoteStream) {
          remoteVideoRef.current.srcObject = remoteStream
          remoteVideoRef.current.play();
        });
      });
    })

    peerInstance.current = peer;
  }, [])
    

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
        // console.log('yes');
        socket.emit("send-message",message,room)

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
        
        
    }, [socket])


  function call(remotePeerId) {

    if(!remotePeerId){
      return;
    }

    var getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia;

    getUserMedia({ video: true, audio: true }, (mediaStream) => {

      currentUserVideoRef.current.srcObject = mediaStream;
      currentUserVideoRef.current.play();

      const call = peerInstance.current.call(remotePeerId, mediaStream)

      call.on('stream', (remoteStream) => {
        remoteVideoRef.current.srcObject = remoteStream
        remoteVideoRef.current.play();
      });
    });
  }

  async function startRecording(){
      const stream = await navigator.mediaDevices.getDisplayMedia({
        video:{
          mediaSource:'screen',
        }
      });
      var data = [];

      const mediaRecorder = new MediaRecorder(stream);

      mediaRecorder.ondataavailable = (e)=>{
        data.push(e.data);
      };
      mediaRecorder.start();
      mediaRecorder.onstop = (e)=>{
        const blob = new Blob(data, { 'type' : data[0].type });
        data = [];
        downloadBtn.current.href = URL.createObjectURL(blob);
        downloadBtn.current.download = 'video.mp4';
        downloadBtn.current.click();
        console.log(downloadBtn);
      }
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
          <button id="stopVideo" onClick={()=>{startRecording()}} className="options__button">
            <i class="material-icons">fiber_manual_record</i>
          </button>
          <div id="muteButton" className="options__button">
            <i className="fa fa-microphone"></i>
          </div>
          <a ref={downloadBtn}>
            <button id="download" className="options__button">
              <i class="material-icons">file_download</i>
            </button>
          </a>
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