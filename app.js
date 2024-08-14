let boxes = Array.from(document.querySelectorAll(".button"));
let container = document.getElementById('container')
let player1 = '';
let player2 = '';
let buttonx = document.getElementById('buttonx');
let button0 = document.getElementById('button0');
let Xwins =[];
let win0 =[];
let resetScore = document.getElementById('Score')
buttonx.addEventListener('click',function(){
    player1 = 'X';
     button0.disabled = true;
     buttonx.disabled= true
     container.style.visibility='visible'
     buttonx.style.visibility='hidden';
     button0.style.visibility='hidden';
         
})
button0.addEventListener('click',function(){
    player1 = '0';
     button0.disabled = true;
    buttonx.disabled= true
    container.style.visibility='visible';
    button0.style.visibility='hidden';
    buttonx.style.visibility='hidden';
    
})
console.log(boxes)
let reset = document.querySelector(".resetbn")
const winPatterns = [
    [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
  
]
let results = document.getElementById('results');
let newtr =''
const addResult = (scorex, score0)=>{
     newtr = document.createElement('tr');
    let resultx = document.createElement('td')
    resultx.textContent=scorex
    newtr.appendChild(resultx)
    let result0 = document.createElement('td')
    result0.textContent=score0;
    newtr.appendChild(result0)
    results.appendChild(newtr);
}
const checkWinner = () => {
    for (let pattern of winPatterns) {
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if (pos1Val !== "" && pos2Val !== "" && pos3Val !== "") {
            if (pos1Val === pos2Val && pos2Val === pos3Val) {
                document.getElementById('output').innerText =`Winner is ${pos1Val}`;
                reset.disabled = false;
                button0.disabled = false;
                buttonx.disabled = false;
                boxes.forEach(box => {
                    box.disabled = true;
                  });
                if (pos1Val == 'X') {
                    win0.push('0');
                    Xwins.push('1');
                    let hisx = win0.join('')
                    let his0= Xwins.join('')
                    addResult(1,0)
                    // document.getElementById('winningx').innerText += hisx;
                    // document.getElementById('winning0').innerText += his0;
                    
                }
                if (pos1Val == '0') {
                    Xwins.push('0');
                    win0.push('1');
                    addResult(0,1);
                    // document.getElementById('winning0').innerText = his0;
                    // document.getElementById('winningx').innerText = hisx;
                    
                }
            }
        }
    }
};
  boxes.forEach(box => box.addEventListener('click', checkWinner));
var button = document.getElementsByClassName('button')
console.log(button)
let flag = true
function printXorZero(){
    let value = '';
    if (player1=='X') {
        value = 'X'
        value = flag?"X":"0"
        flag = !flag
        let currentbutton = this;
        currentbutton.innerHTML = value; 
        currentbutton.disabled = true; 
        checkWinner();
    }
    if (player1=='0') {
        value = '0'
        value = flag?"0":'X';
        flag =!flag
        let currentbutton = this;
        currentbutton.innerHTML = value; 
        currentbutton.disabled = true; 
        
        
        checkWinner();   
    }
    // value = flag?"X":"0"
    // flag = !flag;
    // checkWinner();
}
for(var i = 0; i < button.length; i++){
    var currentbutton = button[i];
    currentbutton.addEventListener('click', printXorZero);
}
const resetGame = ()=>{
    boxes.forEach(box => {
        box.innerHTML = "";
        box.disabled = false;
        document.getElementById('output').innerText =""; 
    });

    flag = true;

}
reset.addEventListener('click', resetGame)

resetScore.addEventListener('click',function(){results.removeChild(newtr);
    document.getElementById('output').innerText ="";
    player1='';
    player2='';
    container.style.visibility='hidden';
    button0.style.visibility='visible';
    buttonx.style.visibility='visible';
} )