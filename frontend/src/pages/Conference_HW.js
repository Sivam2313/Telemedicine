import React, { useEffect, useRef, useState } from "react";
import { useHistory } from "react-router-dom";
import io from "socket.io-client";
import Peer from "peerjs";
import "./style.css";
// const socket = io.connect("http://localhost:5000");
const socket = io.connect("https://telemedicine-main.onrender.com/")

const Conference = () => {
  const [message, setMessage] = useState();
  const [messageList, setMessageList] = useState([]);
  const [isCallable, setIsCallable] = useState(false);
  const [peerId, setPeerId] = useState("");
  const [remotePeerIdValue, setRemotePeerIdValue] = useState("");
  const remoteVideoRef = useRef(null);
  const currentUserVideoRef = useRef(null);
  const peerInstance = useRef(null);

  const [audio, setAudio] = useState(true);
  const [video, setVideo] = useState(true);
  const [MyStream, setMyStream] = useState(null);
  // var peer;
  const history = useHistory();

  useEffect(() => {
    const peer = new Peer();
    const room = localStorage.getItem("room");
    console.log(room);
    peer.on("open", (id) => {
      setPeerId(id);
      socket.emit("join-room", room, id);
    });

    peer.on("call", (call) => {
      var getUserMedia =
        navigator.getUserMedia ||
        navigator.webkitGetUserMedia ||
        navigator.mozGetUserMedia;

      getUserMedia({ video: true, audio: true }, (mediaStream) => {
        currentUserVideoRef.current.srcObject = mediaStream;
        currentUserVideoRef.current.play();
        call.answer(mediaStream);
        call.on("stream", function (remoteStream) {
          remoteVideoRef.current.srcObject = remoteStream;
          remoteVideoRef.current.play();
        });
      });
    });

    peer.on("disconnected", () => {
      currentUserVideoRef.current.srcObject
        ?.getVideoTracks()
        .forEach((track) => {
          if (track.kind === "video") {
            track.stop();
          }
        });
      currentUserVideoRef.current.srcObject = undefined;
    });

    peer.on("close", () => {
      remoteVideoRef.current.srcObject = undefined;
    });

    peerInstance.current = peer;
  }, []);

  const sendMessage = () => {
    if (!message) return;
    // console.log(message);
    const data = {
      message: message,
      alignment: "flex-end",
    };
    const arr = [...messageList];
    setMessageList((arr) => [...arr, data]);
    const room = localStorage.getItem("room");
    socket.emit("send-message", message, room);
  };

  const videoPause = () => {
    setVideo(!video);
    MyStream.getVideoTracks()[0].enabled =
      !MyStream.getVideoTracks()[0].enabled;
  };
  const audioPause = () => {
    setAudio(!audio);
    MyStream.getAudioTracks()[0].enabled =
      !MyStream.getAudioTracks()[0].enabled;
  };

  const endCall = () => {
    const room = localStorage.getItem("room");
    socket.emit("leave-room", room, peerId);

    peerInstance.current.disconnect();
    // if(localStorage.getItem('DoctorOnline')){
    // const path = '/prescription/'+room;
    // history.push(path);
    // }else{
    //   const path='/HealthWorker';
    //   history.push(path)
    // }
    history.push("/HealthWorker");
    window.location.reload();
  };

  useEffect(() => {
    socket.off("recieve-message").on("recieve-message", (message) => {
      const data = {
        message: message,
        alignment: "initial",
      };
      const arr = [...messageList];
      setMessageList((arr) => [...arr, data]);
    });
    socket.on("user-connected", (id) => {
      const data = {
        message: "User Connected",
        alignment: "center",
      };
      const arr = [...messageList];
      setMessageList((arr) => [...arr, data]);
      setIsCallable(true);
      setRemotePeerIdValue(id);
      call(id);
    });
    socket.on("user-disconnected", (id) => {
      const data = {
        message: `User Disconnected with ${id}`,
        alignment: "center",
      };
      const arr = [...messageList];
      setMessageList((arr) => [...arr, data]);
    });
  }, [socket]);

  function call(remotePeerId) {
    if (!remotePeerId) {
      return;
    }

    var getUserMedia =
      navigator.getUserMedia ||
      navigator.webkitGetUserMedia ||
      navigator.mozGetUserMedia;

    getUserMedia({ video: true, audio: true }, (mediaStream) => {
      currentUserVideoRef.current.srcObject = mediaStream;
      currentUserVideoRef.current.play();

      const call = peerInstance.current.call(remotePeerId, mediaStream);

      call.on("stream", (remoteStream) => {
        remoteVideoRef.current.srcObject = remoteStream;
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
            {/* <div id="video-grid"> */}
            {/* <video ref={currentUserVideoRef} /> */}
            <video id="d_video" ref={remoteVideoRef} />
            {/* </div> */}
          </div>
          <div className="options">
            <div className="options__left">
              <div id="stopVideo" className="options__button">
                <i
                  className="fa fa-video-camera"
                  onClick={() => {
                    videoPause();
                  }}></i>
              </div>
              <div id="muteButton" className="options__button">
                <i
                  className="fa fa-microphone"
                  onClick={() => {
                    audioPause();
                  }}></i>
              </div>
              <div>
                <button
                  className="options__button"
                  onClick={() => {
                    endCall();
                  }}>
                  End{" "}
                </button>
              </div>
            </div>
            <div className="options__right">
              <button
                onClick={() => {
                  call(remotePeerIdValue);
                }}
                id="inviteButton"
                className="options__button">
                <i className="fas fa-user-plus"></i>
              </button>
            </div>
          </div>
        </div>
        <div className="main__right">
          <div id="video-grid">
            <video ref={currentUserVideoRef} />
          </div>

          <div className="main__chat_window">
            {messageList.map((item, idx) => {
              return (
                <div
                  key={idx}
                  className="message"
                  style={{ alignSelf: item.alignment }}>
                  {item.message}
                </div>
              );
            })}
          </div>
          <div className="main__message_container">
            <input
              id="chat_message"
              type="text"
              placeholder="Type message here..."
              onChange={(e) => {
                setMessage(e.target.value);
              }}
            />
            <button
              id="send"
              className="options__button"
              type="submit"
              onClick={sendMessage}>
              <i className="fa fa-plus" aria-hidden="true"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Conference;
