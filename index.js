let fondoscala;
let Δv;
let Vi;
let livello;
document.getElementById("inviaButton").onclick = function(){

    fondoscala = document.getElementById("fondoLabelBox").value;
    fondoscala = Number(fondoscala);


    livello =  document.getElementById("livellolBox").value;
    livello = Number(livello);

    Δv = (fondoscala / livello);
    document.getElementById("deltaLabel").innerHTML ="Δv è  " + Δv +"mV";







}


let fondoscala2;
let Δv2;
let Vi2;
let livello2;

document.getElementById("invia2Button").onclick = function(){

    Vi2 = document.getElementById("vi2Box").value;
    Vi2 = Number(Vi2);


    Δv2 =  document.getElementById("Δv2Box").value;
    Δv2 = Number(Δv2);

    livello2 = (Vi2 / Δv2);
    document.getElementById("livello2Label").innerHTML ="il livello è  " + livello2;







}


let Δv3;
let Vi3;
let livello3;
document.getElementById("invia3Button").onclick = function(){

    livello3 = document.getElementById("livello3lBox").value;
    livello3 = Number(livello3);


    Δv3 =  document.getElementById("Δv3Box").value;
    Δv3 = Number(Δv3);

    Vi3 = (livello3 * Δv3)/10;
    document.getElementById("Vi3Label").innerHTML =" Vi è  " + Vi3;







}