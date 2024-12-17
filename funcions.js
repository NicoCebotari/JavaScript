function esparell(){
    // Llegim el que han introduit a les variables
    var a = document.getElementById('numero1').value;
    //Passam el text d'a a números (Integer - enter)
    a = parseInt(a);

    if (a%2==0){
        document.getElementById('resposta1Verda').hidden = false;
        document.getElementById('resposta1Vermella').hidden = true;

    }else{
        document.getElementById('resposta1Vermella').hidden = false;
        document.getElementById('resposta1Verda').hidden = true;
    }

}

function divisors () {
    document.getElementById('divisors1blau').hidden = true;
    document.getElementById('divisors1vermell').hidden = true;
    document.getElementById('divisors1verd').hidden = true;

    var b = document.getElementById('numero2').value;
    b = parseInt(b);

    if (b%2==0) {
        document.getElementById('divisors1blau').hidden = false;

    }if (b%3==0){
        document.getElementById('divisors1vermell').hidden = false;

    } if (b%6==0) {
        document.getElementById('divisors1verd').hidden = false;
    }
}
function valorsentre() {

    var a = document.getElementById('num1').value

    a = parseInt(a);

    var b = document.getElementById('num2').value

    b = parseInt(b);

    let text_valors="";

    if (a > b) {
        for (let i = a - 1; i > b; i--) {

        text_valors += i + " ";
        }

    } else {
        for (let i = a + 1; i < b; i++) {

        text_valors += i + " ";
        }
    }
    document.getElementById('valors').hidden = false;
    document.getElementById('valors').innerHTML=text_valors;
}