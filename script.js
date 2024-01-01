console.log("welcome to tic tac toe");
let boxes = document.getElementsByClassName("box");
let music = new Audio("music.mp3");
let audioTurn = new Audio("/ting.mp3");
let gameOver = new Audio("gameOver.mp3");
let turn = "X";
let isgameOver = false;
let reset=document.querySelector('#reset');

//change turn
const changeTurn = () => (turn === "X" ? 0 : "X");

//function to check the win
function checkWin() {
  let wins = [
    [0, 1, 2,5,5,0],
    [3, 4, 5,5,15,0],
    [6, 7, 8,5,15,0],
    [0, 3, 6,-5,15,90],
    [1, 4, 7,5,15,90],
    [2, 5, 8,15,15,90],
    [0, 4, 8,5,15,45],
    [2, 4, 6,5,15,-45],
  ];
  wins.forEach((e) => {
    let boxText = document.querySelectorAll(".boxText");

    if (
      boxText[e[0]].innerText === boxText[e[1]].innerText &&
      boxText[e[2]].innerText === boxText[e[0]].innerText &&
      boxText[e[0]].innerText !== ""
    ) {
      turn = changeTurn();
      document.querySelector(".info").innerText = turn + " won";
      document.querySelector(".info").style.color = "red";
      document
        .querySelector(".imgBox")
        .getElementsByTagName("img")[0].style.width = "20vw";
      document
        .querySelector(".imgBox")
        .getElementsByTagName("img")[0].style.height = "30vh";
        document.querySelector(".line").style.width="20vw";
      document.querySelector(".line").style.transform= `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`;
        
      isgameOver = true;
    }
    else{
      let fillcell=0;
      Array.from(boxText).forEach((e)=>{
          if(e.innerText !==''){
            fillcell++;
          }
      })
      if(fillcell===9){isgameOver=true;
        document.querySelector(".info").innerText = "GAME DRAWN";
      }
    }
  });
}

//game logic
Array.from(boxes).forEach((element) => {
  let boxText = element.querySelector(".boxText");
  element.addEventListener("click", (e) => {
    if (isgameOver) {
      return;
    }
    if (boxText.innerText === "" && isgameOver===false) {
      boxText.innerText = turn;
    }
    turn = changeTurn();
    audioTurn.play();
    checkWin();
    if (!isgameOver)
      document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
  });
});


// reset
reset.addEventListener('click',(e)=>
{
  let box=  document.querySelectorAll('.boxText');
  Array.from(box).forEach((element)=>{
    element.innerText=' ';
  })
  turn='X';
  isgameOver=false;
  document
  .querySelector(".imgBox")
  document.querySelector(".info").innerText = "turn of "+turn;
  document.querySelector('.imgBox').getElementsByTagName("img")[0].style.width = "0";
  document.querySelector('.line').style.width='0';
  document.querySelector(".info").style.color = "black";
      

})

