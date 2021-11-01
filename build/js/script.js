////////////// task1 : form for switching tabs  /////////////////////
function clearActive() {
  for (let i = 0; i < document.getElementsByClassName('menu-list-item').length; i++) {
    document.getElementsByClassName('tab-content').item(i).classList.remove('active');
  }
}
var el = document.querySelector('.mtab1');
el.addEventListener('click', () => {
  clearActive();
  document.querySelector('#tab1').classList.add('active');
});
var el = document.querySelector('.mtab2');
el.addEventListener('click', () => {
  clearActive();
  document.querySelector('#tab2').classList.add('active');
});
var el = document.querySelector('.mtab3');
el.addEventListener('click', () => {
  clearActive();
  document.querySelector('#tab3').classList.add('active');
});
var el = document.querySelector('.mtab4');
el.addEventListener('click', () => {
  clearActive();
  document.querySelector('#tab4').classList.add('active');
});
var el = document.querySelector('.mtab5');
el.addEventListener('click', () => {
  clearActive();
  document.querySelector('#tab5').classList.add('active');
});

//task2: prime numbers n=30 And add the result to the 5th tab
finderPrimeNumber(30, document.querySelector('#tab5'));

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
var el = document.querySelector('.submit-finder');
el.addEventListener('click', () => {
  let numInput = document.querySelector('.enter-the-number');
  let textResult = document.querySelector('.text-result');

  if (Number(numInput.value) || (Number(numInput.value) == 0 && numInput.value !== '')) {
    if (document.querySelector('.alert-search-prime-number')) {
      document.querySelector('.alert-search-prime-number').remove();
    }

    let n = Math.abs(numInput.value);
    n = Math.trunc(n);
    numInput.value = n;

    if (n == 1 || n === 0) {
      textResult.value += '\n' + 'Число является простым, если оно больше 1 и при этом делится без остатка только на 1 и на себя.';
    } else {
      var x = textResult;
      finderPrimeNumber(n, x);
    }
  } else {
    alrt();
    textResult.value = '';
    numInput.value = '';
  }
});

function alrt() {
  if (document.querySelector('.alert-search-prime-number')) {
    document.querySelector('.alert-search-prime-number').remove();
  }
  let div = document.createElement('div');
  div.className = 'alert-search-prime-number';
  div.innerHTML = '<p>Enter a numeric value!</p><input type="submit" value="ok" class="ok-search-number">';
  document.querySelector('.prime-number').append(div);
  /////////////////      ????
  var el = document.querySelector('.ok-search-number');
  el.addEventListener('click', () => {
    document.querySelector('.alert-search-prime-number').remove();
  });
}

/////////////// function for finding prime numbers /////////////////
//takes parameters: a number and an object to output the result
function finderPrimeNumber(num, el) {
  let sn = true;
  el.value += '\n' + 'Простые числа: ';

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
      el.value += i + ' ';
      sn = false;
    }
  }
}

//////////// box with test attributes ////////////
var el = document.querySelector('.button-color-links');
el.addEventListener('click', () => {
  let randColor = '#' + Math.random().toString(16).substring(2, 8).toUpperCase();
  for (let lnk of document.querySelector('.test-attributes-list').children) {
    let href = lnk.firstElementChild.getAttribute('href');
    if (href.includes('://') && !href.includes('http://internal.com')) {
      lnk.firstElementChild.style.color = randColor;
    }
  }
});

//////////////  need: add text tree ////////////////
let data = {
  branch1: {
    'sub-branch-1': {},
    'sub-branch-2': {},
  },
  branch2: {
    'sub-a-branch-1': {},
    'sub-a-branch-2': {},
    'sub-a-branch-3': {
      'sub-b-branch-asd': {},
    },
    'sub-a-branch-4': {
      'sub-b-branch-dsa': {
        'sub-c-branch-1': {},
        'sub-c-branch-2': {},
      },
      'sub-b-branch-xaq': {},
    },
  },
};
var el = document.querySelector('.add-tree-text1');
function createTreeText(el, data) {
  el.append(generateTextTree(data));
}
function generateTextTree(data) {
  if (!Object.keys(data).length) {
    return;
  }

  let ul = document.createElement('ul');

  for (let key in data) {
    let li = document.createElement('li');
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
var el = document.querySelector('.add-tree-text');
el.addEventListener('click', () => {
  let ul = document.querySelector('.add-tree-text2').firstElementChild;
  let liAll = ul.querySelectorAll('li');
  for (let i = 0; i < liAll.length; i++) {
    let li = liAll[i].querySelectorAll('li');
    if (!li.length) continue;
    //   !!! liAll[i].firstChild.textContent += "[" + li.length + "]";//appends result to the end of the content of the li element

    let span = document.createElement('span');
    //   !!! alternative: creates an <apan> element with styles and inserts it at the end of the content of the Li element
    span.style.fontWeight = 'bold';
    span.style.color = 'red';
    span.className = 'redSpan';
    span.innerHTML = '<span>[' + li.length + ']</span>';
    if (!liAll[i].querySelector('.redSpan')) {
      liAll[i].firstChild.after(span);
    } else {
      liAll[i].querySelector('.redSpan').remove();
    }
  }
});

////////////////////////    calendar   - html  ////////////

let date = new Date();
const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
let month = date.getMonth();
let year = date.getFullYear();
calendarHtml(month, year);

function calendarHtml(month, year) {
  let yearObj = document.querySelector('.calendar-year');
  let monthObj = document.querySelector('.calendar-month');
  yearObj.textContent = year;
  monthObj.textContent = monthNames[month];

  let dayListObj = document.querySelector('.calendar').querySelectorAll('td');
  let locDate = new Date(year, month, 1);
  let d = locDate.getDate() - locDate.getDay() + 1;
  let i = 0;

  for (i; i < 35; i++) {
    locDate.setFullYear(year, month, d++);
    dayListObj[i].textContent = locDate.getDate();

    if (locDate.getDay() === 0 || locDate.getDay() === 6) dayListObj[i].style.color = 'red';
    else if (month != locDate.getMonth()) dayListObj[i].style.color = 'blue';
    else dayListObj[i].style.color = 'black';
  }

  locDate.setDate(d);
  if (month === locDate.getMonth()) {
    let newRow = document.createElement('tr');
    newRow.innerHTML = '<tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>';
    document.querySelector('.calendar').querySelector('table').append(newRow);
    dayListObj = document.querySelector('.calendar').querySelectorAll('td');

    for (i; i < 42; i++) {
      locDate.setFullYear(year, month, d++);
      dayListObj[i].textContent = locDate.getDate();

      if (locDate.getDay() === 0 || locDate.getDay() === 6) dayListObj[i].style.color = 'red';
      else if (month != locDate.getMonth()) dayListObj[i].style.color = 'blue';
      else dayListObj[i].style.color = 'black';
    }

 /*    console.log(i);
    console.log(d);
    console.log('year=' + year + ' month=' + month + ' den=' + d + '     текущая дата:' + locDate); */
  } else {
    if (document.querySelector('.calendar').querySelector('table').rows.length === 7) {
      document.querySelector('.calendar').querySelector('table').deleteRow(6);
    }
  }
}

document.querySelector('.prev').addEventListener('click', () => {
  //   previous month in html calendar
  month -= 1;
  if (month < 0) {
    month = 11;
    year -= 1;
  }
  calendarHtml(month, year);
});
document.querySelector('.nxt').addEventListener('click', () => {
  //   next month in html calendar
  month += 1;
  if (month > 11) {
    month = 0;
    year += 1;
  }
  calendarHtml(month, year);
});
/////////////////////     calendar - clock  ///////////////
function clockUpdate() {
  let date = new Date();

  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  if (hours < 10) document.querySelector('.hours').textContent = '0' + hours;
  else document.querySelector('.hours').textContent = hours;

  if (minutes < 10) document.querySelector('.minutes').textContent = '0' + minutes;
  else document.querySelector('.minutes').textContent = minutes;

  if (seconds < 10) document.querySelector('.seconds').textContent = '0' + seconds;
  else document.querySelector('.seconds').textContent = seconds;

  /*   let randColor = Math.floor(Math.random()*255);//         poor generation method, only creates dark colors 
  document.querySelector(".seconds").style.color='rgb('+randColor+','+randColor+','+ randColor+')'; */
  document.querySelector('.seconds').style.color = '#' + Math.random().toString(16).substring(2, 8).toUpperCase();
}

let timerId = setInterval(clockUpdate, 1000); // не понял почему здесь функция вызывается без ()