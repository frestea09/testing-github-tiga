let mahasiswa = {
    nama : "ilman teguh prasetya",
    umur : 13,
    alamat : "soreang",
    bilangan : [1,2,3],
    temp : {
        nama : "ilman teguh prasetya"
    },
    sayHello : () => {
        console.log('hello world');
    }
};
const buatDeclaration = (nama) =>{
    let mahasiswa = {};
    mahasiswa.nama = nama;
    return mahasiswa
}
document.writeln(mahasiswa['nama']+"<br>");
document.writeln(mahasiswa['umur']+"<br>");
document.writeln(mahasiswa['alamat']+"<br>");
document.writeln(mahasiswa.nama+"<br>");
document.writeln(mahasiswa.bilangan[1]+"<br>");
document.writeln(mahasiswa.temp.nama+"<br>");
mahasiswa.sayHello();

var temp = buatDeclaration("ilman teguh prasetya");

function AdaAja(inputNama){
    this.nama = inputNama;
}

var tempMahasiswa = new AdaAja('ilman teguh prasetya');

class mahasiswa{
    constructor(inputNama){
        this.nama = inputNama
    }
    
}