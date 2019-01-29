/* becode/javascript
 *
 * /06-dom/07-generate-table-one/script.js - 6.7: génération d'un tableau (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {


        let target = document.getElementsByTagName("target");
        let tbl = document.createElement("table");
        let tbltarget = document.createElement("ttarget");
        for (var j = 0; j <= 2; j++) {
            var row = document.createElement("tr");
        
            for (var i = 0; i < 2; i++) {

              var cell = document.createElement("td");
              var cellText = document.createTextNode("cell is row " + j + ", column " + i);
        
              cell.appendChild(cellText);
              row.appendChild(cell);
            }
        
            tbltarget.appendChild(row);
          }
        
          tbl.appendChild(tbltarget);
          target.appendChild(tbl);
          tbl.setAttribute("border", "2");
        
    
})();
