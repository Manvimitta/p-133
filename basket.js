img = "";
function preload() {
    img = loadImage("https://www.ikea.com/images/kitchen-worktop-with-various-produce-kept-in-hanging-and-sta-c7db79d9e3a7bb28dcf28ca5e3f499ff.jpg?f=sg");
}

function setup() {
    canvas = createCanvas(600, 500);
    canvas.center();
}

function draw() {
    image(img, 0, 0, 600, 500);
    fill("#ff0000");
    text("Basket", 45, 75);
    noFill();
    stroke("#ff0000");
    rect(30, 60, 450, 350);
}

function back() {
    window.location = "homepage.html";
}