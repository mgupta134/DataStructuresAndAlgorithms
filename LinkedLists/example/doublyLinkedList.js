function DoublyLinkedList () {
	function Node (element) {
		this.element = element;
		this.next = null;
		this.prev = null;
	}

	this.head = null;
	this.tail = null;
	this.length = 0;

	//priviliged methods
	this.getHead = function() {
        return head;
    }

    this.size = function() {
        return length;
    };

    this.insert = function(position, element){
    	var node = new Node(element);

    	if(position < 0 || position>length) return false;
    	
    	if(head === null){
    		head = node;
    		tail = node;
    	}else if(position === 0){
    		var current = head;
    		current.prev = node;
    		node.next = current;
			head = node;
    	}else if(position === length){
    		var current = tail;
    		current.next = node;
    		node.prev = current;
    		tail = node;
    	}else{
    		var index = 1;
    		var current = head, 
    			previous;
    		while(index++ < position){
    			previous = current;
    			current = current.next;
    		}
    		node.next = current;
    		previous.next = node;

    		node.prev = previous;
    		current.prev = node;
    	}
    	length++;
    }

    this.removeAt = function(position){
    	if(position<0 || position >= length) return false;

  		var current = head,
  			previous, 
  			index = 0;

  		if(position === 0){
  			head = current.next;
  			if(length === 1){
  				tail = null;
  			}else{
  				head.prev = null;
  			}
  		}else if(position === length-1){
  			tail = tail.prev;
  			tail.next = null;
  		}else{
  			while (index++ < position){
  				previous = current; 
  				current = current.next;
  			}
  			previous.next = current.next;
  			current.next.prev = previous;
  		}
  		length--;
    }
}


DoublyLinkedList.prototype.append = function(element) {
    this.append(this.size(), element);
};

DoublyLinkedList.prototype.indexOf = function(element) {
	var current = this.getHead(),
		index = 0;
	
	while(current){
		if(current.element === element){
			return index;
		}
		current = current.next;
		index++;
	}

	return -1;

};

DoublyLinkedList.prototype.remove = function(element) {
	var position = this.indexOf(element);
	this.removeAt(position);
};

DoublyLinkedList.prototype.isEmpty = function() {
	return this.size() === 0;

};

DoublyLinkedList.prototype.toString = function() {
	var current = this.getHead(),
		elements = [];

	while(current){
		elements.push(current.element);
		current = current.next;
	}

	return elements.toString();
};