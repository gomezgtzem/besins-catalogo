function mostrar() {
	var contenido,contenido2, mostrar;
	contenido = document.getElementById("contenido");
	if(contenido.style.visibility == "hidden" ) {
		contenido.style.visibility = "visible";
		mostrar = document.getElementById("mostrar").childNodes[0];
		mostrar.data = "";
	}
		else {
			contenido.style.visibility = "hidden";
			mostrar = document.getElementById("mostrar").childNodes[0];
			mostrar.data = "";
		}
}
