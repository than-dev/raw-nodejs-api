const createUserService = require("../services/createUserService")
const deleteUserByIdService = require("../services/deleteUserByIdService")
const listUsersService = require("../services/findAllUsersService")
const getUserByIdService = require("../services/getUserByIdService")

class UserController {
    async listUsers(_, res) {
        try {
            return res.send(200, await listUsersService.listUsers())
        } catch (error) {
            return res.send(400, {
                error: error.message
            })
        }
    }

    async getUserById(req, res) {
        const { id } = req.params
        
        try {
            const user = await getUserByIdService.getUserById(id)

            return res.send(200, user)
        } catch (error) {
            return res.send(400, {
                error: error.message
            })
        }
    }

    async createUser(req, res) {
        const { name, email } = req.body
        
        try {
            const newUser = await createUserService.createUser(name, email)

            return res.send(200, newUser)
        } catch (error) {
            return res.send(400, {
                error: error.message
            })
        }
        
    }

    async deleteUser(req, res) {
        const { id } = req.params
        
        try {
            const user = await deleteUserByIdService.deleteUserById(id)

            return res.send(200, user)
        } catch (error) {
            return res.send(400, {
                error: error.message
            })
        }
    }

    async updateUser(req, res) {
        return "atualizei o usuario"
    }
}

module.exports = new UserController()