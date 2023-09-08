import cardValidator from "./index.js";
const cardNumber = document.querySelector('#card-value');
const text = document.querySelector("#number-card");

cardNumber.addEventListener("input", () => {
    text.innerHTML = cardNumber.value;
})

cardNumber.addEventListener("blur", () => {
    let border =(cardValidator(cardNumber.value) ? "2.5px white solid" : "2.5px red solid")
    cardNumber.style.border = border; 
})
