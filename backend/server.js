const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const cors = require('cors');
const rateLimit = require('express-rate-limit');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(helmet());
app.use(cors());

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL, // Twój adres e-mail
    pass: process.env.PASSWORD // Hasło do Twojego adresu e-mail
  }
});

app.post('/send-email', (req, res) => {
  const user_email = req.body.email; // Adres e-mail użytkownika
  const message = req.body.message; // Wiadomość od użytkownika

  console.log('Email:', user_email);
  console.log('Message:', message);

  const mailOptions = {
    from: user_email, // Może być też Twój adres e-mail
    to: process.env.EMAIL, // Twój adres e-mail jako odbiorca
    subject: 'Nowa wiadomość z formularza kontaktowego',
    text: `Wiadomość od: ${user_email}, Treść: ${message}`
  };

  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.error('Błąd przy wysyłaniu e-maila:', error);
      res.status(500).send('Błąd przy wysyłaniu e-maila');
    } else {
      console.log('E-mail wysłany pomyślnie:', info.response);
      res.status(200).send('E-mail wysłany pomyślnie');
    }
  });
});

app.listen(port, () => {
  console.log(`Serwer działa na http://localhost:${port}`);
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Coś poszło nie tak!');
});

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minut
  max: 100 // limit każdego IP do 100 żądań na okno czasowe
});
app.use(limiter);

app.get('/', (req, res) => {
  res.send('Backend aktywny!');
});
