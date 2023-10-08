const menuBar = document.querySelector('.menuBar');

document.addEventListener('scroll', function () {
  if (document.documentElement.scrollTop >= 47) {
    menuBar.classList.add('menuFixed')
  } else {
    menuBar.classList.remove('menuFixed')
  }
})

document.addEventListener('scroll', function () {
  if (document.documentElement.scrollTop >= 2100) {
    document.querySelectorAll('.progress-bar')
      .forEach(e => e.style.animationName = 'prograse')
  }
})

const protFilter = document.querySelectorAll('.nav-item');
protFilter.forEach(e => {
  e.addEventListener('click', function () {
    let added = document.querySelector('.borderBtm');
    added.classList.remove('borderBtm')

    e.classList.add('borderBtm')
    let getType = e.getAttribute('data-filter');
  })
})




const lstIcon = document.querySelector('.lstIcon');
document.addEventListener('scroll', function () {
  if (document.documentElement.scrollTop >= 500) {
    lstIcon.style.opacity = "1";
  } else { lstIcon.style.opacity = "0" }
})
lstIcon.addEventListener('click', function () {
  let getScroll = document.documentElement.scrollTop;
  document.documentElement.scrollTop = 0;

})
const menuBtn = document.querySelector('.menuBtn');
menuBtn.addEventListener('click', function () {

  document.querySelector('.allManu').classList.toggle('zIndex')
  this.classList.toggle('fa-times');

  menuBar.classList.toggle('bgBlack');
})

const cardHeader = document.querySelectorAll('.cardHeader');

cardHeader.forEach(e => {
  e.addEventListener('click', function () {
    cardHeader.forEach(o => o.classList.remove('opacty'));

    let getClc = e.getAttribute('data-target');
    const cardBody = document.querySelector(`${getClc} .card-body`);

    document.querySelector('.cbShow').classList.remove('cbShow')
    const arrowBtn = document.querySelectorAll('.cardHeader i');
    arrowBtn.forEach(b => b.classList.remove('rotate'));
    this.querySelector('.cardHeader i').classList.add('rotate');
    cardBody.classList.toggle('cbShow');
    this.classList.add('opacty');

  })
})


// let counter = 0;
// setInterval(() => {
//   var indexes = ['a', 'b', 'c', 'd']
//   document.querySelector('.item' + indexes[counter]).classList.add('showing');
//   document.querySelector('.' + indexes[counter]).classList.add('aft');
//   setTimeout(() => {
//     document.querySelectorAll('.item').forEach(single =>single.classList.remove('showing'));
//     document.querySelectorAll('.aft').forEach(afts =>afts.classList.remove('aft'));

//     if (counter < 3) { counter++ } else { counter = 0 }

//   }, 4900);

// }, 5000);
function delFun(){
  
  document.querySelectorAll('.item').forEach(single =>single.classList.remove('showing'));
  document.querySelectorAll('.aft').forEach(afts =>afts.classList.remove('aft'));
}




let sirial = 1;
setInterval(() => {

    var srl = document.querySelector('.aft').getAttribute('data-key')
 var sirial = Number(srl)+1
if( sirial > 4 ){ sirial =1};

  delFun()
   document.querySelector('.item'+sirial).classList.add('showing')
   document.querySelector('.d'+sirial).classList.add('aft')
    
}, 4500);



let itemBtn = document.querySelectorAll('.owl-dots span');
itemBtn.forEach(iBtn => {
  iBtn.addEventListener('click', function(){
   let getClass= iBtn.getAttribute('data-key');
    console.log(getClass);
    delFun()

    document.querySelector('.item'+getClass).classList.add('showing')
    document.querySelector('.d'+getClass).classList.add('aft')

  })
})

// section animate

document.addEventListener('scroll', function(){
  if(document.documentElement.scrollTop >=380 ){
    document.querySelector('#about').style.animationName='allsecAnimate';
  }
})
