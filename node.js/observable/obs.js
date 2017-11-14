//Observable

function Observable(){
	var observers=[];
	this.sendMassage=function(msg){
		var len=observers.length ;
		for(var i=0;i<len ; i++){
			observers[i].notify(msg)
		}
		
	};
	this.addObserver=function(observer){
		observers.push(observer)
	};
	
}



//[observer]
function Observer(behavior){
	this.notify=function(msg){
		behavior(msg)
	}
	
}
//========
var observable=new Observable();
var basketObs= new Observer(function(id){
	$('.basket_products-list').append('<li class="basket_product">Tovar '+id+'</li>');
	
	
	
});
var modalObs= new Observer(function(id){
	var msg="Товар "+id+" в корзину!";
	$('.buy-modal_massage').text(msg);
	$('.buy-modal').removeClass('hide');
	setTimeout(function(){$('.buy-modal').addClass('hide');},2000)
	
});
var serverObs=new Observer(function(id){
	//AJAX
	console.log('id: '+id)
	});
observable.addObserver(basketObs);
observable.addObserver(modalObs);
observable.addObserver(serverObs);

$('.produkt').on('click',function(){
	var id=$(this).attr('data-id');
	observable.sendMassage(id)
})