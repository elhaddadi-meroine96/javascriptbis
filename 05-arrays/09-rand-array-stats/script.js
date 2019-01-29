/* becode/javascript
 *
 * /05-arrays/09-rand-array-stats/script.js - 5.9: tableau aléatoire & statistiques
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    document.getElementById("run").addEventListener("click", function(){
        
    let array1 = document.getElementById("n-1").innerHTML = Math.floor(Math.random() * 101);
    let array2 = document.getElementById("n-2").innerHTML = Math.floor(Math.random() * 101);
    let array3 = document.getElementById("n-3").innerHTML = Math.floor(Math.random() * 101);
    let array4 =document.getElementById("n-4").innerHTML = Math.floor(Math.random() * 101);
    let array5 = document.getElementById("n-5").innerHTML = Math.floor(Math.random() * 101);
    let array6 = document.getElementById("n-6").innerHTML = Math.floor(Math.random() * 101);
    let array7 = document.getElementById("n-7").innerHTML = Math.floor(Math.random() * 101);
    let array8 =  document.getElementById("n-8").innerHTML = Math.floor(Math.random() * 101);
    let array9 =  document.getElementById("n-9").innerHTML = Math.floor(Math.random() * 101);
    let array10 = document.getElementById("n-10").innerHTML = Math.floor(Math.random() * 101);
     document.getElementById("min").innerHTML = Math.min(array1,array2,array3,array4,array5,array6,array7,array8,array9,array10);
     document.getElementById("max").innerHTML = Math.max(array1,array2,array3,array4,array5,array6,array7,array8,array9,array10);
     document.getElementById("sum").innerHTML = Math.max(array1 + array2 + array3 + array4 + array5 + array6 + array7 + array8 + array9 + array10);
     document.getElementById("average").innerHTML = ((array1 + array2 + array3 + array4 + array5 + array6 + array7 + array8 + array9 + array10) / 10);

    })
})();
