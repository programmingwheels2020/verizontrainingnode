const fs = require("fs");
const { Stream } = require("stream");
const { createGzip, createGunzip } = require('zlib');

const readStream = fs.createReadStream("./input.txt");

const writeStream = fs.createWriteStream("./output.txt");

const writeStreamCompressed = fs.createWriteStream("./output.gz");

const readStreamCompressed = fs.createReadStream("./output.gz");

//readStream.pipe(writeStream);


readStream.pipe(createGzip()).pipe(writeStreamCompressed)

//readStreamCompressed.pipe(createGunzip()).pipe(writeStream)

/*
let str = '';


readStream.on("data", (data) => {
    str += data.toString();
})

readStream.on("end", () => {
    //console.log(str);
})

readStream.on("error", (err) => {
    console.log(err.message);
})

readStream.on("close", () => {
    console.log("Close event occured")
})

readStream.on("finish", () => {
    console.log("Finish Ooperation called");
})
*/



