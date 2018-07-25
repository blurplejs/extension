const Command = require('./Command')

module.exports = class BotCustomizer {

    command (signature) {
        return new Command(signature)
    }

}

