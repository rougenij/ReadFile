const fs = require("fs");

const length = fs.readdirSync(__dirname).length;
let str = "";

for (let i = 0; i < length; i++) {
  fs.exists(`./${i}.txt`, (file) => {
    if (file) {
      let txtFile = fs.readFileSync(`./${i}.txt`, "utf-8").split("\r\n");
      for (let j = 0; j < i; j++) {
        if (typeof txtFile[j] === "string") str += txtFile[j] + "\r\n";
      }
    }
    fs.writeFileSync("result.txt", str);
  });
}
