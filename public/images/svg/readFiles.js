const testFolder = './tests/';
const fs = require('fs');

var json={"list":[]};

fs.readdir("./", (err, files) => {
	console.log(files.length);
  files.forEach(file => {
    json["list"].push(file);
  });
	console.log(json["list"].length);
    fs.writeFileSync("data.json",JSON.stringify(json))
});
