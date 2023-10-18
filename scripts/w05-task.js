/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templesElement = document.getElementById("temples");
let templeList = [];

/* async displayTemples Function */

const displayTemples = (temples) => {
  temples.forEach((temple) => {
    const article = document.createElement("article");

    const h3 = document.createElement("h3");
    h3.textContent = temple.templeName;

    const img = document.createElement("img");
    img.src = temple.imageUrl;
    img.alt = temple.location;

    article.appendChild(h3);
    article.appendChild(img);
    templesElement.appendChild(article);
  });
}

/* async getTemples Function using fetch()*/
const getTemples = async () => {
  const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json");
  templeList = await response.json();

  displayTemples(templeList);
};
getTemples();

/* reset Function */
const reset = () => {
  templesElement.innerHTML = "";
};

/* sortBy Function */
const sortBy = () => {
  reset();
  const filter = document.getElementById("sortBy").value;

  switch (filter) {
    case "utah":
      displayTemples(templeList.filter(temple => temple.location.includes("Utah")));
      break;
    case "nonutah":
      displayTemples(templeList.filter(temple => !temple.location.includes("Utah")));
      break;
    case "older":
      displayTemples(templeList.filter(temple => new Date(temple.dedicated) < new Date(1950, 0, 1)));
      break;
    case "alphabetical":
      displayTemples(templeList.slice().sort((temple1, temple2) => {
        const templeName1 = temple1.templeName.toLowerCase();
        const templeName2 = temple2.templeName.toLowerCase();
        if (templeName1 < templeName2) return -1;
        else if (templeName1 > templeName2) return 1;
        else return 0;
      }));
      break;
    case "all":
      displayTemples(templeList);
      break;
    default:
  }
};

/* Event Listener */
document.getElementById("sortBy").addEventListener("change", sortBy);
