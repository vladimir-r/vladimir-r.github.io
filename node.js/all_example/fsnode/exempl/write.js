var fs=require('fs');
/*function Ww(){
fs.appendFile('write.txt',process.argv[2]+'\n',function(err){
	if(err) {fs.appendFileSync('write.txt',err)}
	console.log('To file'+process.argv[2])
})
}
setInterval(()=>{Ww()},2000);

setTimeout(()=>{console.log('world')},3000)*/


fs.readFile('img.txt', function (err, data) {
    if (err) throw err;
    fs.writeFile('img3.jpg', data, function (err) {
        if (err) throw err;
        console.log('It\'s saved!');
    });
});