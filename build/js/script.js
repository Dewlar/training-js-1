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

//////////////////////// alternative -> add result in console and to the 5th tab ////////////////////////
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
    if (document.querySelector(".alert-search-prime-number")) {
      document.querySelector(".alert-search-prime-number").remove();
    }

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
    alrt();
    textResult.value = "";
    numInput.value = "";
  }
});

function alrt() {
  if (document.querySelector(".alert-search-prime-number")) {
    document.querySelector(".alert-search-prime-number").remove();
  }
  let div = document.createElement("div");
  div.className = "alert-search-prime-number";
  div.innerHTML = '<p>Enter a numeric value!</p><input type="submit" value="ok" class="ok-search-number">';
  document.querySelector(".prime-number").append(div);
  /////////////////      ????
  var el = document.querySelector(".ok-search-number");
  el.addEventListener("click", () => {
    document.querySelector(".alert-search-prime-number").remove();
  });
}

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
  let randColor = "#" + Math.random().toString(16).substring(2, 8).toUpperCase();
  for (let lnk of document.querySelector(".test-attributes-list").children) {
    let href = lnk.firstElementChild.getAttribute("href");
    if (href.includes("://") && !href.includes("http://internal.com")) {
      lnk.firstElementChild.style.color = randColor;
    }
  }
});

//////////////  need: add text tree ////////////////
let data = {
  branch1: {
    "sub-branch-1": {},
    "sub-branch-2": {},
  },
  branch2: {
    "sub-a-branch-1": {},
    "sub-a-branch-2": {},
    "sub-a-branch-3": {
      "sub-b-branch-asd": {},
    },
    "sub-a-branch-4": {
      "sub-b-branch-dsa": {
        "sub-c-branch-1": {},
        "sub-c-branch-2": {},
      },
      "sub-b-branch-xaq": {},
    },
  },
};
var el = document.querySelector(".add-tree-text1");
function createTreeText(el, data) {
  el.append(generateTextTree(data));
}
function generateTextTree(data) {
  if (!Object.keys(data).length) {
    return;
  }

  let ul = document.createElement("ul");

  for (let key in data) {
    let li = document.createElement("li");
    li.innerHTML = key;

    let liChildren = generateTextTree(data[key]);
    if (liChildren) {
      li.append(liChildren);
    }
    ul.append(li);
  }
  return ul;
}

createTreeText(el, data);

///////////////////   counts the number of nested list items and writes 1 item to the end of the line    /////////////////////
var el = document.querySelector(".add-tree-text");
el.addEventListener("click", () => {
  let ul = document.querySelector(".add-tree-text2").firstElementChild;
  let liAll = ul.querySelectorAll("li");
  for (let i = 0; i < liAll.length; i++) {
    let li = liAll[i].querySelectorAll("li");
    if (!li.length) continue;
    //   !!! liAll[i].firstChild.textContent += "[" + li.length + "]";//appends result to the end of the content of the li element

    let span = document.createElement("span");
    //   !!! alternative: creates an <apan> element with styles and inserts it at the end of the content of the Li element
    span.style.fontWeight = "bold";
    span.style.color = "red";
    span.className = "redSpan";
    span.innerHTML = "<span>[" + li.length + "]</span>";
    if (!liAll[i].querySelector(".redSpan")) {
      liAll[i].firstChild.after(span);
    } else {
      liAll[i].querySelector(".redSpan").remove();
    }
  }
});

////////////////////////    calendar   - html  ////////////

let date = new Date();
const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
let m = date.getMonth();
let y = date.getFullYear();
calendarHtml(m, y);

function calendarHtml(m, y) {
  let yearObj = document.querySelector(".calendar-year");
  let monthObj = document.querySelector(".calendar-month");
  yearObj.textContent = y;
  monthObj.textContent = monthNames[m];

  let dayListObj = document.querySelector(".calendar").querySelectorAll("td");
  let locDate = new Date(y, m, 1);
  let num = locDate.getDay();
  let d = locDate.getDate() - num + 1;
  for (let i = 0; i < 35; i++) {
    locDate.setMonth(m, d++);
    dayListObj[i].textContent = locDate.getDate();
    dayListObj[i].style.color = "black";

    if (m != locDate.getMonth()) {
      dayListObj[i].style.color = "blue";
      // console.log(locDate.getDay());
      /// проверить январь 2021 - getDay() - работает не правильно /////////////////
      /// январь 2021, январь 2020, январь 2019 и январь 2016
    }
    if(locDate.getDay()===0 || locDate.getDay()===6){
      dayListObj[i].style.color = "red";
    }
  }
}

var el = document.querySelector(".prev");
el.addEventListener("click", () => {
  //   previous month in html calendar
  m -= 1;
  if (m < 0) {
    m = 11;
    y -= 1;
  }
  calendarHtml(m, y);
});
var el = document.querySelector(".nxt");
el.addEventListener("click", () => {
  //   next month in html calendar
  m += 1;
  if (m + 1 > 12) {
    m = 0;
    y += 1;
  }
  calendarHtml(m, y);
});
/////////////////////     calendar - clock  ///////////////
function clockUpdate() {
  let date = new Date();

  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  if (hours < 10) document.querySelector(".hours").textContent = "0" + hours;
  else document.querySelector(".hours").textContent = hours;

  if (minutes < 10) document.querySelector(".minutes").textContent = "0" + minutes;
  else document.querySelector(".minutes").textContent = minutes;

  if (seconds < 10) document.querySelector(".seconds").textContent = "0" + seconds;
  else document.querySelector(".seconds").textContent = seconds;

  /*   let randColor = Math.floor(Math.random()*255);// poor generation method, only creates dark colors 
  document.querySelector(".seconds").style.color='rgb('+randColor+','+randColor+','+ randColor+')'; */
  document.querySelector(".seconds").style.color = "#" + Math.random().toString(16).substring(2, 8).toUpperCase();
}

let timerId = setInterval(clockUpdate, 1000); // не понял почему здесь функция вызывается без ()
