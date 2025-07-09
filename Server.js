const express = require('express');
const cors = require('cors');
const fs = require('fs');

const app = express();
app.use(cors());

app.get('/api/doctors', (req, res) => {
  const data = fs.readFileSync('doctors.json');
  res.json(JSON.parse(data));
});

app.listen(5000, () => console.log('Server running on port 5000'));
