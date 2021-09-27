img = "";
function preload() {
    img = loadImage("https://www.ikea.com/images/a-modern-furnished-office-environment-with-light-green-walls-692b89b8ced73e03f74f1eb886f5c9e2.jpg?f=sg");
}

function setup() {
    canvas = createCanvas(600, 500);
    canvas.center();
}

function draw() {
    image(img, 0, 0, 600, 500);
    fill("#ff0000");
    text("Sofa", 45, 75);
    noFill();
    stroke("#ff0000");
    rect(30, 60, 450, 350);
}

function back() {
    window.location = "homepage.html";
}