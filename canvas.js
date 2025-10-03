class Canvas{
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

	this.constructor(){

  		createCanvas(480,640,P2D);
		tam_pincel = 10;
		tam_goma = 10;
		col_fondo = 125;
		col_linea = color('#FA00AA');
		//frame_actual = p5.createFramebuffer();
		rectMode(CENTER);
		noCursor();
	}

	this.dibujar(){
		
	}


	this.dibujarFrame(){
		background(col_fondo);
		for(let i=0; i<lineas.length;i++){
			lineas[i].dibujar();
		}
		if(mouseIsPressed && linea_activa != null){
			linea_activa.update();
			linea_activa.dibujar();
		}
	}
}
