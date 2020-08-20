const fs = require("fs");
var XLSX = require('xlsx');



const convert = (file, output) => {
  var buf = fs.readFileSync(file);
  // workBook
  var wb = XLSX.read(buf, { type: 'buffer' });

  // XLSX.write(wb, { bookType: "html", type: "file", file: output });
  XLSX.writeFileAsync(output, wb, { bookType: "html", type: "file" }, (err) => {
    if (err) {
      return console.error(err);
    }
    console.log(`${file} is converted`);
  })
}


// module exports
exports = module.exports = convert;