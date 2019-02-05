// Add "a" tag to packages
const packageEffect = document.querySelector('.package1');
const packageEffect2 = document.querySelector('.package2');
const packageEffect3 = document.querySelector('.package3');

packageEffect.addEventListener("click", onClick);
function onClick(){
    window.open("#", "_blank");
}

packageEffect2.addEventListener("click", onClick);
function onClick(){
    window.open("#", "_blank");
}

packageEffect3.addEventListener("click", onClick);
function onClick(){
    window.open("#", "_blank");
}

// adding a tags to logo
const nav  = document.getElementById('logo');
nav.addEventListener('click', logoClick);
function logoClick(){
    window.open("#", "_blank");
}

var width = window.innerWidth
|| document.documentElement.clientWidth
|| document.body.clientWidth;
// Animated nav slider
if(width < 890){
  const menu = document.createElement('i');
  menu.className ="fas fa-bars";
console.log(menu);
  const wrapper = document.querySelector('.wrapper');
  const header = document.querySelector('.header');
  wrapper.insertBefore(menu, header);

  let on = false;
  menu.addEventListener('click', () => {
  if(on === false){
    menu.classList.remove('grow');
    header.classList.remove('transition-off');

    header.classList.toggle('transition-on');
    menu.classList.toggle('shrink');

    on = true;
  }else{
    header.classList.remove('transition-on');
    menu.classList.remove('shrink');

    menu.classList.toggle('grow');
    header.classList.toggle('transition-off');
   
    on = false;
  }

  });

  function shrinkOnClick(){
    setTimeout(() => {
      header.classList.remove('transition-on');
      menu.classList.remove('shrink');
  
      menu.classList.toggle('grow');
      header.classList.toggle('transition-off');
     
      on = false;
    }, 900);
  }
}