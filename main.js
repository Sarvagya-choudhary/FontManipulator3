noseX=0;
noseY=0;
leftWristX=0;
rightWristX=0;
difference=0;
function setup(){
    video= createCapture(VIDEO);
    video.size(550,500);
    canvas= createCanvas(500,450);
    canvas.position(560,130);
    image= ml5.poseNet(video,modelLoaded);
    image.on('pose',gotResults);
}
function modelLoaded(){
    console.log("Model loaded");
}
function gotResults(results){
    if(results.length > 0){
        console.log(results);
        noseX= results[0].pose.nose.x;
        noseY= results[0].pose.nose.y;
        console.log("nose x = "+noseX+"  nose y = "+noseY);
        leftWristX= results[0].pose.leftWrist.x;
        rightWristX= results[0].pose.rightWrist.x;
        difference=floor(leftWristX-rightWristX);
    }
}
function draw(){
    background("#000000");
    document.getElementById("text").innerHTML="Width and Height of the square will be "+difference+"px";
    fill('#1d69e2');
    text("Sarvagya",noseX,noseY);
    textSize(difference);
}