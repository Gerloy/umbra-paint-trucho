class Linea{
    constructor(col, grosor, herramienta, offset){
        this.col = col;
        this.grosor = grosor;
        this.puntos = [];
        this.herramienta = herramienta;
        this.offset = offset;
    }

    dibujar(buffer){
        if(this.herramienta == HERRAMIENTAS["Goma"]){this.col = dibujo.col_fondo;}
        buffer.push();
        buffer.strokeWeight(this.grosor);
        buffer.stroke(this.col);
        for (let i=0;i<this.puntos.length -1;i++){
            buffer.line(this.puntos[i].x,this.puntos[i].y,this.puntos[i+1].x,this.puntos[i+1].y);
        }
        buffer.pop();
    }

    update(){
	    let punto = createVector(0,0);
	    if (touches.length>0){
            //print(touches);
		    punto = createVector(touches[0].x - this.offset['x'],touches[0].y - this.offset['y']); 
	    }else{
    		punto = createVector(mouseX - this.offset['x'],mouseY - this.offset['y']);
    	}
            this.puntos.push(punto);
    }
}
