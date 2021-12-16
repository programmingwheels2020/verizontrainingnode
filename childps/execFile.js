const { execFile } = require("child_process")

execFile('./test.sh', (err, stdout, stderr) => {
    if (err) {
        console.log("----------------")
        console.error(err)
        return
    }
    console.log(stdout);
    console.log(stderr)
})