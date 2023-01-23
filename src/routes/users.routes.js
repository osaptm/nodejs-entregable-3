const express = require('express');
const router = express.Router();
const {
  userById,
  userByIdWhitCourses,
  userCreate,
  updateUser,
  addCourseToUser
} = require('../controllers/user.controller.js');

router.get('/:id', userById);
router.get('/:id/courses', userByIdWhitCourses);
router.post('/', userCreate);
router.post('/:iduser/course/:idcourse', addCourseToUser);
router.put('/:id', updateUser);

module.exports = router;