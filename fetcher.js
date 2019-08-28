const request = require("request");
const fs = require("fs");

const args = process.argv;

request(args[2], (error, response, body) => {
  fs.writeFile(args[3], body, (err) => {
    if (err) throw err;
    console.log(`Downloaded and saved ${fs.statSync(args[3])["size"]} bytes to ${args[3]}`)
  })
});