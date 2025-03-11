var commands = []

class Command {
    constructor() {    }
    initialize() {}
    execute() {}
    isFinished() {}
    end() {}
    cancel() {
        this.end()
        let index = commands.indexOf(this);
        if (index > -1) commands.splice(index, 1);
        if (this.then.schedule) this.then.schedule()
    }
    schedule() {
        this.initialize()
        commands.push(this)
    }
    run() {
        this.execute()
        if(this.isFinished()) this.cancel()
    }
    then(nextCommand) {
        this.then = nextCommand
        return this
    }
}