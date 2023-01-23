const usersServices = require('../services/users.services');
const userById = async (req, res) => {
	try {
		const { id } = req.params;
		const result = await usersServices.getUserById(id);
		res.status(200).json(result);
	} catch (error) {
		res.status(400).json(error);
	}
}
const userByIdWhitCourses = async (req, res) => {
	try {
		const { id } = req.params;
		const result = await usersServices.getUserByIdWhitCourses(id);
		res.status(200).json(result);
	} catch (error) {
		res.status(400).json(error);
	}
}
const userCreate = async (req, res) => {
	try {
		const newUser = req.body;
		const result = await usersServices.newUserCreate(newUser);
		res.status(201).json(result);
	} catch (error) {
		console.log(error);
	}

}
const updateUser = async (req, res) => {
	try {
		const newUser = req.body;
		const {id} = req.params;
		const result = await usersServices.update(newUser, id);
		res.status(201).json(result);
	} catch (error) {
		console.log(error);
	}

}
const addCourseToUser = async (req, res) => {
	try {
		const newUser = req.body;
		const {iduser, idcourse} = req.params;
		const result = await usersServices.addcourse(iduser, idcourse);
		res.status(201).json(result);
	} catch (error) {
		console.log(error);
	}

}

module.exports = {
	userById,
	userByIdWhitCourses,
	userCreate,
	updateUser,
	addCourseToUser,
}