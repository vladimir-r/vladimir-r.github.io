$(document).ready(function(){
    readDir();
    $('.modal').modal();
    $('#create-folder').on('click', createFolder);
    $('#create-file').on('click', createFile    );
});

function readDir(current){
    current = typeof current !== 'undefined' ? current : './';
    $.post("/index",
        { "action" : "readDir", "current" : current},
        function(data){
            console.log(data);
            var out=getParent(current);
            for (var key in data){
                if (data[key].type=='file') out +='<p data="'+data[key].path+'" class="files"><i class="material-icons">insert_drive_file</i>'+key+'</p>';
                if (data[key].type=='dir') out +='<p data="'+data[key].path+'" class="folder"><i class="material-icons">folder_open</i>'+key+'</p>';
            }
            $('#out').html(out);
            $('.folder').on('click', showFolder);
            $('.path').on('click', showFolder);
        }
        );
}

function showFolder(){
    var current = $(this).attr('data');
    readDir(current);
}

function getParent(str){
    str = str.split('/');
    var out='';
    var path='';
    for (var i=0; i<str.length-1; i++){
        path +=str[i]+'/';
        out +='<span class="path" data="'+path+'">'+str[i]+'</span>'+'/';
    }
    return out;
}

function createFolder(){
    $.post("/index",
        { "action" : "createFolder", "name" : $('#folder-name').val(), "current" : $('.path').last().attr('data')},
        function(data){
            console.log(data);
            if (data==1) {
                Materialize.toast('Folder was created!', 4000);
                readDir($('.path').last().attr('data'));
            }
            else Materialize.toast('Error', 4000);
        }
        );
}

function createFile(){
    $.post("/index",
        { "action" : "createFile", "name" : $('#file-name').val(), "current" : $('.path').last().attr('data'), "text": $('#file-text').val()},
        function(data){
            console.log(data);
            if (data==1) {
                Materialize.toast('File was created!', 4000);
                readDir($('.path').last().attr('data'));
            }
            else Materialize.toast('Error', 4000);
        }
    );
}