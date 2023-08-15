const router = require("express").Router();
const { Comments, SongPosts, User } = require("../../models");
const withAuth = require("../../utils/auth");

router.get("/", async (req, res) => {
  try {
    // Get all projects and JOIN with user data
    const commentsData = await Comments.findAll({
      include: [
        {
          model: User,
        },
        {
          model: SongPosts,
        },
      ],
    });

    // Serialize data so the template can read it
    const comment = commentsData.map((comments) =>
      comments.get({ plain: true })
    );

    // Pass serialized data and session flag into template
    res.render("homepage", {
      comment,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/comments/:id", async (req, res) => {
  try {
    const commentsData = await Comments.findByPk(req.params.id, {
      include: [
        {
          model: User,
        },
        {
          model: SongPosts,
        },
      ],
    });

    const comment = commentsData.get({ plain: true });

    res.render("project", {
      ...comment,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/login", (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect("/profile");
    return;
  }

  res.render("login");
});

router.post("/", async (req, res) => {
  // create a new category
  /* req.body should look like this...
    {
      product_name: "Basketball",
      price: 200.00,
      stock: 3,
      tagIds: [1, 2, 3, 4]
    }
    */
  try {
    const commentsData = await Comments.create(req.body);
    res.status(200).json(commentsData);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete("/:id", async (req, res) => {
  // delete a category by its `id` value
  try {
    const commentsData = await Comments.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!commentsData) {
      res.status(404).json({ message: "No data found" });
      return;
    }

    res.status(200).json(commentsData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = Comments;
