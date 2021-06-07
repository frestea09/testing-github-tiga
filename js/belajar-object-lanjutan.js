// const literal = {
//     nama : "ilman teguh prasetya",
//     nim : "10112299",
//     sayHai : () =>{
//         console.log('hello world');
//     },
//     bilangan : [1,2,3,4]
// }

// document.writeln(literal.nama);
// document.writeln(literal.nim);
// literal.sayHai();
// document.writeln(literal.bilangan[0]);

// function Contruktor(inputNama){
//     let mahasiswa = {};
//     mahasiswa.nama = inputNama;
//     return mahasiswa;
// }
// var temp = new Contruktor("ilman teguh prasetya");
// document.writeln(temp);
// document.writeln(temp.nama);
// const operasi = {
//     sayHello : () =>{
//         console.log('Hello world')
//     }
// }
// function Mahasiswa(inputNama){
//     this.nama = inputNama;
//     this.sayHello = operasi.sayHello;
// }

// var temp = new Mahasiswa("ilman teguh prasetya");
// document.writeln(temp.nama);
// temp.sayHello();
// const operasi = {
//     sayHello : ()=>{
//         console.log("hello world")
//     }
// }
// function Mahasiswa(){
//     let mahasiswa = Object.create(operasi);
//     return mahasiswa;
// }
// var temp = new Mahasiswa();
// temp.sayHello();

// function Mahasiwa(inputNama){
//     this.nama = inputNama
// }
// Mahasiwa.prototype.sayhello = ()=>{
//     console.log('hello world');
// }

// var temp = new Mahasiwa("ilman teguh prasetya");
// temp.sayhello();

class Mahasiswa{
    constructor(inputNama){
        this.nama = inputNama
    }
    sayaHello(){
        console.log('hello world')
    }
}
let temp = new Mahasiswa("ilman teguh prasetya");
temp.sayaHello();