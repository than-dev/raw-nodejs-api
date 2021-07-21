module.exports = (request, action) => {
    let body;

    request.on('data', (chunk) => {
        body = JSON.parse(chunk)
    })

    request.on('end', () => {
        request.body = body
        action()
    })
}