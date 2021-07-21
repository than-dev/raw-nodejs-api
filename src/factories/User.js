const { readFile } = require('fs/promises');
const { usersDataPath } = require('../config/paths');


class User {
    constructor(name, email) {
        (async () => {
            this.#filePath = usersDataPath
            
            this.name = name
            this.email = email

            this.id = await this.#getNewUserId()  
        })()
    }

    #filePath;

    async #getNewUserId() {
        const users = await this.#readUsersFile()

        if (!users[0]) {
            return 1
        } else {
            return users[users.length - 1].id + 1
        }
    }

    async #readUsersFile() {
        return JSON.parse(await readFile(this.#filePath))
    }
}

module.exports = User
