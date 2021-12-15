const EventEmitter = require("events").EventEmitter;

const myEvent = new EventEmitter();

myEvent.on("MY_EVENT", () => {
    console.log("Event Occured")
})
const lisone = () => {
    console.log("Event Occured")
}
myEvent.on("MY_EVENT", lisone)
const anotherLis = () => {
    console.log("This is another event fired")
}
myEvent.addListener("MY_EVENT", anotherLis)

//myEvent.removeAllListeners("MY_EVENT");

myEvent.emit("MY_EVENT")
myEvent.removeListener("MY_EVENT", lisone)
//myEvent.removeAllListeners("MY_EVENT");
myEvent.emit("MY_EVENT")
myEvent.emit("MY_EVENT")