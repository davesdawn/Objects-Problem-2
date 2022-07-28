/*Create an array of people objects with first name, last name, and age, 
then write a JavaScript function that takes in an array and console logs 
the first and last names of all the people.*/ 


// Creating an array of object with first name, last name, and age properties
let bestPlayers = [
    {
       firstName: "Lionel",
       lastName: "Messi",
       age: 30
    }, {
        firstName: "Cristiano",
       lastName: "Ronaldo",
       age: 37
    }, {
       firstName: "Ryan",
       lastName: "Giggs",
       age: 40
   }, {
       firstName: "Alessandro",
       lastName: "Del Piero",
       age: 39
   }, {
       firstName: "Thierry",
       lastName: "Henry",
       age: 36
   }, {
       firstName: "Didier",
       lastName: "Drogba",
       age: 35
   }
];

//Writing a function to return both first and last name keys from the array of object 
function namesOnly(names){
 
 //Using a for of loop so that at iteration a different object is assigned to the name variable
  for(let name of names) {
    console.log(name.firstName + ' ' + name.lastName);
  }  
}

namesOnly(bestPlayers);