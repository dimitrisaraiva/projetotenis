var tenis1 = dunk;
var tenis2 = air_force;
var tenis3 = jordan;
var tenis4 = air_max;
var tenis5 = young;
var tenis6 = superstar;
var tenis7 = nmd;
var tenis8 = celox;
var tenis9 = suede;
var tenis10 = rsz;
var tenis11 = future;
var tenis12 = rider;
var tenis13 = old;
var tenis14 = ultra;
var tenis15 = authe;
var tenis16 = sk8;


function concluir() {
  var soma = 0;
  for (var i = 0; i <= 15; i++) {
      if(document.getElementsByTagName("input")[i].checked){
        soma += parseInt(document.getElementsByTagName("input")[i].value);
      }
  }
  alert(soma);
}
