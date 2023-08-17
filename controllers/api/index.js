const router = require('express').Router();
const userRoutes = require('./UserRoutes');
const SongPostRoutes = require('./SongpostRoutes');

router.use('/users', userRoutes);
router.use('/projects', SongPostRoutes);

module.exports = router;
