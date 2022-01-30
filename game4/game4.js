var start = new Date().getTime();

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function makeShapeAppear() {
    var top = Math.random() * 400;
    var left = Math.random() * 400;
    var width = Math.random() * 200;

    if (Math.random() > 0.5) {
        document.getElementById("shape").style.borderRadius = "50%"; //circle
    } 
    else {
         document.getElementById("shape").style.borderRadius = "0%"; //square
    }

    document.getElementById("shape").style.backgroundColor = getRandomColor();
    document.getElementById("shape").style.top = top + "px";
    document.getElementById("shape").style.left = left + "px";
    document.getElementById("shape").style.height = width + "px";
    document.getElementById("shape").style.width = width + "px";
    document.getElementById("shape").style.display = "block";
    start = new Date().getTime();

}

function appearAfterDelay() {
    setTimeout(makeShapeAppear, Math.random() * 2000); // 2 seconds
}

appearAfterDelay(); //shape appear after 2 secs

function shapeClick() { //when shape is clicked, show time
    document.getElementById("shape").style.display = "none";
    var end = new Date().getTime();
    var timeTaken = (end - start) / 1000;
    document.getElementById("timer").innerHTML = timeTaken + " seconds";

    appearAfterDelay(); //display another shape
} 