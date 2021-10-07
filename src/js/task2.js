
let n = 30;
let sn = false;
console.log("простые числа:");
console.log(1);

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
    sn = false;
  }
}