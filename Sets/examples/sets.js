function Sets() {
    var items = {};

    //Add item
    this.add = function(item) {
        if (!items.hasOwnProperty(item)) {
            items[item] = item;
            return true;
        }
        return false;
    }

    //Remove item
    this.remove = function(item) {
        if (items.hasOwnProperty(item)) {
            delete items[item];
            return true;
        }
        return false;
    }

    //Check if item exists 
    this.has = function(item) {
        return items.hasOwnProperty(item);
    }

    //Clear all items
    this.clear = function() {
        items = {};
    }

    //Return the total number of items
    this.size = function() {
        return Object.keys(items).length;
    }

    //return all keys
    this.keys = function() {
        return Object.keys(items);
    }

    //Will return set which contains unique items from both sets
    this.union = function(set) {
    	return Object.assign({}, items, set)
    },

    //Returns only common elements
    this.intersection = function(set){
    	var intersection = {};
    	for (var item of items){
    		if(set.hasOwnProperty(item)){
    			intersection[item] = item;
    		}
    	}
    	return intersection;
    }

    //will return items which doesn't exist in provided set
    this.difference = function(set) {
    	var difference = {};
    	for(var item of items) {
    		if(!set.hasOwnProperty(item)){
    			difference[item] = item;
    		}
    	}
    	return difference; 
    }
}
