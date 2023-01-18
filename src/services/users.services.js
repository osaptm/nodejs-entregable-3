const Users = require('../models/users.models');
const Courses = require('../models/courses.models');
const Users_Courses = require('../models/users_courses.models');

class usersServices {
    static async getUserById(id){
        try {		
            const result = await Users.findByPk(id,{
                attributes:{ exclude:['createdAt', 'updatedAt' , 'password'] }
            });
            return result;
        } catch (error) {
            throw error;
        }
    }

    static async getUserByIdWhitCourses(id){
        try {		
            const result = await Users.findOne({
                where: { id: id },
                attributes:{ exclude:['createdAt', 'updatedAt' , 'password'] },
                include: {
                    model: Users_Courses,
                    as: 'userscourses',
                    //attributes: ['id'],
                    include: {
                        model: Courses,
                        as: 'courses',
                        //attributes: ['title'],
                    }
                }
            });
            return result;
        } catch (error) {
            console.log(error)
            throw error;
        }
    }

    
}

module.exports = usersServices;

