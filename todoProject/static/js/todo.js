function saveTodo(){
	var todo_name = $('#todo-name').val()

	data={
		'name':todo_name,
		'projects': [
    	  "1201609953361720"
    	]	
	}

	
	$.ajax({
             	'url':'https://app.asana.com/api/1.0/tasks',
             	'type':'POST',

				"headers": {
				"content-type": "application/json",
				"accept": "application/json",
				"authorization": "Bearer 1/1201595394521739:35c0953ed323faee95235e7885dbfdf3",
				// "cache-control": "no-cache",
				// "postman-token": "3ba6961a-b3fd-a330-56b3-2a693fb6246e"
				},
             	'data':JSON.stringify({
             		'data' : data
             	}),
             	'contentType': 'application/json; charset=utf-8',
             	success:function(response){
             		console.log(response)
             		$('#todo-name').val('')
             		// location.reload();
             	},
             	
             })

}

function triggerModal(gid){
	$('#editModal').modal('show')

	var modal_footer = document.getElementById('edit-modal-footer');

	button = document.createElement('button');
	button.setAttribute('class','btn btn-primary')
	button.setAttribute('onclick','editTodo('+gid+')')
	button.innerHTML = "Save";
	modal_footer.appendChild(button);
}

function editTodo(gid){

	var todo_name = $('#edit-todo-name').val()

	data={
		'name':todo_name,
	}

	$.ajax({
             	'url':'https://app.asana.com/api/1.0/tasks/'+ gid,
             	'type':'PUT',

				"headers": {
				"content-type": "application/json",
				"accept": "application/json",
				"authorization": "Bearer 1/1201595394521739:35c0953ed323faee95235e7885dbfdf3",
				// "cache-control": "no-cache",
				// "postman-token": "3ba6961a-b3fd-a330-56b3-2a693fb6246e"
				},
             	'data':JSON.stringify({
             		'data' : data
             	}),
             	'contentType': 'application/json; charset=utf-8',
             	success:function(response){
             		console.log(response)
             		$('#edit-todo-name').val('')
             		// location.reload();
             	},
             	
             })

}

function deleteTodo(gid){
	
	$.ajax({
             	'url':'https://app.asana.com/api/1.0/tasks/'+ gid,
             	'type':'DELETE',

				"headers": {
				"content-type": "application/json",
				"accept": "application/json",
				"authorization": "Bearer 1/1201595394521739:35c0953ed323faee95235e7885dbfdf3",
				// "cache-control": "no-cache",
				// "postman-token": "3ba6961a-b3fd-a330-56b3-2a693fb6246e"
				},
             	'contentType': 'application/json; charset=utf-8',
             	success:function(response){
             		console.log(response)
             		// location.reload();
             	},
             	
             })

}