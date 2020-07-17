Array.prototype.shuffle = function( b )
{
 var i = this.length, j, t;
 while( i ) 
 {
  j = Math.floor( ( i-- ) * Math.random() );
  t = b && typeof this[i].shuffle!=='undefined' ? this[i].shuffle() : this[i];
  this[i] = this[j];
  this[j] = t;
 }

 return this;
};

document.body.onselectstart=function(){return false};
document.body.onmousedown=function(){return false} ;
document.body.ondblclick=function(){return false} ;


var time=60.0;
var bestTime=60;
var k=0;
var startTime;
var brr=new Array();//массив для сравнения
for(var i=1;i<26;i++){ 
brr[i-1]=i;
}


//function createGame


function CreateGame(){
var color=['red','tomato','lightblue','lime','lightgreen','gold','gray','aqua','brown','blueviolet','lightpink'];
var arr=new Array();
for(var i=1;i<26;i++){ 
arr[i-1]=i;
}

arr.shuffle();
wrap.innerHTML="";
for(var i=0;i<25;i++){
	
var d=document.createElement('div');
d.className='item';
d.innerHTML="<b>"+arr[i]+"</b>";
d.style.fontSize=rand(16,60)+'px';
d.style.color=color[rand(0,color.length-1)];

wrap.append(d)
d.onclick=zzz

}
}
//----


	function rand(min, max){

  return Math.floor(Math.random() * (max - min + 1)) + min;

}
start.onclick=function(){ 
this.remove();
startTime=setInterval(Time,100);
CreateGame();
};
//function Time
function Time(){
if(time<0){
	clearInterval(startTime);
	var a=confirm('You lose!!! Want to continue?');
if(a == true){
	time=60;
	k=0;
	document.querySelector('time').innerHTML=time;
		
		CreateGame();
		startTime=setInterval(Time,100);
}
else{
	clearInterval(startTime);
	time=0;
	k=0;
	document.body.style.background='black'
	}  

}	
time=time-0.1;
var t=document.querySelector('time');
t.innerHTML=time.toPrecision(3)
}
//---


// функция сравнения
function zzz(){ 

if(this.innerText==brr[k]){
this.style.background="#ff928a";
k++
}
if(k==brr.length){
	clearInterval(startTime);
	var tt=document.querySelector('time').innerHTML;
	bestTime=bestTime-tt;
	var win=document.createElement('div');
	win.id="win";
	win.innerHTML="WIN <br>\
	<span>You time:"+bestTime+" </span><br>\
	<button id='start'>Start</button>";
	time=bestTime;
	
	document.body.appendChild(win);
	start.onclick=function(){
			this.parentElement.remove();
			document.querySelector('time').innerHTML=time;
		k=0;
		CreateGame();
		startTime=setInterval(Time,100);
};
	
	}


}
//=====