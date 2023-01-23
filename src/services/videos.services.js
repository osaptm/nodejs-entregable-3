const Videos = require('../models/videos.models');

class videosServices {   
    static async createVideos(obj){
        try {		
            const result = await Videos.create(obj);
            return result;
        } catch (error) {
            throw error;
        }
    }

    static async deleteVideos(id){
        try {		
            const result = await Videos.destroy({
                where:{ id : id}
            });
            return result;
        } catch (error) {
            throw error;
        }
    }

   
}

module.exports = videosServices;