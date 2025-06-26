// backend/index.js
const express = require('express');
const cors = require('cors');
const fs = require('fs');
const app = express();
app.use(cors());
app.use(express.json());

app.post('/api/login', (req, res) => {
  const { email, password } = req.body;
  const users = JSON.parse(fs.readFileSync('./users.json', 'utf-8'));

  const matchedUser = users.find(
    user => user.email === email && user.password === password
  );

  if (matchedUser) {
    res.json({ success: true, user: matchedUser });
  } else {
    res.status(401).json({ success: false, message: 'Invalid credentials' });
  }
});

app.post('/api/signup', (req, res) => {
  const users = JSON.parse(fs.readFileSync('./users.json', 'utf-8'));
  users.push(req.body);
  fs.writeFileSync('./users.json', JSON.stringify(users, null, 2));
  res.json({ success: true, user: req.body });
});

app.listen(5000, () => console.log('Server running at http://localhost:5000'));
