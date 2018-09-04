const express = require('express');

const router = new express.Router();

router.get('/silly', (req, res) => {
  res.send('Now, I’ve noticed a tendency for this programme to get rather silly');
});

module.exports = router;
