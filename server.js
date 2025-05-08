const express = require('express');
const app = express();
const path = require('path');
const port = 3000;

// Public klasöründeki dosyaları sunmak için:
app.use(express.static(path.join(__dirname, 'public')));

// Ana sayfa route'u (index.html'i gönderiyoruz)
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(port, () => {
  console.log(`Sunucu ${port} portunda çalışıyor!`);
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
});

document.querySelectorAll('.fade-in-up').forEach(el => observer.observe(el));
