const kotakUbah = document.getElementById('kotak-ubah');
const ubahMerah = () =>{
    kotakUbah.style.backgroundColor = "red";
}
const ubahKuning = () =>{
    kotakUbah.style.backgroundColor = "yellow";
}
const ubahBiru = () =>{
    kotakUbah.style.backgroundColor = "blue";
}

const btnMerah= document.getElementById("btn-merah");
const btnKuning= document.getElementById("btn-kuning");
const btnBiru= document.getElementById("btn-biru");

btnMerah.addEventListener('click',ubahMerah);
btnBiru.addEventListener('click',ubahBiru);
btnKuning.addEventListener('click',ubahKuning);

const ubahanPertama = document.getElementById('satu');
ubahanPertama.style.color = 'red';

const ubahanKedua = document.querySelector('ul li#dua');
ubahanKedua.style.color = 'yellow';

const ubahanKetiga = document.querySelector('ul li:nth-child(3)');
ubahanKetiga.style.color = 'green';

const ubahanKeempat = document.querySelector('ul#latihan-dua');
const spesifikEmpat = ubahanKeempat.querySelector('li:nth-child(1)');
spesifikEmpat.style.color = 'red';

const btnUbah = document.querySelector('#btn-geser');
btnUbah.addEventListener('click',() =>{
    kotakUbah.style.marginLeft = "500px";
})
const btnPause = document.querySelector('#btn-pause');
const kotakAnimasi = document.getElementById('kotak-animasi');
btnPause.addEventListener('click',()=>{
    kotakAnimasi.style.animationPlayState = "paused";
})
const btnRunning = document.querySelector('#btn-running');
btnRunning.addEventListener('click',()=>{
    kotakAnimasi.style.animationPlayState = "running";
})
const btnTambah = document.querySelector('#btn-tambah');
const tambahNode = document.querySelector('#tambah-node');
const sectionTambahNode = document.querySelector('#belajar-tambah-node');
btnTambah.addEventListener('click',()=>{
    var elemenBaru = document.createElement('p');
    var textElementBaru = document.createTextNode('hello');
    elemenBaru.appendChild(textElementBaru);
    sectionTambahNode.appendChild(elemenBaru);
})