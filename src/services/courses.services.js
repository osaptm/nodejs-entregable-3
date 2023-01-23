const Courses = require('../models/courses.models');
const Courses_Categories = require('../models/courses_categories.models');
const Categories = require('../models/categories.models');
const Videos = require('../models/videos.models');

class coursesServices {
    static async allCourses(){
        try {		
            const result = await Courses.findAll({
                attributes:{ exclude:['createdAt', 'updatedAt' ] }
            });
            return result;
        } catch (error) {
            throw error;
        }
    }

    static async coursesWhitVideosAndCategories(id){
        try {		
            const result = await Courses.findOne({
                where: { id: id },
                attributes:{ exclude:['createdAt', 'updatedAt' , 'password'] },
                include: [{
                    model: Courses_Categories,
                    as: 'courses_x_courses_categories',
                    attributes: ['id'],
                    include: {
                        model: Categories,
                        as: 'courses_categories_x_categories',
                    },

                },
                {
                    model: Videos,
                    as: 'courses_videos',
                }],
            });
            return result;
        } catch (error) {
            throw error;
        }
    }
    
    static async coursesCreate(obj){
        try {		
            const result = await Courses.create(obj);
            return result;
        } catch (error) {
            throw error;
        }
    }

    static async updateCourse(objCourse, id){
        try {		
            const result = await Courses.update({ title: objCourse.title, description:objCourse.description, instructor:objCourse.instructor }, {
                            where: {
                              id: id
                            }
                          });
            return result;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = coursesServices;

