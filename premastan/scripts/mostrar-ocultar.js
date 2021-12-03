function mostrar() {
	var contenido,contenido2, mostrar;
	contenido = document.getElementById("contenido");
	contenido2 = document.getElementById("contenido2");
	if(contenido.style.visibility == "hidden" || contenido2.style.visibility == "hidden") {
		contenido.style.visibility = "visible";
		contenido2.style.visibility = "visible";
		mostrar = document.getElementById("mostrar").childNodes[0];
		mostrar.data = "";
	}
		else {
			contenido.style.visibility = "hidden";
			contenido2.style.visibility = "hidden";
			mostrar = document.getElementById("mostrar").childNodes[0];
			mostrar.data = "";
		}
}
