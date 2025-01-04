let gameSeq=[];
let userSeq=[];
let started = false;
let level=0;
let score=0;
let h2 = document.querySelector('h2');
let body = document.querySelector('body');
let colors = ["red","yellow","green","blue"];
body.addEventListener("keypress",function(){
    if(started==false){
    console.log("Game started");
    started=true;
    levelUp();
    }
});
function levelUp(){
    userSeq=[];
    level++;
    h2.innerText=`Level ${level}`;
    let randomIdx=Math.floor(Math.random()*4);
    let randomColor=colors[randomIdx];
    gameSeq.push(randomColor);
    let randomBtn=document.querySelector(`.${randomColor}`);
    flashBtn(randomBtn);
    console.log(gameSeq);
}
function flashBtn(btn){
    btn.classList.add('flash');
    setTimeout(function(){
        btn.classList.remove("flash");
    },100);
}
function userflashBtn(btn){
    btn.classList.add('userflash');
    setTimeout(function(){
        btn.classList.remove("userflash");
    },250);
}
function checkAns(idx){
    if(userSeq[idx]==gameSeq[idx]){
        if(userSeq.length==gameSeq.length){
            score+=2;
            setTimeout(levelUp,1000);
        }
        else{
            score++;
        }
    }
    else{
        reset();
    }
}
function btnPress(){
    if(level==0){
        return;
    }
    let btn = this;
    userflashBtn(btn);
    let userColor=btn.getAttribute("id");
    userSeq.push(userColor);
    checkAns(userSeq.length-1);
}
let btns=document.querySelectorAll(".btn");
for(let btn of btns){
    btn.addEventListener("click",btnPress);
};
function reset(){
    started=false;
    userSeq=[];
    gameSeq=[];
    h2.innerHTML=`Game Over! Your score was<b>${score}</b><br> Press any key to start again`;
    body.classList.add("gameOver");
    setTimeout(function(){
        body.classList.remove("gameOver");
    },150);
    level=0;
    score=0;
}