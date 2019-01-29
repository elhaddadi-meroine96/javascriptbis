/* becode/javascript
 *
 * /06-dom/11-change-event-input-one/script.js - 6.11: événement change (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.







    function charcountupdate(str) {
        var lng = str.length;
        document.getElementById("counter").innerHTML = lng + '/10';
        if (lng > 10){
            document.getElementById("counter").innerHTML ='Stop'

        }
}