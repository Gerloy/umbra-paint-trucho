class UI{
	constructor(pos_canvas,tam_canvas){
		this.tam_sel = TAMS[0];
		this.col_sel = COLORES['Magenta'];
		this.herramienta_sel = HERRAMIENTAS['Pincel'];
		
		this.selector_tam = new Selector_Tam({'x': pos_canvas['x'] + tam_canvas['x']*0.55,'y': pos_canvas['y']- tam_canvas['y']*0.2});
		//this.selector_col = new Selector_Color();
		//this.selector_her = new Selector_Herramienta();
		//this.botones = new Botones_Cosas();
		
	}

	update(){
		this.selector_tam.dibujar();
		//Cosas del update
	}

	hover(){
		//reutrn (this.selector_tam.hover() || this.selector_col.hover() || this.selector_her.hover() || this.botones.hover());
	}

	click(){
		let config;
		if(this.selector_tam.hover()){
			config = this.selector_tam.click();
		}
		return config;
	}
}
