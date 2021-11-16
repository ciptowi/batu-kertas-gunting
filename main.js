// const key = ['p-batu','p-gunting','p-kertas'];
const pilBatu = document.querySelector('.batu');
const pilKertas = document.querySelector('.kertas');
const pilGunting = document.querySelector('.gunting');
const result = document.querySelector('.result');

function game(player, com){
  if(player === com){
    // result.getElementsByClassName('result')[0].innrHTML = 'DRAW';
    console.log(player +" vs "+ com +" : draw");
  }
  else if(player.length - com.length === -3 || player.length - com.length === 2 || player.length - com.length === 1){
    // result.getElementsByClassName('result')[0].innrHTML = 'MENANG!';
    console.log(player +" vs "+ com +" : "+ player + " menang");
  }
  else{
    // result.getElementsByClassName('result')[0].innrHTML = 'KALAH!';
    console.log(player +" vs "+ com +" : "+ player + " kalah");
  }
};

function choiceCom(){
  const nilai = Math.random();
  if (nilai <= 0.33) return "batu";
  if (nilai <= 0.67) return "kertas";
  return "gunting";
};

pilBatu.addEventListener('click', function(){
  const p = 'batu';
  const c = choiceCom();
  // let getResult = game(p, c)
  pilBatu.style.backgroundColor = 'rgba(255,255,255,.5)';
  console.log('player :'+ p);
  console.log('computer :'+ c);
});
pilKertas.addEventListener('click', function(){
  pilKertas.style.backgroundColor = 'rgba(255,255,255,.5)';
});
pilGunting.addEventListener('click', function(){
  pilGunting.style.backgroundColor = 'rgba(255,255,255,.5)';
});
