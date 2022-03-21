window.addEventListener("load", addListeners)
window.addEventListener("load", populateList)
var count = 0;

function addListeners() {
    const firstInputText = document.getElementById("inputText")
    const secondInputText = document.getElementById("secondInputText")
    const removeItemsButton = document.getElementById("removeButton")
    document.getElementById("buttonSubmit").addEventListener("click", showList);
    document.getElementById("removeButton").addEventListener("click", removeItems);
}

function showList() {
    var itemDescription = document.getElementById("inputText").value;
    var itemQuantity = document.getElementById("secondInputText").value;
    var li = "<li>" + itemDescription + " " + itemQuantity + "</li>";
    document.getElementById("placeContentHere").innerHTML += li;
    localStorage.setItem(itemDescription, itemQuantity)
}

function populateList() {
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        const value = localStorage.getItem(key);
        ListArray.push(key, value)
        console.log(ListArray)
        return ListArray
    }
}
