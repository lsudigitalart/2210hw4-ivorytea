// var v;

// function setup()
// {
  // v = 300;
  // createCanvas(640, 480);
  // noCursor();
  // smooth();
  // background(255, 0, 0);
// }

// function draw()
// {
  // background(255, 0, 0, 10); //adding transparency gives you motion trails
  // background('red');
  // ellipse(mouseX, mouseY, 20); //makes the circle follow your mouse
  // var mouseDist = dist(mouseX, mouseY, pmouseX, pmouseY);
  // strokeWeight(mouseDist); //dist gives you the number of the distance between two things
  // background(255, map(mouseDist, 0, 70, 0, 255), 0, 5);
  // line(mouseX, mouseY, pmouseX, pmouseY); //stores the previous position of your mouse; constantly draws a line
  // println("x: ", mouseX, "y: ", mouseY);
// }

// var ed = 100; //diameter
// var ex = 100;
// var ey = 100;
// var speed = 1;
//
// var rx = 200;
// var ry = 200;
// var rw = 100;
// var rh = 100;
//
// function setup()
// {
//   createCanvas(640, 480);
//   background(0);
// }
//
// function draw()
// {
  // if(mouseX < width/2)
  // {
  //   fill(255, 45, 32);
  //   ellipse(width/2, height/2, 40);
  // }
  // else {
  //   fill(0, 45, 232);
  //   ellipse(width/2, height/2, 40);
  // }
  //
  // if(mouseIsPressed == true) //can also be placed outside of draw as its own function
  // {
  //   background(255, 0, 0);
  //   println('hi');
  // }
//   background (150);
//
//   var mdist = dist(mouseX, mouseY, ex, ey);
//   // println(mdist);
//   if (mdist < ed/2) //if mouse enters the circle it'll turn black, if it leaves, it'll turn back to white
//   {
//     fill (255);
//   }
//   else {
//     fill (0);
//   }
//   ellipse(ex, ey, ed);
//
//   if (ex+50 > rx && ex < rx + rw + 50 && ey < ry + rh + 50 && ey+50 > ry)
//   {
//     background (255, 0, 0, 100);
//   }
//
//   if (keyIsPressed) //wasd controls kinda
//   {
//     println(key);
//     if (key == "w")
//     {
//       println("forward");
//       ey-=speed;
//     }
//     if (key == "a")
//     {
//       println("left")
//       ex-=speed;
//     }
//     if (key == "s")
//     {
//       println("down")
//       ey+=speed;
//     }
//     if (key == "d")
//     {
//       println("right")
//       ex+=speed;
//     }
//   }
//
//   //COLLISSIONSSSSSS
//     rect(rx, ry, rw, rh);
//
// }
//   if(mouseX > rx && mouseY < ry + rh && mouseX < rw + rx && mouseY > ry) //same for a rectangle except red lmao
//   {
//     fill (255, 0, 0);
//   }
//   else
//   {
//     fill(255);
//   }
//   rect(rx, ry, rw, rh);
//   println("mx: ", mouseX, "my: ", mouseY, rx, ry);
// }



//Katamari Damacy game

//object variables
// var katamari; //main character
// var stars; //collectables

//katamari ellipse
var ed = 100; //diameter
var ex = 100;
var ey = 100;
//star rectangle
var rw = 60;
var rh = 60;
var squareState = 1; //star 1
var squareState1 = 1; //star 2
var squareState2 = 1; //star 3
var squareState3 = 1; //star 4

var speed = 20;

function setup()
{
  createCanvas(1200, 600);
}

function draw()
{
  background (249, 235, 192);

  //sprite
  fill (200, 231, 217);
  ellipse (ex, ey, ed);

  //controls with keyboard
  if (keyIsPressed)
  {
      println(key);
      if (keyCode == UP_ARROW)
      {
        println("forward");
        ey-=speed;
      }
      if (keyCode == LEFT_ARROW)
      {
        println("left")
        ex-=speed;
      }
      if (keyCode == DOWN_ARROW)
      {
        println("down")
        ey+=speed;
      }
      if (keyCode == RIGHT_ARROW)
      {
        println("right")
        ex+=speed;
      }
    }

  //collision; when interacting, the object disappears and print increases in size
  fill (225, 202, 102);
  //star 1
  if (ex+50 > 300 && ex < 300 + rw + 50 && ey < 400 + rh + 50 && ey+50 > 400)
  {
    squareState = 0;
    ed++;
  }

  if(squareState == 1)
  {
    rect(300, 400, rw, rh);
  }
  //star 2
  if (ex+50 > 1000 && ex < 1000 + rw + 50 && ey < 250 + rh + 50 && ey+50 > 250)
  {
    squareState1 = 0;
    ed++;
  }

  if(squareState1 == 1)
  {
    rect(1000, 100, rw, rh);
  }
  //star 3
  if (ex+50 > 750 && ex < 750 + rw + 50 && ey < 300 + rh + 50 && ey+50 > 300)
  {
    squareState2 = 0;
    ed++;
  }

  if(squareState2 == 1)
  {
    rect(750, 300, rw, rh);
  }
  //star 4
  if (ex+50 > 75 && ex < 75 + rw + 50 && ey < 500 + rh + 50 && ey+50 > 500)
  {
    squareState3 = 0;
    ed++;
  }

  if(squareState3 == 1)
  {
    rect(75, 500, rw, rh);
  }
}
