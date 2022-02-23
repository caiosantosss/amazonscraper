const express = require('express');
const request = require('request-promise');

const app = express();
const PORT = process.env.PORT || 5000;

const baseUrl = `http://api.scraperapi.com?api_key=${process.env.API_KEY_SCRAPER}&autoparse=true`;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello From Express.');
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
