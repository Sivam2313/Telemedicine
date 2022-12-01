import React, { useEffect, useRef, useState } from 'react'
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
    const peer = new Peer()


  useEffect(() => {
    const peer = new Peer();
    const room = localStorage.getItem('room')
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

    // function stopVideo (){
    //   currentUserVideoRef.current.stop();
    // }


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
          <button id="stopVideo" className="options__button">
            <i className="fa fa-video-camera"></i>
          </button>
          <div id="muteButton" className="options__button">
            <i className="fa fa-microphone"></i>
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