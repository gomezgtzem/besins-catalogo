function marcoYodo() {
	var yodo,acidofolico,omega3,vitaminaD,vitaminaE;
	yodo = document.getElementById("yodo");
	acidofolico = document.getElementById("acidofolico");
	omega3 = document.getElementById("omega3");
	vitaminaD = document.getElementById("vitaminaD");
	vitaminaE = document.getElementById("vitaminaE");
	if(yodo.style.visibility == "hidden" ) {
		yodo.style.visibility = "visible";
		acidofolico.style.visibility = "hidden";
		omega3.style.visibility = "hidden";
		vitaminaD.style.visibility = "hidden";
		vitaminaE.style.visibility = "hidden";
	}
		else {
			yodo.style.visibility = "hidden";
		}
}

function marcoAcido() {
	var yodo,acidofolico,omega3,vitaminaD,vitaminaE;
	yodo = document.getElementById("yodo");
	acidofolico = document.getElementById("acidofolico");
	omega3 = document.getElementById("omega3");
	vitaminaD = document.getElementById("vitaminaD");
	vitaminaE = document.getElementById("vitaminaE");
	if(acidofolico.style.visibility == "hidden" ) {
		acidofolico.style.visibility = "visible";
		yodo.style.visibility = "hidden";
		omega3.style.visibility = "hidden";
		vitaminaD.style.visibility = "hidden";
		vitaminaE.style.visibility = "hidden";
	}
		else {
			acidofolico.style.visibility = "hidden";
		}
}

function marcoOmega() {
	var yodo,acidofolico,omega3,vitaminaD,vitaminaE;
	yodo = document.getElementById("yodo");
	acidofolico = document.getElementById("acidofolico");
	omega3 = document.getElementById("omega3");
	vitaminaD = document.getElementById("vitaminaD");
	vitaminaE = document.getElementById("vitaminaE");
	if(omega3.style.visibility == "hidden" ) {
		omega3.style.visibility = "visible";
		acidofolico.style.visibility = "hidden";
		yodo.style.visibility = "hidden";
		vitaminaD.style.visibility = "hidden";
		vitaminaE.style.visibility = "hidden";
	}
		else {
			omega3.style.visibility = "hidden";
		}
}

function marcoVitaminaD() {
	var yodo,acidofolico,omega3,vitaminaD,vitaminaE;
	yodo = document.getElementById("yodo");
	acidofolico = document.getElementById("acidofolico");
	omega3 = document.getElementById("omega3");
	vitaminaD = document.getElementById("vitaminaD");
	vitaminaE = document.getElementById("vitaminaE");
	if(vitaminaD.style.visibility == "hidden" ) {
		vitaminaD.style.visibility = "visible";
		omega3.style.visibility = "hidden";
		acidofolico.style.visibility = "hidden";
		yodo.style.visibility = "hidden";
		vitaminaE.style.visibility = "hidden";
	}
		else {
			vitaminaD.style.visibility = "hidden";
		}
}

function marcoVitaminaE() {
	var yodo,acidofolico,omega3,vitaminaD,vitaminaE;
	yodo = document.getElementById("yodo");
	acidofolico = document.getElementById("acidofolico");
	omega3 = document.getElementById("omega3");
	vitaminaD = document.getElementById("vitaminaD");
	vitaminaE = document.getElementById("vitaminaE");
	if(vitaminaE.style.visibility == "hidden" ) {
		vitaminaE.style.visibility = "visible";
		vitaminaD.style.visibility = "hidden";
		omega3.style.visibility = "hidden";
		acidofolico.style.visibility = "hidden";
		yodo.style.visibility = "hidden";
	}
		else {
			vitaminaE.style.visibility = "hidden";
		}
}
