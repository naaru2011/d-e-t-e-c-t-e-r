function preload(){
    loadImage("compisition-book.jpg");
}

function setup() {
    createCanvas(600, 500, 0, 0);
    document.getElementById("nil").innerHTML = "Status: Detecting Objects";
    objectDetector = ml5.objectDetector('crossed', modelLoaded);

}
function modelLoaded() {
    console.log("Model Loaded!");
    status = true;
    objectDetector.detect(img, gotResult);

    function gotResult(error, results) {
        if (error) {
            console.error(error);
        }
        console.log(results);
    }
}
