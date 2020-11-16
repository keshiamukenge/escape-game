//Création de l'intéractivité du pad munérique
var numMdp = document.getElementById("num-utilisateur");

var numPad = [...document.querySelectorAll(".num-pad")];
console.log(numPad);


numPad.forEach(numPad => {
	numPad.addEventListener("click", function actionMdp() {
		numMdp.value = numMdp.value + numPad.innerHTML;
	})
	return;
});

//Validation du mot de passe
var boutonValider = document.getElementById("bouton");
var mdpDefi1 = 1389;
var ctaNext = document.getElementById("cta-next-defi");

boutonValider.addEventListener('click', function correctMdp(){
	if(numMdp.value == mdpDefi1){
		alert("Le mot de passe est correct");
		ctaNext.style.display = "block";
	}
	else {
		alert("Le mot de passe est incorrect");
	}
});

//Affichage des indices selon un temps donné
var indice1 = document.querySelector("#indice1");
var indice2 = document.querySelector("#indice2");
var indice3 = document.querySelector("#indice3");

setTimeout(function() {
	indice1.style.display = "block";
	}, 20000);
setTimeout(function() {
	indice1.style.display = "none";
}, 25000);

setTimeout(function() {
	indice2.style.display = "block";
}, 50000);
setTimeout(function() {
	indice2.style.display = "none";
}, 55000);

setTimeout(function() {
	indice3.style.display = "block";
}, 80000);
setTimeout(function() {
	indice3.style.display = "none";
}, 85000);








