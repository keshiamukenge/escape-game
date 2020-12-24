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
var boutonValider = document.getElementById("valider");
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

//Affichage des indices selon un temps donnée
var indices = [document.querySelector("#indice1"), document.querySelector("#indice2"), document.querySelector("#indice3")];

setTimeout(function() {
	indices[0].style.display = "block";
	}, 20000);
setTimeout(function() {
	indices[0].style.display = "none";
}, 25000);

setTimeout(function() {
	indices[1].style.display = "block";
}, 50000);
setTimeout(function() {
	indices[1].style.display = "none";
}, 55000);

setTimeout(function() {
	indices[2].style.display = "block";
}, 80000);
setTimeout(function() {
	indices[2].style.display = "none";
}, 85000);


//Réactivité du formulaire : Afficher "entrez un pseudo ou entrez un message pour pouvoir envoyer"
var pseudo = document.getElementById("pseudo").value;
var messageUtilisateur = document.getElementById("message").value;
var boutonEnvoyer = document.getElementById("bouton-envoyer");

boutonEnvoyer.addEventListener("click", function formulaire(){
	if (pseudo.length & messageUtilisateur.length == 0){
		alert("Vous devez entrer un pseudo et votre message");
	} if (pseudo.length == 0) {
		alert("Vous devez entrer un pseudo");
	} if(messageUtilisateur.length == 0) {
		alert("Vous devez entrer votre message");
	} else {
		alert("Votre message a bien été envoyer");
	}
});


//Affichage page A propos au clique
var lienApropos = document.getElementById("lien-apropos");
var contenuApropos = document.getElementById("contenu-apropos");

lienApropos.addEventListener("click", function (){
	contenuApropos.style.display = "block";
})
