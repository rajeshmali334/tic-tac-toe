let boxs = document.querySelectorAll(".box");
let resetBtn= document.querySelector("#resetBtn");
let newGameBtn= document.querySelector("#new-btn");
let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");

let turn0= true;

const winPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];
const resetGame = () =>{
    turn0 = true;
    enableBoxes();
    msgContainer.classList.add("hide")
}

boxs.forEach((box) => {
    box.addEventListener("click", ()=>{
        console.log("click me");
        if(turn0 === true){
            box.innerHTML="O";
            turn0 = false;
        }else{
            box.innerHTML="X";
            turn0 = true;
        }
        box.disabled = true;
        checkWinner();
    })
});

const disabledBoxes=()=>{
    for(let box of boxs){
        box.disabled=true;
    }
}

const enableBoxes=()=>{
    for(let box of boxs){
        box.disabled=false;
        box.innerText = "";
    }
}


const showWinner=(winner)=>{
    msg.innerText = `congratulation , winnner is ${winner}`
    msgContainer.classList.remove("hide");
    disabledBoxes();
}

const checkWinner=()=>{
    for(pattren of winPatterns){
        
        let pos1Val = boxs[pattren[0]].innerHTML;
        let pos2Val = boxs[pattren[1]].innerHTML;
        let pos3Val = boxs[pattren[2]].innerHTML;

        if( pos1Val != "" & pos2Val != "" & pos3Val != ""){
            if( pos1Val === pos2Val && pos2Val === pos3Val){
                console.log("winner"+pos1Val);
                showWinner(pos1Val);
            }
        }

    }
}

newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);



