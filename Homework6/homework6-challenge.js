// using nested for generate the following pattern
//0 1 0 1
//
//1 0 1 0
//
//0 1 0 1
//
//1 0 1 0

function nested(length) {
  for (var i = 0; i < length; i++) {
    if (i % 2 == 0) {
      if (i == 0) {
        var outputOddLine = "0";
        var outputEvenLine = "1";
      } else {
        outputOddLine += " 0";
        outputEvenLine += " 1";
      }
    } else {
      outputOddLine += " 1";
      outputEvenLine += " 0";
    }
  }

  for (var i = 0; i < length; i++) {
    if (i % 2 == 0) {
      console.log(outputOddLine, "\n");
    } else {
      if (i == length - 1) {
        console.log(outputEvenLine);
      } else {
        console.log(outputEvenLine, "\n");
      }
    }
  }
}

nested(4);
