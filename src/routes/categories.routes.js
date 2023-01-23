const express = require('express');
const router = express.Router();
const {
  createCategory,
  deleteCategory
} = require('../controllers/categories.controller.js');

router.post('/', createCategory);
router.delete('/:id', deleteCategory);

module.exports = router;