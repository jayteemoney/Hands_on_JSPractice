/* PRACTICE 1
.Select the <h1> element using
getElementById( ).
.Change the text to "New Title".
.Print the modified element
using console.log( )
 */

// solution
const heading = document.getElementById("title");
console.log(heading);
heading.textContent = " New Title"
console.log("the answer is:",heading.textContent);

/* PRACTICE 2
.Select the <div> element using
querySelector().
.Change its background color to
"lightblue".
.Print the selected element
using console.log().
 */

// solution
let div_cont = document.querySelector(".container");
console.log(div_cont);
div_cont.style.backgroundColor= "lightblue"
console.log(div_cont.style.backgroundColor);
/* PRACTICE 4
.Select the button using
getElementById().
.Add a click event listener that
logs "Button clicked!" to the
console.
.Print the button element inside
the event handler. */
// solution
const buttonId = document.getElementById('log-btn');
// console.log(buttonId);


buttonId.addEventListener("click", function(){
    buttonId.textContent = "button clicked";

    console.log(buttonId.textContent);
    
});


/*PRACTICE 5
.Select all elements with the class
box using getElementsByClassName( ).
.Change their text color to "red".
.Print the collection using
console.log( ). */

// solution
let divElements = document.getElementsByClassName('box');
console.log(divElements);

for (i=0; i<divElements.length; i++){
    divElements[i].style.color = "red";

    console.log(divElements[i].style.color);
    
}

/*PRACTICE 7
.Add a click event listener to the
button.
.Toggle the visibility of the <div>
on each click.
.Print the visibility state using
console.log()*/

// solution
// selecting the elements
const toggleBtn = document.getElementById("toggle-btn");
const toggleDiv = document.getElementById("toggle-div");

// initialize the visibility state
let isVisible = true;

// add event listener to the button
toggleBtn.addEventListener("click", function() {
    isVisible =!isVisible // switching the toggle state

    toggleDiv.style.display = isVisible ? 'block' : 'none';

});
/*
.Select the paragraph using
getElementById( ).
.Use setAttribute( ) to add a class
"highlight".
.Print the modified element
using console.log( ).
*/
// solution
const paragraphText = document.getElementById('text')

paragraphText.setAttribute("class", "highlight")
console.log(paragraphText.getAttribute("class"));

/*PRACTICE 9
.Select all <li> elements using
getElementsByTagName( ).
.Change their text to "Modified
Item".
.Print the collection using
console.log( ).

*/
// solution
const listItem = document.getElementsByTagName("li")

listItem.textContent = "modified item";
console.log(listItem);

/*PRACTICE 10
.Add a mouseover event listener
to the paragraph.
.Change the text color to "blue"
on hover.
.Print the modified element
using console.log( ).
*/
// solution
const Hover = document.querySelector(".Hover");
console.log(Hover);

 Hover.addEventListener("mouseover", function(){
    Hover.style.color = "blue";
 });