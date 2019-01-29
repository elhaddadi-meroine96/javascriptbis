/* becode/javascript
 *
 * /04-dates/02-title-by-hour-two/script.js - 4.2: texte en fonction de l'heure (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    date = new Date();
document.getElementById("target").innerHTML = "new-value"
if ( date.getHours() < 17.30 ) {
   document.getElementById("target").innerHTML = "Bonjour"
}
else if ( date.getHours() > 17.30 && date.getHours() <= 24 ) { 
   document.getElementById("target").innerHTML = "Bonsoir"
}

})();