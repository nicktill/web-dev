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
    document.getElementById("flag-container").src = "https://restcountries.com/data/png/col.png";
    document.getElementById("flag-container").alt = 'Flag of Banana Republic';
    document.getElementById("capital").innerHTML = 'Coconut';
    document.getElementById("population").innerHTML = '123456';
    document.getElementById("currencies").innerHTML = 'Dolar';
    document.getElementById("region").innerHTML = 'Americas';
    document.getElementById("subregion").innerHTML = 'Latin America';
    document.getElementById("googleMap").href = "https://goo.gl/maps/uDWEUaXNcZTng1fP6";
}
window.addEventListener('load', setup);