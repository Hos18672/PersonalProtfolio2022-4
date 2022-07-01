const fs = require("fs");
const pug = require("pug");
const compiledIndex = pug.renderFile("src/index.pug");


fs.writeFile("index.html", compiledIndex, () =>
  console.log("Index successfully compiled to HTML!")
);
