class Selector_Tam{
	constructor(_pos){
		this.pos = {'x': _pos['x'],'y': _pos['y']};
		this.tam = {'x': 40*mult, 'y': 320*mult};
		this.eleccion = 1;
	}

	dibujar(){
		push();
			fill('#d38d40');
			noStroke();
			rect(this.pos['x'],this.pos['y'],this.tam['x'],this.tam['y'],12,12,12,12);
		pop();

		//Dibujar los botoncitos
		let ty = this.tam['y'] *0.2; 
		let y = this.tam['y'] *0.2 + (this.pos['y'] - this.tam['y']*.6);
		TAMS.forEach(tam => {
			push();
			if (!this.hover()){
				noFill();
			}else{
				if(this.hoverBoton(this.pos['x'],y,this.tam['x'],ty)){
					fill('#684427');
				}else{
					noFill();
				}
			}
			if(tam == TAMS[this.eleccion]){
				fill('#684427');
			}
			stroke('#684427');
			strokeWeight(3*mult);
	    	if(tam == TAMS[0]){
				rect(this.pos['x'],y,this.tam['x'],ty,12,12,0,0);
			}else if(tam == TAMS[TAMS.length-1]){
				rect(this.pos['x'],y,this.tam['x'],ty,0,0,12,12);
			}else{
				rect(this.pos['x'],y,this.tam['x'],ty,0,0,0,0);
			}
			pop();
			push();
			fill(0);
			noStroke();
			ellipse(this.pos['x'],y,tam*mult);
			pop();
			y += ty;
  		})
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
		let ty = this.tam['y'] *0.2; 
		let y = this.tam['y'] *0.2 + (this.pos['y'] - this.tam['y']*.6);
		let i = 0;
		TAMS.forEach(tam =>{
			if(this.hoverBoton(this.pos['x'],y,this.tam['x'],ty)){
				this.eleccion = i;
			}
			y += ty;
			i++;
		})
		return {"Tam":this.eleccion}
	}
}
