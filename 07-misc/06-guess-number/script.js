/* becode/javascript
 *
 * /07-misc/06-guess-number/script.js - 7.6: jeu : trouver un nombre
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

    var y = Math.floor(Math.random() * 100 + 1); 
      

    var guess = 1; 
      
    document.getElementById("submitguess").onclick = function(){ 
      
   var x = document.getElementById("guessField").value; 
  
   if(x == y) 
   {     
       alert("BRAVO ! Le nombre est correct, nombre d'essais : "
               + guess + " fois "); 
   } 
   else if(x > y) 
   {     
       guess++; 
       alert("C'est plus petit !"); 
   } 
   else
   { 
       guess++; 
       alert("C'est plus grand") 
   } 
} 