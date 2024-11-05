function MultiplierPar2(nombre) {
    // Prend en entrée un nombre et le multiplie par deux (la sortie est aussi un nombre).
    return nombre*2;
} 

function est_premier(nombre){
    // Détermine si un nombre est premier ou non. 
    // Prend en entrée un nombre et renvoie un booléen (true ou false).
    if(nombre<2){
        return true;
    }
    for(i=2; i<=nombre**(1/2); i++){
        if(nombre%i==0){
            return false;
        }
    }
    return true;
}

function chaine_la_plus_longue() {
    // Renvoie sur le HTML la ou les chaînes de caractères les plus longues parmis celles remplies dans le formulaire.
    // Chaque ligne du formulaire correspond à une chaîne de caractères.
    var tableau=document.getElementById("inputtab").value.split("\n");
    var a=tableau[0];
    var s0=a.length;
    var test=0;
    for (var i=1;i<tableau.length;i++){
        var s=tableau[i].length;
        if(s==s0){
            if(test==0){
                test=2;
            }
            else{
                test+=1;
            }
        }
        else{
            if (s>s0){
                s0=s;
                a=tableau[i];
                test=0;
            }
        }
    }
    if(test!=0){
        document.getElementById("result_chaine").innerHTML="Il y a "+test+" chaines de même longueur qui sont les plus longues."
    }
    else{
        document.getElementById("result_chaine").innerHTML="La chaîne la plus longue est "+a+" et elle fait "+s0+" caractères.";
    }
}

function calculer(){
    // Donne sur le HTML si un nombre est premier ou non et calcule son double.
    var input=document.getElementById("inputNum").value;
    var result=MultiplierPar2(input);
    if(est_premier(input)){
        document.getElementById("result").innerHTML="Le nombre "+input+" est premier et son  double est "+result;
    }
    else{
        document.getElementById("result").innerHTML="Le nombre "+input+" n'est pas premier et son  double est "+result;
    }
}

function choix_possibles(){
    // Sur les trois choix donnés, si un d'entre eux est coché, enlève les deux autres.
    if(document.getElementById("Choixriche").checked){
        document.getElementById("Choixmoyen").remove;
        document.getElementById("Choixpauvre").remove;
    }
    if(document.getElementById("Choixmoyen").checked){
        document.getElementById("Choixriche").remove;
        document.getElementById("Choixpauvre").remove;
    }
    if(document.getElementById("Choixpauvre").checked){
        document.getElementById("Choixmoyen").remove;
        document.getElementById("Choixpauvre").remove;
    }
}
function test_form_riche_moyen_pauvre(){
    // Envoie un message lorsqu'un choix est coché, selon celui qui est coché.
    if(document.getElementById("Choixriche").checked){
        alert("L'argent ne fait pas le bonheur !");
    }
    if(document.getElementById("Choixmoyen").checked){
        alert("Comme tout le monde");
    }
    if(document.getElementById("Choixpauvre").checked){
        alert("Tant pis pour vous. La vie est parfois injuste")
    }
}  