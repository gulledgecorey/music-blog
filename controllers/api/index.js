const router = require('express').Router();
const userRoutes = require('./UserRoutes');
const SongPostRoutes = require('./SongpostRoutes');
const router = require("express").Router();
const userRoutes = require("./UserRoutes");
const songPostRoutes = require("./SongPostRoutes");
const commentsRoutes = require("./CommentsRoutes");

router.use('/users', userRoutes);
router.use('/projects', SongPostRoutes);

module.exports = router;
