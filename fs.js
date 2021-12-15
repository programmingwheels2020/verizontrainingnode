const { readFile, writeFile, mkdir, stat } = require("fs/promises");

async function main() {
    try {
        let result = await readFile("./input.txt")
        //console.log(result.toString());
        // await writeFile("./output.txt", result);
        //await mkdir("./mydir")
        let res = await stat("./mydir")
        console.log(res)

    } catch (err) {
        console.log(err);
    }
}

main();



