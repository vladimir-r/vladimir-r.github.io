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
document.body.oncontextmenu=function(){return false} ;
/*window.onkeydown = function(evt) {
        if(evt.keyCode == 123) return false;
    };

    window.onkeypress = function(evt) {
        if(evt.keyCode == 123) return false;
    };
*/
function Card(img,val){
		
		
		this.img=img;
		this.val=val;
		this.draw=function(parent){
			
				
			var el=document.createElement('div');
			el.className="card";
			//el.style.backgroundImage="url(images/"+this.img+")";
			el.setAttribute('data-val',this.val);
			el.innerHTML="<div class='front side'>\
							<img src='images/images.jpg' alt=''>\
							</div>\
							<div class='back side'>\
							<img src='images/"+this.img+"' alt=''/>\
							</div>";
			/*el.style.left='0px';
			el.style.top='0px';*/
			parent.append(el)		
		
		}

}
var pole=new Object();
pole.arrCard=[];
		var t=0;
		var left=0;
pole.draw=function(){
var elem=document.createElement('div');
	elem.id='pole';
	document.body.append(elem);
	
for(var j=0;j<2;j++){
	
for(var i=0;i<12;i++){
	var img=(i+1)+'.png';
	var val=i+1;
		
	var card=new Card(img,val);
	
	pole.arrCard.push(card);

}

}
//pole.arrCard.length
pole.arrCard.shuffle();
var m=0;
var poleWraper=document.getElementById('pole');
for(var p=0;p<4;p++){
	
	for(var k=0;k<6;k++){
		var box=document.createElement('div');
		box.className='box';
		box.style.left=left+'px';
		box.style.top=t+'px';
		
		poleWraper.append(box);
			pole.arrCard[m].draw(box);
		left=left+130;
		m++
	}
	left=0;
	t=t+150;
	
}

}

var rrr=[];

function addClassOn(){
	var a = this.classList.contains('on');
if(a!=true){ 

this.classList.add('on','rotated');
rrr.push(this.getAttribute('data-val'));
console.log(rrr);

}

function logic(){ 

addClassOn();

if(rrr.length==2){ 

if(rrr[0]===rrr[1]){
	function w(){
	var ss=document.getElementsByClassName('on');
ss[1].remove();
ss[0].remove();

console.log(ss);
document.body.onclick=function(){return false}
}setTimeout(w,500)
}
 
else{
	function f(){
	var ss=document.getElementsByClassName('on'); 
	ss[1].classList.remove('on','rotated');
	ss[0].classList.remove('on','rotated');
	
	document.body.onclick=function(){return false}
	}
setTimeout(f,500);
	}
rrr=[];
}

}
else{ 
rrr=[];
var ss=document.getElementsByClassName('on'); 
	ss[0].classList.remove('on','rotated');
return false}
}
//animation180
function changeClass(){
    if(this.className == "card"){
        this.className += " rotated";
    }
    else{
       this.className = "card";
    }
}
//-------

function init(){
pole.draw();
var p=document.getElementById('pole');
for(var i=0;i<p.children.length;i++){
	p.children[i].firstElementChild.addEventListener('click',logic);
	
	//p.children[i].firstElementChild.addEventListener('transitionend',logic)
}
}
init()

console.dir(pole.arrCard)
