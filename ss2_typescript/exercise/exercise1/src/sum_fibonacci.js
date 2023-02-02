// document.write("hello");
// let a: number=prompt("nhập số");
var num1 = 0;
var num2 = 1;
var sum;
var sum2 = 0;
for (var i = 0; i < 9; i++) {
    sum2 += num1;
    console.log(num1);
    sum = num1 + num2;
    num2 = num1;
    num1 = sum;
}
console.log("buồn của công " + sum2);
