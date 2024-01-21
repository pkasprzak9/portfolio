const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const cors = require('cors');
const rateLimit = require('express-rate-limit');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

app.set('trust proxy', 1); // Ustawienie trust proxy dla Heroku

app.use(bodyParser.json());
app.use(helmet());
app.use(cors());

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minut
  max: 100 // limit każdego IP do 100 żądań na okno czasowe
});
app.use(limiter); // Zastosowanie limitu przed innymi ścieżkami

app.use(express.static('public')); // Serwowanie plików statycznych

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL, // Adres e-mail z Twojej konfiguracji
    pass: process.env.PASSWORD // Hasło do adresu e-mail z Twojej konfiguracji
  }
});

app.post('/send-email', (req, res) => {
  const user_email = req.body.email; // Adres e-mail użytkownika
  const message = req.body.message; // Wiadomość od użytkownika
  console.log('Odebrano email:', user_email); // Wyświetli adres e-mail użytkownika w konsoli
  console.log('Odebrano wiadomość:', message); // Wyświetli wiadomość użytkownika w konsoli


  const mailOptions = {
    from: user_email, // Może być też Twój adres e-mail
    to: process.env.EMAIL, // Adres e-mail odbiorcy
    subject: 'Nowa wiadomość z formularza kontaktowego',
    text: `Wiadomość od: ${user_email}, Treść: ${message}`
  };

  transporter.sendMail(mailOptions, function(error, info) {
    if (error) {
      console.error('Błąd przy wysyłaniu e-maila:', error);
      res.status(500).send('Błąd przy wysyłaniu e-maila');
    } else {
      console.log(user_email, message);
      console.log('E-mail wysłany pomyślnie:', info.response);
      res.status(200).send('E-mail wysłany pomyślnie');
    }
  });
});

app.get('/', (req, res) => {
  res.send('Backend aktywny!');
});

app.listen(port, () => {
  console.log(`Serwer działa na porcie ${port}`);
});

// Middleware do obsługi błędów, powinien być na końcu łańcucha middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Coś poszło nie tak!');
});
