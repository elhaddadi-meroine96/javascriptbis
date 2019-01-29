/* becode/javascript
 *
 * /01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function confirmation(){

let age = prompt('Quel âge as tu ?');
let sexe = prompt('Es tu un homme ou une femme ?');
let ville = prompt('Quel est ta ville ?');



if (confirm("Confirmer ?") ==true )
{
alert('Tu a ' + age + ' , tu es un(e) ' + sexe +' et tu vis à ' + ville);
}
else if (confirm("Recommence") == false || true)
{
    confirmation();
}

})();
