console.log("Practice Questions");
console.log("Easy ones....");

// 1.Write a program to add 5 numbers. The value of numbers are num1=5, num2=13, num3=7, num4=21 and num5=48.

// 2.Write a program to take a number input from user and determine whether the number is odd or even.

// 3.Write a program to find the maximum and minimum out of two given numbers. The numbers are num1=129 and num2=251.

// 4.Write a program to find the maximum out of three given numbers. The numbers are num1=8, num2=23 and num3=17.

// 5.Write a program to find the minimum out of three given numbers. The numbers are num1=35, num2=29 and num3=46.

// 6.Write program to take a month as an input from the user and find out whether the month has 31 days or not.

//Que 1
console.log( `1.Write a program to add 5 numbers. The value of numbers are num1=5, num2=13, num3=7, num4=21 and num5=48.`);

const add=(a,b,c,d,e)=>a+b+c+d+e;
console.log(` Ans = The addition of numbers is:- ${add(5,13,7,21,48)}.`);

//Que 2

console.log( `2.Write a program to take a number input from user and determine whether the number is odd or even.`);

const evenOdd=(num,even,odd)=>num%2===0? even() :
odd();

console.log(`Is number Even or Odd ? 
Ans:- ${evenOdd(56,()=>`Number is Even`,()=>`Number is odd.`)}`);

//Que 3
console.log(`3.Write a program to find the maximum and minimum out of two given numbers. The numbers are num1=129 and num2=251.`);

const maxMin=(num1,num2,n1,n2)=>num1>num2?n1():n2();
console.log(`Which number is bigger?
Ans:- ${maxMin(129,251,()=>`Number 1 is Max`,()=>`Number 2 is Max`)}`);

//Que 4
// Doubt que
console.log(`4.Write a program to find the maximum out of three given numbers. The numbers are num1=8, num2=23 and num3=17.`);

const maxMin2=(num1,num2,num3,one,two,three)=>{
    if(num1>num2&&num1>num3)
    
      one();
    
    else if(num2>num1&&num2>num3)

    two();

    else 
    
    three();
   
}

console.log(`Which number is maximum ?
Ans:- ${maxMin2(8,23,17,()=>console.log(`Number 1 is Max`),()=>console.log(`Number 2 is Max`),()=>console.log(`Number 3 is Max`))}`);

//Output
// Number 2 is Max
// Which number is maximum ?
// Ans:- undefined


//Que 5

console.log(`5.Write a program to find the minimum out of three given numbers. The numbers are num1=35, num2=29 and num3=46.`);

const min=(num1,num2,num3)=>{
    console.log(`Which number is minimum ?`);
    if(num1<num2&&num1<num3)
    
      console.log(`${num1} is Minimum.`);
    
    else if(num2<num1&&num2<num3)

    console.log(`${num2} is Minimum.`);

    else 
    
    console.log(`${num3} is Minimum.`);
   
}

min(35,29,46);

//Que 6
console.log(`6.Write program to take a month as an input from the user and find out whether the month has 31 days or not.`);

const months=["January","March","May","July","August","October","December"];
// const days=[31,29,31,30,31,30,31,31,30,31,30,31];

const checkMonth=(month)=>{

console.log(`Does ${month} have 31 Days ?`);
let count=0;
for(let i=0;i<=months.length;i++){
if(month===months[i])
count++;
}
if(count===1)
    console.log(`${month} have 31 Days.`);

else
console.log(`${month} does not have 31 Days.`);

}

checkMonth("November");


