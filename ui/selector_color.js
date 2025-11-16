class Selector_Color{
	constructor(_pos){
		this.pos = {'x': _pos['x'],'y': _pos['y']};
		this.tam = {'x': 290*mult, 'y': 40*mult};
		this.eleccion = COLORES["Magenta"];
	}

	dibujar(){
		push();
			fill('#d38d40');
			noStroke();
			rect(this.pos['x'],this.pos['y'],this.tam['x'],this.tam['y'],12,12,12,12);
		pop();

		//Dibujar los botoncitos
		let tx = this.tam['x'] *0.25; 
		let x = this.tam['x'] *0.22 + (this.pos['x'] - this.tam['x']*.6);
		//let ty = this.tam['y'] *0.2; 
		//let y = this.tam['y'] *0.2 + (this.pos['y'] - this.tam['y']*.6);
		for (key in COLORES) {
			push();
			if (!this.hover()){
				noFill();
			}else{
				if(this.hoverBoton(x,this.pos['y'],tx,this.tam['y'])){
					fill('#684427');
				}else{
					noFill();
				}
			}
			if(COLORES[key] == this.eleccion){
				fill('#684427');
			}
			stroke('#684427');
			strokeWeight(3*mult);
	    	if(key == 'Verde'){
				rect(x,this.pos['y'],tx,this.tam['y'],12,0,0,12);
			}else if(key == 'Rojo'){
				rect(x,this.pos['y'],tx,this.tam['y'],0,12,12,0);
			}else{
				rect(x,this.pos['y'],tx,this.tam['y'],0,0,0,0);
			}
			pop();
			push();
			fill(COLORES[key]);
			noStroke();
			ellipse(x,this.pos['y'],20*mult);
			pop();
			x += tx;
			//y += ty;
  		}
	}

	hover(){
		if (touches.length > 0){
			if (
				touches[0].x >= (this.pos['x'] - this.tam['x']*0.5)  &&
				touches[0].x <= (this.pos['x'] + this.tam['x']*0.5)  &&
				touches[0].y >= (this.pos['y'] - this.tam['y']*0.5) &&
				touches[0].y <= (this.pos['y'] + this.tam['y']*0.5) ){
				return true;
			}else{
				return false;
			}
		}else if (mouseX >= (this.pos['x'] - this.tam['x']*0.5)  &&
				  mouseX <= (this.pos['x'] + this.tam['x']*0.5)  &&
				  mouseY >= (this.pos['y'] - this.tam['y']*0.5) &&
				  mouseY <= (this.pos['y'] + this.tam['y']*0.5) ){
			return true;
		}else{
			return false;
		}
	}

	hoverBoton(posx,posy,tamx,tamy){
		if (touches.length > 0){
			if (
				touches[0].x >= (posx - tamx*0.5)  &&
				touches[0].x <= (posx + tamx*0.5)  &&
				touches[0].y >= (posy - tamy*0.5) &&
				touches[0].y <= (posy + tamy*0.5) ){
				return true;
			}else{
				return false;
			}
		}else if (mouseX >= (posx - tamx*0.5)  &&
				  mouseX <= (posx + tamx*0.5)  &&
				  mouseY >= (posy - tamy*0.5) &&
				  mouseY <= (posy + tamy*0.5) ){
			return true;
		}else{
			return false;
		}
	}

	click(){
		let tx = this.tam['x'] *0.25; 
		let x = this.tam['x'] *0.22 + (this.pos['x'] - this.tam['x']*.6);
		let i = 0;
		for (key in COLORES){
			if(this.hoverBoton(x,this.pos['y'],tx,this.tam['y'])){
				this.eleccion = COLORES[key];
			}
			x += tx;
		}
		//TAMS.forEach(tam =>{
		//	if(this.hoverBoton(x,this.pos['y'],tx,this.tm['y'])){
		//		this.eleccion = i;
		//	}
		//	x += tx;
		//	//y += ty;
		//	i++;
		//})
		return {"Color":this.eleccion}
	}
}
