//Affichage page A propos au clique
var lienApropos = document.getElementById("a-propos");
var contenuApropos = document.getElementById("contenu-apropos");

lienApropos.addEventListener("click", () => {
	if (contenuApropos.style.visibility != "visible") {
		contenuApropos.style.visibility = "visible";
	} else {
		contenuApropos.style.visibility = "hidden";
	}
});


//Création de l'intéractivité du pad munérique
var numMdp = document.getElementById("num-utilisateur");

var numPad = [...document.querySelectorAll(".num-pad")];
console.log(numPad);


numPad.forEach(numPad => {
	numPad.addEventListener("click", function actionMdp() {
		numMdp.value = numMdp.value + numPad.innerHTML;
	})
});

//Validation du mot de passe
var boutonValider = document.getElementById("valider");
var mdpDefi1 = 399;
var ctaNext = document.getElementById("cta-next-defi");

boutonValider.addEventListener('click', function correctMdp() {
	if (numMdp.value == mdpDefi1) {
		alert("Le mot de passe est correct");
		ctaNext.style.display = "block";
	} else {
		alert("Le mot de passe est incorrect");
	}
});

//Affichage des indices selon un temps donnée
//Je devrais utiliser une boucle forEach pour factoriser ce bout de code mais je n'ai pas réussi à la mettre en place
var indices = [document.querySelector("#indice1"), document.querySelector("#indice2"), document.querySelector("#indice3")];

setTimeout(function () {
	indices[0].style.display = "block";
}, 20000);
setTimeout(function () {
	indices[0].style.display = "none";
}, 25000);

setTimeout(function () {
	indices[1].style.display = "block";
}, 50000);
setTimeout(function () {
	indices[1].style.display = "none";
}, 55000);

setTimeout(function () {
	indices[2].style.display = "block";
}, 80000);
setTimeout(function () {
	indices[2].style.display = "none";
}, 85000);