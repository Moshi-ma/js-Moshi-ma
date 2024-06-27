//Variaveis
let clr;
let cx;
let cy;

function setup() {
  createCanvas(400, 400);
  background("navy");
  clr = color(random(0, 255), random(0, 255), random(0, 255),random(0,100));
  
  cx = [0,0,0]
  cy = [random(height),random(height),random(height)]
}

function draw() {

    fill(clr);
  for( let contador in cx){
    circle(cx[contador], cy[contador], 50)
     cx[contador]+= random(0,3);
     cy[contador]+= random(-3,3);
    if (cx[contador] >= width){
      cx[contador] = 0;
      cy[contador] = random(height);
    }
  }

    if(mouseIsPressed){
        clr = color(random(0, 255), random(0, 255), random(0, 255), random(0, 100));
    }
}
