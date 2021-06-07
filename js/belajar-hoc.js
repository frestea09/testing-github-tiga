const sayHello = ()=>{
    console.log('hello hello')
}
const sayHelloSempurna = (inputSayHello) =>{
    console.log("hello");
    inputSayHello();
}
sayHelloSempurna(sayHello);

var listBilangan = [1,2,3,4,5];
const [a,b,c] = listBilangan;
document.write(a);
