////////////// task1 : form for switching tabs  /////////////////////
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

//task2: prime numbers n=30 And add the result to the 5th tab
finderPrimeNumber(30, document.querySelector("#tab5"));

//////////////////////// add result in console and to the 5th tab ////////////////////////
/* let n = 30;
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
} */

////////////////// form for finding prime numbers of a given number /////////////////
var el = document.querySelector(".submit-finder");
el.addEventListener("click", () => {
  let numInput = document.querySelector(".enter-the-number");
  let textResult = document.querySelector(".text-result");

  if (Number(numInput.value) || (Number(numInput.value) == 0 && numInput.value !== "")) {
    let n = Math.abs(numInput.value);
    n = Math.trunc(n);
    numInput.value = n;

    if (n == 1 || n === 0) {
      textResult.value += "\n" + "Число является простым, если оно больше 1 и при этом делится без остатка только на 1 и на себя.";
    } else {
      var x = textResult;
      finderPrimeNumber(n, x);
    }
  } else {
    alert("введите числовое значение");
    textResult.value = "";
    numInput.value = "";
  }
});

/////////////// function for finding prime numbers /////////////////
//takes parameters: a number and an object to output the result
function finderPrimeNumber(num, el) {
  let sn = true;
  el.value += "\n" + "Простые числа: ";

  for (let i = 2; i <= num; i++) {
    for (let j = 2; j < i; j++) {
      if (i % j == 0) {
        sn = false;
        break;
      } else {
        sn = true;
      }
    }
    if (sn == true) {
      el.value += i + " ";
      sn = false;
    }
  }
}

//////////// box with test attributes ////////////
var el = document.querySelector(".button-color-links");
el.addEventListener("click", () => {
  // let randColor = "#" + Math.random().toString(16).substring(2, 8).toUpperCase();
  for (let lnk of document.querySelector(".test-attributes-list").children) {
    let href = lnk.firstElementChild.getAttribute("href");
    if (href.includes("://") && !href.includes("http://internal.com")) {
      lnk.firstElementChild.style.color = "#" + Math.random().toString(16).substring(2, 8).toUpperCase();
    }
  }
});
