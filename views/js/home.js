(() => {
    let elInputName = document.querySelector(".home-page__identification__form input");
    let elSubmitName = document.querySelector("input[type=submit]");
    elSubmitName.addEventListener("click", ()=> {
        let clientName = elInputName.value;
        localStorage.setItem('client', clientName);
    })
})();