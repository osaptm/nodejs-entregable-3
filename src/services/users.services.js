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
                    as: 'users_x_users_courses',
                    //attributes: ['id'],
                    include: {
                        model: Courses,
                        as: 'users_courses_x_courses',
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

    static async newUserCreate(newUser){
        try {		
            const result = await Users.create(newUser);
            return result;
        } catch (error) {
            throw error;
        }
    }

    static async addcourse(iduser, idcourse){
        try {
            const newObj = {
                userId:iduser,
                courseId:idcourse
            }		
            const result = await Users_Courses.create(newObj);
            return result;
        } catch (error) {
            throw error;
        }
    }

    static async update(newUser, id){
        try {		
            const result = await Users.update({ first_name: newUser.first_name, last_name:newUser.last_name, password:newUser.password }, {
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

module.exports = usersServices;

