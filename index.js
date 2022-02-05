var dropdownDiv = document.getElementById("dropdownDiv");



dropdownDiv.style.display = "none";

function toggler(){
    
   
    if (dropdownDiv.style.display === "none") {
      dropdownDiv.style.display = "block";
      
  
    } 
    else{
      dropdownDiv.style.display = "none";
    }
}

/*WHAT WE DO DIV */
var newDivOne = document.getElementById("newDivOne");
var newDivTwo = document.getElementById("newDivTwo");
var newDivThree = document.getElementById("newDivThree");

newDivOne.style.display = "none";
newDivTwo.style.display = "none";
newDivThree.style.display = "none";


function myTogglerOne(){
    var myDivOne = document.getElementById("myDivOne");
    if (myDivOne.style.display === "none") {
      myDivOne.style.display = "block";
      newDivOne.style.display = "none";
  
    } 
    else {
      myDivOne.style.display = "none";
      newDivOne.style.display = "block";
    }
}

function myTogglerTwo(){  
  var myDivTwo = document.getElementById("myDivTwo");
  if (myDivTwo.style.display === "none") {
    myDivTwo.style.display = "block";
    newDivTwo.style.display = "none";

  } 
  else {
    myDivTwo.style.display = "none";
    newDivTwo.style.display = "block";
  }
}


function myTogglerThree(){
  var myDivThree = document.getElementById("myDivThree");
  if (myDivThree.style.display === "none") {
    myDivThree.style.display = "block";
    newDivThree.style.display = "none";

  } 
  else {
    myDivThree.style.display = "none";
    newDivThree.style.display = "block";
  }
}




/*WHAT WE DO DIV */
var newDivOneB = document.getElementById("newDivOneB");
var newDivTwoB = document.getElementById("newDivTwoB");
var newDivThreeB = document.getElementById("newDivThreeB");
var newDivFourB = document.getElementById("newDivFourB");

newDivOneB.style.display = "none";
newDivTwoB.style.display = "none";
newDivThreeB.style.display = "none";
newDivFourB.style.display = "none";


function myTogglerOneB(){
    var myDivOneB = document.getElementById("myDivOneB");
    if (myDivOneB.style.display === "none") {
      myDivOneB.style.display = "block";
      newDivOneB.style.display = "none";
  
    } 
    else {
      myDivOneB.style.display = "none";
      newDivOneB.style.display = "block";
    }
}

function myTogglerTwoB(){  
  var myDivTwoB = document.getElementById("myDivTwoB");
  if (myDivTwoB.style.display === "none") {
    myDivTwoB.style.display = "block";
    newDivTwoB.style.display = "none";

  } 
  else {
    myDivTwoB.style.display = "none";
    newDivTwoB.style.display = "block";
  }
}


function myTogglerThreeB(){
  var myDivThreeB = document.getElementById("myDivThreeB");
  if (myDivThreeB.style.display === "none") {
    myDivThreeB.style.display = "block";
    newDivThreeB.style.display = "none";

  } 
  else {
    myDivThreeB.style.display = "none";
    newDivThreeB.style.display = "block";
  }
}


function myTogglerFourB(){
  var myDivFourB = document.getElementById("myDivFourB");
  if (myDivFourB.style.display === "none") {
    myDivFourB.style.display = "block";
    newDivFourB.style.display = "none";

  } 
  else {
    myDivFourB.style.display = "none";
    newDivFourB.style.display = "block";
  }
}
