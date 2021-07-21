const { readFile, writeFile } = require('fs/promises')

class Repository  {
    async create(data) {
        const allData = JSON.parse(await readFile(this.filePath))
        allData.push(data)
        allData.sort((data1, data2) => {
            return data1.id < data2.id
        })

        await writeFile(this.filePath, JSON.stringify(allData))
        
        return data
    }

    async findAll() {
        const data = JSON.parse(await readFile(this.filePath))

        return data
    }

    async findById(id) {
        const allData = JSON.parse(await readFile(this.filePath))
        const data = allData.find((currentIterationData) => (
            currentIterationData.id = id
        ))

        return data
    }

    async deleteById(id) {
        const allData = JSON.parse(await readFile(this.filePath))
        const data = allData.find((currentIterationData) => (
            currentIterationData.id = id
        ))

        allData.splice([allData.indexOf(data)], 1)

        await writeFile(this.filePath, JSON.stringify(allData))

        return data
    }

}

module.exports = Repository