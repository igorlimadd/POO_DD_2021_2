

class Entity {
  x:number;
  y;number;
  step:number;
  image: p5.Image;

  constructor(x:number, y:number, step:number, image:p5.Image){  
    this. x = x;
    this. y = y;
    this.step = step;
    this.image = image;
  }
draw():void{
  image(this.image, this.x * this.step, this.y * this.step, this.step, this.step)
}

}



class Board {
  nl: number;
  nc: number;
  step: number;
  background: p5.Image;


  constructor(nc:number, nl:number, step:number, background:p5.Image){
    this.nl = nl;
    this. nc = nc;
    this.step = step;
    this.background = background;

  }
  draw():void{
    image(this.background, 0, 0, this.nc * this.step, this.nl * this.step);
    for (let x = 0 < this.nc; x++){
      for (let y = 0; y < this.nl. y++) {
        noFill();
        stroke(0);
        strokeWeight(3);
        rect(x * this.step, y * this.step, this.step, this.step);
      }
    }
    
  }
}


let gato_img: p5.Image;
let rato_img: p5.Image;
let board_img: p5.Image;

let gato: Entity;
let rato: Entity;
let board:Board;

function loadImage(path:string): p5.Image{
  return loadImage(
    path,
    () => console.log ("Loading " + path + " ok "),
    () => console.log ("Loading " + path + " error ")
  );

}

function preload() {
  gato_img = loadImage('../sketch/gato.png')
  rato_img = loadImage('../sketch/rato.png')
  board_img = loadImage('../sketch/fundo.gif')



}

function keyPressed() { // DA ESQUERDA PRA DIREITA E DE CIMA PRA BAIXO AUMENTA
  if(keyCode === LEFT_ARROW){
    gato.x--;
  } else if (keyCode === RIGHT_ARROW){
    gato.x++;
  } else if (keyCode === UP_ARROW){
    gato.y--;
  } else if (keyCode === DOWN_ARROW){
    gato.y++;
  }
  
  if (keyCode ===  "A".charCodeAt(0)){
    rato.x--;
  } else if (keyCode === "D".charCodeAt(0)){
    rato.x++;
  } else if (keyCode === "W".charCodeAt(0)){
    rato.y--;
  } else if (keyCode === "S".charCodeAt(0)){
    rato.y++;
  }

  

}

function setup(){
  let size = 100;
  gato = new Entity(2, 2, size, gato_img);
  rato = new Entity(1, 1, size, rato_img); 
  board = new Board (8, 6, size, board_img);
  createCanvas(board.nc * size, board.nl * size);

}

function draw(){
  board.draw();
  gato.draw();
  rato.draw();

} 