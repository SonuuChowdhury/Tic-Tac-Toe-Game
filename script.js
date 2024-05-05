// Welcome! This was developed by @SonuuChowdhury (GitHub). Enjoy!!

//             Accescing the keys
var divElement = document.querySelectorAll("#playbox");


// All the buttons are selected to acces
let B11 = document.querySelector(".B11");
let B12 = document.querySelector(".B12");
let B13 = document.querySelector(".B13");
let B21 = document.querySelector(".B21");
let B22 = document.querySelector(".B22");
let B23 = document.querySelector(".B23");
let B31 = document.querySelector(".B31");
let B32 = document.querySelector(".B32");
let B33 = document.querySelector(".B33");
let headText= document.querySelector("#headText");
let controlBtn=document.querySelector(".controlBtn")



// Declarations of the variables
let noOfTurns=1;
let posFilled=[];
let winnerFlag=0;

//Giving Values to the boxVars so i can check who is winning.
// 1---> For Cross 
// 0---> For Circle  
// 2---> For Empty(Default Value )

let boxVar11=2;
let boxVar12=2;
let boxVar13=2;
let boxVar21=2;
let boxVar22=2;
let boxVar23=2;
let boxVar31=2;
let boxVar32=2;
let boxVar33=2;


//                 Functions
function addCircle(n) {
  divElement[n].style.backgroundImage = "url('Media/Circle.jpg')";
}

function addCross(n) {
  divElement[n].style.backgroundImage = "url('Media/Cross.jpg')";
}

function setBoxVarForCircle(n){
    if (n==0){
        boxVar11=0;
    }
    else if(n==1){
        boxVar12=0;
    }
    else if(n==2){
        boxVar13=0;
    }
    else if(n==3){
        boxVar21=0;
    }
    else if(n==4){
        boxVar22=0;
    }
    else if(n==5){
        boxVar23=0;
    }
    else if(n==6){
        boxVar31=0;
    }
    else if(n==7){
        boxVar32=0;
    }
    else if(n==8){
        boxVar33=0;
    }
}

function setBoxVarForCross(n){
    if (n==0){
        boxVar11=1;
    }
    else if(n==1){
        boxVar12=1;
    }
    else if(n==2){
        boxVar13=1;
    }
    else if(n==3){
        boxVar21=1;
    }
    else if(n==4){
        boxVar22=1;
    }
    else if(n==5){
        boxVar23=1;
    }
    else if(n==6){
        boxVar31=1;
    }
    else if(n==7){
        boxVar32=1;
    }
    else if(n==8){
        boxVar33=1;
    }
}



function decideChoice(a){
    if (winnerFlag==1){
        alert("Please Reset The Game To Play Agin!!")
    }
    else{

    let n=a;
    controlBtn.innerText="Reset";
    // Checking that box is already filled or not
    for (let i = 0; i < posFilled.length; i++) {
        if (posFilled[i]==n){
            return 0;
        }
        else{
            continue;
        }
    }
    // Filling Positions accoding to the order
    if (noOfTurns%2==0) {
        addCross(n);
        noOfTurns++; 
        posFilled.push(n);
        setBoxVarForCross(n);
    }
    else{
        addCircle(n);
        noOfTurns++;
        posFilled.push(n);
        setBoxVarForCircle(n);
    }
    setTimeout(function() {
        console.log('Function paused for 2 seconds');
    }, 500);

    checkWinnerForCross();
    checkWinnerForCircle();
    drawCheck(noOfTurns);
    }
}

function drawCheck(turns){
    if (turns==10) {
        winnerFlag=1;
        headText.innerText="Match Draw!!"
    }
}

function checkWinnerForCross(){
    // Horizontal Checking
    if (boxVar11==1 && boxVar12==1 && boxVar13==1){
        headText.innerText="X is the Winner!! 🎉"
        winnerFlag=1; 
    }

    else if(boxVar21==1 && boxVar22==1 && boxVar23==1){
        headText.innerText="X is the Winner!! 🎉" 
        winnerFlag=1;  
    }

    else if(boxVar31==1 && boxVar32==1 && boxVar33==1){
        headText.innerText="X is the Winner!! 🎉"  
        winnerFlag=1; 
    }

    // Vertical Checking
    else if(boxVar11==1 && boxVar21==1 && boxVar31==1){
        headText.innerText="X is the Winner!! 🎉"  
        winnerFlag=1; 
    }

    else if(boxVar12==1 && boxVar22==1 && boxVar32==1){
        headText.innerText="X is the Winner!! 🎉"  
        winnerFlag=1; 
    }

    else if(boxVar13==1 && boxVar23==1 && boxVar33==1){
        headText.innerText="X is the Winner!! 🎉"  
        winnerFlag=1; 
    }

    // Diagonal Checking
    else if(boxVar11==1 && boxVar22==1 && boxVar33==1){
        headText.innerText="X is the Winner!! 🎉"  
        winnerFlag=1; 
    }

    else if(boxVar13==1 && boxVar22==1 && boxVar31==1){
        headText.innerText="X is the Winner!! 🎉"  
        winnerFlag=1; 
    }
}


function checkWinnerForCircle(){
    // Horizontal Checking
    if (boxVar11==0 && boxVar12==0 && boxVar13==0){
        headText.innerText="O is the Winner!! 🎉"
        winnerFlag=1; 
    }

    else if(boxVar21==0 && boxVar22==0 && boxVar23==0){
        headText.innerText="O is the Winner!! 🎉" 
        winnerFlag=1;  
    }

    else if(boxVar31==0 && boxVar32==0 && boxVar33==0){
        headText.innerText="O is the Winner!! 🎉"  
        winnerFlag=1; 
    }

    // Vertical Checking
    else if(boxVar11==0 && boxVar21==0 && boxVar31==0){
        headText.innerText="O is the Winner!! 🎉"  
        winnerFlag=1; 
    }

    else if(boxVar12==0 && boxVar22==0 && boxVar32==0){
        headText.innerText="O is the Winner!! 🎉"  
        winnerFlag=1; 
    }

    else if(boxVar13==0 && boxVar23==0 && boxVar33==0){
        headText.innerText="O is the Winner!! 🎉"  
        winnerFlag=1; 
    }

    // Diagonal Checking
    else if(boxVar11==0 && boxVar22==0 && boxVar33==0){
        headText.innerText="O is the Winner!! 🎉"  
        winnerFlag=1; 
    }

    else if(boxVar13==0 && boxVar22==0 && boxVar31==0){
        headText.innerText="O is the Winner!! 🎉"  
        winnerFlag=1; 
    }
}

function resetOperation(){
    boxVar11=2;
    boxVar12=2;
    boxVar13=2;
    boxVar21=2;
    boxVar22=2;
    boxVar23=2;
    boxVar31=2;
    boxVar32=2;
    boxVar33=2;
    noOfTurns=1;
    posFilled=[];
    winnerFlag=0;
    B11.style.backgroundImage="url('Media/White.png')";
    B12.style.backgroundImage="url('Media/White.png')";
    B13.style.backgroundImage="url('Media/White.png')";
    B21.style.backgroundImage="url('Media/White.png')";
    B22.style.backgroundImage="url('Media/White.png')";
    B23.style.backgroundImage="url('Media/White.png')";
    B31.style.backgroundImage="url('Media/White.png')";
    B32.style.backgroundImage="url('Media/White.png')";
    B33.style.backgroundImage="url('Media/White.png')";
    controlBtn.innerText="Start";
    headText.innerText="Tic Tac Toe"

}




//                     logic

B11.addEventListener('click', function() {
    decideChoice(0);
});
B12.addEventListener('click', function() {
    decideChoice(1);
});
B13.addEventListener('click', function() {
    decideChoice(2);
});
B21.addEventListener('click', function() {
    decideChoice(3);
});
B22.addEventListener('click', function() {
    decideChoice(4);
});
B23.addEventListener('click', function() {
    decideChoice(5);
});
B31.addEventListener('click', function() {
    decideChoice(6);
});
B32.addEventListener('click', function() {
    decideChoice(7);
});
B33.addEventListener('click', function() {
    decideChoice(8);
});
controlBtn.addEventListener('click', function(){
    resetOperation();
});



