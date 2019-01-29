/* becode/javascript
 *
 * /02-maths/06-fizzbuzz/script.js - 2.6: fizzbuzz
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

for (let i = 0; i <= 100; i++){

     if ((0 == i % 3) && (0 == i % 5)){
       console.log ("fizzbuzz"); 
     } else if (0 == i % 5) {
      console.log("buzz");
     } else if (0 == i % 3){
       console.log("fizz");
     } else {
       console.log (i);
     }
  }