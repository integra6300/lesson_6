"use strict";

const baseUrl = 'http://jsonplaceholder.typicode.com/posts';
const form = document.forms.test;

form.addEventListener("submit", (e) => {
	e.preventDefault();

	const formData = new FormData(form);
	formData.append("userId", 1);


	const formDataJSON = {};
	for(const [key, val] of formData.entries()) {
		formDataJSON[key] = val;
	}
    console.log(formDataJSON);

	// POST adds a random id to the object sent
    $.ajax(baseUrl, {
        type: 'POST',
        data: formDataJSON
    }).then(function(data) {
        console.log(data);
        $('#myTable').append('<tr id=tr_'+data.id+'><td>'+data.id+'</td><td>'+data.title+'</td><td>'+data.body+'</td><td>'+data.userId+'</td><td><input type="button" onclick="delCell('+data.id+');" value="Delete"/><input type="button" onclick="updCell('+data.id+','+data.userId+');" value="Update"/></td>'+'</tr>');
    });

});