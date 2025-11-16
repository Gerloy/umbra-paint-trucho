//const HERRAMIENTAS = {"Pincel":0, "Goma":1};
class Dibujo{

	constructor(_pos_x,_pos_y){
		let options = { width: 480*mult, height: 640*mult };
		this.buffer = createGraphics(480*mult,640*mult);
		this.tam = TAMS[1];
		this.tam_pincel = 10;
		this.tam_goma = 10;
		this.herramienta = HERRAMIENTAS["Pincel"];
		this.col_fondo = color('#FAFAFA');
		this.col_linea = color(COLORES['Magenta']);
		this.pos_x = _pos_x;
		this.pos_y = _pos_y;
		this.offset_x = this.pos_x - (this.buffer.width * 0.5);
		this.offset_y = this.pos_y - (this.buffer.height * 0.5);
		this.lineas = [];
	}

	dibujar(){
		image(this.buffer,this.pos_x,this.pos_y);
	}

	update(){
		this.dibujarFrame();
	}


	dibujarFrame(){
		this.buffer.background(this.col_fondo);
  		this.lineas.forEach(linea => {
	    	linea.dibujar(this.buffer);
  		})
		if(mouseIsPressed && this.linea_activa != null){
	    	this.linea_activa.update();
    		this.linea_activa.dibujar(this.buffer);
  		}
	}

	cambiarColor(_col){
		this.col_linea = color(_col);
	}

	cambiarHerramienta(_herramienta){
		this.herramienta = HERRAMIENTAS[_herramienta];
	}

	cambiarTam(_tam){
		this.tam_pincel = _tam*mult;
		this.tam_goma = _tam*mult;
	}

	hover(){
		if (touches.length > 0){
			if (
				touches[0].x >= (this.pos_x - this.buffer.width*0.5)  &&
				touches[0].x <= (this.pos_x + this.buffer.width*0.5)  &&
				touches[0].y >= (this.pos_y - this.buffer.height*0.5) &&
				touches[0].y <= (this.pos_y + this.buffer.height*0.5) ){
				return true;
			}else{
				return false;
			}
		}else if (mouseX >= (this.pos_x - this.buffer.width*0.5)  &&
				  mouseX <= (this.pos_x + this.buffer.width*0.5)  &&
				  mouseY >= (this.pos_y - this.buffer.height*0.5) &&
				  mouseY <= (this.pos_y + this.buffer.height*0.5) ){
			return true;
		}else{
			return false;
		}
	}

	mouseRel(){
		if (this.linea_activa != null){this.lineas.push(this.linea_activa);}
		this.linea_activa = null;
	}

	borrarLinea(){
		this.lineas.pop();
	}

	lineaSta(){
		switch(this.herramienta){
    		case HERRAMIENTAS["Pincel"]:
		      	this.linea_activa = new Linea(this.col_linea,this.tam_pincel,this.herramienta,{'x':this.offset_x, 'y':this.offset_y});
      			break;
    		case HERRAMIENTAS["Goma"]:
      			this.linea_activa = new Linea(this.col_fondo,this.tam_goma,this.herramienta,{'x':this.offset_x, 'y':this.offset_y});
    	}
	}
}
