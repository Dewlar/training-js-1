// add  "@@"  in front of the word - "include" to include the required file

//   include('task2.js')

function clearActive() {
  for (let i = 0; i < document.getElementsByClassName("menu-list-item").length; i++) {
    document.getElementsByClassName("tab-content").item(i).classList.remove("active");
  }
}
var el = document.querySelector(".mtab1");
el.addEventListener("click", () => {
  clearActive();
  document.querySelector("#tab1").classList.add("active");
});
var el = document.querySelector(".mtab2");
el.addEventListener("click", () => {
  clearActive();
  document.querySelector("#tab2").classList.add("active");
});
var el = document.querySelector(".mtab3");
el.addEventListener("click", () => {
  clearActive();
  document.querySelector("#tab3").classList.add("active");
});
var el = document.querySelector(".mtab4");
el.addEventListener("click", () => {
  clearActive();
  document.querySelector("#tab4").classList.add("active");
});
var el = document.querySelector(".mtab5");
el.addEventListener("click", () => {
  clearActive();
  document.querySelector("#tab5").classList.add("active");
});

//task2: prime numbers n=30
let n = 30;
let sn = true;
console.log("простые числа:");

// document.querySelector("#tab5").innerHTML += "\n\n" + "Простые числа: ";
document.querySelector("#tab5").textContent += "\n\n" + "Простые числа: ";

for (let i = 2; i <= n; i++) {
  for (let j = 2; j < i; j++) {
    if (i % j == 0) {
      sn = false;
      break;
    } else {
      sn = true;
    }
  }
  if (sn == true) {
    console.log(i);
    // document.querySelector("#tab5").innerHTML += i + " ";
    document.querySelector("#tab5").textContent += i + " ";
    sn = false;
  }
}
