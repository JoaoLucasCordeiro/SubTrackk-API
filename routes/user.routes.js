import { Router } from "express"
import { getUser, getUsers } from "../controllers/user.controller";

const userRoutes = Router();

userRoutes.get('/', getUsers)
userRoutes.get('/:id', getUser)
userRoutes.post('/', (req, res) => res.send({ title: 'CREATE new user' }))
userRoutes.put('/:id', (req, res) => res.send({ title: 'UPDATE user ' }))
userRoutes.delete('/:id', (req, res) => res.send({ title: 'DELETE user' }))

export default userRoutes;