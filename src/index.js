const path = require("path");
const pdfConvert = require("./pdf");
const docConvert = require("./doc");
const xlsxConvert = require("./xlsx");


// test
pdfConvert('files/a.pdf', 'output/a.html');
docConvert(path.join(__dirname, '../files/b.docx'), path.join(__dirname, '../output/b.html'));
xlsxConvert(path.join(__dirname, '../files/c.xlsx'), path.join(__dirname, '../output/c.html'))