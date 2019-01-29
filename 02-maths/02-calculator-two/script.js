/* becode/javascript
 *
 * /02-maths/02-calculator-two/script.js - 2.2: calculatrice (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    // to get the value of an input: 
    



    var performOperation = function(operation) {

        value1 = document.getElementById("op-one").value;
        value2 = document.getElementById("op-two").value;

        switch(operation) {
        case 'addition':
        return alert(parseInt(value1) + parseInt(value2));
        case 'substraction':
        return alert(parseInt(value1) - parseInt(value2));
        case 'multiplication' :
        return alert(parseInt(value1) * parseInt(value2));
        case 'division' :
        return alert(parseInt(value1) / parseInt(value2));
        }

    };

    Array.from(document.querySelectorAll("button.operator")).forEach(function($btn) {
        $btn.addEventListener("click", function() {
            performOperation($btn.id);
        });
    });
})();
