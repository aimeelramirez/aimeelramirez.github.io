// Set current year in footer 
const yearSet = document.querySelector('footer > p > b');
const currentDate = new Date(Date.now());

if(yearSet){
    yearSet.insertAdjacentText("afterbegin", currentDate.getFullYear());
}