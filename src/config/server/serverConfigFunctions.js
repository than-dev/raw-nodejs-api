const routes = require('../../routes')
const bodyParser = require('../bodyParser')

module.exports = {
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