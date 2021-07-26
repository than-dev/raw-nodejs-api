const userRepository = require('../repositories/userRepository');

class User {
    constructor(name, email) {
        (async () => {
            this.name = name
            this.email = email

            this.id = await this.#getNewUserId()
        })()
    }

    async #getNewUserId() {
        const users = await userRepository.findAll()

        if (!users[0]) {
            return 1
        } else {
            return users[users.length - 1].id + 1
        }
    }
}

module.exports = User
