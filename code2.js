let boxes = document.querySelectorAll('.button')
let resetbutton = document.querySelector('.resetbn')
let flag = true
let countdown = 5;

function PrintXor0( ){
    let value = flag?"x":"0"
    flag = !flag; 
    let currentbutton = this;
    currentbutton = value;
}
for (let i = 0; i < boxes.length; i++) {
    let currentbutton = boxes[i];
    currentbutton.addEventListener("click", PrintXor0)

}
function isNotBlank(currentbutton){
    return currentbutton.innerText.trim().length>0;
}
function  isThreeSame(first,second,third){
    if(isNotBlank(first)&&isNotBlank(second)&&isNotBlank(third)){
        return(first.innerText == second.innerText && second.innerText==third.innerText)
    }
    return false
}

function waitFor5Sec(){
    setInterval(() => {
        
    }, interval);
    setTimeout(reset, 5000)
}
function resetGame(){
    flag = true;
    countdown = 5
    for(var i = 0; i<boxes.length; i++){
        boxes.innerText = '';
    }
}
function isGameOver(){
    return 
    isThreeSame(buttons[0], buttons[1], buttons[2]) || 
    isThreeSame(buttons[3], buttons[4], buttons[5]) ||
    isThreeSame(buttons[6], buttons[7], buttons[8]) ||
    isThreeSame(buttons[0], buttons[3], buttons[6]) ||
    isThreeSame(buttons[1], buttons[4], buttons[7]) ||
    isThreeSame(buttons[2], buttons[5], buttons[8]) ||
    isThreeSame(buttons[0], buttons[4], buttons[8]) ||
    isThreeSame(buttons[2], buttons[4], buttons[6]);
}