/* becode/javascript
 *
 * /02-maths/01-calculator-one/script.js - 2.1: calculatrice
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    



    document.getElementById("addition").addEventListener("click", function() {
    
        value1 =  document.getElementById("op-one").value;
        value2 =  document.getElementById("op-two").value;
        
        alert(parseInt(value1) + parseInt(value2));   
    
    });

    document.getElementById("substraction").addEventListener("click", function() {

        value1 =  document.getElementById("op-one").value;
        value2 =  document.getElementById("op-two").value;

        alert(parseInt(value1) - parseInt(value2));   

    });

    document.getElementById("multiplication").addEventListener("click", function() {

        value1 =  document.getElementById("op-one").value;
        value2 =  document.getElementById("op-two").value;

        alert(parseInt(value1) * parseInt(value2));   

    });

    document.getElementById("division").addEventListener("click", function() {

        value1 =  document.getElementById("op-one").value;
        value2 =  document.getElementById("op-two").value;

        alert(parseInt(value1) / parseInt(value2));   

    });
})();
