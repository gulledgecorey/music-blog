const router = require("express").Router();
const { SongPosts, Comments, User } = require("../../models");
const withAuth = require("../../utils/auth");
const fetch = require("isomorphic-unfetch");
const { getData, getPreview, getTracks, getDetails } =
  require("spotify-url-info")(fetch);

router.get("/", async (req, res) => {
  try {
    const songPosts = await SongPosts.findAll({
      include: [
        {
          model: Comments,
        },
        {
          model: User,
        },
      ],
    });

    // error checking
    res.status(200).json(songPosts);
  } catch (err) {
    res.status(500).json(err);
  }
});

// POST route
router.post("/", async (req, res) => {
  try {
    const { song_link, post } = req.body;
    //grabs the spotify data from link
    getPreview(song_link, {
      headers: {
        "user-agent": "googlebot",
      },
    }).then((data) => console.log(data));
    const newSongPost = await SongPosts.create({
      song_link,
      post,
      user_id: req.session.user_id,
    });

    res.status(201).json(newSongPost);
  } catch (err) {
    res.status(500).json({ error: "error" });
  }
});

// GET route
router.get("/:id", async (req, res) => {
  try {
    const songPost = await SongPosts.findByPk(req.params.id, {
      include: [
        {
          model: Comments,
        },
        {
          model: User,
        },
      ],
    });

    // error checking for songPost
    if (!songPost) {
      return res.status(404).json({ message: "Song was not found." });
    }

    //return songPost
    res.status(200).json(songPost);
  } catch (err) {
    res.status(500).json({ error: "error" });
  }
});

module.exports = router;
