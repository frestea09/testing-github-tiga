// const objP = document.querySelectorAll('.satu');
// objP[0].style.backgroundColor = "red";
const objElementSatu = document.querySelector('#satuAja');
objElementSatu.innerHTML = "sudah dirubah";
objElementSatu.style.color = 'red';
const elementBaru = document.createElement('p');
const textElementBaru = document.createTextNode('Hello ini element baru');
elementBaru.appendChild(textElementBaru);

const container = document.querySelector('#container');
container.appendChild(elementBaru);

// const objHello = document.querySelector("#container .satu");
// objHello.style.color = "blue";

const containerAnak = document.querySelectorAll("#container");
containerAnak.style.color = "orange";