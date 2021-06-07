const btnTambah = document.getElementById('btnTambah');
const hasil = document.getElementById('hasil').readOnly = true;
const tambah = ()=>{
    const bilanganPertama = document.getElementById('bilanganPertama').value;
    const bilanganKedua = document.getElementById('bilanganKedua').value;
    const hasil = document.getElementById('hasil');
    let tempTambah = Number(bilanganPertama) + Number(bilanganKedua);
    hasil.value = tempTambah;
}

btnTambah.addEventListener('click',tambah);
