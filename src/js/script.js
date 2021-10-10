
// add  "@@"  in front of the word - "include" to include the required file 

 //   include('task2.js')

/*  const tab = document.getElementsByClassName('tab3').item(0).classList.remove('active')
 console.log(tab) */


//  tab2.classList.remove('active')

// document.getElementById('tab1').classList.add('active')


// document.getElementById('tab3').classList.toggle('active')

/* 
const asd = document.getElementsByClassName('mtab1')
console.log(asd) */

// document.getElementsByClassName('mtab1').item(0).c
// document.getElementsByClassName('tab1').item(0).classList.add('active')

/* let tab1 = document.getElementsByClassName('mtab1').item(0)
tab1.onclick = function(){
    // alert('test')
    document.getElementsByClassName('tab1').item(0).classList.toggle('active')
} */
// console.log(tab1.textContent)

/* document.getElementById("asd").onfocus = function(){
    document.getElementById("asd").remove()
} */

// var x = document.getElementById('tab1')
/* x.onclick= function(){
    document.getElementById('tab1').classList.toggle('active')
} */
// console.log(x)
// var el= document.querySelector('#tab1')
function clearActive(){
    for (let i=0;i<document.getElementsByClassName('menu-list-item').length;i++){
        document.getElementsByClassName('tab-content').item(i).classList.remove('active')
    }
}
var el = document.querySelector('.mtab1')
el.addEventListener('click', ()=> { 
    clearActive()
    document.querySelector('#tab1').classList.add('active')
})
var el = document.querySelector('.mtab2')
el.addEventListener('click', ()=> {
    clearActive()
    document.querySelector('#tab2').classList.add('active')
})
var el = document.querySelector('.mtab3')
el.addEventListener('click', ()=> {
    clearActive()
    document.querySelector('#tab3').classList.add('active')
})
var el = document.querySelector('.mtab4')
el.addEventListener('click', ()=> {
    clearActive()
    document.querySelector('#tab4').classList.add('active')
})
var el = document.querySelector('.mtab5')
el.addEventListener('click', ()=> {
    clearActive()
    document.querySelector('#tab5').classList.add('active')
})

//task2: prime numbers n=30
let n = 30;
let sn = false;
console.log("простые числа:");
console.log(1);

for (let i = 2; i <= n; i++) {
  for (let j = 2; j < Math.sqrt(i); j++) {
    if (i % j == 0) {
      sn = false;
      break;
    } else {
      sn = true;
    }
  }
  if (sn == true) {
    console.log(i);
    sn = false;
  }
}