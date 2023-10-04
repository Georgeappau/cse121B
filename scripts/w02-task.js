/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */

const fullName = "George Yaw Appau-Nkansah";
const currentYear = new Date().getFullYear();
const profilePicture = "images/George.jpg"



/* Step 3 - Element Variables */
// Accessing elements from HTML
const nameElement = document.getElementById("name");
const foodElement = document.getElementById("food");
const yearElement = document.querySelector("#year");
const imageElement = document.getElementsByTagName("img")[0];




/* Step 4 - Adding Content */

nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = currentYear;
imageElement.setAttribute("src" , profilePicture);
imageElement.width = 200;
imageElement.height = 300;
imageElement.setAttribute("alt" , `Profile image of ${fullName}`);

/* Step 5 - Array */
const myFavoriteFoods = ["Fufu", "Banku","Rice Ball", "Tuosafi"];
foodElement.textContent = myFavoriteFoods.join(", ");
const anotherFavorite = "Rice";
myFavoriteFoods.push(anotherFavorite);
foodElement.innerHTML += `<br>${myFavoriteFoods}`;
myFavoriteFoods.shift();
foodElement.innerHTML += `<br>${myFavoriteFoods}`;
myFavoriteFoods.pop();
foodElement.innerHTML += `<br>${myFavoriteFoods}`;