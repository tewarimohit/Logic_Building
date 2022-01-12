console.log("Practice Questions");
console.log("Easy ones....");

// 1.Write a program to add 5 numbers. The value of numbers are num1=5, num2=13, num3=7, num4=21 and num5=48.

// 2.Write a program to take a number input from user and determine whether the number is odd or even.

// 3.Write a program to find the maximum and minimum out of two given numbers. The numbers are num1=129 and num2=251.

// 4.Write a program to find the maximum out of three given numbers. The numbers are num1=8, num2=23 and num3=17.

// 5.Write a program to find the minimum out of three given numbers. The numbers are num1=35, num2=29 and num3=46.

// 6.Write program to take a month as an input from the user and find out whether the month has 31 days or not.


console.log( `1.Write a program to add 5 numbers. The value of numbers are num1=5, num2=13, num3=7, num4=21 and num5=48.`);

const add=(a,b,c,d,e)=>a+b+c+d+e;
console.log(` Ans = The addition of numbers is:- ${add(5,13,7,21,48)}.`);



console.log( `2.Write a program to take a number input from user and determine whether the number is odd or even.`);

const evenOdd=(num,even,odd)=>num%2===0? even() :
odd();

console.log(`Is number Even or Odd ? 
Ans:- ${evenOdd(56,()=>`Number is Even`,()=>`Number is odd.`)}`);


console.log(`3.Write a program to find the maximum and minimum out of two given numbers. The numbers are num1=129 and num2=251.`);

const maxMin=(num1,num2,n1,n2)=>num1>num2?n1():n2();
console.log(`Which number is bigger?
Ans:- ${maxMin(129,251,()=>`Number 1 is Max`,()=>`Number 2 is Max`)}`);




