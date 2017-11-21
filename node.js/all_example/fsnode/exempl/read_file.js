var fs = require("fs");
/*
var file=fs.readFileSync('russian.dic','utf8');

file=file.split('\n');
console.log(file)
*/


/*
fs.readFile('doc.json','utf8',function(err,data){
	if(err)console.log('Not File');
	var text=JSON.parse(data);
	console.log(text);
	
	})
*/
/*
fs.writeFileSync("hhh.txt", "Привет ми ми ми!")

*/
/*
fs.writeFile("hhh.txt", "Привет МИГ-29!",function(err){ 
if (err) throw err;
  console.log('The file has been saved!');
});
*/
/*fs.appendFileSync("hhh.txt", "Привет ми ми ми!");
*/
/*
const stats = fs.statSync("hhh.txt");
console.log(stats.size)
*/
/*
var buf = new Buffer(100);

//console.log("Going to open an existing file");
fs.open('input.txt', 'r+', function(err, fd) {
   if (err) {
      return console.error(err);
   }
   console.log("File opened successfully!");
   console.log("Going to read the file");
   fs.read(fd, buf, 0, 100, 0, function(err, bytes){
      if (err){
         console.log(err);
      }
      console.log(bytes + " bytes read");
      
      // Print only read bytes to avoid junk.
      if(bytes > 0){
         console.log(buf.slice(0, bytes).toString());
      }
   });
});
*/

var d='ddd';
console.log(typeof(d))
