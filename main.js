/* "Traversing the DOM in Javascript"
*/

// document.onLoad is deprecated

var something = function() {

}



document.addEventListener('DOMContentLoaded', function(){
    // do something;
    var button1 = document.querySelector('#btn-search');
    button1.addEventListener('click', function(){
        alert('clicked!!!');
    });
});

console.log('end of main.js');

/* "Event Driven Programming"
*/

// Better style than Lenny's examples: separate the functions from the listeners

var turnRed = function () {
    this.style.backgroundColor = "red";   // IMPORTANT: 'this' refers to the object that called the event
}

buttons[i].addEventListener('click', turnRed());