import express from "express";
import { getUsers, createUser, getOneUser, deleteUser, updateUser } from "../controller/usersController.js";

const router = express.Router();

// all routes will start with /users

// Read All
router.get('/', getUsers)

// Create
router.post('/', createUser)

// Read One
router.get('/:id', getOneUser)

// Delete
router.delete('/:id', deleteUser)

// Update
router.patch('/:id', updateUser)

export default router;