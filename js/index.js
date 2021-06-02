document.write('hello world');
var bilanganSaya = 1;
document.writeln("<br>"+typeof(bilanganSaya));
var bilanganSatu = 4;
var bilanganDua = 2;
var hasilTambah = bilanganSatu+bilanganDua;
document.writeln("<br> Hasil Tambah : "+hasilTambah+"<br>");
var hasilKurang = bilanganSatu - bilanganDua;
document.writeln("<br> Hasil Kurang : "+hasilKurang+"<br>");
var hasilKali = bilanganSatu * bilanganDua;
document.writeln("<br> Hasil Kali : "+hasilKali+"<br>");
var hasilBagi = bilanganSatu / bilanganDua;
document.writeln("<br> Hasil Bagi : "+hasilBagi);
var hasilMod = bilanganSatu % bilanganDua;
document.writeln("<br> Hasil Modul : "+hasilMod+"<br>");
var bilanganUjiEval = "4+3+4-2";
var hasilEval = eval(bilanganUjiEval);
document.writeln("<br> Hasil Eval : "+hasilEval+"<br>");
//operator penugasan 
var bilanganPenugasanTambah = 1;
var bilanganPenugasanTambah = bilanganPenugasanTambah+1;
document.writeln("<br> Hasil Penugasan tambah : "+bilanganPenugasanTambah+"<br>");
var hasilIncrement = ++bilanganPenugasanTambah;
document.writeln("<br> Hasil Increment : "+hasilIncrement+"<br>");
if(bilanganPenugasanTambah>1){
    document.writeln('\n lebih dari dua');
}else{
    document.writeln('\n kurang dari satu');
}
var validCekNul = (null) ? 'true' : 'false';
document.writeln(validCekNul)