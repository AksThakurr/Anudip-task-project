// Task 1 Grocery_store_Basket 
let basket=[];
basket.push('chips','butter','suger','salt','chilli');
console.log(`All items in your basket is ${basket}`);
let removeitem = basket.pop();
console.log(`All item  ${basket} and remove item is ${removeitem}`);

// Task-2  Morning School Attendence
let student=['Anuj','shiva','jai','Deepak','Ankit'];
student.unshift("Rohit");
 student.shift();
console.log(student); 

// Task -3 Movie Ticket Booking 
 let userName = prompt("enter your name :");
 let fevMovie = prompt("your fevorite movie name  :");
 alert(`Welcome ${userName}`);
 alert (`Your Movie ticket for ${fevMovie} has been booked successfully .:`);