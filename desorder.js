let a, b, c;
a = 43;
b = 5;
c = 10;
if (a > b && a > c) {
  if (b > c) {
    console.log("printing in desending order :" + a + " , " + b + " , " + c);
  } else {
    console.log("printing in desending order :" + a + " , " + c + " , " + b);
  }
}
if (b > a && b > c) {
  if (a > c) {
    console.log("printing in desending order :" + b + " , " + a + " , " + c);
  } else {
    console.log("printing in desending order :" + b + " , " + c + " , " + a);
  }
}

if (c > a && c > b) {
  if (a > b) {
    console.log("printing in desending order :" + c + " , " + a + " , " + b);
  } else {
    console.log("printing in desending order :" + c + " , " + b + " , " + a);
  }
}
