/*
	命名空间
*/

// var g=(function(){
// 	var g_test = "global";
// 	this.testFunc = function (){
// 		console.log(g_test);
// 	}
// 	return this;
// }());
// var test = new g();
// test.testFunc();
// console.log(test.g_test);
// console.log(test);

 
// g.testFunc();
// console.log(g.g_test);
// console.log(g);

function test(var1,var2){
		console.log(var1,var2);
		console.log(arguments.length); //实参数量
		console.log(arguments.callee.length); //形参数量
}

function trace(f){
	return function(){
		console.log("记录日志");
		f.apply(null,arguments);
		console.log("记录日志");
	}
}

var f = trace(test);
f(4,5,6,8);