import express from "express";
import { getUsers, createUser, getOneUser, deleteUser, updateUser } from "../controller/usersController.js";

const router = express.Router();

// all routes will start with /users
router.get('/', getUsers)

router.post('/', createUser)

router.get('/:id', getOneUser)

router.delete('/:id', deleteUser)

router.patch('/:id', updateUser)

export default router;