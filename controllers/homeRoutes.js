const router = require("express").Router();
const { SongPost, Comments, User } = require("../models");
router.get("/", async (req, res) => {
  try {
    res.render("homepage", {
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});
router.get("/songposts", async (req, res) => {
  try {
    const songPosts = await SongPost.findAll({
      include: [
        {
          model: Comments,
        },
        {
          model: User,
        },
      ],
    });
    console.log(songPosts);
    res.render("songposts", {
      songPosts,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});
module.exports = router;
