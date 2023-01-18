const Users = require("./users.models");
const Courses = require("./courses.models");
const Users_Courses = require("./users_courses.models");
const Categories = require("./categories.models");
const Videos = require("./videos.models");

const initModels = () => {
    // RELACION UNO A MUCHO - CURSOS -> CATEGORIES
	Categories.belongsTo(Courses, {as: 'categories_courses', foreingKey: 'courseId'});
    Courses.hasMany(Categories, {as: 'courses_categories', foreingKey: 'courseId' });

    // RELACION UNO A MUCHO - CURSOS -> VIDEOS
	Videos.belongsTo(Courses, {as: 'videos_courses', foreingKey: 'courseId' });
    Courses.hasMany(Videos, {as: 'courses_videos' , foreingKey: 'courseId' });   

    // RELACION ENTRE MUCHOS A MUCHOS CON PIVOTE (USERES_COURSES)

    Users_Courses.belongsTo(Users, {as: 'users', foreingKey: 'userId' });
    Users.hasMany(Users_Courses, {as: 'userscourses' , foreingKey: 'userId' });

    Users_Courses.belongsTo(Courses, {as: 'courses', foreingKey: 'courseId' });
    Courses.hasMany(Users_Courses, {as: 'coursesusers' , foreingKey: 'courseId' });
    
    
};

module.exports = initModels;