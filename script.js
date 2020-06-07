// Challenge 1: YOur Age In Days. 

function ageInDays() { 
alert('click click me to start. Do not press cancel. If cancel is pressed press reset. ')  
var birthYear = prompt('What year were you born?');  
var ageDays = (2020 - birthYear) * 356; 
var h1 = document.createElement('h1'); 
var textAnswer = document.createTextNode('You are approximetly ' + ageDays + ' days old. ' ); 
h1.setAttribute('id', 'ageInDays' ); 
h1.appendChild(textAnswer); 
document.getElementById('flex-box-result').appendChild(h1); 
}  

function reset() {
    document.getElementById('ageInDays').remove(); // Remove removes it. 
}

