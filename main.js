let classe =[];
let x =  parseInt (prompt(" choisissez le nombre max d'étudiants dans la classe"));
while (classe.length !=x) {
    classe.push(x)
    x=prompt("entrez le nom des etudiants")
    alert(classe)
}
