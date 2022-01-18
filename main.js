nosex = 0;
nosey = 0;

function preload(){
    lipistick = loadImage('https://i.postimg.cc/FscNtHg0/l1.png');
}

function setup(){
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw(){
    image(video, 0, 0, 300, 300);
    image(lipistick, nosex, nosey, 40, 30);
}

function take_snapshot(){
    save('my_filter_image.png');
}

function modelLoaded(){
    console.log('poseNet is initialized');
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        nosex = results[0].pose.nose.x-20;
        nosey = results[0].pose.nose.y+15;
        console.log("nose x= " + results[0].pose.nose.x);
        console.log("nose y= " + results[0].pose.nose.y);
    }
}