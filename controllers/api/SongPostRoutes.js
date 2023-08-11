const router = require('express').Router();
const {SongPosts, Comments, User} = require('../../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  try {
    
    const songPost = await SongPosts.findAll({
        include: [
            
        ]
    })
