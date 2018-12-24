/**
	该js主要整理js中常用的实用方法

**/

/**
 * 判断变量是何种类型
 * 
 *  @param obj 类型对象
 *  @return string
 */
function type(obj){
	var tostring = Object.prototype.toString;
	
	var map = {
		'[object Boolean]'  : 'boolean', 
	    '[object Number]'   : 'number', 
	    '[object String]'   : 'string', 
	    '[object Function]' : 'function', 
	    '[object Array]'    : 'array', 
	    '[object Date]'     : 'date', 
	    '[object RegExp]'   : 'regExp', 
	    '[object Undefined]': 'undefined',
	    '[object Null]'     : 'null', 
	    '[object Object]'   : 'object'
	};
	
	
	return map[tostring.call(obj)];
	
}
 