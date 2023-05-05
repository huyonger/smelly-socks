class EventBus {
    constructor() {
        this.tasks = []
    }

    on(eventName, callback) {
        this.tasks[eventName] = this.tasks[eventName] || []
        this.tasks[eventName].push(callback)
    }

    emit(eventName, ...args) {
        // 如果事件没有注册
        if (!this.tasks[eventName]) {
            return
        }
        this.tasks[eventName].forEach(fn => fn(...args))
    }

    off(eventName, callback) {
        // 如果事件没有注册
        if (!this.tasks[eventName]) {
            return
        }
        this.tasks[eventName] = this.tasks[eventName].filter(fn => fn !== callback)
    }

    once(eventName, callback,) {
        this.tasks[eventName] = this.tasks[eventName] || []
        const onceCallback = (...args) => {
            callback(...args)
            this.off(eventName, onceCallback)
        }
        this.tasks[eventName].push(onceCallback)
    }
}

function sayHello(...message) {
    console.log(message)
}

function sayGoodBye(...message) {
    console.log(message)
}

let eventBus = new EventBus()
eventBus.on("sayHello", sayHello)
eventBus.emit("sayHello", "Hello", "JavaScript")
eventBus.off("sayHello", sayHello)
eventBus.emit("sayHello", "Hello", "JavaScript")

eventBus.once("sayGoodBye", sayGoodBye)
eventBus.emit("sayGoodBye", "GoodBye", "JavaScript")
eventBus.emit("sayGoodBye", "GoodBye", "JavaScript")

