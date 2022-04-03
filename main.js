status = "";
objects = [];

function preload() {

}


function setup() {
    canvas = createCanvas(380, 380);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(380, 380);
    video.hide();

}

function draw() {
    image(video, 0, 0, 380, 380);
}

function start() {
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
    object = document.getElementById("ID_Of_The_Input_Box").ariaValueMax;
}

function modelLoaded() {
    console.log("Model Loaded")
    status = true;
    video.loop();
    video.speed(1);
    video.volume(0);
}