var canvas;

function setup() {
  createCanvas(window.innerWidth, 1800);
   frameRate(1000);
  r = random(255);
  g = random(255);
  b = random(255);
}

function draw() {

  if (mouseIsPressed) {
    fill(r,g,b);
    stroke(r,g,b);
  } else {
    fill(255);
    stroke(255);
    ;
  }
  rect(mouseX, mouseY, 15, 25);
}

window.onresize = function() {
  var w = window.innerWidth;
  var h = window.innerHeight;  
  canvas.size(w,h);
  width = w;
  height = h;
};

function mousePressed() {
  // Check if mouse is inside the circle
  let d = dist(mouseX, mouseY, 360, 200);
  if (d < 100) {
    // Pick new random color values
    r = random(255);
    g = random(255);
    b = random(255);
  }
}

var c;
  var h;
  var w;
  var isTriangle = true;
  var isBlue = true;

  function setup() {
    createCanvas(600, 600);
    background(196, 222, 228);
  }

  function draw() {
    
    
    


    noStroke();
    fill(99, 150, 135);
    rect(0,0,15,15);
    fill(100, 142, 152);
    rect(585,0,15,15);
    fill(84, 93, 94);
    rect(0,580,10,20);
    triangle(585,600,592.5,585,600,600);
    

    if (mouseY <= 10) {
      if (mouseX >= width - 10) {
        isBlue = true;
      } else if (mouseX <= 10) {
        isBlue = false;
      }
    }

    if (mouseY <= 200) {
      if (mouseIsPressed) {
        stroke(255);
        strokeWeight(25);
        line(pmouseX, pmouseY, mouseX, mouseY);
      }
    } else if (mouseY >= 210) {
      noStroke();
      w = map(mouseY, 0, height, 20, 100);
      h = map(mouseY, 210, height, 50, 200);
      c = map(mouseY, 210, height, 10, 100);


      if (mouseY >= height - 10) {
        if (mouseX >= width - 10) {
          isTriangle = true;
        } else if (mouseX <= 10) {
          isTriangle = false;
        }
      }

      if (mouseIsPressed) {
        if (isTriangle == true) {
          if (isBlue == true) {
            fill(100, 142, 152, c);
          } else if (isBlue == false) {
            fill(99, 150, 135, c);
          }
          triangle(mouseX - w, mouseY + h, mouseX, mouseY, mouseX + w, mouseY + h);

        } else {
          fill(84, 93, 94, c);
          rect((mouseX - (w - 50) / 2), mouseY, w - 40, h + 20);
        }
      }
    }
  }