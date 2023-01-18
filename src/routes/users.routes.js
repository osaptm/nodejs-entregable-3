const express = require('express');
const router = express.Router();
const {
  userById,
  userByIdWhitCourses
} = require('../controllers/user.controller.js');

router.get('/:id', userById);
router.get('/:id/courses', userByIdWhitCourses);

// router.get('/email/:email', async function(req, res) {
//     try{
// 		const {email} = req.params;
// 		const result = await Users.findOne({
// 			where: {email},
//             attributes: ['id', 'username', 'email'],
            
// 		});
// 		res.status(200).json(result);
// 	} catch (error) {
// 		console.log(error);
// 	}
// });

// router.get('/:id', async function(req, res) {
//     try {
// 		const { id } = req.params;
// 		const result = await Users.findByPk(id,{
// 			attributes: ['id', 'username', 'email'],
// 		});
// 		res.status(200).json(result);
//   } catch (error) {
//     console.log(error);
//   }
// });


// router.post('/', async function(req, res) {
//     try {
//         const newUser = req.body;
//         const result = await Users.create(newUser);
//         res.status(201).json(result);
//       } catch (error) {
//           console.log(error);
//       }
// });

// router.delete('/:id', async function(req, res) {
//     try {
// 		const { id } = req.params;
// 		const result = await Users.destroy({
//             where: {
//               id: id
//             }
//           });
// 		res.status(200).json(result);
//   } catch (error) {
//     console.log(error);
//   }
// });

// router.put('/', async function(req, res) {
//     try {
// 		const {username, id} = req.body;
// 		const result = await Users.update({ username: username }, {
//             where: {
//               id: id
//             }
//           });
// 		res.status(200).json(result);
//   } catch (error) {
//     console.log(error);
//   }
// });

module.exports = router;