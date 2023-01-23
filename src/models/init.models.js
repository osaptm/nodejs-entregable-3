const Users = require("./users.models");
const Courses = require("./courses.models");
const Users_Courses = require("./users_courses.models");
const Courses_Categories = require("./courses_categories.models");
const Categories = require("./categories.models");
const Videos = require("./videos.models");

const initModels = () => {
    // RELACION UNO A MUCHO - CURSOS -> VIDEOS
	Videos.belongsTo(Courses, {as: 'videos_courses', foreignKey: 'course_id' });
    Courses.hasMany(Videos, {as: 'courses_videos' , foreignKey: 'course_id' });   

    // RELACION ENTRE MUCHOS A MUCHOS CON PIVOTE (USERES_COURSES)

    Users_Courses.belongsTo(Users, {as: 'users_courses_x_users', foreignKey: 'user_id' });
    Users.hasMany(Users_Courses, {as: 'users_x_users_courses' , foreignKey: 'user_id' });

    Users_Courses.belongsTo(Courses, {as: 'users_courses_x_courses', foreignKey: 'course_id' });
    Courses.hasMany(Users_Courses, {as: 'courses_x_users_courses' , foreignKey: 'course_id' });

    // RELACION ENTRE MUCHOS A MUCHOS CON PIVOTE (COURSES_CATEGORIES)

    Courses_Categories.belongsTo(Categories, {as: 'courses_categories_x_categories', foreignKey: 'category_id' });
    Categories.hasMany(Courses_Categories, {as: 'categories_x_courses_categories' , foreignKey: 'category_id' });

    Courses_Categories.belongsTo(Courses, {as: 'courses_categories_x_courses', foreignKey: 'course_id' });
    Courses.hasMany(Courses_Categories, {as: 'courses_x_courses_categories' , foreignKey: 'course_id' });
};

module.exports = initModels;