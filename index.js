class EventEmitter {
    constructor() {
        this._events = {};
    }

    on(eventName, callback) {
        if (this._events[eventName]) {
            if (this.eventName !== "newListener") {
                this.emit("newListener", eventName)
            }
        }
        const callbacks = this._events[eventName] || [];
        callbacks.push(callback);
        this._events[eventName] = callbacks
    }

    emit(eventName, ...args) {
        const callbacks = this._events[eventName] || [];
        callbacks.forEach(cb => cb(...args))
    }

    once(eventName, callback) {
        const one = (...args) => {
            callback(...args)
            this.off(eventName, one)
        }
        one.initialCallback = callback;
        this.on(eventName, one)
    }

    off(eventName, callback) {
        const callbacks = this._events[eventName] || []
        const newCallbacks = callbacks.filter(fn => fn != callback && fn.initialCallback != callback /* 用于once的取消订阅 */)
        this._events[eventName] = newCallbacks;
    }
}


const events = new EventEmitter()

events.on("newListener", function (eventName) {
    console.log(`eventName`, eventName)
})

events.on("hello", function () {
    console.log("hello");
})

let cb = function () {
    console.log('cb');
}
events.on("hello", cb)

events.off("hello", cb)

function once() {
    console.log("once");
}
events.once("hello", once)

events.off("hello", once)
events.emit("hello")
events.emit("hello")
