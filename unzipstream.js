const fs = require("fs");
const { createGzip, createGunzip } = require('zlib');
const readStream = fs.createReadStream("./output.gz")

const writeStream = fs.createWriteStream("./outputgzip.txt");


readStream.pipe(createGunzip()).pipe(writeStream);