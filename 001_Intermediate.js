// 1. Fizzbuzz - Write a program to return an array from 1 to 100. But for every multiple of 3, replace the number with "Fizz", for every multiple of 5, replace the number with "Buzz" and for every multiples of 3 & 5, replace with "FizzBuzz".

// Your output should look something like this 1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 13, 14, FizzBuzz, 16, 17 .....

//2. Print the following star pattern :-

// *
// * *
// * * *
// * * * *
// * * * * *

//3. Write a program to take a number input from user and print multiplication table 12 times for that number.

//4. Write a program to return a Fibonacci series : 0,1,1,2,3,5,8,13,21....

//5. Write a program to take an input from a user and find its Factorial. Example: Factorial of 5 is 120

//6. Write a Program to take a number input from user and find if the number is Prime or not.

//7. Write a program to take a day as an input and determine whether it is a weekday or weekend. Example: Tuesday is weekday.


//Que 1
console.log(`1. Fizzbuzz - Write a program to return an array from 1 to 100. But for every multiple of 3, replace the number with "Fizz", for every multiple of 5, replace the number with "Buzz" and for every multiples of 3 & 5, replace with "FizzBuzz".`);

let array = [];
for (let i = 1; i <= 100; i++) {
    array.push(i);
}
console.log(array);

for (let i = 0; i < array.length; i++) {
    if (array[i] % 3 === 0 && array[i] % 5 === 0) {
        array[i] = `FizzBuzz`;
    } else if (array[i] % 5 === 0) {
        array[i] = `Buzz`;
    } else if (array[i] % 3 === 0) {
        array[i] = `Fizz`;
    } else {
        array[i] = array[i];
    }

}
console.log(` Ans:- New Array is :- ${array}`);


//Que 2

// console.log(`2. Print the following star pattern :-

//  *
//  * *
//  * * *
//  * * * *
//  * * * * *`);


const pattern1 = (row) => {
    for (let i = 1; i <= row; i++) {
        let star = "";
        for (let j = 1; j <= i; j++) {

            star += "* ";

        }
        console.log(star);
    }
}
pattern1(5);

//pattern 2
//     *
//    **
//   ***
//  ****
// *****

const pattern = (row) => {
    for (let i = row; i >= 1; i--) {
        let star = "";
        for (let j = 0; j < row; j++) {
            if (j < i - 1) {
                star += "  ";
            } else {
                star += "* ";
            }
        }
        console.log(star);
    }
}
pattern(5);


// let [firstName, surname] = "John Smith".split(' ');
// console.log(firstName); // John
// console.log(surname);  // Smith


// {
//     // a code block
//     let message = "Hello";
//     // ...
//     console.log( message );
//   }

// let title, width, height;

// // okay now
// ({title, width, height} = {title: "Menu", width: 200, height: 100});

// console.log( title ); // Menu


// we pass object to function
// let options = {
//     title: "My menu",
//     items: ["Item1", "Item2"]
//   };
  
//   // ...and it immediately expands it to variables
//   function showMenu({title = "Untitled", width = 200, height = 100, items = []}) {
//     // title, items – taken from options,
//     // width, height – defaults used
//     alert( `${title} ${width} ${height}` ); // My Menu 200 100
//     alert( items ); // Item1, Item2
//   }
  
//   showMenu(options);

// let user = {
//     name: "John",
//     years: 30
//   };

//   let{name:varName,years:age,isAdmin=false} = user;

//   console.log(varName);
//   console.log(age);
//   console.log(isAdmin);


// let salaries = {
//     "John": 100,
//     "Pete": 300,
//     "Mary": 250
//   };

//   const topSalary=(salaries)=>{
// let maxSal=0;
// let maxName=null;
// for(const[name,salary] of Object.entries(salaries))
// {
// if(maxSal<salary){
//     maxSal=salary;
//     maxName=name;
// }

// }
// return maxName;
//   }
// console.log(topSalary(salaries));

//  hi="bye";
//   let hi=16;
//    hi=12;
// console.log(typeof(hi));
// console.log(hi);


// function sum(a, b) {
//     return a + b;
//   }
  
//   console.log( sum(1, 2, 3, 4, 5) );
'use strict';
a=12;
console.log(a);





