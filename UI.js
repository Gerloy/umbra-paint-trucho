class UI{
	constructor(){
		this.tam_sel = TAMS[0];
		this.col_sel = COLORES['Magenta'];
		this.herramienta_sel = HERRAMIENTAS['Pincel'];
		
		this.selector_tam = new Selector_Tam();
		this.selector_col = new Selector_Color();
		this.selector_her = new Selector_Herramienta();
		this.botones = new Botones_Cosas();
		
	}
}
