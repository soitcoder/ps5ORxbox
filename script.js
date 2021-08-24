let playstation=document.querySelector('.playstation');
let xbox=document.querySelector('.xbox');
let buy_ps=document.querySelector('.buynow-ps');
let buy_xbox=document.querySelector('.buynow-xbox');

buy_ps.addEventListener('mouseover',onhover_ps);
buy_xbox.addEventListener('mouseover',onhover_xbox);

buy_ps.addEventListener('mouseleave',nohover_ps);
buy_xbox.addEventListener('mouseleave',nohover_xbox);

function onhover_ps(){
  playstation.classList.add('ps-onHover');
}

function onhover_xbox(){
  xbox.classList.add('x-onHover');
}

function nohover_ps(){
  playstation.classList.remove('ps-onHover');
}

function nohover_xbox(){
  xbox.classList.remove('x-onHover');
}
