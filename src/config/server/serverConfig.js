const {
    setResponseSendMethod,
    implementsBodyParserUseCase,
    verifyRouteUseParams,
    getRoute,
    generateUrlWithParam
} = require('./serverConfigFunctions')

module.exports = (req, res) => {
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
}