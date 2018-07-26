module.exports = class Command {

    constructor (extension, signature) {
        this.extension = extension
        this.signature = signature
    }

    matches (message) {
        let content = message.content

        return this.signature == content
    }

    call (message) {
        if (!this.matches(message)) {
            return
        }

        this.handler.call(this.extension, message, {})
    }

    then (handler) {
        this.handler = handler

        return this
    }

    synonym (name) {
        return this
    }

}
