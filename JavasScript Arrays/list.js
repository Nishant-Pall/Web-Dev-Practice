var todos = [];

var input = prompt("What would you like to do?");

while(input !== "quit"){

	if(input == "list"){
		console.log(todos);
	} else if(input == "new"){
		// Ask for a new todo, and add it to todos array
		var newTodo = prompt("Enter new Todo");
		todos.push(newTodo);
	}	

	var input = prompt("What would you like to do?");
}
console.log("OK YOU EXIT THE APP");