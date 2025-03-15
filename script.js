
/* FUNCTIONS MODULE ASSIGNMENT
Demonstrating knowledge of functions with parameters and return values using the myCanvas
*/

// *** Don't forget to add your graphics and random libraries! *** 

// Canvas setup
let cnv = document.getElementById('myCanvas');
let ctx = cnv.getContext('2d');
cnv.width = 500;
cnv.height = 600;

// Do not add/remove code from this section:
// ***************************************************
// Global Vars
let mouseX;
let mouseY;

// mouse movement listener
cnv.addEventListener('mousemove', mousemoveHandler);

// Math Helper Functions
function mousemoveHandler(event) {
  let rect = cnv.getBoundingClientRect();
  mouseX = event.clientX - rect.left;
  mouseY = event.clientY - rect.top;
  console.log('X: ' + mouseX + '  Y: ' + mouseY);
}
// ***************************************************


// my code //

// bird animation variables
let birdAdd5 = -5;
let birdAdd20 = -20;
let birdCounter = 0;

// lightning bolt animation variables
let bolt = 1;
let boltCounter = 0;

// comet Class
class Comet {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  
  animate(speed, ystart, yend) {
    this.x += speed;
    this.y -= speed/2;
    if (this.x > 500 && this.y < yend) {
      this.x = 0;
      this.y = ystart;
    }
  }
}

// spread comet classes
let blackWhiteComet = new Comet(460, 170);
let yellowBlueComet = new Comet(400, 300);
let blueGreenComet = new Comet(395, 470);

// straight comet classes
let blueComet = new Comet(400, 211);
let yellowComet = new Comet(367, 286);
let greenComet = new Comet(439, 402);

// curve comet angles
let greyAngle = 90;
let yellowAngle = 0;
let blueAngle = 300;
let redAngle = 320;
let darkGreyAngle = 80;

// star angles
let greyStarAngle = 0;
let yellowStarAngle = 90;
let blueStarAngle = 290;
let redStarAngle = 135;

function beginAnimation(){
  window.requestAnimationFrame(draw);
}

function draw() {
  // NIGHT STUFF //
  // Night
  drawBeizerCurve(`rgb(0, 20, 65)`, `fill`, 500, 600, `rgb(0, 58, 184)`, 500);
  
  // Moon
  drawCircle(250, 550, 30, `rgb(134, 134, 134)`, `fill`);

  // Stars
  rotateStar(greyStarAngle, 410, `255, 255, 255`); // Grey Star
  //ctx.save(); // Save current canvas state
  //ctx.translate(250, 550); // Translate canvas to moon
  //ctx.rotate((greyStarAngle * Math.PI) / 180); // Rotate around moon
  //drawStar(410, 0, `rgba(255, 255, 255, 0.5)`, `fill`); // Draw grey star in revelance to the rotation
  //drawStar(410, 0, `rgb(255, 255, 255)`, `stroke`); // Draw grey star outline in revelance to the rotation
  //ctx.restore(); // Restore the original canvas state

  rotateStar(yellowStarAngle, 310, `255, 255, 0`); // Yellow Star
  //ctx.save();
  //ctx.translate(250, 550);
  //ctx.rotate((yellowStarAngle * Math.PI) / 180);
  //drawStar(310, 0, `rgba(255, 255, 0, 0.5)`, `fill`); // yellow star
  //drawStar(310, 0, `rgb(255, 255, 0)`, `stroke`); // yellow star outline
  //ctx.restore();

  rotateStar(redStarAngle, 210, `255, 0, 0`); // Red Star
  //ctx.save();
  //ctx.translate(250, 550);
  //ctx.rotate((redStarAngle * Math.PI) / 180);
  //drawStar(210, 0, `rgba(255, 0, 0, 0.5)`, `fill`); // red star
  //drawStar(210, 0, `rgb(255, 0, 0)`, `stroke`); // red star outline
  //ctx.restore();

  rotateStar(blueStarAngle, 110, `0, 238, 255`); // Blue Star
  //ctx.save();
  //ctx.translate(250, 550);
  //ctx.rotate((blueStarAngle * Math.PI) / 180);
  //drawStar(110, 0, `rgba(0, 238, 255, 0.5)`, `fill`); // blue star
  //drawStar(110, 0, `rgb(0, 238, 255)`, `stroke`); // blue star outline
  //ctx.restore();
  
  
  // Comets 
  // spread comets drawn first so they dont overlap the other comets with their larger trails
  drawComet(blackWhiteComet.x, blackWhiteComet.y, `rgba(0, 0, 0, 0.5)`, "spread", `rgba(255, 255, 255, 0.5)`); // black-white spread comet
  blackWhiteComet.animate(3.5, 400, 0);

  drawComet(yellowBlueComet.x, yellowBlueComet.y, `rgba(255, 217, 0, 0.7)`, "spread", `rgba(0, 183, 255, 0.5)`); // yellow-blue spread comet
  yellowBlueComet.animate(3, 500, 150);

  drawComet(blueGreenComet.x, blueGreenComet.y, `rgb(0, 153, 255)`, "spread", `rgb(0, 255, 64)`); // blue-green spread comet
  blueGreenComet.animate(4, 670, 300);

  
  drawComet(blueComet.x, blueComet.y, `rgba(0, 153, 255, 0.9)`, "straight"); // blue straight comet
  blueComet.animate(7, 420, 20);
  
  drawComet(yellowComet.x, yellowComet.y, `rgba(255, 255, 146, 0.8)`, "straight"); // yellow straight comet
  yellowComet.animate(6, 470, 70);

  drawComet(greenComet.x, greenComet.y, `rgba(164, 255, 146, 0.7)`, "straight"); // green straight comet
  greenComet.animate(6.5, 620, 270);

  
  rotateComet(greyStarAngle, greyAngle, 435, `rgba(255, 255, 255, 0.6)`);
  //ctx.save(); // Save current canvas state
  //ctx.translate(250, 550); // Translate canvas to moon
  //ctx.rotate((greyStarAngle * Math.PI) / 180); // Rotate around moon
  //ctx.translate(435, 10); // Translate canvas to grey star
  //ctx.rotate((greyAngle * Math.PI) / 180); // Rotate around grey star
  //drawComet(-40, -40, `rgba(255, 255, 255, 0.6)`, "curve"); // Draw grey curve comet in revelance to grey star
  //ctx.restore(); // Restore the original canvas state

  rotateComet(yellowStarAngle, yellowAngle, 335, `rgba(255, 255, 146, 0.7)`);
  //ctx.save();
  //ctx.translate(250, 550);
  //ctx.rotate((yellowStarAngle * Math.PI) / 180);
  //ctx.translate(335, 10);
  //ctx.rotate((yellowAngle * Math.PI) / 180);
  //drawComet(-40, -40, `rgba(255, 255, 146, 0.7)`, "curve"); // yellow curve comet
  //ctx.restore();

  rotateComet(redStarAngle, redAngle, 235, `rgba(255, 146, 146, 0.6)`);
  //ctx.save();
  //ctx.translate(250, 550);
  //ctx.rotate((redStarAngle * Math.PI) / 180);
  //ctx.translate(235, 10);
  //ctx.rotate((redAngle * Math.PI) / 180);
  //drawComet(-40, -40, `rgba(255, 146, 146, 0.6)`, "curve"); // red curve comet
  //ctx.restore();
  
  rotateComet(blueStarAngle, blueAngle, 135, `rgba(0, 153, 255, 0.9)`);
  //ctx.save();
  //ctx.translate(250, 550);
  //ctx.rotate((blueStarAngle * Math.PI) / 180);
  //ctx.translate(135, 10);
  //ctx.rotate((blueAngle * Math.PI) / 180);
  //drawComet(-40, -40, `rgba(0, 153, 255, 0.9)`, "curve"); // blue curve comet
  //ctx.restore();
  
  
  ctx.save(); // Save current canvas stae
  ctx.translate(250, 550); // Translate canvas to moon
  ctx.rotate((darkGreyAngle * Math.PI) / 180); // Rotate around moon
  drawComet(-40, -40, `rgba(255, 255, 255, 0.3)`, "curve"); // Draw dark grey curve comet in relevance to moon
  ctx.restore(); // Restore the original canvas state

  addAllAngles();


  // DAY STUFF //
  // Day
  drawBeizerCurve(`rgb(0, 238, 255)`, `fill`, 0, 0, `rgb(159, 249, 255)`, 280);
  // Sun
  drawCircle(250, 50, 30, `rgb(255, 255, 0)`, `fill`);

  // Birds
  ctx.strokeStyle = `rgb(0, 0, 0)`;
  ctx.lineWidth = 1;

  drawBird(50, 30, 17, true); // top left bird
  drawBird(347, 36, 20); // top right bird
  drawBird(169, 93, 15, true); // top middle bird
  drawBird(255, 164, 20); // middle right bird
  drawBird(81, 258, 16, true); // bottom left bird
  drawBird(168, 386, 16);  // bottom right bird

  // Clouds
  ctx.fillStyle = `rgb(255, 255, 255)`;
  ctx.strokeStyle = `rgb(0, 0, 0)`;
  ctx.lineWidth = 1;

  drawCloud(208, 140, `fill`); // top right cloud
  drawCloud(208, 140, `stroke`); // top right cloud outline

  drawCloud(50, 200, `fill`); // top left cloud
  drawCloud(50, 200, `stroke`); // top left cloud outline

  drawCloud(70, 80, `fill`); // middle cloud
  drawCloud(70, 80, `stroke`); // middle cloud outline

  drawCloud(150, 300, `fill`, true); // right storm-cloud
  drawCloud(150, 300, `stroke`); // right storm-cloud outline

  drawCloud(50, 400, `fill`, true); // left storm-cloud
  drawCloud(50, 400, `stroke`); // left storm-cloud outline


  window.requestAnimationFrame(draw);
}

beginAnimation();


// Draw Functions
function rotateStar(starAngle, starX, starColor) {
  ctx.save(); // Save current canvas state
  ctx.translate(250, 550); // Translate canvas to moon
  ctx.rotate((starAngle * Math.PI) / 180); // Rotate around moon
  drawStar(starX, 0, `rgba(${starColor}, 0.5)`, `fill`); // Draw star in revelance to the rotation
  drawStar(starX, 0, `rgb(${starColor})`, `stroke`); // Draw star outline in revelance to the rotation
  ctx.restore(); // Restore the original canvas state
}


function rotateComet(starAngle, cometAngle, cometX, color) {
  ctx.save(); // Save current canvas state
  ctx.translate(250, 550); // Translate canvas to moon
  ctx.rotate((starAngle * Math.PI) / 180); // Rotate around moon
  ctx.translate(cometX, 10); // Translate canvas to star
  ctx.rotate((cometAngle * Math.PI) / 180); // Rotate around star
  drawComet(-40, -40, color, "curve"); // Draw the comet in revelance to the star
  ctx.restore(); // Restore the original canvas state
}


function drawComet(x, y, trailColor, trailType, trailColor2) {
  // trail
  ctx.fillStyle = trailColor;
  
  ctx.beginPath();
  if (trailType == 'curve'){
    ctx.moveTo(x-5, y-9);
    ctx.quadraticCurveTo(x-30, y+35, x-10, y+70); // (x-40, y+5, x-60, y+43)
    ctx.quadraticCurveTo(x-20, y+35, x+8, y+5); // (x-30, y+10, x+4, y+9)

  } else if (trailType == 'straight') {
    ctx.moveTo(x, y-10);
    ctx.quadraticCurveTo(x-35, y+12, x-58, y+41);
    ctx.quadraticCurveTo(x-45, y+37, x+4, y+8);

  } else if (trailType == 'spread') {
    const grad=ctx.createLinearGradient(x-100, y+70, x+10, y-10);
    grad.addColorStop(0, trailColor2);
    grad.addColorStop(1, trailColor);
    
    ctx.fillStyle = grad;
    
    ctx.beginPath();
    ctx.moveTo(x, y-7);
    ctx.lineTo(x-95, y+10);
    ctx.quadraticCurveTo(x-100, y+45, x-75, y+70);
    ctx.lineTo(x+4, y+7);
    ctx.fill();
  }
  ctx.fill();

  // comet
  drawCircle(x, y, 10, `rgb(255, 255, 255)`, `fill`); // drawn after the trail so it overlaps the trail
}


function drawStar(x, y, color, type){
  fillStyleOrStrokeStyle(type, color);
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(x+20, y);
  ctx.lineTo(x+30, y-20);
  ctx.lineTo(x+40, y);
  ctx.lineTo(x+60, y);
  ctx.lineTo(x+45, y+15);
  ctx.lineTo(x+50, y+35);
  ctx.lineTo(x+30, y+24);
  ctx.lineTo(x+10, y+35);
  ctx.lineTo(x+15, y+15);
  ctx.closePath();

  fillOrStroke(type);
}


function drawThunderbolt(x, y) {
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(x-6, y+21);
  ctx.lineTo(x+5, y+21);
  ctx.lineTo(x, y+41);
  ctx.lineTo(x+20, y+11);
  ctx.lineTo(x+8, y+11);
  ctx.lineTo(x+12, y-1);
  ctx.lineTo(x, y);
  ctx.fill();
}


function drawCloud(x, y, type, stormy) {
  if (stormy) {
    // ThunderBolts (drawn before the cloud so they dont overlap the cloud)
    ctx.fillStyle = `rgb(238, 255, 0)`;
    if (boltCounter > 25) {
      boltCounter = 0;
      bolt *= -1;
    }
    boltCounter++;

    if(bolt == 1) {
      drawThunderbolt(x+4, y+15);

    } else {
      drawThunderbolt(x+35, y+14);
    }

    ctx.fillStyle = `rgb(97, 112, 122)`;
  }

  
  ctx.beginPath();

  ctx.ellipse(x, y, 15, 15, 2.5, 5.2, 2); // far left curve of the cloud

  ctx.ellipse(x+14, y-14, 18, 20, 4, 5.5, 2); // top left curve of the cloud

  ctx.ellipse(x+45, y-12, 14, 15, 4.3, 5.7, 2); // top right curve of the cloud

  ctx.ellipse(x+59, y, 13, 13, 5.8, 5.25, 2); // far right curve of the cloud

  ctx.lineTo(x+2, y+15); // bottom line of the cloud


  fillOrStroke(type);
}


function drawBird(x, y, wingspan, wingsUp) {
  if (birdCounter > 250) {
    birdCounter = 0;
    birdAdd5 *= -1;
    birdAdd20 *= -1;
  }
  birdCounter++;
  
  ctx.beginPath();
  if (wingsUp) {
    ctx.moveTo(x-wingspan*2, y + birdAdd5);
    ctx.quadraticCurveTo(x-wingspan, y + birdAdd20, x, y); // the x and y coordinates are at the birds mid-point
    ctx.quadraticCurveTo(x+wingspan, y + birdAdd20, x+wingspan*2, y + birdAdd5);
  } else {
    ctx.moveTo(x-wingspan*2, y - birdAdd5);
    ctx.quadraticCurveTo(x-wingspan, y - birdAdd20, x, y); // the x and y coordinates are at the birds mid-point
    ctx.quadraticCurveTo(x+wingspan, y - birdAdd20, x+wingspan*2, y - birdAdd5);
  }
  ctx.stroke();
}


function drawBeizerCurve(color, type, x, y, color2, gradx) { // x & y are optional
  if(type == 'fill') {
    // Create linear gradient
    const grad=ctx.createLinearGradient(100, 0, gradx, 0);
    grad.addColorStop(0, color);
    grad.addColorStop(1, color2);

    // Fill Beizer Curve with gradient
    ctx.fillStyle = grad;
  } else if(type == 'stroke') {
    ctx.strokeStyle = color;
  }

  ctx.beginPath();
  ctx.moveTo(cnv.width, 0);
  ctx.bezierCurveTo(130, 160, 370, 440, 0, 600); // all Beizer Curves in my canvas will have these specific arguements

  if(type == 'fill') {
    ctx.lineTo(x, y);
    ctx.fill();
  } else if(type == 'stroke') {
    ctx.stroke();
  }
}

function drawCircle(x, y, radius, color, type) {
  fillStyleOrStrokeStyle(type, color);

  ctx.beginPath();
  ctx.arc(x, y, radius, 0, 2 * Math.PI);

  fillOrStroke(type);
}


// Convenience Functions

function fillStyleOrStrokeStyle(type, color) { // quick check to use fill style or stroke style
  if(type == 'fill') {
    return ctx.fillStyle = color;
  } else if(type == 'stroke') {
    return ctx.strokeStyle = color;
  }
}

function fillOrStroke(type) { // quick check to fill or stroke the drawing
  if(type == 'fill') {
    return ctx.fill();
  } else if(type == 'stroke') {
    return ctx.stroke();
  }
}

function addAllAngles() {
  greyAngle += 1.5
  yellowAngle += 2;
  redAngle += 2.5;
  blueAngle += 3;
  darkGreyAngle += 1.5;
  
  greyStarAngle += speedUpAndSlowDownStar(`grey`);
  yellowStarAngle += speedUpAndSlowDownStar(`yellow`);
  redStarAngle += 0.5;
  blueStarAngle += 0.25;

  if (greyStarAngle >= 360) {
    greyStarAngle = 0;
  }
  if (yellowStarAngle >= 360) {
    yellowStarAngle = 0;
  }
  if (redStarAngle >= 360) {
    redStarAngle = 0;
  }
  if (blueStarAngle >= 360) {
    blueStarAngle = 0;
  }
}

function speedUpAndSlowDownStar(star) {
  // when these stars are off screen, they should move faster; when they're on screen, they should slow down
  if (star == `grey`){
    if (greyStarAngle >= 270 && greyStarAngle < 320) {
      return 0.25;
    } else {
      return 20;
    }
  }
  else if (star == `yellow`) {
    if (yellowStarAngle >= 260 && yellowStarAngle < 320) {
      return 0.75;
    } else {
      return 20;
    }
  }
}
