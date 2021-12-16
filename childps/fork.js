const { fork } = require("child_process")

const childps = fork("./sum.js");

console.log("Process id of parent is ", process.pid)

childps.send("START");

childps.on('message', (msg) => {
    console.log("the sum is ", msg);
    process.exit(0);
})

