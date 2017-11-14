$(function () {

    $('#go').on('click', function () {
        var value = $('.inp').val();
        var arr = [];
        value = $.trim(value);
        arr = value.split(' ');
        value = arr[0];
    
        $('#inp').val('');

        var date = new Date().getTime();

       $.post('/', { date: date, inp:value }, function (data) {
       // $.get('/',{d:'dddd'},function (data) {
            console.dir(data)
        })
    })
})