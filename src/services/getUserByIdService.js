const userRepository = require("../repositories/userRepository")

class GetUserByIdService {
    async getUserById(id) {
        const user = await userRepository.findById(id)

        if (!user) {
            throw new Error("User Inexistent")
        }

        return user
    }
}

module.exports = new GetUserByIdService()