let frequency = 0.01;
let amplitude = 75;
let frequencySlider, amplitudeSlider;

function setup() {
  createCanvas(windowWidth, 400);

  frequencySlider = createSlider(0.001, 0.1, 0.01, 0.001);
  frequencySlider.position(20, 420);
  frequencySlider.size(min(280, windowWidth - 180));
  frequencySlider.input(redrawScene);

  createP('Frequency').position(20, 395).style('margin', '0').style('font-size', '12px');

  amplitudeSlider = createSlider(10, 150, 75, 1);
  amplitudeSlider.position(20, 480);
  amplitudeSlider.size(min(280, windowWidth - 180));
  amplitudeSlider.input(redrawScene);

  createP('Amplitude').position(20, 455).style('margin', '0').style('font-size', '12px');

  noLoop();
  redrawScene();
}

function redrawScene() {
  frequency = frequencySlider.value();
  amplitude = amplitudeSlider.value();

  background(255);
  drawVerticalGrid();
  generatePerlinLine();
  generateRandomLine();
}

function drawVerticalGrid() {
  stroke(220);
  strokeWeight(1);
  for (let x = 0; x <= width; x +=5){
    line(x, 0, x, height);
  }
}

function generatePerlinLine() {
  
  push();
  
    noStroke();
    fill(10);

    translate(0, 100);

    for(let x = 0; x < width; x+=5) {
      let y = ((noise(x * frequency) * 2) - 1) * amplitude;
      circle(x, y, 3);
    }
  
  pop();
  
}


function generateRandomLine() {
  
  push();
  
    noStroke();
    fill(10);

    translate(0, 300);

    for(let x = 0; x < width;  x+=5) {
      let y = ((random() * 2) - 1) * amplitude;
      circle(x, y, 3);
    }
  
  pop();
  
}