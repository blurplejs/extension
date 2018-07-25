module.exports = class Command {

    constructor (signature) {
        this.signature = signature
    }

    then () {
        return this
    }

    synonym () {
        return this
    }

}

