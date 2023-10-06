/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {
    name : "George Yaw Appau-Nkansah",
    photo : "images/George.jpg",
    favoriteFoods : ['Rice', 'Beans', 'Fufu', 'Banku', 'Tuosafi'],
    hobbies : ['Cycling', 'Reading', 'Dancing', 'Singing'],
    placesLived : [],
};


/* Populate Profile Object with placesLive objects */

myProfile.placesLived.push(
    {
        place: 'Adenta', 
        length: '2 years'
},
    {
        place: 'Ashaiman',
        length: '10 years'
},
    {
        place: 'Amasaman',
        length: '1 year'
    }
);

/* DOM Manipulation - Output */

/* Name */
document.getElementById('name').innerHTML = myProfile.name;
/* Photo with attributes */
document.getElementById('photo').setAttribute('src',myProfile.photo);
document.getElementById('photo').setAttribute('alt', myProfile.name);
/* Favorite Foods List*/
myProfile.favoriteFoods.forEach((food) =>{
    let favoriteFoodList = document.createElement('li');
    favoriteFoodList.textContent = food;

    document.getElementById('favorite-foods').appendChild(favoriteFoodList);
})

/* Hobbies List */
myProfile.hobbies.forEach((hobby) =>{
    let hobbyList = document.createElement('li');
    hobbyList.textContent = hobby;
    
    document.getElementById('hobbies').appendChild(hobbyList);
});

/* Places Lived DataList */
myProfile.placesLived.forEach = ((placeLived) => {
    let placeILived = document.createElement('dt');
    placeILived.textContent = placeLived.place;

    let livedLength = document.createElement('dd');
    livedLength.textContent = placeLived.length;

    document.getElementById('places-lived').appendChild(placeILived);
    document.getElementById('places-lived').appendChild(livedLength);
});

