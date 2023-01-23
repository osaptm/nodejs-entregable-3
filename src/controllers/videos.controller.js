const videosServices = require('../services/videos.services');

const createVideos = async (req, res) => {
	try {
		const newVideos = req.body;
		const result = await videosServices.createVideos(newVideos);
		res.status(201).json(result);
	} catch (error) {
		console.log(error);
	}

}
const deleteVideos = async (req, res) => {
	try {
		const {id} = req.params;
		const result = await videosServices.deleteVideos(id);
		res.status(201).json(result);
	} catch (error) {
		console.log(error);
	}

}

module.exports = {
	createVideos,
  deleteVideos
}