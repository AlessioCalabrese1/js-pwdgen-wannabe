let myPassword;

let userName = document.getElementById("userName").innerHTML;
console.log(userName);

let i = prompt("Inserisci il tuo nome:");
myPassword = i;
userName = userName + i;
console.log(userName);

document.getElementById("userName").innerHTML = userName;


i = prompt("Inserisci il tuo cognome:");
myPassword = myPassword + i;
let lastName = document.getElementById("lastName").innerHTML;
console.log(lastName)

lastName = lastName + i;
console.log(lastName);

document.getElementById("lastName").innerHTML = lastName;



let userFavoriteColor = document.getElementById("userFavoriteColor").innerHTML;
console.log(userFavoriteColor)


i = prompt("Inserisci il tuo colore preferito:");
myPassword = myPassword + i;
userFavoriteColor = userFavoriteColor + i;
console.log(userFavoriteColor);

document.getElementById("userFavoriteColor").innerHTML = userFavoriteColor;

i = document.getElementById("myPassword").innerHTML;
document.getElementById("myPassword").innerHTML = i + myPassword + "22";



/* test */

let r, g, b, colorRandom;

r = Math.round(Math.random() * 256);
g = Math.round(Math.random() * 256);
b = Math.round(Math.random() * 256);

colorRandom = "rgb(" + r + ", " + g + ", " + b + ")";
console.log(colorRandom);

document.getElementById("title").style.color = colorRandom;




document.getElementById("title").onclick = function () {

    r = Math.round(Math.random() * 256);
    g = Math.round(Math.random() * 256);
    b = Math.round(Math.random() * 256);

    colorRandom = "rgb(" + r + ", " + g + ", " + b + ")";
    console.log(colorRandom);

    document.getElementById("title").style.backgroundColor = colorRandom;
}