// maximum of the elements of an array
function maxOfArrayElements(arr) {
  var max = arr[0],
    length = arr.length;
  for (var i = 1; i < length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  console.log(max);
}

var test = [10, 33, 25, 98, 78, 54];
maxOfArrayElements("The maxim of the array is", test);
