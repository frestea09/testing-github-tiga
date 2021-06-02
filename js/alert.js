// alert('hello world');
// var bilanganPertama = confirm('Setuju ?');
// var inputBilanganNama = prompt("Nama Anda ");
// document.write(bilanganPertama);
// document.writeln(inputBilanganNama);

// var threholdBoolean = true;
// var bilanganThrehold = 0;
// while(threholdBoolean){
//     if(bilanganThrehold==5){
//         threholdBoolean = false;
//     }
//     document.writeln(bilanganThrehold);
//     ++bilanganThrehold;
// }
// var listBilangan = [1,2,3,4,5];
// document.writeln("<br> Bilangan ulangan");
// listBilangan.forEach(item=>document.writeln(item));

// var listBilanganBaru = listBilangan.map(item=>item*2);
// document.writeln("<br>"+listBilanganBaru);

const tambahBilangan = (bilanganPertama,bilanganKedua) =>{
    hasilTambah = bilanganPertama + bilanganKedua;
    return hasilTambah;
}

var hasil = tambahBilangan(2,1);
document.writeln(hasil);

var listBilangan = [1,2,3,4,5];
document.writeln(listBilangan[0]);
listBilangan.map(item=>document.writeln(item));

listBilangan.push(6);
document.writeln("<br> Bilangan : "+listBilangan.pop());