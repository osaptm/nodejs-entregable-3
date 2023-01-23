const categoriesServices = require('../services/categories.services');

const createCategory = async (req, res) => {
	try {
		const newCategory = req.body;
		const result = await categoriesServices.createCategory(newCategory);
		res.status(201).json(result);
	} catch (error) {
		console.log(error);
	}

}
const deleteCategory = async (req, res) => {
	try {
		const {id} = req.params;
		const result = await categoriesServices.deleteCategory(id);
		res.status(201).json(result);
	} catch (error) {
		console.log(error);
	}

}

module.exports = {
	createCategory,
  deleteCategory
}