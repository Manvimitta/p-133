img = "";
function preload() {
    img = loadImage("https://www.ikea.com/images/a-colourful-bedroom-with-lilac-walls-light-brown-red-bed-lin-d185db68fbb04ea0644aa8bbf61600c2.jpg?f=xl");
}

function setup() {
    canvas = createCanvas(600, 500);
    canvas.center();
}

function draw() {
    image(img, 0, 0, 600, 500);
    fill("#ff0000");
    text("Bed", 45, 75);
    noFill();
    stroke("#ff0000");
    rect(30, 60, 450, 350);
}

function back() {
    window.location = "homepage.html";
}