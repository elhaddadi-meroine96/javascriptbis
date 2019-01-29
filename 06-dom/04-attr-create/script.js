/* becode/javascript
 *
 * /06-dom/04-attr-create/script.js - 6.4: manipulation d'attributs & création d'élément
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

let img = document.createElement('img');
let span = document.getElementsByTagName('span')[1].getAttribute('data-image');
let figure = document.getElementsByTagName('figure')[0];
figure.innerText = img;
console.log(figure);
})();
