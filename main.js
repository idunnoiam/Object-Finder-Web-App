status = "";
objects = [];
video = "";

function preload() {

}


function setup() {
    canvas = createCanvas(380, 380);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(380, 380);
    video.hide();

}

function gotResult(error, results) {
    if (error) {
        console.log(error);
    }
    console.log(results);
    objects = results;
}

function start() {
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
}

function draw() {
    image(video, 0, 0, 380, 380);

    if (status != "") {
        objectDetector.detect(video, gotResult);

        for (i = 0; i < objects.length; i++) {
            document.getElementById("status").innerHTML = "Status : Objects Detected";
            document.getElementById("number_of_objects").innerHTML = "Number of objects are : " + objects.length;
            object = document.getElementById("input_box").value;

            fill("#FF0000");
            percent = floor(objects[i].confidence * 100);
            text(objects[i].label + " " + percent + "%", objects[i].x + 15, objects[i].y + 15);
            noFill();
            stroke("#FF0000");
            rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);

            if (objects[i].label = object) {
                object = document.getElementById("input_box").value;
                video.stop()
                document.getElementById("number_of_objects").innerHTML = object + " Found";
                var synth = window.speechSynthesis;
                var utterThis = new SpeechSynthesisUtterance(object + " has been found");
                synth.speak(utterThis);
            } else {
                console.log("Mission Failed");
            }

        }

    }
}


function modelLoaded() {
    console.log("Model Loaded")
    status = true;
}