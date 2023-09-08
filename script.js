import cardValidator from "./index.js";
const input = document.querySelector('#card-value');
let cartao = input.value
let newCard = ""
input.addEventListener("keyup", formatar)
function formatar(){
    let i = cartao.length
    let str = "0000 0000 0000 0000"
    if (i <= str.length){
        newCard += str[i]
    }
    console.log(str[i])
}



// const text = document.querySelector("#card-number");
// 


// input.addEventListener("input", () => {
//     text.innerHTML = input.value;
// })
// input.addEventListener("blur", () => {
//     let border =(cardValidator(input.value) ? "2.5px white solid" : "2.5px red solid");

//     input.style.border = border; 
//     // input.style.boxShadow = "0
// })
