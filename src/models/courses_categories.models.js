const db = require("../utils/database");
const { DataTypes } = require("sequelize");
const Categories = require("./categories.models");
const Courses = require("./courses.models");

const Courses_Categories = db.define("courses_categories", {
  id: {
    primaryKey: true,
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
  },
  categoryId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Categories,
      key: "id",
  },
  field:"category_id",
  },
  courseId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
        model: Courses,
        key: "id",
    },
    field:"course_id",
  }
},{
  timestamps: false,
});

module.exports = Courses_Categories;