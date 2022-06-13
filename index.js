let userName = document.getElementById("userName").innerHTML;
console.log(userName)

userName = userName + prompt("Inserisci il tuo nome:");
console.log(userName);

document.getElementById("userName").innerHTML = userName;



let lastName = document.getElementById("lastName").innerHTML;
console.log(lastName)

lastName = lastName + prompt("Inserisci il tuo cognome:");
console.log(lastName);

document.getElementById("lastName").innerHTML = lastName;



let userFavoriteColor = document.getElementById("userFavoriteColor").innerHTML;
console.log(userFavoriteColor)

userFavoriteColor = userFavoriteColor + prompt("Inserisci il tuo colore preferito:");
console.log(userFavoriteColor);

document.getElementById("userFavoriteColor").innerHTML = userFavoriteColor;



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