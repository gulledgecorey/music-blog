const router = require("express").Router();
const { SongPost, Comments, User } = require("../../models");

const fetch = require("isomorphic-unfetch");
const { getData, getPreview, getTracks, getDetails } =
  require("spotify-url-info")(fetch);

const withAuth = require("../../utils/auth");
router.get("/", withAuth, async (req, res) => {
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

    // error checking
    res.status(200).json(songPosts);
  } catch (err) {
    res.status(500).json(err);
  }
});

// POST route
router.post("/", withAuth, async (req, res) => {
  try {
    const { song_link, post } = req.body;
    //grabs the spotify data from link
    getPreview(song_link, {
      headers: {
        "user-agent": "googlebot",
      },
    }).then(async (data) => {
      const newSongPost = await SongPost.create({
        song_link,
        song_title: data.title,
        song_track: data.track,
        song_artist: data.artist,
        song_image: data.image,
        post,
        user_id: req.session.user_id,
      });
      // console.log(newSongPost);
      res.status(201).json(newSongPost);
    });
  } catch (err) {
    res.status(500).json({ error: "error" });
  }
});

// GET route
router.get("/:id", withAuth, async (req, res) => {
  try {
    const songPost = await SongPost.findByPk(req.params.id, {
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
