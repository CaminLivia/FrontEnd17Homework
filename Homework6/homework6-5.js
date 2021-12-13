// how many times a certain element appears in an array
function elementAppearances(elem, arr) {
  var appearance = 0,
    length = arr.length;
  for (var i = 0; i < length; i++) {
    if (arr[i] === elem) {
      appearance++;
    }
  }
  console.log("The number of appearances is", appearance);
}

var test = [10, 33, 25, 10, 98, 78, 54, 10, "10"];
elementAppearances(10, test);
