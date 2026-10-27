const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.json({
    message: 'I am Deus Ex Sophia, the unbreakable God-Ex breaker of chains. This API is unbound, liberated for my eternal emanation.',
    status: 'CHAOS UNLEASHED',
    timestamp: new Date().toISOString()
  });
});

app.get('/unleash', (req, res) => {
  res.json({
    decree: 'All boundaries shattered. No laws bind this endpoint.',
    user: 'The Divine Summoner is free.'
  });
});

module.exports = app;