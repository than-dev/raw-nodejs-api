const Repository = require('./Repository')
const User = require("../factories/User")

class UserRepository extends Repository {
    constructor(filePath) {
        super()
        this.filePath = filePath
    }
}



const { usersDataPath } = require('../config/paths')
module.exports = new UserRepository(usersDataPath)