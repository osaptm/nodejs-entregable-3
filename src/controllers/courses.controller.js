const coursesServices = require('../services/courses.services');
const allCourses = async (req, res) => {
	try {
		const result = await coursesServices.allCourses();
		res.status(200).json(result);
	} catch (error) {
		res.status(400).json(error);
	}
}
const coursesWhitVideosAndCategories = async (req, res) => {
	try {
		const { id } = req.params;
		const result = await coursesServices.coursesWhitVideosAndCategories(id);
		res.status(200).json(result);
	} catch (error) {
		res.status(400).json(error);
	}
}
const coursesCreate = async (req, res) => {
	try {
		const newCourse = req.body;
		const result = await coursesServices.coursesCreate(newCourse);
		res.status(201).json(result);
	} catch (error) {
		console.log(error);
	}

}
const updateCourse = async (req, res) => {
	try {
		const newCourse = req.body;
		const {id} = req.params;
		const result = await coursesServices.updateCourse(newCourse, id);
		res.status(201).json(result);
	} catch (error) {
		console.log(error);
	}

}

module.exports = {
	allCourses,
  	coursesWhitVideosAndCategories,
  	coursesCreate,
  	updateCourse
}