const userRepository = require("../repositories/userRepository")

class UpdateUserService {
    #validateNewCredentials(newCredentialsKeys) {
        let keysAreCorrect = false;

        newCredentialsKeys.forEach(key => {
            if (key === 'email' || key === 'name') {
                keysAreCorrect = true
            }
        });

        if (!keysAreCorrect) {
            console.log('Incorrect keys');
            return false
        }

        if (newCredentialsKeys.length > 2) {
            console.log('length maior que 2');
            return false
        }

        return keysAreCorrect
    }

    async #verifyIfNewCredentialsAlreadyBeingUsed(newCredentials) {
        const user = await userRepository.findOne(newCredentials)

        if (user) {
            return true
        }
    }

    async #executeValidations(newCredentials) {
        const keys = Object.keys(newCredentials)

        if (keys.length === 0) {
            return {
                isValid: false,
                errorMessage: "Values cannot be null"
            }
        }

        if (await this.#verifyIfNewCredentialsAlreadyBeingUsed(newCredentials)) {
            return {
                isValid: false,
                errorMessage: "New values already being used"
            }
        }

        if (!this.#validateNewCredentials(keys)) {
            return {
                isValid: false,
                errorMessage: "Invalid Values"
            }
        }

        return true
    }

    async updateUserById(id, newCredentials) {
        const validation = await this.#executeValidations(newCredentials)

        if (!validation) {
            throw new Error(validation.errorMessage)
        }

        const user = await userRepository.updateById(id, newCredentials)

        if (!user) { throw new Error("User not Found") }

        return user
    }
}


module.exports = new UpdateUserService()