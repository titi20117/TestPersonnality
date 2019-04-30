let getValueResponse = (nbrQuestions, nbrGroup, nbrAnswer) => {
    return 50/(nbrQuestions * nbrGroup * nbrAnswer);
}

let FindProcentphycho = (key, clol, sang, phleg, melan, numberOfQuestions, numberOfGroup, numberOfResponse)=> {
    let arrData = [0,0,0,0];
    let procentCloleric = clol;
    let procentSanguine = sang;
    let procentPhlegmatic = phleg;
    let procentMelancholic = melan;    
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
        arrData[0] = procentCloleric;
        arrData[1] = procentSanguine;
        arrData[2] = procentPhlegmatic;
        arrData[3] = procentMelancholic;
        
        return arrData;
};

(() => {
    let clientName = localStorage.getItem("client");
    let elTitle = document.querySelector('.page-container__header__title span');
    elTitle.innerHTML = "Поехали, " + clientName + "!";
    localStorage.setItem("name", clientName);

    const getImportance = () => {
        let count = 0;
        let elInputsResponse = document.querySelectorAll(".page-container__section__task__response label input");
        elInputsResponse.forEach(element => {
            if (element.getAttribute("data-height")) {
                count +=1;
                console.log(element.getAttribute("data-height"))
            }
        });
        return count/2;
    }
    
    // console.log(getImportance());

    let taskRequest = document.querySelectorAll(".page-container__section__task__request__task");
    let elInputsResponse = document.querySelectorAll(".page-container__section__task__response label input");
    let elBtnSend = document.querySelector(".page-container__section__submit input");

    // let getValueResponse = (nbrQuestions, nbrGroup, nbrAnswer) => {
    //     return 50/(nbrQuestions * nbrGroup * nbrAnswer);
    // }

    let numberOfQuestions = 14;
    let numberOfGroup = 2;
    let numberOfResponse = 1;


   
    elBtnSend.addEventListener("click", (event)=> {
        // event.preventDefault();
        let procentCloleric = 0;
        let procentSanguine = 0;
        let procentPhlegmatic = 0;
        let procentMelancholic = 0;
        for (let i = 0; i < elInputsResponse.length; i++) {
            if(elInputsResponse[i].checked == true) {
                let key = elInputsResponse[i].getAttribute("id");   
                let importance = elInputsResponse[i].getAttribute("data-height");
                if (importance) {
                    let procents = [];
                    numberOfQuestions = 6;
                    procents = FindProcentphycho(key, procentCloleric, procentSanguine, procentPhlegmatic, 
                        procentMelancholic, numberOfQuestions, numberOfGroup, numberOfResponse);
                    procentCloleric = procents[0];
                    procentSanguine = procents[1];
                    procentPhlegmatic = procents[2];
                    procentMelancholic = procents[3];
                    numberOfQuestions = 14;
                } else {
                    let procents2 = [];
                    procents2 = FindProcentphycho(key, procentCloleric, procentSanguine, procentPhlegmatic, 
                        procentMelancholic, numberOfQuestions, numberOfGroup, numberOfResponse);
                    procentCloleric = procents2[0];
                    procentSanguine = procents2[1];
                    procentPhlegmatic = procents2[2];
                    procentMelancholic = procents2[3];
                }
            }   
        }

        localStorage.setItem("procentCholeric", procentCloleric);
        localStorage.setItem("procentSanguine", procentSanguine);
        localStorage.setItem("procentPhlegmatic", procentPhlegmatic);
        localStorage.setItem("procentMelancholic", procentMelancholic);
        console.log("procentCloleric", procentCloleric);
        console.log("sanguine", procentSanguine);
        console.log("plegmatic", procentPhlegmatic);
        console.log("Melancholic", procentMelancholic);   
    });
})();