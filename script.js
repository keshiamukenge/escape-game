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

//Correction du mot de passe
var boutonCorrection = document.getElementById("bouton");
var mdpDefi1 = 123;
var ctaNext = document.getElementById("cta-next-defi");

boutonCorrection.addEventListener('click', function correctMdp (){
	if(numMdp.value == mdpDefi1){
		alert("Le mot de passe est correct");
		ctaNext.style.display = "block";
	}
	else {
		alert("Le mot de passe est incorrect");
	}
});








