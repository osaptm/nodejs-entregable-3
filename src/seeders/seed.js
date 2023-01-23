const Users = require("../models/users.models");
const Courses = require("../models/courses.models");
const Users_Courses = require("../models/users_courses.models");
const Courses_Categories = require("../models/courses_categories.models");
const Categories = require("../models/categories.models");
const Videos = require("../models/videos.models");
const db = require("../utils/database");

const users = [
  { first_name: "Ian Rosas", last_name: "Ian Rosas", email: "ian@gmail.com", password: "1234" },
  { first_name: "Alvis Echeverria", last_name: "Ian Rosas", email: "alvis@gmail.com", password: "1234" },
  { first_name: "Carlos Tineo", last_name: "Ian Rosas", email: "carlos@gmail.com", password: "1234" },
];

const courses = [
  { title: "Curso 1", description: "Description Curso 1", instructor: "Instructor 1"},
  { title: "Curso 2", description: "Description Curso 2", instructor: "Instructor 2"},
  { title: "Curso 3", description: "Description Curso 3", instructor: "Instructor 3"},
];
const categories = [
  { name: 'Matematica'},
  { name: 'Fisica'},
  { name: 'Quimica'},
];

const users_courses = [
  { userId: 1, courseId: 1},
  { userId: 1, courseId: 2},
  { userId: 1, courseId: 3},
  { userId: 2, courseId: 2},
  { userId: 3, courseId: 3},
];

const courses_categories = [
  { categoryId: 1, courseId: 1},
  { categoryId: 1, courseId: 2},
  { categoryId: 1, courseId: 3},
  { categoryId: 2, courseId: 2},
  { categoryId: 3, courseId: 3},
];


const videos = [
  { title: 'Video Mate', url: 'URL', courseId: 1},
  { title: 'Video Fisica', url: 'URL', courseId: 2},
  { title: 'Video Quimica', url: 'URL', courseId: 3},
  
];

db.sync({ force: true })
  .then(() => {
    console.log("Iniciando la plantación de Información");
    setTimeout(() => {
      users.forEach((user) => Users.create(user));
    }, 100);
    setTimeout(() => {
      courses.forEach((course) => Courses.create(course));
    }, 200);
  
    setTimeout(() => {
      categories.forEach((categorie) => Categories.create(categorie));
    }, 300);

    setTimeout(() => {
      videos.forEach((video) => Videos.create(video));
    }, 600);

    setTimeout(() => {
      users_courses.forEach((user_course) => Users_Courses.create(user_course));
    }, 1000);
    setTimeout(() => {
      courses_categories.forEach((cc) => Courses_Categories.create(cc));
    }, 2000);
  })
  .catch((error) => console.log(error));