/* ************First Function************* */
/*
//Normal Fonction
function itsMe() {
    return `Iam A Normal Function`;
}
console.log(itsMe()); // Iam A Normal Function
*/

// Arrow Function
let itsMe = _ => `Iam A Normal Function`;

console.log(itsMe()); // Iam A Normal Function

/* ************First Function************* */






/* ************Second Function************* */
/*
// Normal Function
function urlCreate(protocol, web, tld) {
    return `${protocol}://www.${web}.${tld}`;
}
  console.log(urlCreate("https", "elzero", "org")); // https://www.elzero.org
*/


let urlCreate = (protocol, web, tld) => `${protocol}://www.${web}.${tld}`

  console.log(urlCreate("https", "elzero", "org")); // https://www.elzero.org

  /* ************Second Function************* */