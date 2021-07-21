const User = require("../factories/User")
const userRepository = require("../repositories/userRepository")
const { readFile } = require('fs/promises')

class CreateUserService {
    constructor(filePath) {
        this.filePath = filePath
    }

    async #currentFileContent() {
        return JSON.parse(await readFile(this.filePath))
    }

    async #verifyIfCredentialsAlreadyBeingUsed(name, email) {
        const users = await this.#currentFileContent()

        const user = users.find((iterationCurrentUser) =>
            name === iterationCurrentUser.name ||
            email === iterationCurrentUser.email
        )

        if (user) {
            return true
        }

        return false
    }
    
    async createUser(name, email) {
        const credentialsAlreadyBeingUsed =
            await this.#verifyIfCredentialsAlreadyBeingUsed(name, email)
        
        if (credentialsAlreadyBeingUsed) {
            throw new Error("email or name already being used")
        }

        const newUser = await userRepository.create(
            new User(
                name,
                email
            )
        )

        return {
            ...newUser
        }
    }
   
}

const { usersDataPath } = require('../config/paths')
module.exports = new CreateUserService(usersDataPath)