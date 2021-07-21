const User = require("../factories/User")
const userRepository = require("../repositories/userRepository")
const { readFile } = require('fs/promises')

class CreateUserService {
    async #verifyIfCredentialsAlreadyBeingUsed(name, email) {
        const users = await userRepository.findAll()

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
        if (!email || !name) {
            throw new Error("send valid values")
        }

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

        console.log(newUser);

        return {
            ...newUser
        }
    }

}

module.exports = new CreateUserService()