$(function () {

    $('#go').on('click', function () {
        alert('hhh');

        var date = new Date().getTime();

       $.post('/123',{date:date} function (data) {
       // $.get('/',{d:'dddd'},function (data) {
           console.dir(data)
        });
		
		
	   })
    })