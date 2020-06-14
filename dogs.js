const BREEDS_LIST = "https://dog.ceo/api/breeds/list/all";
const select = document.querySelector(".breeds");



fetch(BREEDS_LIST)
.then(function(response) {
    return response.json();
})
.then(function(data) {
    const breeds = Object.keys(data.message);
    for (let i = 0; i < breeds.length; i++) {
        const option = document.createElement("option");
        option.value = breeds[i];
        option.innerText = breeds[i];
        
        select.appendChild(option);
    }
})


select.addEventListener("change", function(event) {
    let url = `https://dog.ceo/api/breed/${event.target.value}/images/random`;

    getDog(url);
})


const img = document.querySelector(".dog-img");
const spinner = document.querySelector(".spinner");


function getDog (url) {
    spinner.classList.add("show");
    img.classList.remove("show")
    fetch(url)
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        img.src = data.message;
    })
}

img.addEventListener("load", function() {
    setTimeout( () => { 
        spinner.classList.remove("show");
        img.classList.add("show");
        }, 2000);
})