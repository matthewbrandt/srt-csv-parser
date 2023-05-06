const fs = require('fs');
const path = require('path');

const inputFolderPath = './srt_input';
const outputFolder = './csv_output';

const files = fs.readdirSync(inputFolderPath);

for (let i = 0; i < files.length; i++) {
  const inputFilePath = path.join(inputFolderPath, files[i]);
  const fileName = files[i].slice(21);
  const outputFileName = path.parse(fileName).name;
  const outputFilePath = path.join(outputFolder, `${outputFileName}.csv`);
  const data = fs.readFileSync(inputFilePath, 'utf-8');

  if (data.length == 0) { continue }
  
  const srtLines = data.split(/\r?\n/);
  const csvLines = [];
  const datePart = outputFileName.substring(0,10);
  const timePart = outputFileName.substring(11,22).replaceAll('-', ':'); 
  const timeStampField = datePart + ' ' + timePart;

  let currentLine;
  let outputStr = "";
  let fieldNum = 0;
  let firstSubtitleLine = true;
  for (let j = 0; j < srtLines.length; j++) {
    const line = srtLines[j];
    if (line !== '') {
      if (fieldNum === 0) { //counter field
        outputStr += line;
        outputStr += `,"${timeStampField}"`;
      } else if (fieldNum === 1) { //timestamp field
        const times = line.split(' --> ');
        outputStr += `,"${times[0]}","${times[1]}",`;
      } else { //subtitle text field
        if(firstSubtitleLine) {
          outputStr += `"`; //add a single quote, the close quote will be added on the blank lines
          firstSubtitleLine = false;
        } else {
          outputStr += "\\n";
        }
        outputStr+=line
      }
      fieldNum++;
    }
    else {
      outputStr += `"\n`; //close quote and newline
      firstSubtitleLine = true; //reset firstSubtitleLine
      fieldNum = 0; //reset fieldNum
    }
  }

  outputStr = outputStr.slice(0,-2);

  // writing each srt to an individual file
  fs.writeFileSync(outputFilePath, outputStr, function (err) {
    if (err) throw err;
    console.log(`${inputFilePath} conversion issue!`);
  });
}




