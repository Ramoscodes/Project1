//*greeting code

var username = prompt('Please enter your name:');
document.getElementById("userinput").innerHTML= 'Welcome   ' + username;
console.log(username);

//*first button function
//*array 
var imageList = ['images/mom.jpeg','images/home.jpeg', 'images/me.jpg', 'images/one.jpg', 'images/two.jpg', 'images/three.jpg', 
'images/pierre.jpeg', 'images/aoc.jpeg', 'images/bro.jpg'];
//*creating my img element
var imgContainer = document.createElement("img");
//*creating my second img element and vairable
var imgContainerTwo = document.createElement("img"); 
//*creating a variable to get my button elemnt
var btnContainer = document.getElementById("mybutton");
//*adding event listener to button
btnContainer.addEventListener("click",displayImage);

//*calling my function 
function displayImage() {

imgContainer.src = imageList['0'];
document.body.appendChild(imgContainer);
imgContainerTwo.src = imageList['1'];
document.body.appendChild(imgContainerTwo);
    
}
//* SECOND BUTTTON---------------
//*creating my img element
var imgContainerThree = document.createElement("img");
//*creating my img element
var imgContainerFour = document.createElement("img");
//*creating my img element
var imgContainerFive = document.createElement("img");
//*creating my img element
var imgContainerSix = document.createElement("img");
//*creating a variable to get my button elemnt
var btnContainerTwo = document.getElementById("mybuttontwo");
//*adding event listener to my second button
btnContainerTwo.addEventListener("click",displayImageTwo);
//*CALLING MY FUNCTION
function displayImageTwo () {
    
    imgContainerThree.src = imageList['2'];
    document.body.appendChild(imgContainerThree);
    imgContainerFour.src = imageList['3'];
    document.body.appendChild(imgContainerFour);
    imgContainerFive.src = imageList['4'];
    document.body.appendChild(imgContainerFive);
    imgContainerSix.src = imageList['5'];
    document.body.appendChild(imgContainerSix);
    
}

//*** my third button

//*creating my img element
var imgContainerSeven = document.createElement("img");
//*creating my img element
var imgContainerEight = document.createElement("img");
//*creating my img element
var imgContainerNine = document.createElement("img");
//*creating my img element
var imgContainerTen = document.createElement("img");


//*creating a variable to get my button elemnt
var btnContainerThree = document.getElementById("mybuttonthree");
//*adding event listener to my second button
btnContainerThree.addEventListener("click",displayImageThree);
//*CALLING MY FUNCTION
function displayImageThree () {
    
    imgContainerSeven.src = imageList['0'];
    document.body.appendChild(imgContainerSeven);
    imgContainerEight.src = imageList['6'];
    document.body.appendChild(imgContainerEight);
    imgContainerNine.src = imageList['7'];
    document.body.appendChild(imgContainerNine);
    imgContainerTen.src = imageList['8'];
    document.body.appendChild(imgContainerTen);

}


//** random quote button
//*Array for quotes
var quoteList = ['What is real will propsper', 'In order to surive you need a phenomenol amount of self believe',
 'Play the long game', 'if you want it hard enough, it will happen'];
//*creating var to get id element
var getId = document.getElementById("quotecontainer");
//*creating a variable to get my button elemnt
var quoteBtnContainer = document.getElementById("quotebutton");
//*adding event listener to my quote button
quoteBtnContainer.addEventListener("click",displayQuote);

//*CALLING MY FUNCTION
function displayQuote (){


let randomImg = Math.floor(Math.random() * 3);

{
    randomImg = Math.floor(Math.random() * 3);
}

/*call the variable that is holding the img element and populate it with
    the randomly selected image from your array*/
    getId = quoteList[randomImg];
    document.body.append(getId);

}
