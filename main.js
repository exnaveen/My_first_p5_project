function preloaded(){  
}

function setup()
{
    canvas = createCanvas(1000,550);
    canvas.position(250,250);
    video = createCapture(VIDEO);
    video.hide();
    video.center();
}

function draw()
{
    fill('white');
    strokeWeight(7);
   rect(0,0,1000,550,70);
   fill('green');
   strokeWeight(4);
   ellipse(500, 50, 900, 40);
   ellipse(50, 275, 40, 450);
   ellipse(500, 500, 900, 40);
   ellipse(950, 275, 40, 450);
   fill('red');
   circle(55,50,90);
   circle(945,50,90);
   circle(55,500,90);
   circle(945,500,90);
   image(video,250,110,500,340);
}

function take_snapshot()
{
    save('Portrait.png');
}
