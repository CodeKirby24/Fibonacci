num2 = 0;
num1 = 1;

console.log(num2);
console.log(num1);

for(i = 0; i < 18; i++){
    newNum = num2 + num1;
    console.log(newNum);
    num2 = num1;
    num1 = newNum;
}