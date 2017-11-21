$(function(){
	$('#post').on('click',function(){
	
			$.post('/',{name:'static',d:"hh",g:'100'},function(data){
				
				alert(data)
				
				
			})
	});
	$('#pic').on('click',function(){
	
			$.post('/pic',{name:'1'},function(data){
				
			$("#box").attr('src',data)
				alert(data);
				
			})
	});
	$('#selekt_folder').on('click',function(){
	let f=$('#folder').val();
	if(f===''){alert('посто')}
	else{
			$.post('/folder',{name:f},function(data){
				
			$(".folder").html(data)
				alert(data);
				
			})
		}
	})
	
	
	
})