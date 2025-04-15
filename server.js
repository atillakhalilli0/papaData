const express = require('express');
const fs = require('fs');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/data.json', (req, res) => {
  const data = JSON.parse(fs.readFileSync('./data.json'));
  res.json(data);
});

app.get('/data.json/:category', (req, res) => {
  const data = JSON.parse(fs.readFileSync('./data.json'));
  const category = req.params.category;
  
  if (data[category]) {
    res.json(data[category]);
  } else {
    res.status(404).json({ error: 'Kategori bulunamadı.' });
  }
});

app.listen(PORT, () => {
  console.log(`Server ${PORT} portunda çalışıyor.`);
});
