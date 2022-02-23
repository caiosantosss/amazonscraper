const express = require('express');
const request = require('request-promise');

const app = express();
const PORT = process.env.PORT || 5000;

const generateScraperUrl = (apiKey) => `http://api.scraperapi.com?api_key=${apiKey}&autoparse=true`;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Welcome to Amazon Scraper API!');
});

// GET Product Details
app.get('/products/:productId', async (req, res) => {
  const { productId } = req.params;
  const { api_key } = req.query;

  try {
    const response = await request(`${generateScraperUrl(api_key)}&url=https://www.amazon.co.jp/dp/${productId}`);
    res.json(response);
  } catch (error) {
    res.json(error);
  }
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
