let offset = 50;
let y;

let x = 0;
const speed = 1;

let angle = 0;

let index = 0;

function setup() {
  createCanvas(400, 400);
  y = height - offset;
}

function draw() {
  background(0);
  stroke(255);
  strokeWeight(5);
  drawT();
}

function drawT() {
  if (index == 0) {
    line(width / 2, height - offset, width / 2, y);

    if (y > offset) {
      y -= speed;
    } else {
      push();
      translate(width / 2, offset);
      rotate(angle);
      stroke(255);
      // line(width / 2, offset, width / 2, width / 2);
      line(0, 0, 0, height / 2 - offset);
      pop();

      push();
      translate(width / 2, offset);
      rotate(-angle);
      stroke(255);
      // line(width / 2, offset, width / 2, width / 2);
      line(0, 0, 0, height / 2 - offset);
      pop();

      if (angle < PI / 2) {
        angle += 0.005;
      } else {
        index++;
        resetT();
      }
    }
  } else {
    resetT();
  }
}

let xrT = 0;

function resetT() {
  if (index == 1) {
    if (xrT < width / 2 - offset) {
      line(offset + xrT, offset, width / 2, offset);
      line(width / 2, offset, width - offset - xrT, offset);

      line(width / 2, offset, width / 2, height - offset);
      xrT += speed;
    } else {
      index++;
      xH = 0;
      drawH();
    }
  } else {
    drawH();
  }
}


let xH;

function drawH() {
  if (index == 2) {
    if (xH < width / 2 - offset) {
      line(width / 2 - xH, offset, width / 2 - xH, height - offset);
      line(width / 2 + xH, offset, width / 2 + xH, height - offset);

      line(width / 2 - xH, height / 2, width / 2 + xH, height / 2);
      xH += speed;
    } else {
      index++;
      drawO();
    }
  } else {
    drawO();
  }
}

let OLineHeight = 0;

function drawO() {
  if (index == 3) {
    if (OLineHeight < height / 2 - offset) {
      line(offset, offset, offset, height - offset);
      line(width - offset, offset, width - offset, height - offset);

      line(offset, height / 2 - OLineHeight, width - offset, height / 2 - OLineHeight);
      line(offset, height / 2 + OLineHeight, width - offset, height / 2 + OLineHeight);
      OLineHeight += speed;
    } else {
      index++;
      angleM = -PI / 4;
      drawM();
    }
  } else {
    drawM();
  }
}

let xM = 0;

let angleM;

function drawM() {
  if (index == 4) {
    if (xM < width / 2 - offset) {
      line(offset, offset, offset, height - offset);
      line(width - offset, offset, width - offset, height - offset);

      line(offset, offset, width - offset, offset);


      line(offset, height - offset, width / 2 - xM, height - offset);
      line(width - offset, height - offset, width / 2 + xM, height - offset);
      xM += speed;
    } else if (angleM < 0) {
      line(offset, offset, offset, height - offset);
      line(width - offset, offset, width - offset, height - offset);

      push();
      translate(offset, offset);
      rotate(angleM);
      line(0, 0, width / 2 - offset, height / 2 - offset);
      pop();

      push();
      translate(width - offset, offset);
      rotate(-angleM);
      line(0, 0, -width / 2 + offset, height / 2 - offset);
      pop();


      angleM += 0.01;
    } else {
      index++;
      xA = offset;
      drawA();
    }
  } else {
    drawA();
  }
}

let xMA = 0;
let xA;
let angleA = 0;
let xAM = 0;

function drawA() {
  if (index == 5) {
    if (xMA <= width / 2 - offset) {
      line(offset, offset, offset, height - offset);
      line(width - offset, offset, width - offset, height - offset);

      push();
      translate(offset, offset);
      rotate(angleM);
      line(xMA, xMA, width / 2 - offset, height / 2 - offset);
      pop();

      push();
      translate(width - offset, offset);
      rotate(-angleM);
      line(-xMA, xMA, -width / 2 + offset, height / 2 - offset);
      pop();

      xMA += speed;
    } else {
      if (xA < width / 2) {
        line(xA, offset, xA, height - offset);
        line(width - xA, offset, width - xA, height - offset);
        xA += speed;
      } else {
        push();
        translate(width / 2, offset);
        rotate(angleA);
        line(0, 0, 0, height - 2 * offset);

        rotate(-2 * angleA);
        line(0, 0, 0, height - 2 * offset);
        pop();

        if (angleA < PI / 8) {
          angleA += 0.003;
        } else {
          if (xAM < offset) {
            line(width / 2 - xAM, height / 2, width / 2 + xAM, height / 2);
            xAM += speed - 0.5;
          } else {
            index++;
            resetA();
          }
        }
      }
    }
  } else {
    resetA();
  }
}

function resetA() {
  if (index == 6) {
    push();
    translate(width / 2, offset);
    rotate(angleA);
    line(0, 0, 0, height - 2 * offset);

    rotate(-2 * angleA);
    line(0, 0, 0, height - 2 * offset);
    pop();

    if (xAM > 0) {
      line(width / 2 - xAM, height / 2, width / 2 + xAM, height / 2);
      xAM -= speed - 0.5;
    } else {
      if (angleA > 0) {
        angleA -= 0.003;
      } else {
        index++;
        xS = width / 2;
        drawS();
      }
    }
  } else {
    drawS();
  }
}

let xS;

function drawS() {
  if (index == 7) {
    if (x < width / 2 - offset) {
      line(width / 2, offset, width / 2, height - offset);

      line(width / 2 - x, offset, width / 2 + x, offset);
      line(width / 2 - x, height - offset, width / 2 + x, height - offset);
      x += speed;
    } else {
      if (xS > offset) {
        line(width / 2 - x, offset, width / 2 + x, offset);
        line(width / 2 - x, height - offset, width / 2 + x, height - offset);

        // line(width / 2, height - offset, x, height - offset);
        // line(width / 2, height - offset, width - x, height - offset);


        line(width - xS, height / 2, width - xS, height - offset);
        line(xS, offset, xS, height / 2);

        line(width - xS, height / 2, xS, height / 2);
        xS -= speed;
      } else {
        index++;
        yrS = height - offset;
        resetS();
      }
    }
  } else {
    resetS();
  }
}

let yrS;

function resetS() {
  if (index == 8) {
    if (xS < width / 2) {
      line(width / 2 - x, offset, width / 2 + x, offset);
      line(width / 2 - x, height - offset, width / 2 + x, height - offset);


      //line(width / 2, height - offset, x, height - offset);
      //line(width / 2, height - offset, width - x, height - offset);


      line(width - xS, height / 2, width - xS, height - offset);
      line(xS, offset, xS, height / 2);

      line(width - xS, height / 2, xS, height / 2);
      xS += speed;
      x -= speed;
    } else {
      if (yrS > offset) {
        line(width / 2, offset, width / 2, yrS);
        yrS -= speed;
      } else {
        index = 0;
        angle = 0;
        y = height - offset;
        xrT = 0;
        OLineHeight = 0;
        xM = 0;
        xMA = 0;
        angleA = 0;
        xAM = 0;
      }
    }
  }
}