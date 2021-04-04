const grid = new Muuri ('.grid',{
 layout: {
   
    rounding: false
  }	
	
});

window.addEventListener('load',()=>{
	grid.refreshItems().layout();	document.getElementById('grid').classList.add('imagenes-cargadas');
	
	
	
	
	//filtro por categoria//
			const enlaces = document.querySelectorAll('#categoria a');
	enlaces.forEach((elemento)=>{
	
	elemento.addEventListener('click', (evento)=>{
	evento.preventDefault();
		enlaces.forEach((enlace)=>enlace.classList.remove('activo'));
	evento.target.classList.add('activo');
		
		
	const categoria = evento.target.innerHTML.toLowerCase();
		categoria === 'all' ? grid.filter('[data-categoria]'):
		grid.filter(`[data-categoria="${categoria}"]`)
});
});		
	
		//filtro por busqueda//
	
	
	document.querySelector('#barra-busqueda').addEventListener('input',(evento)=>{
		const busqueda = evento.target.value;
		grid.filter( (item) => item.getElement().dataset.etiquetas.includes(busqueda) );
		
	});
	});