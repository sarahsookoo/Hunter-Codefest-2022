//var numbers = ["0","1","2","3","4","5","6","7","8","9"]
//var index = Math.floor(Math.random() * numbers.length);
//var randomNum;
var level = 1;
var randomNum = Math.floor(Math.random() * 9) + 1;

function hideNum(){ //replaces random number with blank space
    document.getElementById("numberDisplay").innerHTML = "";
}

function displayNum() { //displays a random number when start or next is pressed
    //randomNum = numbers[index];
    //level = 1;
    document.getElementById("grade").innerHTML = "";
    document.getElementById("numberDisplay").innerHTML = randomNum;
    setTimeout(hideNum, 3000);
}

function unHideNext() { //reveals next button
    var z = document.getElementsByClassName("nextbutton")[0];
    if (z.style.visibility = "hidden") {
        z.style.visibility = "visible";
    }
}

function unHideInput() { //reveals input box
    var z = document.getElementsByClassName("inputbox")[0];
    if (z.style.visibility = "hidden") {
        z.style.visibility = "visible";
    }
}

function unHideGrade() { //reveals grade
    var z = document.getElementsByClassName("grade")[0];
    if (z.style.visibility = "hidden") {
        z.style.visibility = "visible";
    }
}

function hideInput() { //hides input box
    var z = document.getElementsByClassName("inputbox")[0];
    if (z.style.visibility = "visible") {
        z.style.visibility = "hidden";
    }
}

function hideGrade() { //hides grade
    var z = document.getElementsByClassName("grade")[0];
    if (z.style.visibility = "visible") {
        z.style.visibility = "hidden";
    }
}

function hideNext() { //hides next button
    var z = document.getElementsByClassName("nextbutton")[0];
    if (z.style.visibility = "visible") {
        z.style.visibility = "hidden";
    }
}

function disableStart() { //disables start button
    document.getElementById("start").disabled = true;
}

function enableStart() { //disables start button
    document.getElementById("start").disabled = false;
}



function nextChar() { //gives next number when next is pressed
    //randomNum = Math.floor(Math.random() * 90 + 10)
    level++;
    if (level == 2) {
        randomNum = Math.floor(Math.random() * (99 - 10 + 1)) + 10
        displayNum();
    }
    else if (level == 3) {
        randomNum = randomNum = Math.floor(Math.random() * (999 - 100 + 1)) + 100;
        displayNum();
    }
    else if (level == 4) {
        randomNum = randomNum = Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000;
        displayNum();
    }
    else if (level == 5) {
        randomNum = randomNum = Math.floor(Math.random() * (99999 - 10000 + 1)) + 10000;
        displayNum();
    }
    else if (level == 6) {
        randomNum = randomNum = Math.floor(Math.random() * (999999 - 100000 + 1)) + 100000;
        displayNum();
    }
    else if (level == 7) {
        randomNum = randomNum = Math.floor(Math.random() * (9999999 - 1000000 + 1)) + 1000000;
        displayNum();
    }
    else if (level == 8) {
        randomNum = randomNum = Math.floor(Math.random() * (99999999 - 10000000 + 1)) + 10000000;
        displayNum();
    }
    else if (level == 9) {
        randomNum = randomNum = Math.floor(Math.random() * (999999999 - 100000000 + 1)) + 100000000;
        displayNum();
    }
    else{
        randomNum = randomNum = Math.floor(Math.random() * (9999999999 - 1000000000 + 1)) + 1000000000;
        displayNum();
    }
    //reveal input box after 4 seconds (includes enter button)
    setTimeout(unHideInput, 3000);
}

function checkAns() { //checks if number inputted is correct
    var input = document.getElementsByName("ans")[0].value;
    // alert(input);
    if (input == "") {
        alert("Answer cannot be empty");
    }
    else if (input == randomNum) {
        //alert(randomNum);
        document.getElementById("grade").innerHTML = "Correct, press next to continue";
        unHideNext();
    }
    else {
        document.getElementById("grade").innerHTML = "Incorrect!! The correct answer was " + randomNum + ". Press the button above to start over.";
        // alert("Wrong Answer, try again");
        level = 1;
        randomNum = Math.floor(Math.random() * 9) + 1;
        hideNext();
        hideInput();
        enableStart();
        }
    }
