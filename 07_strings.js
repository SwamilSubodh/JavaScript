const name="swamil"
const repoCount= 50
console.log(name + repoCount + "Value") //old syntax
console.log(`Hello my nsme is ${name} and my repocount is ${repocount}`);

const gameName = new String(`swamil`)
console.log(gameName[0]);
console.log(gameName.length);
gameName.toUpperCase()
gameName.charAt(2)
gameName.indexOf('t')

const newString = gameName.substring(0,4);
console.log(newString);

const url="https://swamil.com/swamil%20subodh"
url.replace('%20','-');