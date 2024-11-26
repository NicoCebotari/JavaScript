console.log('Happy developing ✨')
function myFunction(){
    document.getElementById("demo").innerHTML = "Hello World";
    document.getElementById("demo").style.color = "red";
}
function concatena(){
    let Nom = document.getElementById("CampNom").value;
    let Llinatges = document.getElementById("CampLlinatges").value;
    alert("Hola"  + Nom + " " + Llinatges);
}