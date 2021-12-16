const { spawn } = require("child_process");

const child = spawn("find", ['/'])

child.on("error", (err) => {
    console.log(err)
})

child.stdout.on("data", (data) => {
    console.log(data.toString())
})

child.stderr.on("data", (data) => {
    console.log(data);
})

child.on('exit', (code, signal) => {
    console.log(code)
    console.log("Signal is" + signal)
})