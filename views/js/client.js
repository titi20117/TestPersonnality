"use strict";
//creation de la fonction getImportance to set important or not the questions
let getImportance = () => {
    let count = 0;
    let elInputsResponse = document.querySelectorAll(".page-container__section__task__response label input");
    elInputsResponse.forEach(element => {
        if (element.getAttribute("data-height")) {
            count +=1;
        }
    });
    return count/2;
}

console.log(getImportance());

//find the result of passed test
(() => {
    let clientName = localStorage.getItem("client");
    let elTitle = document.querySelector('.page-container__header__title span');
    elTitle.innerHTML = "Поехали, " + clientName + "!";
    localStorage.setItem("name", clientName);

    let taskRequest = document.querySelectorAll(".page-container__section__task__request__task");
    let elInputsResponse = document.querySelectorAll(".page-container__section__task__response label input");
    let elBtnSend = document.querySelector(".page-container__section__submit input");

    let getValueResponse = (nbrQuestions, nbrGroup, nbrAnswer) => {
        return 100/(nbrQuestions * nbrGroup * nbrAnswer); 
    }

    let numberOfQuestions = 20;
    let numberOfGroup = 2;
    let numberOfResponse = 1;


   
    elBtnSend.addEventListener("click", (event)=> {
        let procentCloleric = 0;
        let procentSanguine = 0;
        let procentPhlegmatic = 0;
        let procentMelancholic = 0;
        for (let i = 0; i < elInputsResponse.length; i++) {
            if(elInputsResponse[i].checked == true) {
                let importance = elInputsResponse[i].getAttribute("data-height");
                if (importance) {
                    
                }
                let key = elInputsResponse[i].getAttribute("id");
                switch (key) {
                    case "1":
                        procentCloleric += getValueResponse(numberOfQuestions, numberOfGroup, numberOfResponse);
                        procentSanguine += getValueResponse(numberOfQuestions, numberOfGroup, numberOfResponse);
                        break;
                    case "1.1":
                        procentPhlegmatic += getValueResponse(numberOfQuestions, numberOfGroup, numberOfResponse);
                        procentMelancholic +=getValueResponse(numberOfQuestions, numberOfGroup, numberOfResponse);
                        break;
                    case "2":
                        procentCloleric += getValueResponse(numberOfQuestions, numberOfGroup, numberOfResponse);
                        procentSanguine += getValueResponse(numberOfQuestions, numberOfGroup, numberOfResponse);
                        break;
                    case "2.1":
                        procentPhlegmatic += getValueResponse(numberOfQuestions, numberOfGroup, numberOfResponse);
                        procentMelancholic +=getValueResponse(numberOfQuestions, numberOfGroup, numberOfResponse);
                        break;
                    case "3":
                        procentCloleric += getValueResponse(numberOfQuestions, numberOfGroup, numberOfResponse);
                        procentSanguine += getValueResponse(numberOfQuestions, numberOfGroup, numberOfResponse);
                        break;
                    case "3.1":
                        procentPhlegmatic += getValueResponse(numberOfQuestions, numberOfGroup, numberOfResponse);
                        procentMelancholic +=getValueResponse(numberOfQuestions, numberOfGroup, numberOfResponse);
                        break;
                    case "4":
                        procentCloleric += getValueResponse(numberOfQuestions, numberOfGroup, numberOfResponse);
                        procentSanguine += getValueResponse(numberOfQuestions, numberOfGroup, numberOfResponse);
                        break;
                    case "4.1":
                        procentPhlegmatic += getValueResponse(numberOfQuestions, numberOfGroup, numberOfResponse);
                        procentMelancholic +=getValueResponse(numberOfQuestions, numberOfGroup, numberOfResponse);
                        break;
                    case "5":
                        procentCloleric += getValueResponse(numberOfQuestions, numberOfGroup, numberOfResponse);
                        procentSanguine += getValueResponse(numberOfQuestions, numberOfGroup, numberOfResponse);
                        break;
                    case "5.1":
                        procentPhlegmatic += getValueResponse(numberOfQuestions, numberOfGroup, numberOfResponse);
                        procentMelancholic +=getValueResponse(numberOfQuestions, numberOfGroup, numberOfResponse);
                        break;
                    case "6":
                        procentCloleric += getValueResponse(numberOfQuestions, numberOfGroup, numberOfResponse);
                        procentSanguine += getValueResponse(numberOfQuestions, numberOfGroup, numberOfResponse);
                        break;
                    case "6.1":
                        procentPhlegmatic += getValueResponse(numberOfQuestions, numberOfGroup, numberOfResponse);
                        procentMelancholic +=getValueResponse(numberOfQuestions, numberOfGroup, numberOfResponse);
                        break;
                    case "7":
                        procentCloleric += getValueResponse(numberOfQuestions, numberOfGroup, numberOfResponse);
                        procentMelancholic += getValueResponse(numberOfQuestions, numberOfGroup, numberOfResponse);
                        break;
                    case "7.1":
                        procentSanguine += getValueResponse(numberOfQuestions, numberOfGroup, numberOfResponse);
                        procentPhlegmatic += getValueResponse(numberOfQuestions, numberOfGroup, numberOfResponse);
                        break;
                    case "8":
                        procentCloleric += getValueResponse(numberOfQuestions, numberOfGroup, numberOfResponse);
                        procentMelancholic += getValueResponse(numberOfQuestions, numberOfGroup, numberOfResponse);
                        break;
                    case "8.1":
                        procentSanguine += getValueResponse(numberOfQuestions, numberOfGroup, numberOfResponse);
                        procentPhlegmatic += getValueResponse(numberOfQuestions, numberOfGroup, numberOfResponse);
                        break;
                    case "9":
                        procentCloleric += getValueResponse(numberOfQuestions, numberOfGroup, numberOfResponse);
                        procentSanguine += getValueResponse(numberOfQuestions, numberOfGroup, numberOfResponse);
                        break;
                    case "9.1":
                        procentMelancholic += getValueResponse(numberOfQuestions, numberOfGroup, numberOfResponse);
                        procentPhlegmatic += getValueResponse(numberOfQuestions, numberOfGroup, numberOfResponse);
                        break;
                    case "10":
                        procentCloleric += getValueResponse(numberOfQuestions, numberOfGroup, numberOfResponse);
                        procentMelancholic += getValueResponse(numberOfQuestions, numberOfGroup, numberOfResponse);
                        break;
                    case "10.1":
                        procentSanguine += getValueResponse(numberOfQuestions, numberOfGroup, numberOfResponse);
                        procentPhlegmatic += getValueResponse(numberOfQuestions, numberOfGroup, numberOfResponse);
                        break;
                    case "11":
                        procentCloleric += getValueResponse(numberOfQuestions, numberOfGroup, numberOfResponse);
                        procentMelancholic += getValueResponse(numberOfQuestions, numberOfGroup, numberOfResponse);
                        break;
                    case "11.1":
                        procentSanguine += getValueResponse(numberOfQuestions, numberOfGroup, numberOfResponse);
                        procentPhlegmatic += getValueResponse(numberOfQuestions, numberOfGroup, numberOfResponse);
                        break;
                    case "12":
                        procentSanguine += getValueResponse(numberOfQuestions, numberOfGroup, numberOfResponse);
                        procentPhlegmatic += getValueResponse(numberOfQuestions, numberOfGroup, numberOfResponse);
                        break;
                    case "12.1":
                        procentCloleric += getValueResponse(numberOfQuestions, numberOfGroup, numberOfResponse);
                        procentMelancholic += getValueResponse(numberOfQuestions, numberOfGroup, numberOfResponse);
                        break;
                    case "13":
                        procentSanguine += getValueResponse(numberOfQuestions, numberOfGroup, numberOfResponse);
                        procentPhlegmatic += getValueResponse(numberOfQuestions, numberOfGroup, numberOfResponse);
                        break;
                    case "13.1":
                        procentCloleric += getValueResponse(numberOfQuestions, numberOfGroup, numberOfResponse);
                        procentMelancholic += getValueResponse(numberOfQuestions, numberOfGroup, numberOfResponse);
                        break;
                    case "14":
                        procentPhlegmatic += getValueResponse(numberOfQuestions, numberOfGroup, numberOfResponse);
                        procentMelancholic += getValueResponse(numberOfQuestions, numberOfGroup, numberOfResponse);
                        break;
                    case "14.1":
                        procentCloleric += getValueResponse(numberOfQuestions, numberOfGroup, numberOfResponse);
                        procentSanguine += getValueResponse(numberOfQuestions, numberOfGroup, numberOfResponse);
                        break;
                    case "15":
                        procentCloleric += getValueResponse(numberOfQuestions, numberOfGroup, numberOfResponse);
                        procentSanguine += getValueResponse(numberOfQuestions, numberOfGroup, numberOfResponse);
                        break;
                    case "15.1":
                        procentPhlegmatic += getValueResponse(numberOfQuestions, numberOfGroup, numberOfResponse);
                        procentMelancholic += getValueResponse(numberOfQuestions, numberOfGroup, numberOfResponse);
                        break;
                    case "16":
                        procentSanguine += getValueResponse(numberOfQuestions, numberOfGroup, numberOfResponse);
                        procentPhlegmatic += getValueResponse(numberOfQuestions, numberOfGroup, numberOfResponse);
                        break;
                    case "16.1":
                        procentCloleric += getValueResponse(numberOfQuestions, numberOfGroup, numberOfResponse);
                        procentMelancholic += getValueResponse(numberOfQuestions, numberOfGroup, numberOfResponse);
                        break;
                    case "17":
                        procentCloleric += getValueResponse(numberOfQuestions, numberOfGroup, numberOfResponse);
                        procentSanguine += getValueResponse(numberOfQuestions, numberOfGroup, numberOfResponse);
                        break;
                    case "17.1":
                        procentPhlegmatic += getValueResponse(numberOfQuestions, numberOfGroup, numberOfResponse);
                        procentMelancholic += getValueResponse(numberOfQuestions, numberOfGroup, numberOfResponse);
                        break;
                    case "18":
                        procentSanguine += getValueResponse(numberOfQuestions, numberOfGroup, numberOfResponse);
                        procentPhlegmatic += getValueResponse(numberOfQuestions, numberOfGroup, numberOfResponse);
                        break;
                    case "18.1":
                        procentCloleric += getValueResponse(numberOfQuestions, numberOfGroup, numberOfResponse);
                        procentMelancholic += getValueResponse(numberOfQuestions, numberOfGroup, numberOfResponse);
                        break;
                    case "19":
                        procentCloleric += getValueResponse(numberOfQuestions, numberOfGroup, numberOfResponse);
                        procentMelancholic += getValueResponse(numberOfQuestions, numberOfGroup, numberOfResponse);
                        break;
                    case "19.1":
                        procentSanguine += getValueResponse(numberOfQuestions, numberOfGroup, numberOfResponse);
                        procentPhlegmatic += getValueResponse(numberOfQuestions, numberOfGroup, numberOfResponse);
                        break;
                    case "20":
                        procentCloleric += getValueResponse(numberOfQuestions, numberOfGroup, numberOfResponse);
                        procentMelancholic += getValueResponse(numberOfQuestions, numberOfGroup, numberOfResponse);
                        break;
                    case "20.1":
                        procentSanguine += getValueResponse(numberOfQuestions, numberOfGroup, numberOfResponse);
                        procentPhlegmatic += getValueResponse(numberOfQuestions, numberOfGroup, numberOfResponse);
                        break;
                    default:
                        break;
                    }  
                }   
            }
            localStorage.setItem("procentCholeric", procentCloleric);
            localStorage.setItem("procentSanguine", procentSanguine);
            localStorage.setItem("procentPhlegmatic", procentPhlegmatic);
            localStorage.setItem("procentMelancholic", procentMelancholic);
        });
})();