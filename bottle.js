img = "";
function preload() {
    img = loadImage("https://www.ikea.com/images/ikea-ditte-fabric-makes-an-affordable-gift-wrap-for-bottles--23f084ec6f15c7f6744030c3fc9138bd.jpg?f=sg");
}

function setup() {
    canvas = createCanvas(600, 500);
    canvas.center();
}

function draw() {
    image(img, 0, 0, 600, 500);
    fill("#ff0000");
    text("Bottle", 45, 75);
    noFill();
    stroke("#ff0000");
    rect(30, 60, 450, 350);
}

function back() {
    window.location = "homepage.html";
}