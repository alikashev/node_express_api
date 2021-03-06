import { v4 as uuidv4 } from 'uuid';
uuidv4(); // ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'

// Users array = database;
let users = [];

// getUsers
export const getUsers = (req, res) => {
    console.log(users);
    res.send(users);
}

//getOneUser
export const getOneUser = (req, res) => {
    const { id } = req.params;

    const foundUser = users.find((user) => user.id === id);
    res.send(foundUser);
}

// createUser
export const createUser = (req, res) => {
    const user = req.body;
    users.push({ ...user, id: uuidv4() });
    res.send(`user with name ${user.firstName} added to the database`);
}

// deleteUser
export const deleteUser = (req, res) => {
    const { id } = req.params;

    users = users.filter((user) => user.id != id);
    res.send(`User with the ID: ${id} deleted from thet database.`);
}

// updateUser
export const updateUser = (req, res) => {
    const { id } = req.params;
    const {firstName, lastName, age} = req.body
    const user = users.find((user) => user.id === id);

    if (firstName) user.firstName = firstName;
    if (lastName) user.lastName = lastName;
    if (age) user.age = age;
    
    res.send(`User is updated`);
}