const Categories = require('../models/categories.models');

class categoriesServices {   
    static async createCategory(newCategory){
        try {		
            const result = await Categories.create(newCategory);
            return result;
        } catch (error) {
            throw error;
        }
    }

    static async deleteCategory(id){
        try {		
            const result = await Categories.destroy({
                where:{ id : id}
            });
            return result;
        } catch (error) {
            throw error;
        }
    }

   
}

module.exports = categoriesServices;

