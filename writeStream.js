const fs = require("fs")

const writeStream = fs.createWriteStream("./output.txt");

writeStream.write("Hello World", 'utf-8');

writeStream.end();

writeStream.on("finish", () => {
    console.log("finished writing")
})

writeStream.on("error", (err) => {
    console.log(err);
})