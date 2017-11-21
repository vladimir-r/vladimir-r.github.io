$(function(){
	alert('helo')
	$("button").click(function(){
    $ .get("/hhh", function(data){
        //alert("Data: " + data + "\nStatus: " + status);
		$('#box').html(data)
    });
});
	
})