const Repository = require('./Repository')
const User = require("../factories/User")

class UserRepository extends Repository {
    constructor(filePath) {
        super()
        this.filePath = filePath
        this.readyFile = readyFile
    }
}



const { usersDataPath } = require('../config/paths')
const { readyFile } = require('fs/promises')
module.exports = new UserRepository(usersDataPath)