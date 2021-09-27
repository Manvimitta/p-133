img = "";
function preload() {
    img = loadImage("https://www.ikea.com/images/a-full-gallery-of-living-room-ideas-d48fd11183b3599e2f8b3aee9346cb56.jpg?f=sg");
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