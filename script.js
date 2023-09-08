import cardValidator from "./index.js";

const cardNumber = document.querySelector('#card-value');
const dataCard = document.querySelector("#data-card");
const cvvCard =document.querySelector("#cvv-card");
const nameCard =document.querySelector("#name-card");

dataCard.addEventListener("input", renderDataCard)

nameCard.addEventListener("input", renderNameCard)

cvvCard.addEventListener("input", renderCvvCard)
//console.log("oi")

cardNumber.addEventListener("input", renderCardNumber)

cardNumber.addEventListener("blur", verificationCardNumber)
function renderDataCard () {
    const text = document.querySelector(".expiration");
    dataCard.value = dataCard.value.replace(/[^0-9\s/]/g, '')
    text.innerHTML = dataCard.value;
}
function renderNameCard () {
    const textName = document.querySelector(".name");
    nameCard.value = nameCard.value.replace(/[^a-zA-Z\s]/g, '')
    textName.innerHTML = nameCard.value; 
}
function renderCvvCard () {
    const textCvv = document.querySelector(".cvv");
    cvvCard.value = cvvCard.value.replace(/[^0-9\s/]/g, '')
    textCvv.innerHTML = cvvCard.value;
}

function renderCardNumber(){
    const textNumber = document.querySelector("#number-card");
    cardNumber.value = cardNumber.value.replace(/[^0-9\s/]/g, '')
    let newCard = cardNumber.value;

    if (!newCard.includes(" ")) {

        let formattedCard = "";
        for (let i = 0; i < newCard.length; i += 4) {
            formattedCard += newCard.slice(i, i + 4) + " ";
        }
        formattedCard = formattedCard.trim();

        textNumber.innerHTML = formattedCard;
    } else {
        textNumber.innerHTML = cardNumber.value;
    }
}


function verificationCardNumber () {
    let newCardNumber = cardNumber.value;

    if (newCardNumber.includes(" ")) {

        while (newCardNumber.includes(" ")) {
            newCardNumber = newCardNumber.replace(" ", "");
        }
    }
 //   console.log(newCardNumber)

    let border =(cardValidator(newCardNumber) ? "2.5px white solid" : "2.5px red solid")
    cardNumber.style.border = border; 
};
