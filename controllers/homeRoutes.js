const router = require('express').Router();
router.get('/', async (req, res) => {
  try {
    res.render('homepage', { 
        logged_in: req.session.logged_in 
      });
  } catch (err) {
    res.status(500).json(err);
  }
})
router.get('/songposts', async (req, res) => {
  try {
    res.render('songposts', { 
        logged_in: req.session.logged_in 
      });
  } catch (err) {
    res.status(500).json(err);
  }
})
module.exports = router;