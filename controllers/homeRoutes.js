const router = require("express").Router();
const { SongPost, Comments, User } = require("../models");
const withAuth = require("../utils/auth");
router.get("/", async (req, res) => {
  try {
    res.render("homepage", {
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/new-post", withAuth, async (req, res) => {
  try {
    res.render("newPost", { logged_in: req.session.logged_in });
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
