


const router = require("express").Router();
const userRoutes = require("./UserRoutes");
const songPostRoutes = require("./SongPostRoutes");
const commentsRoutes = require("./CommentsRoutes");

router.use('/users', userRoutes);
router.use('/projects', songPostRoutes);

module.exports = router;
