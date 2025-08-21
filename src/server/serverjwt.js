const express = require('express');
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
    res.json({ message: `Welcome ${user.username}! Access granted.` });
  });
});

app.listen(4000, () => console.log('🚀 Server running on http://localhost:4000'));
