import React from "react";
import CodeBlock from "../CodeSnippet//CodeBlock";
import { a11yDark } from "react-syntax-highlighter/dist/esm/styles/prism";

function SocketClient() {

  const snippets1 = [
    { code: `npx create-react-app socket-chat-client`, theme: a11yDark },
    { code: `cd socket-chat-client`, theme: a11yDark },
    { code: `npm install socket.io-client`, theme: a11yDark },
    {
      code: `import React, { useState, useEffect, useRef } from "react";
import io from "socket.io-client";
import 'bootstrap/dist/css/bootstrap.min.css';


const socket = io("http://localhost:5000");

function SocketClient() {
const [username, setUsername] = useState("");
  const [room, setRoom] = useState("");
  const [tempName, setTempName] = useState("");
  const [tempRoom, setTempRoom] = useState("");
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState([]);
  const chatEndRef = useRef(null);

  useEffect(() => {
    socket.on("receive_message", (data) => {
      setChat((prev) => [...prev, { type: "chat", ...data }]);
    });

    socket.on("notification", (msg) => {
      setChat((prev) => [...prev, { type: "system", text: msg }]);
    });

    return () => {
      socket.off("receive_message");
      socket.off("notification");
    };
  }, []);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chat]);

  const handleLogin = (e) => {
    e.preventDefault();
    if (tempName.trim() && tempRoom.trim()) {
      setUsername(tempName);
      setRoom(tempRoom);
      socket.emit("join_room", { username: tempName, room: tempRoom });
    }
  };

  const sendMessage = (e) => {
    e.preventDefault();
    if (message.trim()) {
      socket.emit("send_message", { user: username, text: message, room });
      setMessage("");
    }
  };

  const handleExit = () => {
    window.location.reload();
  };

  if (!username || !room) {
    return (
      <div className="container login-container mt-5">
        <div className="card p-4 shadow-sm">
          <h3 className="text-center mb-4">Join Chat</h3>
          <form onSubmit={handleLogin}>
            <input
              className="form-control mb-3"
              placeholder="Your Name"
              value={tempName}
              onChange={(e) => setTempName(e.target.value)}
            />
            <input
              className="form-control mb-3"
              placeholder="Group Name"
              value={tempRoom}
              onChange={(e) => setTempRoom(e.target.value)}
            />
            <button className="btn btn-primary w-100">Join Room</button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="chat-container">
      <div className="chat-header d-flex justify-content-between align-items-center px-3">
        <h5 className="mb-0 text-white">Chat App</h5>
        <button onClick={handleExit} className="btn btn-outline-light btn-sm">Exit</button>
      </div>
      <div className="chat-body px-3 py-2">
        {chat.map((msg, i) => (
          <div key={i} className={\`mb-2 \${msg.type === 'chat' && msg.user === username ? 'text-end' : ''}\`}>
            {msg.type === 'system' ? (
              <em className="system-msg">{msg.text}</em>
            ) : (
              <div className={\`msg-bubble \${msg.user === username ? 'own' : 'other'}\`}>
                <small className="text-muted">{msg.user === username ? 'You' : msg.user}</small>
                <div>{msg.text}</div>
              </div>
            )}
          </div>
        ))}
        <div ref={chatEndRef} />
      </div>
      <form onSubmit={sendMessage} className="chat-footer d-flex">
        <input
          className="form-control"
          placeholder="Type message..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button className="btn btn-dark ms-2">Send</button>
      </form>
    </div>
  );
}

export default SocketClient`, theme: a11yDark
    }

  ];

  const snippets2 = [
    { code: `mkdir socket-chat-server`, theme: a11yDark },
    { code: `cd socket-chat-server`, theme: a11yDark },
    { code: `npm init -y`, theme: a11yDark },
    { code: `npm install express socket.io cors`, theme: a11yDark }
  ];

  const snippets3 = [

    {
      code: `const express = require('express');
    const http = require('http');
    const socketIO = require('socket.io');
    
    const app = express();
    const server = http.createServer(app);
    const io = socketIO(server, {
      cors: {
        origin: '*',
      },
    });
    
    io.on('connection', (socket) => {
      console.log('New client connected');
    
      socket.on('chat message', (msg) => {
        io.emit('chat message', msg); // broadcast message to all
      });
    
      socket.on('disconnect', () => {
        console.log('Client disconnected');
      });
    });
    
    server.listen(5000, () => {
      console.log('Server listening on port 5000');
    });
    `, theme: a11yDark
    },
  ];

   const snippets4 = [

    {
      code: `/* Socket Chat Styles */
.chat-container {
  max-width: 600px;
  margin: 40px auto;
  border: 1px solid #ccc;
  display: flex;
  flex-direction: column;
  height: 80vh;
  background-color: #f8f9fb;
  border-radius: 8px;
  overflow: hidden;
}

.chat-header {
  background-color: #4b0082;
  padding: 10px;
}

.chat-body {
  flex: 1;
  overflow-y: auto;
  background-color: #ffffff;
  padding: 10px;
}

.chat-footer {
  border-top: 1px solid #ddd;
  padding: 10px;
  background-color: #f0f2f5;
}

.msg-bubble {
  max-width: 60%;
  background-color: #e1eaff;
  padding: 8px 12px;
  border-radius: 10px;
  box-shadow: 1px 1px 3px rgba(0,0,0,0.1);
}

.msg-bubble.own {
  background-color: #d1ffd6;
  margin-left: auto;
  text-align: right;
}

.msg-bubble.other {
  background-color: #e1eaff;
  text-align: left;
}

.system-msg {
  font-style: italic;
  color: gray;
  display: block;
  text-align: center;
}

    `, theme: a11yDark
    },
  ];

  return (
    <>
      <div>
        <h1><u>Socket Client step-by-step</u></h1>
        {snippets1.map((item, index) => (
          <CodeBlock
            key={index}
            code={item.code}
            theme={item.theme}
          />
        ))}

           <h1>Save file name style.css</h1>
        {snippets4.map((item, index) => (
          <CodeBlock
            key={index}
            code={item.code}
            theme={item.theme}
          />
        ))}
      </div>

        <h1><u>Socket Server step-by-step</u></h1>
        {snippets2.map((item, index) => (
          <CodeBlock
            key={index}
            code={item.code}
            theme={item.theme}
          />
        ))}
        <h3>Save file name server.js</h3>
        <h4>Run the code on terminal like = node server</h4>
        {snippets3.map((item, index) => (
          <CodeBlock
            key={index}
            code={item.code}
            theme={item.theme}
          />
        ))}
     
    </>
  );
}

export default SocketClient

