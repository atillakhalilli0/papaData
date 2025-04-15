const express = require('express');
const fs = require('fs');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/data', (req, res) => {
  const data = JSON.parse(fs.readFileSync('data.json'));
  res.json(data);
});

app.get('/data/:category', (req, res) => {
  const data = JSON.parse(fs.readFileSync('data.json'));
  const category = req.params.category;
  if (data[category]) {
    res.json(data[category]);
  } else {
    res.status(404).json({ error: 'Kategori bulunamadı.' });
  }
});

app.listen(PORT, () => {
  console.log(`Server çalışıyor: http://localhost:${PORT}`);
});
