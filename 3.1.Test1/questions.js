
let tailleString = (texte) => {
    return texte.length;
}
let remplaceECar = (texte) => {
    let a = texte.indexOf("e")
    let text =  texte.substr(" ", a) + " " + texte.substr(a + 1 , texte.length);
    return text;
}
let concatString = (texte1, texte2) => {
    return texte1 + texte2;
}
let afficherCar5 =  (texte) => {
    return texte[4];
}
let afficher9Car =  (texte) => {
    return texte.slice(0, 9);
}
let majusculeString =  (texte) => {
    return texte.toUpperCase();
}
let minusculeString =  (texte) => {
    return texte.toLowerCase();
}
let SupprEspaceString =  (texte) => {
    return texte.slice(1, texte.length - 1);
}
let IsString =  (texte) => {
    if (typeof texte === "string") {
        return true;
    } else {
        return false;
    }
}

let AfficherExtensionString =  (texte) => {
    return texte.slice(texte.lastIndexOf('.') + 1);
}
let NombreEspaceString =  (texte) => {
    return texte.match(/([\s]+)/g).length;
}
let InverseString =  (texte) => {
    texte = texte.split("");
    texte = texte.reverse();
    texte = texte.join("");
    return texte;
}

/**
 * Exercices sur les nombres et les caluls mathématiques
 */
let calculPuissance =  (x, y) => {
    return x ** y;
}
let valeurAbsolue =  (nombre) => {
    return Math.abs(nombre);
}
let valeurAbsolueArray =  (array) => {
    let absolutes = [];
    for (let number of array) {
        absolutes.push(Math.abs(number));
    }
    return absolutes;
}
let sufaceCercle =  (rayon) => {
    return Math.ceil(Math.PI * rayon * rayon);
}
let hypothenuse =  (ab, ac) => {
    return Math.hypot(ab, ac);
}
let calculIMC =  (poids, taille) => {
    let imc = new Number(poids / (taille * taille));
    imc = imc.toFixed(2);
    return parseFloat(imc);
}
