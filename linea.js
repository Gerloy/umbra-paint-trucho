class Linea{
    constructor(col, grosor, herramienta){
        this.col = col;
        this.grosor = grosor;
        this.puntos = [];
        this.herramienta = herramienta;
    }

    dibujar(){
        if(this.herramienta == HERRAMIENTAS["Goma"]){this.col = col_fondo;}
        push();
        strokeWeight(this.grosor);
        stroke(this.col);
        for (let i=0;i<this.puntos.length -1;i++){
            line(this.puntos[i].x,this.puntos[i].y,this.puntos[i+1].x,this.puntos[i+1].y);
        }
        pop();
    }

    update(){
	    let punto = createVector(0,0);
	if (touches.length>0){
        //print(touches);
		punto = createVector(touches[0].x,touches[0].y); 
	}else{
		punto = createVector(mouseX,mouseY);
	}
        this.puntos.push(punto);
    }
}
