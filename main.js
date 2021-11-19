const batu = document.querySelector("#batu");
const kertas = document.querySelector("#kertas");
const gunting = document.querySelector("#gunting");
const result = document.getElementById("result");
const pScore = document.getElementById("p-score");
const cScore = document.getElementById("c-score");
let computer = document.getElementsByClassName("com");
let scoreP = 0;
let scoreC = 0;

function game(player, com){
  if(player === com){
    result.innerHTML = "DRAW";
  }
  else if(player.length - com.length === -3 || player.length - com.length === 2 || player.length - com.length === 1){
    result.innerHTML = "YOU WIN";
    scoreP++;
    pScore.innerHTML = scoreP;
  }
  else{
    result.innerHTML = "YOU LOST";
    scoreC++;
    cScore.innerHTML = scoreC;
  }
};

function choiceCom(){
  const nilai = Math.random();
  if (nilai <= 0.33) return "batu";
  if (nilai <= 0.67) return "kertas";
  return "gunting";
};

let boot = choiceCom()
function guiCom(){
  if(boot === "batu"){
    computer[0].style.backgroundColor = "rgba(255,255,255,.5)";
  }else if(boot === "kertas"){
    computer[1].style.backgroundColor = "rgba(255,255,255,.5)";
  }else{
    computer[2].style.backgroundColor = "rgba(255,255,255,.5)";
}};

const running = document.querySelectorAll("span");
running.forEach(function(i){
  i.addEventListener('click', function(){
      const x = i.id;
      game(x, boot);
      i.style.backgroundColor = 'rgba(255,255,255,.5)';
      clearTimeout(timerId);
      guiCom();
    });
  });

  let timerId = setInterval(function() {
    computer[0].style.backgroundColor = "rgba(255,255,255,.5)";
    computer[1].style.backgroundColor = "rgba(255,255,255,.5)";
    computer[2].style.backgroundColor = "rgba(255,255,255,.5)";
      setTimeout(function() {
      computer[0].style.backgroundColor = "rgba(255,255,255,.0)";
      computer[1].style.backgroundColor = "rgba(255,255,255,.0)";
      computer[2].style.backgroundColor = "rgba(255,255,255,.0)";
      }, 500);
    }, 1000);