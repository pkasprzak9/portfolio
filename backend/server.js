const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Backend aktywny!');
});

app.listen(port, () => {
  console.log(`Serwer działa na http://localhost:${port}`);
});
