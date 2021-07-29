const fs = require("fs");

// read
const data = fs.readFileSync("./file-system/text-2.txt", "utf8");

// console.log(data);

// write
fs.writeFileSync("./file-system/newFile.txt", data);

// append
fs.appendFileSync("./file-system/text-1.txt", data);

// readdir
const files = fs.readdirSync("./file-system");
console.log(files);

files.forEach((item) => {
  const currentData = fs.readFileSync(`./file-system/${item}`, "utf8");
  fs.appendFileSync("./file-system/all.txt", currentData);
});
