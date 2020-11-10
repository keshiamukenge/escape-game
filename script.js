//Création de l'intéractivité du pad munérique
var numPad = [document.querySelectorAll("num-pad")];
var numMdp1 = document.getElementById("num-utilisateur-1");
var numMdp2 = document.getElementById("num-utilisateur-2");
var numMdp3 = document.getElementById("num-utilisateur-3");

var mdpComplet = ["numMdp1", "numMdp2", "numMdp3"];

numPad.addEventListener("click", function() {
	if(mdpComplet[0] == ""){
  	mdpComplet[0].value = numPad.value
  } if(mdpComplet[1]){
  	mdpComplet[1].value = numPad.value
  }else {
  	mdpComplet[2].value = numPad.value
  }
});