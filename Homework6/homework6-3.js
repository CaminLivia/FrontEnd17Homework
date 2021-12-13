// sum of the elements of an array
function sumArrayElements(arr) {
  var sum = 0,
    length = arr.length;
  for (var i = 0; i < length; i++) {
    sum += arr[i];
  }
  console.log(sum);
}

var test = [10, 33, 25, 98, 78, 54];
sumArrayElements("The sum of the elements of the array is", test);
