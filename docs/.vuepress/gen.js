const fs = require("fs");
const path = require("path");
const files = fs.readdirSync("/Users/wuyiqing/Desktop/ddia/docs");

const chapters = files;

const content = `module.exports = {
  base: '/go-doc/',
  themeConfig: {
    sidebar: [
${chapters.map((item) => '      "/' + item + '"').join(",\n")}
    ]
  }
}`;

fs.writeFileSync(path.join(__dirname, "./config.js"), content);
