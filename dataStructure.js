var minus = [-1,-2,-3];
var zero = [0];
var positive = [1,2,3,4];
var oneval = 5;

//concat连接多个数组或元素
var num = minus.concat(zero,positive,oneval);

console.log(num);

/*遍历函数*/
//every对数组中每个元素执行遍历直到返回false

var everyRel = num.every(function(v){
	return v%2==0;
});
console.log(everyRel); //false
//some对数组中每个元素执行遍历直到返回true
var someRel = num.some(function(v){
	return v%2==0;
});
console.log(someRel); //true

//filter对数组进行过滤
var filterRel = num.filter(function(v){
	return v%2==0;
});
console.log(filterRel);

//forEach对数组进行遍历,没有返回值，注意：E大写

num.forEach(function(v,k){
	console.log(k+"=>"+v);
});

//map 会迭代每个值并返回结果
var mapRel = num.map(function(v,k){
	// console.log(k,v);
	return v *= 2;

});
console.log(mapRel);

//翻转数组
console.log(num.reverse()); 

//排序
num.sort();
console.log(num);
num = num.sort(function(one,two){
	 if(one<two) return 1;
	 if(one>two) return -1;
	 return 0;
});
console.log(num);


//栈

function Stack(){
	this.items = [];
}

Stack.prototype = {
	constructor:Stack,
	//入栈
	push : function(val){
		this.items.push(val);
	},
	//出栈
	pop : function (){
		return this.items.pop();
	},
	//栈顶元素
	peek : function(){
		return this.items[this.size()-1];
	},
	//栈是否为空
	isEmpty : function(){
		return this.items.length ==0;
	},
	//栈的长度
	size : function (){
		return this.items.length;
	},
	//清空栈
	clear : function(){
		this.items = [];
	},
	print:function(){
		console.log(this.items.toString());
	}

}

var stackObj = new Stack();
	stackObj.push(1);
	stackObj.push(2);
	stackObj.push(8);
// stackObj.clear();
console.log(stackObj.peek(),stackObj.size(),stackObj.isEmpty());
console.log(stackObj.constructor);
stackObj.print();
console.log("====================1=====================");


/*
	js 队列实现
*/

function  Queue(){
	this.items = [];
}

Queue.prototype = {
	constructor:Queue,
	//入队
	enqueue:function(value){
		return this.items.push(value);
	},
	//出队
	dequeue:function(){
		return this.items.shift();
	},
	size:function(){
		return this.items.length;
	},
	clear:function(){
		this.items = [];
	},
	print:function(){
		console.log(this.items.toString());
	},
	isEmpty:function(){
		return this.size() == 0;
	},
	//队首元素
	head:function(){
		return this.items[0];
	}

}

var queueObj = new Queue();
console.log(queueObj.head());
queueObj.enqueue(1);
queueObj.enqueue(2);
queueObj.enqueue(3);
queueObj.dequeue();
 
queueObj.print();

console.log(queueObj.head());

console.log("=======================2=====================");

/*
	优先队列
	队列基础上按优先级改变队列元素位置
*/

function Priority(){

}
Priority.prototype = new Queue();
Priority.prototype.enqueue = function(value,priority){
	  function Node(value,priority){
	  		this.element = value;
	  		this.priority = priority;
	  }
	  var node = new Node(value,priority);
	  if(this.isEmpty()){
	  	this.items.push(node);
	  }else{
	  	var appended = false;
	  	var len = this.size();
	  	for(var i=0;i<len;i++){
	  		if(this.items[i].priority>priority){
	  			this.appended = true;
	  			this.items.slice(i,0,node);
	  			break;
	  		}
	  	}
	  	if(!appended) this.items.push(node);
	 
	  }

}
Priority.prototype.print = function(){
	var tmparr = [];
	for(var i=0,len = this.size();i<len;i++){
		tmparr.push(this.items[i].element);
	}
	console.log(tmparr.toString());
}

var testObj = new Priority();

console.log(testObj.head());
testObj.enqueue("wang",1);
testObj.enqueue("zhao",3);
testObj.enqueue("guang",2);
testObj.enqueue("zai",4);
 testObj.dequeue();
 console.log(testObj.head());
testObj.print();

console.log("===================3============================");

/*
	链表：插入删除速度快但查找慢（非连续存储、地址指向）
	数组：插入删除速度慢单查找速度快（连续存储）
*/