// Global Variables
var countriesListDropDown;
function setup() {
    countriesListDropDown = document.getElementById("countries");
    countriesListDropDown.addEventListener("change", newCountrySelection);
    fetchListOfCountries();
}
function fetchListOfCountries() {
    // listOfCountries = ['Country 01', 'Country 02', 'Country 03'];
    fetch('https://restcountries.com/v3.1/all').then(res => res.json())
        .then(data => {
            console.log(data)
            let listOfCountries = getListOfCountries(data)
            initializeDropDown(listOfCountries)
        })
}

function getListOfCountries(data) {
    let listOfCountries = [];
    for (let i = 0; i < data.length; i++) {
        listOfCountries.push(data[i].name.common)
    }
    return listOfCountries
    console.log(listOfCountries);
}

function initializeDropDown(listOfCountries) {
    let options = "";
    for (let i = 0; i < listOfCountries.length; i++) {
        options += `<option value="${listOfCountries[i]}">${listOfCountries[i]}</option>`;
    }
    countriesListDropDown.innerHTML = options;
    countriesListDropDown.selectedIndex = Math.floor(Math.random() * listOfCountries.length);
    displayCountryInfo(countriesListDropDown[countriesListDropDown.selectedIndex].value);
}
function newCountrySelection(event) {
    displayCountryInfo(event.target.value);
}
function displayCountryInfo(countryName) {
    let url = `https://restcountries.com/v3.1/name/${countryName}`;
    fetch(url)
        .then(res => res.json())
        .then(data => {
            document.getElementById("flag-container").src = data[0].flags["png"];
            document.getElementById("flag-container").alt = "Flag of " + data[0].name.common;
            document.getElementById("capital").innerHTML = data[0].capital;
            document.getElementById("population").innerHTML = data[0].population.toLocaleString("en-US")
            document.getElementById("currencies").innerHTML = "text"
            document.getElementById("region").innerHTML = data[0].region;
            document.getElementById("subregion").innerHTML = data[0].subregion;
            document.getElementById("googleMap").href = data[0].maps.googleMaps;
        })
        .catch(err => console.log("Error", err));


}
window.addEventListener('load', setup);