const HERRAMIENTAS = {"Pincel":0, "Goma":1};
const MAX_TAM = 60;
let tam_pincel;
let tam_goma;
let col_linea;
let col_fondo;
let herramienta = HERRAMIENTAS["Pincel"];
let lineas = [];
let linea_activa;
let frame_actual;

function setup() {
  createCanvas(480,640,P2D);
  tam_pincel = 10;
  tam_goma = 10;
  col_fondo = 125;
  col_linea = color('#FA00AA');
  //frame_actual = p5.createFramebuffer();
  rectMode(CENTER);
  noCursor();
}


function draw() {
  dibujarFrame();
  push();
  stroke(0);
  noFill();
  strokeWeight(1);
  switch(herramienta){
    case HERRAMIENTAS["Pincel"]:
      circle(mouseX,mouseY,tam_pincel,tam_pincel);
      break;
    case HERRAMIENTAS["Goma"]:
      rect(mouseX,mouseY,tam_goma,tam_goma);
  }
  pop();
}

function mousePressed(){
  if(mouseButton == LEFT){
    switch(herramienta){
    case HERRAMIENTAS["Pincel"]:
      linea_activa = new Linea(col_linea,tam_pincel,herramienta);
      break;
    case HERRAMIENTAS["Goma"]:
      linea_activa = new Linea(col_fondo,tam_goma,herramienta);
    }
  }
}

function mouseWheel(evento){
  let aumento = ( (evento.delta>0) ? -1:1);
  switch(herramienta){
    case HERRAMIENTAS["Pincel"]:
      tam_pincel += aumento;
      if (tam_pincel < 0){tam_pincel = 0;}
      if (tam_pincel > MAX_TAM){tam_pincel = MAX_TAM;}
      break;
    case HERRAMIENTAS["Goma"]:
      tam_goma += aumento;
      if (tam_goma < 0){tam_goma = 0;}
      if (tam_goma > MAX_TAM){tam_goma = MAX_TAM;}
    }
}

function keyPressed(){
  if((key == 'd') || (key == 'D')){
    borrarLinea();
  }
  if((key == 's') || (key == 'S')){
    guardar();
  }
  if((key == 'p') || (key == 'P')){
    herramienta = HERRAMIENTAS["Pincel"];
  }
  if((key == 'g') || (key == 'G')){
    herramienta = HERRAMIENTAS["Goma"];
  }
  print(herramienta);
}

function dibujarFrame(){
  background(col_fondo);
  for(let i=0; i<lineas.length;i++){
    lineas[i].dibujar();
  }
  if(mouseIsPressed){
    linea_activa.update();
    linea_activa.dibujar();
  }
}

function mouseReleased(){
  lineas.push(linea_activa);
}

function borrarLinea(){
  lineas.pop();
}

function guardar(){
  //save(frame_actual,"Dibujo "+frameCount+".png");
  dibujarFrame();
  saveCanvas("Dibujo "+frameCount,"png");
}