function preload() {}


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