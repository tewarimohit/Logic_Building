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



console.log(`1. Fizzbuzz - Write a program to return an array from 1 to 100. But for every multiple of 3, replace the number with "Fizz", for every multiple of 5, replace the number with "Buzz" and for every multiples of 3 & 5, replace with "FizzBuzz".`);

let array=[];
for(let i=1;i<=100;i++){
    array.push(i);
}
console.log(array);

for(let i=0;i<array.length;i++){
if(array[i]%3===0&&array[i]%5===0)
{
    array[i]=`FizzBuzz`; 
}
else if(array[i]%5===0){
    array[i]=`Buzz`;
}
else if(array[i]%3===0){
    array[i]=`Fizz`;
}
else{
    array[i]=array[i];
}

}
console.log(`New Array is :- ${array}`);




