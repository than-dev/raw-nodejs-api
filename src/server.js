const http = require('http')
const routes = require('./routes')
const bodyParser = require('./config/bodyParser')

const {
    setResponseSendMethod,
    implementsBodyParserUseCase,
    verifyRouteUseParams,
    getRoute,
    generateUrlWithParam
} = {
    setResponseSendMethod(res) {
        res.send = (statusCode, body, content_type = 'application/json ') => {
            res.writeHead(statusCode, {
                'Content-Type': content_type
            })

            if (content_type !== 'application/json ') {
                return res.end(body)
            }

            return res.end(JSON.stringify(body))
        }
    },
        
    getRoute(method, url) {
        return routes.find((iterationCurrentRoute) =>
            iterationCurrentRoute.method === method &&
            iterationCurrentRoute.endpoint === url
        )
    },

    implementsBodyParserUseCase(method, action, req, res) {
        if (method !== 'GET') {
            return bodyParser(req, () => action(req, res))
        } else {
            return action(req, res)
        }
    },

    verifyRouteUseParams(url) {
        if (url.match(/\d+/)) {
            return true
        }
    },

    generateUrlWithParam(url) {
        const id = /\d+/.exec(url)[0]
        const parseUrl = url.replace(/\d+/, '')
        return { id, parseUrl }
    }
}

const server = http.createServer(async (req, res) => {
    setResponseSendMethod(res)
    
    let { url, method } = req
    console.log(`method: ${method} | endpoint: ${url}`);

    if (verifyRouteUseParams(url)) {
        const { id, parseUrl } = generateUrlWithParam(url)
        req.params = { id }
        url = `${parseUrl}:id`
    }
    
    const route = getRoute(method, url)
    if (!route) {
        return res.send(404, `Cannot ${method} at ${url}`)
    }

    implementsBodyParserUseCase(method, route.action, req, res)
}) 

server.listen(3000, () => console.log("✔ server is running at port 3000"));