function SinglyLinkedList() {
    //private variables and methods
    var head = null;
    var length = 0;
    //Node Class
    function Node(element) {
        this.element = element;
        this.next = null;
    }

    //privileged methods
    this.getHead = function() {
        return head;
    }

    this.size = function() {
        return length;
    };


    //add element to given position
    this.insert = function(position, element) {
        var node = new Node(element);

        if (position < 0 || position > length) return false;

        //No nodes exists
        if (head === null) {
            head = node;
        } else if (position === length) {
            //Append in end
            var current = head;
            //Get last element
            while (current.next) {
                current = current.next;
            }
            current.next = node
        } else {
            var current = head,
                previous,
                index = 0;
            if (position === 0) {
                node.next = current;
                head = node;
            } else {
                while (index < position) {
                    previous = current;
                    current = current.next;
                    index++;
                }
                node.next = current;
                previous.next = node;
            }

        }
        length++;
    };

    this.removeAt = function(position) {
        var current = head,
        	previous, index = 0;

        if (position < 0 || position >= length) return false;

        if (position === 0) {
            head = current.next;
        }else{
        	while(index++ < length){
        		previous = current;
        		current = current.next;
        	}
        	previous.next = current.next;
        }
        length--;

    };

}

SinglyLinkedList.prototype.append = function(element) {
    this.append(this.size(), element);
};

SinglyLinkedList.prototype.indexOf = function(element) {
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

SinglyLinkedList.prototype.remove = function(element) {
	var position = this.indexOf(element);
	this.removeAt(position);
};

SinglyLinkedList.prototype.isEmpty = function() {
	return this.size() === 0;

};

SinglyLinkedList.prototype.toString = function() {
	var current = this.getHead(),
		elements = [];

	while(current){
		elements.push(current.element);
		current = current.next;
	}

	return elements.toString();
};

