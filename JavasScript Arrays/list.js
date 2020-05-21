var todos = [];

var input = prompt("What would you like to do?");

while(input !== "quit"){

	if(input == "list"){
		todos.forEach(function(todo, index){
			console.log("*********");
			console.log(index + ":" + todo);
			console.log("*********");
		});
	} else if(input == "new"){
		// Ask for a new todo, and add it to todos array
		var newTodo = prompt("Enter new Todo");
		todos.push(newTodo);
		console.log("Added to Todo");
	} else if(input === "delete"){
		// ask for index of todo to be delted
		var index = prompt("Enter index of todo to delete");
		// delete that todo
		todos.splice(index, 1);
		console.log("Deleted Todo");
	}

	var input = prompt("What would you like to do?");
}
console.log("OK YOU EXIT THE APP");