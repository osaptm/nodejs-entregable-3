const express = require('express');
const router = express.Router();
const {
  allCourses,
  coursesWhitVideosAndCategories,
  coursesCreate,
  updateCourse
} = require('../controllers/courses.controller.js');

router.get('/', allCourses);
router.get('/:id', coursesWhitVideosAndCategories);
router.post('/', coursesCreate);
router.put('/:id', updateCourse);

module.exports = router;