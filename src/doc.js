const mammoth = require("mammoth");
const fs = require("fs");

const htmlTmpl = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Document</title>
</head>
<body>
  ^content$
</body>
</html>`

const convert = (file, output) => {
  mammoth.convertToHtml({ path: file })
    .then(function (result) {
      var html = result.value; // The generated HTML
      var messages = result.messages; // Any messages, such as warnings during conversion
      fs.writeFile(output, htmlTmpl.replace(/\^content\$/, html), err => {
        if (err) {
          return console.error(err);
        }
        console.log(`${file} is converted`);
      });
    })
    .done();
}


// module exports
exports = module.exports = convert;