
function getData() {
    $.ajax(baseUrl, {
        method: 'GET'
    }).then(function(data) {
        for(i=0;i<data.length;i++) {
            $('#myTable').append('<tr id=tr_'+data[i].id+'><td>'+data[i].id+'</td><td>'+data[i].title+'</td><td>'+data[i].body+'</td><td>'+data[i].userId+'</td><td><input type="button" onclick="delCell('+data[i].id+');" value="Delete"/><input type="button" onclick="updCell('+data[i].id+','+data[i].userId+');" value="Update"/></td>'+'</tr>');
        }
    });  
}

function delCell(id) {
    url = baseUrl+'/'+id;
    $.ajax(url, {
        type: 'DELETE'
    });
    $('#tr_' + id).remove();
}

function updCell(id, userId) {
    url = baseUrl+'/'+id;
    input = prompt("Заголовок", "title");
    input1 = prompt("Сообщение", "body");
    data2 = '';
    if (input === null && input1 === null) {
        return;
    } else if (input === null && !(input1 === null)) {
        data2 = {id: id, body: input1, userId: userId};
    } else if (input1 === null && !(input === null)) {
        data2 = {id: id, title: input, userId: userId};
    } else {
        data2 = {id: id, title: input, body: input1, userId: userId};
    }
    $.ajax(url, {
        type: 'PUT',
        data: data2
//        data: {
//        id: id,
//        title: title,
//        body: body,
//        userId: userId
//    }
    }).then(function(data) {
        $('#tr_' + data.id).find("td").eq(1).html(data.title);
        $('#tr_' + data.id).find("td").eq(2).html(data.body);
    });
    data2 = '';
}