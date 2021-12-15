const fs = require("fs");
const http = require("http");
const url = require("url");

const server = http.createServer((req, res) => {

    const pathname = url.parse(req.url).pathname;
    let filename = './404.html'
    if (pathname == "/about") {
        filename = "./about.html"
    } else if (pathname == "/contact") {
        filename = "./contact.html"
    } else if (pathname == "/") {
        filename = "./index.html"
    }

    //serving any file
    const readStream = fs.createReadStream(filename);
    let str = "";
    readStream.on("data", (data) => {
        str += data.toString();
    })

    readStream.on("end", () => {
        res.writeHead("200", { 'Content-Type': 'text/html' })
        res.write(str)
        res.end();
    })
    readStream.on("error", () => {
        console.log(err);
    })

})

server.listen(3000);
