const { readFile, writeFile } = require('fs/promises')

class Repository {

    async findAll() {
        const data = JSON.parse(await readFile(this.filePath))

        if (!data) { return false }

        return data
    }

    async create(data) {
        const allData = await this.findAll()
        allData.push(data)
        allData.sort((data1, data2) => {
            return data1.id < data2.id
        })

        await writeFile(this.filePath, JSON.stringify(allData))

        return data
    }

    async findOne(searchParams) {
        let data = [];

        if (!searchParams) {
            const allData = await this.findAll()

            return allData[allData.length - 1]
        }

        const keys = Object.keys(searchParams)

        const allData = await this.findAll()

        keys.forEach(currentKey => {
            const currentData = allData.find((currentIterationData) =>
                currentIterationData[currentKey] === searchParams[currentKey]
            )

            if (currentData) { data.push(currentData) }
        })

        if (data.length !== keys.length) { return false }

        return true
    }

    async findById(id) {
        const allData = await this.findAll()
        const data = allData.find((currentIterationData) => (
            currentIterationData.id = id
        ))

        if (!data) { return false }

        return data
    }

    async deleteById(id) {
        const allData = JSON.parse(await readFile(this.filePath))
        const data = allData.find((currentIterationData) => (
            currentIterationData.id = id
        ))

        if (!data) { return false }

        allData.splice([allData.indexOf(data)], 1)

        await writeFile(this.filePath, JSON.stringify(allData))

        return data
    }

    async updateById(id, newCredentials) {
        const allData = await this.findAll()
        let data = allData.find((currentIterationData) => (
            currentIterationData.id = id
        ))

        allData.splice([allData.indexOf(data)], 1)

        if (!data) { return false }

        data = {
            ...data,
            ...newCredentials
        }
        data.id = parseInt(data.id)
        allData.push(data)

        await writeFile(this.filePath, JSON.stringify(allData))

        return data
    }

}

module.exports = Repository