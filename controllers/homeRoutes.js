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

router.get('/comments', async (req, res) => {
  try {
    res.render('comments', { 
        logged_in: req.session.logged_in 
      });
  } catch (err) {
    res.status(500).json(err);
  }
})

//added this for comments 
router.post('/comments', async (req, res) => {
  try {
    const { commentText } = req.body; 
    const newComment = await saveCommentToDatabase(commentText);

    res.status(201).json(newComment); 
  } catch (err) {
    res.status(500).json(err);
  }
});



module.exports = router;