const HERRAMIENTAS = {'Pincel':0, 'Goma':1};
const COLORES = {'Verde':'#85993c', 'Azul':'#136491', 'Magenta':'8c2b4c', 'Rojo':'8a2708'};
const TAMS = [5,10,15,20,30];

let ui;
let dibujo;

function setup() {
	createCanvas(1280,720,P2D);
	dibujo = new Dibujo(width*0.5,height*0.5);
	ui = new UI({'x':width*0.5, 'y':height*0.5},{'x':480, 'y':640});
	rectMode(CENTER);
	imageMode(CENTER);
}


function draw() {
  background(color('#242424'));
  dibujo.update();
  dibujo.dibujar();
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
    //switch(herramienta){
    //case HERRAMIENTAS["Pincel"]:
    //  linea_activa = new Linea(col_linea,tam_pincel,herramienta);
    //  break;
    //case HERRAMIENTAS["Goma"]:
    //  linea_activa = new Linea(col_fondo,tam_goma,herramienta);
    //}
  }
}

function touchStarted(){
  if(dibujo.hover())dibujo.lineaSta();
  //switch(herramienta){
  //case HERRAMIENTAS["Pincel"]:
  //  linea_activa = new Linea(col_linea,tam_pincel,herramienta);
  //  break;
  //case HERRAMIENTAS["Goma"]:
  //  linea_activa = new Linea(col_fondo,tam_goma,herramienta);
  //}
}

//function mouseWheel(evento){
//  let aumento = ( (evento.delta>0) ? -1:1);
//  switch(herramienta){
//    case HERRAMIENTAS["Pincel"]:
//      tam_pincel += aumento;
//      if (tam_pincel < 0){tam_pincel = 0;}
//      if (tam_pincel > MAX_TAM){tam_pincel = MAX_TAM;}
//      break;
//    case HERRAMIENTAS["Goma"]:
//      tam_goma += aumento;
//      if (tam_goma < 0){tam_goma = 0;}
//      if (tam_goma > MAX_TAM){tam_goma = MAX_TAM;}
//    }
//}

function keyPressed(){
  if((key == 'd') || (key == 'D')){
    dibujo.borrarLinea();
    //borrarLinea();
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
}

function touchReleased(){
  dibujo.mouseRel();
}

//function borrarLinea(){
//  lineas.pop();
//}

function guardar(){
  //save(frame_actual,"Dibujo "+frameCount+".png");
  //dibujarFrame();
  save(dibujo.buffer,'Dibujo_'+frameCount+'.png');
  //saveCanvas("Dibujo "+frameCount,"png");
}
