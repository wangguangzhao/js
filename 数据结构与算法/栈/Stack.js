var Stack = function () {

    var items = [];

    //入栈
    this.push = function (elem) {
        items.push(elem)
    }
    //出栈
    this.pop = function () {
        return items.pop();
    }

    //查看栈顶元素
    this.peek = function () {
        return items[items.length - 1];
    }
    //判断栈是否为空
    this.isEmpty = function () {
        return items.length === 0;
    }
    //栈的元素数量
    this.size = function () {
        return items.length;
    }
    //清除栈
    this.clear = function(){
        items =[];
    }

}