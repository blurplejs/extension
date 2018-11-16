module.exports = class Webhook {

    constructor (extension, route, handler) {
        this.extension = extension
        this.route = route
        this.handler = handler
    }
    
    post () {
        return this
    }

}
