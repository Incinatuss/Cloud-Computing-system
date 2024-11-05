function MultiplierPar2(a) {
    return a*2;
} 

function premier(a){
    if(a<2){
        return true;
    }
    for(i=2; i<=a**(1/2); i++){
        if(a%i==0){
            return false;
        }
    }
    return true;
}

function chaine_la_plus_longue() {
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
    var input=document.getElementById("inputNum").value;
    var result=MultiplierPar2(input);
    if(premier(input)){
        document.getElementById("result").innerHTML="Le nombre "+input+" est premier et son  double est "+result;
    }
    else{
        document.getElementById("result").innerHTML="Le nombre "+input+" n'est pas premier et son  double est "+result;
    }
}

function possible(){
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
function test_form(){
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