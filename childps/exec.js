const { exec } = require('child_process')

exec('ls -ltr', (err, stdout, stderr) => {
    if (err) {
        console.log("----------------")
        console.error(err)
        return
    }
    console.log(stdout);
    console.log(stderr)
})