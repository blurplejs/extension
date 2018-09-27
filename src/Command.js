export default class Command {

    constructor (extension, signature) {
        this.extension = extension
        this.signature = this.parse(signature)
    }

    parse (signature) {
        let argumentRegex = /{(.+?)}/g
        let matches, args = []
        let start = Infinity

        while (matches = argumentRegex.exec(signature)) {
            start = Math.min(matches.index)
            args.push(match[1])
        }

        return {
            command: signature.substring(0, start),
            arguments: args
        }
    }

    fillArguments (text) {
        let list = {}

        let input = text.replace(this.signature.command, '').split(' ')
        for (let argument of this.signature.arguments) {
            let match = []
            if (match = argument.match(/(.+?)\?/)) {
                // optional argument
            } else if (match = argument.match(/(.+?)=(.+)/)) {
                // default value
            } else if (match = argument.match(/(.+?)\*/)) {
                // variadic argument
            }
        }

        return list
    }

    matches (message) {
        let content = message.content

        return this.signature.command == content
    }

    call (message) {
        if (!this.matches(message)) {
            return
        }

        let args = this.fillArguments(message.content)
        this.handler.call(this.extension, message, args)
    }

    then (handler) {
        this.handler = handler

        return this
    }

    synonym (name) {
        return this
    }

}
