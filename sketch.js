var seconds;
var minutes;
var hours;
var scAngle, mnAngle, hrAngle;
function setup() {
  createCanvas(800,400);
  angleMode(DEGREES);
}

function draw() {
  background(200);
  seconds = second();
  minutes = minute();
  hours = hour();  
  scAngle = map(seconds, 0, 60, 0, 360);
  mnAngle = map(minutes, 0, 60, 0, 360);
  hrAngle = map(hours, 0, 24, 0, 720);
  if (hours < 12) {
    if (minutes < 10) {
      if(seconds < 10) {
        text(hours + ":" + "0" + minutes + ":" + "0" + seconds + " AM", 380, 380);
      }
      else {
        text(hours + ":" + "0" + minutes + ":" + seconds + " AM", 380, 380);
      }
    }
    else {
      if(seconds < 10) {
        text(hours + ":" + minutes + ":" + "0" + seconds + " AM", 380, 380);
      }
      else {
        text(hours + ":" + minutes + ":" + seconds + " AM", 380, 380);
      }
    }
  }
  else {
    if (minutes < 10) {
      if(seconds < 10) {
        text(hours + ":" + "0" + minutes + ":" + "0" + seconds + " PM", 380, 380);
      }
      else {
        text(hours + ":" + "0" + minutes + ":" + seconds + " PM", 380, 380);
      }
    }
    else {
      if(seconds < 10) {
        text(hours + ":" + minutes + ":" + "0" + seconds + " PM", 380, 380);
      }
      else {
        text(hours + ":" + minutes + ":" + seconds + " PM", 380, 380);
      }
    }
  }
  translate(400, 200);
  push();
  rotate(scAngle);
  stroke(0, 0, 255);
  strokeWeight(7);
  line(0, 0, 120, 0);
  pop();
  push();
  rotate(mnAngle);
  stroke(0, 255, 0);
  strokeWeight(7);
  line(0, 0, 90, 0);
  pop();
  push();
  rotate(hrAngle);
  stroke(255, 0, 0);
  strokeWeight(7);
  line(0, 0, 70, 0);
  pop();
  strokeWeight(8);
  noFill();
  stroke(0, 0, 255);
  arc(0, 0, 300, 300, -90, scAngle);
  stroke(0, 255, 0);
  arc(0, 0, 280, 280, -90, mnAngle);
  stroke(255, 0, 0);
  arc(0, 0, 260, 260, -90, hrAngle);
  fill(0, 0, 0);
  console.log(hours + ":" + minutes + ":" + seconds);
}