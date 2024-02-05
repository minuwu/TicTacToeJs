let msg = document.querySelector(".msg");
msg.innerText = "TIC TAC TOE";
let reset = document.querySelector(".reset");
let turn = true;
let winSequence = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];
let cnt=0;
for(let i=1; i<=9; i++){    
    let box = document.createElement("button");
    box.classList.add("box");
    document.querySelector(".gameContainer").append(box);
    box.addEventListener("click",()=>{
        cnt++;
        if(turn){
            box.innerText = "X";
            turn = false;
        }else{
            box.innerText = "O";
            turn = true;
        }
        win();
        ded(box);
        if(cnt==9){
            msg.innerText = "Game Draw!";
            cnt = 0;
        }
    })
}

let boxes = document.querySelectorAll(".box");


function win(){
    for(let winner of winSequence){
        let
        a = winner[0],
        b = winner[1],
        c = winner[2];

        if( boxes[a].innerText && boxes[b].innerText && boxes[c].innerText){
            if(boxes[a].innerText == boxes[b].innerText && boxes[b].innerText==boxes[c].innerText){
                console.log("winner found");
                boxes[a].classList.add("glow");
                boxes[b].classList.add("glow");
                boxes[c].classList.add("glow");
                for(let box of boxes){
                    ded(box);
                }
                msg.innerText = `Winner is ${boxes[a].innerText}`;
                cnt = 0;

            }
        }
    }
}
function ded(box){
    box.disabled = true;
    box.style.backgroundColor = "#c7dad4";
}
function alive(box){
    box.disabled = false;
    box.style.backgroundColor = "#E5FCF5"
    box.classList.remove("glow");
}
reset.addEventListener("click",() =>{
    for(let box of boxes){
        box.innerText = "";
        alive(box);
    }
    turn = true;
    msg.innerText = "Tic Tac Toe";
    cnt = 0;
});


