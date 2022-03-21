
window.addEventListener("load", setup);

function setup() {
    configureDOMElementReferences();
    configureDOMElementListeners();
    listLocalStorage();
}

// another way to define a load event...
// window.onload = (event) => {
//     configureDOMElementReferences();
//     configureDOMElementListeners();
//     listLocalStorage();
// }

// one way to define a function
function configureDOMElementReferences() {
    const insertKeyTextInput = document.getElementById("insertKeyTextInput");
    const insertValueTextInput = document.getElementById("insertValueTextInput");
    const insertItemButton = document.getElementById("insertItemButton");
    const deleteKeyTextInput = document.getElementById("deleteKeyTextInput");

    // add code here for the outputList, delete item, and clear storage buttons
    const outputListPlaceHolder = document.getElementById("outputListPlaceHolder")
    const deleteItemButton = document.getElementById("deleteItemButton")
    const clearStorage = document.getElementById("clearStorage")
}

// another way to define a function: using fat arrow
const configureDOMElementListeners = () => {
    insertItemButton.addEventListener("click", insertItemFunction);
    deleteItemButton.addEventListener("click", deleteItemFunction);

    // add code here for the clear storage button function 
    clearStorage.addEventListener("click", clearStorageFunction)
}

function insertItemFunction() {
    // retrieving and storing the key and value from page the text input fields
    retrieveAndStoreData();

    // update the list of local store data in the page
    listLocalStorage();

    // empty the input fields
    emptyInputFields();
}

const retrieveAndStoreData = () => {
    // add code here
    // retrieve the key and value from input field
    const key = insertKeyTextInput.value;
    const value = insertValueTextInput.value

    // check if the key and the value are not empty before trying to store them.
    // if they are not, store them in the local storage
    if (key && value) {
        localStorage.setItem(key, value);
    }
}


// yet, a third way of creating a function
const listLocalStorage = function () {
    // add code here
    // create an innerHTML text for the output list element
    outputListPlaceHolder.innerHTML = "";
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        const value = localStorage.getItem(key);
        outputListPlaceHolder.innerHTML += `${key}: ${value}<br />`;
    }

    // loop over the localStorage
    // get the key name from storage
    // get the value based on the key name from storage
    // concatenate this info into the innerHTML 
}

const emptyInputFields = () => {
    // add code here
    insertKeyTextInput.value = "";
    insertValueTextInput.value = "";
}

function deleteItemFunction() {
    // retrieve key from HTML input field and delete data from storage
    retrieveAndDeleteData();

    // update the list of local store data in the page
    listLocalStorage();

    // empty the input field
    deleteKeyTextInput.value = "";
}

const retrieveAndDeleteData = () => {
    // add code here
    // retrieve the key that the user typed in the text field
    const key = deleteKeyTextInput.value;
    if (key) {
        localStorage.removeItem(key);
    }

    deleteKeyTextInput.value = "";

}

function clearStorageFunction() {
    // issue the single command to clear local storage
    localStorage.clear();

    // update the list of local store data in the page
    listLocalStorage();
}





