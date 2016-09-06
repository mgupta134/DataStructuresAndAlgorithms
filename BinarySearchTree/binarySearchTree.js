var BinarySearchTree = function(){
    var Node = function(key){
        this.key = key;
        this.left = null;
        this.right = null;
    }

    this.root = null;

    //privileged methods
    this.insert = function(){
      var node = new Node('test');
      console.log(node);
    } 
};

