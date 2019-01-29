/* becode/javascript
 *
 * /04-dates/04-locale-date/script.js - 4.4: date textuelle
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

Date.Days = ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'];
Date.Month = ['Janvier','Février','Mars','Avril','Mai','Juin','Juillet','Aout','Septembre','Octobre','Novembre','Decembre'];
let Years = new Date();
let Year = Years.getFullYear(); 
let NumberDays = new Date();
let NumberDay = NumberDays.getDate();
let Hours = new Date();
let Hour = Hours.getHours();
let Minutes = new Date();
let Minute = Minutes.getMinutes();

function Days(d)
{ 
   return Date.Days[d.getDay()];
}
function Month(m)
{
    return Date.Month[m.getMonth()];
}

d = new Date();
m = new Date();
document.getElementById("target").innerHTML =  Days(d) + " " + NumberDay +  " " +  Month(m) + " " + Year + "," + Hour + "h" + Minute ;


