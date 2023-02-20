function plus() {
    var X, Y, Sum;

    X = document.getElementById('x').value;
    X = parseInt(X);
    console.log("X =", X);

    Y = document.getElementById('y').value;
    Y = parseInt(Y);
    console.log("Y = ", Y);

   Sum = X + Y;
   document.getElementById('res').innerHTML = Sum;
   console.log("Sum = ", Sum);
}