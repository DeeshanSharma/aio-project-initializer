// const MODEL = require('../models');

const getHome = (req, res) => {
  try {
    res.send('Hey your server is up and running.');
  } catch (err) {
    res.status(400).json({ status: 'error', message: 'Something went wrong' });
  }
};

module.exports = { getHome };
