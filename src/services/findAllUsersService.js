const userRepository = require('../repositories/userRepository')

class CreateUserService {
    async listUsers() {
        const users = await userRepository.findAll()

        if (!users[0]) {
            throw new Error("No Users Founded")
        }

        return users
    }
}

module.exports = new CreateUserService()