module.exports = class Webhook {

    constructor (extension, route) {
        this.extension = extension
        this.route = route
    }

    call (handler) {
        this.handler = handler

        return this
    }
    
    post () {
        return this
    }

}
