// Exercise 1: Counting to 10
// Use a while loop to print all numbers from 1 to 10
let num=0
while(num<11){
  console.log(num)
  num++
}


// Exercise 2: Even numbers
// Use a while loop to print all the even numbers from 20 to 40
let P =18
while (P<=38){
  P=P+2
  console.log(P)
}


// Exercise 3: Countdown
// Ask the user to enter a positive integer (remember to cast!) Use a while loop to print from that number down to 1
let user=prompt("enter a positive interger")
user=parseInt(user)
while(user>0){
  console.log(user)
  user--
}



// Exercise 4: Sum of N Numbers
// Prompt the user to enter a positive integer. Calculate the sum of all numbers from 1 to that number using a while loop and display the result.
let pi =prompt("enter a positive interger")
pi=parseInt(pi)

let counter=1 
sum=0

while(sum<=pi){
  sum +=counter
  counter+=1
}
console.log("The sum of all numbers from 1 to",pi,"is",sum)


// Exercise 5: Password Entry
// Create a simple password entry program. Ask the user to enter a password. Use a while loop to keep prompting the user until they enter the correct password (e.g., "secret").

let password= "idk"
let pd=prompt("enter password")

while(pd!=password){
  pd=password("try again!!,guess another password")
}if(pd==password){
  console.log("correct")
}




// Extra Credit: Password Strength Checker
// Create a password strength checker with a while loop. Continuously prompt the user to enter a password until it meets the following criteria:
// - At least 8 characters long
// - Contains both uppercase and lowercase letters
// - Includes at least one special character (e.g., @, #, $, etc.)
// Display a message when a valid password is entered.
// Hint: start by doing the conditions one by one and then combine them after




