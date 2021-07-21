const http = require('http')
const serverConfig = require('./config/server/serverConfig')

const server = http.createServer(async (req, res) => {
    serverConfig(req, res)
})

server.listen(3000, () => console.log("✔ server is running at port 3000"));