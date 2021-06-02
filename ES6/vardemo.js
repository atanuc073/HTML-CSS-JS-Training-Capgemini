function display(a){
    num=5;
    if(a>10){
        var num=10;
        console.log(num);
    }
    num+=5;
    console.log(num)

}
display(20)

// var variable in block have global scope
//var maintain same storage for inner and outer 
// var can be declare without body
// if outer scope variable is not initialized it don't  throw reference error



//let has blockscope
//let must be declared inside block body
//It maintains outer scope variable & inner block variable
// it scope variable is not initialized it references error