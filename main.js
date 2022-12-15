mustacheX=0;
mustacheY=0;

function preload() {
    mustache = loadImage('https://i.postimg.cc/g00FW22G/43-435215-mustache-silhouette-big-design-png-image-desenho-de.png');
}

function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose',gotPoses);
}

function gotPoses(results)
{
    if (results.length > 0)
    {
        console.log(results);
        mustacheX = results[0].pose.nose.x -15;
        mustacheY = results[0].pose.nose.y;
        console.log("mustache x = " + mustacheX);
        console.log("mustache y = " + mustacheY);
    }
}
function modelLoaded() {
    console.log('poseNet Is Initialized');
}

function draw() {
    image(video,0,0,300,300);
    fill(255,0,0);
    stroke(255,0,0);
    
    image(mustache, mustacheX, mustacheY, 30, 30);
}

function take_snapshot(){
    save('myFilterImage.png');
}

