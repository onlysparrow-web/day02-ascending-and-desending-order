let a, b, c;
a = 43;
b = 5;
c = 10;
if (a < b) {
  if (a < c) {
    if (c < b) {
      console.log("printing in ascending order :" + a + " , " + c + " , " + b);
    } else {
      console.log("printing in ascending order :" + a + " , " + b + " , " + c);
    }
  } else {
    console.log("printing in ascending order :" + c + " , " + a + " , " + b);
  }
} else if (b < c) {
  if (a < c) {
    console.log("printing in ascending order :" + b + " , " + a + " , " + c);
  } else {
    console.log("printing in ascending order :" + b + " , " + c + " , " + a);
  }
} else {
  console.log("printing in ascending order :" + c + " , " + b + " , " + a);
}
