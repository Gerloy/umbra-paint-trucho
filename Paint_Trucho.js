const HERRAMIENTAS = {'Pincel':0, 'Goma':1};
const COLORES = {'Verde':'#85993c', 'Azul':'#136491', 'Magenta':'#8c2b4c', 'Rojo':'#8a2708'};
const TAMS = [5,10,15,20,30];
const BOTONES = ['Pincel', 'Goma', 'Atras', 'Guardar'];

let ui;
let dibujo;
let icon_guardar;
let icon_borrar;
let icon_deshacer;
let icon_pincel;

function preload(){
  icon_borrar = loadImage("data/borrador.png");
  icon_atras = loadImage("data/atras.png");
  icon_guardado = loadImage("data/guardado.png");
  icon_pincel = loadImage('data/pincel.png');
}

function setup() {
	createCanvas(1280,720,P2D);
  createCanvas(displayWidth, displayHeight,P2D);
	dibujo = new Dibujo(width*0.5,height*0.45);
	ui = new UI({'x':width*0.5, 'y':height*0.45},{'x':480, 'y':640});
	rectMode(CENTER);
	imageMode(CENTER);
}


function draw() {
  background(color('#4fa39d'));
  dibujo.update();
  dibujo.dibujar();
  ui.update();
  dibujarMouse();
}

function dibujarMouse(){
  cursor(ARROW);
  push();
  stroke(0);
  noFill();
  strokeWeight(1);
  if(dibujo.hover()){
    noCursor();
	  if(touches.length > 0){
	  switch(dibujo.herramienta){
	      case HERRAMIENTAS["Pincel"]:
	        circle(touches[0].x,touches[0].y,dibujo.tam_pincel,dibujo.tam_pincel);
	        break;
	      case HERRAMIENTAS["Goma"]:
	        rect(touches[0].x,touches[0].y,dibujo.tam_goma,dibujo.tam_goma);
	    }
	  }
    switch(dibujo.herramienta){
      case HERRAMIENTAS["Pincel"]:
        circle(mouseX,mouseY,dibujo.tam_pincel,dibujo.tam_pincel);
        break;
      case HERRAMIENTAS["Goma"]:
        rect(mouseX,mouseY,dibujo.tam_goma,dibujo.tam_goma);
    }
  }
  pop();
}

function mousePressed(){
  if(mouseButton == LEFT){
    if(dibujo.hover())dibujo.lineaSta();
  }
}

function touchStarted(){
  if(dibujo.hover())dibujo.lineaSta();
}


function keyPressed(){
  if((key == 'd') || (key == 'D')){
    dibujo.borrarLinea();
  }
  if((key == 's') || (key == 'S')){
    guardar();
  }
  if((key == 'p') || (key == 'P')){
    dibujo.cambiarHerramienta('Pincel');
  }
  if((key == 'g') || (key == 'G')){
    dibujo.cambiarHerramienta('Goma');
  }
}

function mouseReleased(){
  dibujo.mouseRel();
  let config = ui.click();
  for(key in config){
    if (key == "Tam"){
      dibujo.cambiarTam(TAMS[config[key]]);
    }else if (key == "Boton"){
      switch(config["Boton"]){
        case 0:
          dibujo.cambiarHerramienta('Pincel');
        break;
        case 1:
          dibujo.cambiarHerramienta('Goma');
        break;
        case 2:
          dibujo.borrarLinea();
        break;
        case 3:
          guardar();
        break;
      }
    }else if (key == "Color"){
      dibujo.cambiarColor(config["Color"]);
    }
  }
}

function touchReleased(){
  dibujo.mouseRel();
}


function guardar(){
  save(dibujo.buffer,'Dibujo_'+frameCount+'.png');
}
