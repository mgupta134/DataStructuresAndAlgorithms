function Stack () {
	this.items = [];
}

//Add
Stack.prototype.push = function(item){
	this.items.push(item);
}

//Remove
Stack.prototype.pop = function(){
	this.items.pop();
}

//Return the last element
Stack.prototype.peek = function(){
	return this.items[this.items.length-1];
}

//Return boolean value based on if item list is empty or not
Stack.prototype.isEmpty = function(){
	return this.items.length === 0; 
}

//Return lenght of items
Stack.prototype.size = function(){
	return this.items.length; 
}

//Clears items array
Stack.prototype.clear = function(){
	this.items = [];
}

//Logs items list in console
Stack.prototype.print = function(){
	console.log(this.items.toString());
}


//Test
(function(){
	var stack = new Stack();
	
	//add to items to stack
	for (var i = 1; i <= 10; i++ ){
		stack.push(i);
	}

	stack.print();

	//remove items 
	for (var i = 1; i <= 5; i++ ){
		stack.pop();
		stack.print();	
	}

	
}())