function sayHello(){
    console.log ("hello world");
}
sayHello();
var sayDeclaration = function() {
    console.log("delaration");
}

var sayArrow = () =>{
    console.log("hello Arrow");
}
sayArrow();

var implisitReturn = () =>{
    return "hai";
}
var temp = implisitReturn();
console.log(temp);

var listBilangan = [1,2,3,4];
var lengthBilangan = listBilangan.map(item=>item*2);
console.log(lengthBilangan);
