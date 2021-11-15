// const key = ['p-batu','p-gunting','p-kertas'];
const pBatu = document.querySelector('.pBatu');
const pKertas = document.querySelector('.pKertas');
const pGunting = document.querySelector('.pGunting');

pBatu.addEventListener('click', function(){
  pBatu.style.backgroundColor = 'rgba(255,255,255,.5)';
});
pKertas.addEventListener('click', function(){
  pKertas.style.backgroundColor = 'rgba(255,255,255,.5)';
});
pGunting.addEventListener('click', function(){
  pGunting.style.backgroundColor = 'rgba(255,255,255,.5)';
});