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