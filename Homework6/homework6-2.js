// Odd numbers from 1 to 20, Option 1
function oddNumbersFrom1To20Option1() {
  for (var i = 1; i <= 20; i++) {
    if (i % 2 != 0) {
      console.log(i);
    }
  }
}

console.log("Odd numbers from 1 to 20: Option 1");
oddNumbersFrom1To20Option1(1, 20);

// Odd numbers from 1 to 20, Option 2
function oddNumbersFrom1To20Option2() {
  for (var j = 1; j <= 20; j += 2) {
    console.log(j);
  }
}

console.log("Odd numbers from 1 to 20: Option 2");
oddNumbersFrom1To20Option2(1, 20);

// Odd numbers from an interval
function oddNumbersFromInterval(start, finish) {
  var k = start;
  if (k % 2 != 0) {
    while (k <= finish) {
      console.log(k);
      k += 2;
    }
  } else {
    k++;
    while (k <= finish) {
      console.log(k);
      k += 2;
    }
  }
}

console.log("Odd numbers from an interval that starts with an odd number");
oddNumbersFromInterval(1, 20);
console.log("Odd numbers from an interval that starts with an even number");
oddNumbersFromInterval(4, 25);
