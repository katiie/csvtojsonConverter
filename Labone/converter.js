const fs = require('fs')
const path = require('path')
let csvToJson = require('convert-csv-to-json');

const convertData = (urlF, callback) => {
    let json = csvToJson.getJsonFromCsv(urlF);
     console.log(json.length);
     callback(null, JSON.stringify(json));
  }

const convertJson = (filename='customer-data.csv') => {
  console.log('downloading ', filename)
  convertData(filename, (error, data)=>{
  if (error) return console.log(error)
  fs.writeFileSync(path.join(__dirname, 'customer-data.json'), data)
  console.log('downloading is done.')
}) 
}

convertJson(process.argv[2])

