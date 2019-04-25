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


let max = -1;
let procentArray = [procentCholeric, procentMelancholic, procentPhlegmatic, procentSanguine];
for (let i = 0; i < procentArray.length; i++) {
    if (max < parseInt(procentArray[i])) {
        max = procentArray[i];
        
    }
}

console.log(max);
let elImgResult = document.querySelector('.container-result__img')
let elImg = document.createElement('img');
let elTitleResult = document.querySelector('.card-title');
let elDescriptionResult = document.querySelector('.card-text__desc');
let elDescriptionResultType = document.querySelector('.card-text__type');
let text = "Вопросы со 'звездочкой' обладают высокой важностью, и именно они, в первую очередь, определили твой психотип!";
if (max == procentCholeric) {
    elImg.src = "../../../assets/img/choleric.jpg";
    elTitleResult.innerHTML = "Ты - холерик";
    elDescriptionResult.innerHTML = text;
    const Description = 'В переводе термин "холе" означает "желтая желчь". Это эмоциональные импульсивные люди, которые склонны к резким сменам настроения. Твои позитивные стороны: оптимизм, уверенность в себе, лидерство, ответственность. Чуть больше у тебя негативных черт: авторитарность, раздражительность, склонность к насилию и предрассудкам, нетерпеливость, упрямство и хитрость. Тебе необходимо научиться сдерживать себя, не быть заносчивым и прежде, чем отреагировать на ситуацию - сосчитай до 10. ';
    elDescriptionResultType.innerHTML = Description;
} else if (max == procentSanguine){
    elImg.src = "../../../assets/img/sanguine.jpg";
    elTitleResult.innerHTML = "Ты - сангвиник";
    elDescriptionResult.innerHTML = text;
    const Description = 'С греческого термин "сангвинис" переводится как "кровь". Это веселые и активные люди. Твои плюсы: жизнераостность, энергичность, работоспособность, выносливость, энтузиазм, самообладание. Есть и минусы: поспешность, нелюбовь к однообразной работе, неустойчивость в интересах и склонностях, несобранность. Для достижения успеха в деятельности сангвиникам не стоит разбрасываться по мелочам, им необходимо быть целеустремленными, аккуратными, усидчивыми.';
    elDescriptionResultType.innerHTML = Description;
} else if (max == procentPhlegmatic){
    elImg.src = "../../../assets/img/phlematic.jpg";
    elTitleResult.innerHTML = "Ты - флегматик";
    elDescriptionResult.innerHTML = text;
    const Description = 'Слово, из которого возник данный термин, "флегма" - "мокрота, лимфа. Такие люди спокойны, уравновешены, однако податливы и медлительны. Положительные стороны: спокойствие, хладнокровность, терпеливость, осторожность, выдержкка, усидчивость, незлопамятность, постоянство. Есть и негативные: замедленная реакция на внешние раздражители, скупость в эмоциях, занудство, ненаходчивость, стереотипность, шаблонность. Флегматикам стоит развивать недостающие качества: подвижность, активность, а также не допускать проявления таких качество, как инертность и вялость.';
    elDescriptionResultType.innerHTML = Description;
} else {
    elImg.src = "../../../assets/img/melancholic.jpg";
    elTitleResult.innerHTML = "Ты - меланхолик";
    elDescriptionResult.innerHTML = text;
    const Description = 'Название произошло от двух слов "мелэна" и "холе", что в переводе означает "черная желчь". Если кратно, то такие люди отличаются трогательностью, утонченностью и грустью. Твои плюсы: повышенная чувствительность,высокие требования к себе, постоянство, восприимчивость к одобрению и порицанию. Есть еще минусы: высокая эмоциональная чувствительность, застенчивость, скрытность, нерешительность и неуверенность, пессимизм, склонность к одиночеству и депрессии. В плане самосовершенствования и самореализации меланхоликам необходимо быть более активными, заниматься организаторской деятельностью, чтобы ощутить свою значимость, уверенность и повысить свою самооценку. Этому способствуют также занятия физкультурой, спортом, гимнастикой.';
    elDescriptionResultType.innerHTML = Description;
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


