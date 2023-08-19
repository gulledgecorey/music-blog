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
router.get("/login", async (req, res) => {
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

router.get("/comments", withAuth, async (req, res) => {
  try {
    res.render("comments", {
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/songposts", withAuth, async (req, res) => {
  try {
    const songPostsData = await SongPost.findAll({
      include: [
        {
          model: Comments,
        },
        {
          model: User,
        },
      ],
    });
    const songPosts = songPostsData.map((songPost) =>
      songPost.get({ plain: true })
    );
    // console.log(songPosts);
    res.render("songposts", {
      songPosts,
      logged_in: req.session.logged_in,
      user_id: req.session.user_id,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/single-songpost/:id", withAuth, async (req, res) => {
  try {
    const songPostData = await SongPost.findByPk(req.params.id, {
      include: [
        {
          model: Comments,
        },
        {
          model: User,
        },
      ],
    });
    const songPost = songPostData.get({ plain: true });

    //console.log(songPost);
    res.render("single-songpost", {
      songPost,
      logged_in: req.session.logged_in,
      user_id: req.session.user_id,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
