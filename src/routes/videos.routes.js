const express = require('express');
const router = express.Router();
const {
  createVideos,
  deleteVideos
} = require('../controllers/videos.controller.js');

router.post('/', createVideos);
router.delete('/:id', deleteVideos);

module.exports = router;