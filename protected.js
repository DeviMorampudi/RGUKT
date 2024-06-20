const express = require('express');
const checkRole = require('./middleware/checkRole');
const router = express.Router();

router.get('/admin', checkRole(['admin']), (req, res) => {
  res.send('Welcome, admin!');
});

router.get('/user', checkRole(['user', 'admin']), (req, res) => {
  res.send('Welcome, user!');
});

module.exports = router;
