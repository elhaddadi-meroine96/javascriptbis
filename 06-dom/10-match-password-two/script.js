/* becode/javascript
 *
 * /06-dom/10-match-password-two/script.js - 6.10: vérification de mots de passe (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    let password = document.getElementById("pass-one");
    let password2 = document.getElementById("pass-two");
  
    document.getElementById("run").addEventListener("click", function (){
  function validatePassword(){
    if(password.value != password2.value) {
      alert('not OK')
    } else {
    alert('Ok');
    }
  }
  
  password.onchange = validatePassword;
  password2.onkeyup = validatePassword;
})
})();
