import React from 'react';
import CodeBlock from "../CodeSnippet//CodeBlock";
import { a11yDark } from "react-syntax-highlighter/dist/esm/styles/prism";

function ClientJwt() {
 

  //code snippet for JWT login
  const snippets1 = [
    { code: `npx create-react-app client `, theme: a11yDark },
    { code: `cd client`, theme: a11yDark },
    { code: `npm install axios`, theme: a11yDark },
    {
      code: `import React, { useState } from 'react';
import axios from 'axios';

function ClientJwt() {
const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [token, setToken] = useState('');

  const login = async () => {
    try {
      const res = await axios.post('http://localhost:4000/login', { username, password });
      setToken(res.data.token);
      alert('Login Success');
    } catch (err) {
      alert('Login Failed');
    }
  };

  const getProtectedData = async () => {
    try {
      const res = await axios.get('http://localhost:4000/protected', {
        headers: { Authorization: \`Bearer \${token}\`  }
      });
      alert(res.data.message);
    } catch (err) {
      alert('Access Denied');
    }
  };
console.log("Hello, * Themes!");
  

  return (
    <div style={{ padding: 20 }}>
      <h2>Simple JWT Login</h2>
      <input placeholder="Username" onChange={(e) => setUsername(e.target.value)} />
      <br />
      <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
      <br />
      <button onClick={login}>Login</button>
      <button onClick={getProtectedData}>Get Protected Info</button>
    </div>
  );
}


export default ClientJwt`, theme: a11yDark
    }
  ];

  // Second set of code snippets
  const snippets2 = [
    { code: `mkdir server`, theme: a11yDark },
    { code: `cd server`, theme: a11yDark },
    { code: `npm init -y`, theme: a11yDark },
    { code: `npm install express jsonwebtoken cors`, theme: a11yDark }
  ];

  const snippets3 = [
    {
      code: `const express = require('express');
    const cors = require('cors');
    const jwt = require('jsonwebtoken');
    
    const app = express();
    app.use(cors());
    app.use(express.json());
    
    const SECRET = 'thalaiva123';
    
    app.post('/login', (req, res) => {
      const { username, password } = req.body;
      if (username === 'arjun' && password === '1234') {
        const token = jwt.sign({ username }, SECRET, { expiresIn: '1h' });
        res.json({ token });
      } else {
        res.status(401).json({ message: 'Invalid credentials' });
      }
    });
    
    app.get('/protected', (req, res) => {
      const authHeader = req.headers['authorization'];
      const token = authHeader && authHeader.split(' ')[1];
      if (!token) return res.sendStatus(401);
    
      jwt.verify(token, SECRET, (err, user) => {
        if (err) return res.sendStatus(403);
        res.json({ message: \`Welcome \${user.username}! Access granted.\` });
      });
    });
    
    app.listen(4000, () => console.log('🚀 Server running on http://localhost:4000'));
    `, theme: a11yDark
    }
  ];


  return (
    <>

      {/* snippetcode */}
      <div>
        <h1><u>JWT Client Code</u></h1>
        <h4>step-by-step method</h4>
        {snippets1.map((item, index) => (
          <CodeBlock
            key={index}
            code={item.code}
            theme={item.theme}
          />
        ))}

        <h1><u>JWT Sever Code</u></h1>

        {snippets2.map((item, index) => (
          <CodeBlock
            key={index}
            code={item.code}
            theme={item.theme}
          />
        ))}
        <h2>Create server file like server.js</h2>
        <h4>Run terminal= node server.js</h4>

        {snippets3.map((item, index) => (
          <CodeBlock
            key={index}
            code={item.code}
            theme={item.theme}
          />
        ))}
      </div>
    </>

  );
}


export default ClientJwt



