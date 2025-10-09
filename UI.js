class UI{
	constructor(pos_canvas,tam_canvas){
		this.tam_sel = TAMS[0];
		this.col_sel = COLORES['Magenta'];
		this.herramienta_sel = HERRAMIENTAS['Pincel'];
		
		this.selector_tam = new Selector_Tam({'x': pos_canvas['x'] + tam_canvas['x']*0.5,'x': pos_canvas['y']});
		this.selector_col = new Selector_Color();
		this.selector_her = new Selector_Herramienta();
		this.botones = new Botones_Cosas();
		
	}
}
