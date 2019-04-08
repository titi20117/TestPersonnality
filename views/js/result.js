// "use strict";
let elResultXol = document.querySelector(".container-result__state__percent-xol");
let elresultMel = document.querySelector(".container-result__state__percent-mel");
let elresultPhle = document.querySelector(".container-result__state__percent-phle");
let elresultSang = document.querySelector(".container-result__state__percent-sang");

let procentCholeric = localStorage.getItem("procentCholeric");
let procentSanguine = localStorage.getItem("procentSanguine");
let procentPhlegmatic = localStorage.getItem("procentPhlegmatic");
let procentMelancholic = localStorage.getItem("procentMelancholic");

let clientName = localStorage.getItem("name");
let elTitle = document.querySelector('.container-title h1');
elTitle.innerHTML = "Результат теста " + '"' + clientName + '"'; 


let max = procentCholeric;
console.log(max);
let procentArray = [procentCholeric, procentMelancholic, procentPhlegmatic, procentSanguine];
for (let i = 1; i < procentArray.length; i++) {
    if (max < procentArray[i]) {
        max = procentArray[i];
    }
}

console.log(max);
let elImgResult = document.querySelector('.container-result__img')
let elImg = document.createElement('img');
if (max == procentCholeric) {
    elImg.src = "../../../assets/img/choleric.jpg";
} else if (max == procentSanguine){
    elImg.src = "../../../assets/img/sanguine.jpg";
} else if (max == procentPhlegmatic){
    elImg.src = "../../../assets/img/phlematic.jpg";
} else {
    elImg.src = "../../../assets/img/melancholic.jpg";
}
elImgResult.appendChild(elImg);

let move = (el, procent) => {
    let interval = 1;
    let id = setInterval(frame, 50);
    function frame() {
        if(interval >= procent) {
            clearInterval(id);
        } else {
            interval += 0.25;
            el.style.width = interval + "%";                
            el.innerHTML = interval + "%";
        }    
    }
}

move(elResultXol, procentCholeric);
move(elresultMel, procentMelancholic);
move(elresultPhle, procentPhlegmatic);
move(elresultSang, procentSanguine);


