function Queue () {
	this.items = [];
}

//Add
Queue.prototype.enqueue = function(item){
	this.items.push(item);
}

//Remove
Queue.prototype.dequeue = function(){
	this.items.shift();
}

//Return the last element
Queue.prototype.peek = function(){
	return this.items[0];
}

//Return boolean value based on if item list is empty or not
Queue.prototype.isEmpty = function(){
	return this.items.length === 0; 
}

//Return lenght of items
Queue.prototype.size = function(){
	return this.items.length; 
}

//Clears items array
Queue.prototype.clear = function(){
	this.items = [];
}

//Logs items list in console
Queue.prototype.print = function(){
	console.log(this.items.toString());
}


//Test
(function(){
	var stack = new Stack();
	
	//add to items to stack
	for (var i = 1; i <= 10; i++ ){
		stack.enqueue(i);
	}

	stack.print();

	//remove items 
	for (var i = 1; i <= 5; i++ ){
		stack.dequeue();
		stack.print();	
	}

	
}())