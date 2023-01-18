const usersServices = require('../services/users.services');
const userById = async (req, res) => {
    try {
        const {id} = req.params;
		const result = await usersServices.getUserById(id);
		res.status(200).json(result);
	} catch (error) {
		res.status(400).json(error);
	}
}
const userByIdWhitCourses = async (req, res) => {
    try {
        const {id} = req.params;
		const result = await usersServices.getUserByIdWhitCourses(id);
		res.status(200).json(result);
	} catch (error) {
		res.status(400).json(error);
	}
}
module.exports = {
    userById,
    userByIdWhitCourses
}