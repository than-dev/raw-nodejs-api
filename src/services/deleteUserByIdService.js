const userRepository = require("../repositories/userRepository")

class GetUserByIdService {
    async deleteUserById(id) {
        const user = await userRepository.deleteById(id)

        if (!user) {
            throw new Error("User Inexistent")
        }

        return user
    }
}

module.exports = new GetUserByIdService()