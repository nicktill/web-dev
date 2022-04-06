window.addEventListener("load", addListeners)

function addListeners() {
    document.getElementById("addNewItemButton").addEventListener("click", addNewItem)
    document.getElementById("selectAllItemsButton").addEventListener("click", selectItems)
    document.getElementById("deleteSelectedItemsButton").addEventListener("click", deleteItems)
}

function addNewItem() {
    const divElement = document.createElement("div");


    // element for input text
    const inputTextElememnt = document.createElement("input");
    inputTextElememnt.setAttribute("type", "text");
    inputTextElememnt.setAttribute("size", 40);
    inputTextElememnt.setAttribute("id", "newItemDescription");

    // addButton button
    const addNewButton = document.getElementById("input");
    addNewButton.setAttribute("type", "button");
    addNewButton.setAttribute("id", "addNewItemButton");
    addNewButton.setAttribute("value", "Add New Item");
    addNewButton.addEventListener("click", updateList);

    // append those two elements into the div
    divElement.appendChild(inputTextElememnt);
    divElement.appendChild(addNewButton);
    const itemListDiv = getElementById("inputForNewItem");
    itemListDiv.appendChild(divElement);

}

function updateList() {
    // create a div
    const divElement = document.createElement("div")
    // create a checkbox
    const listItemCheckBoxElement = document.createElement("input");
    listItemCheckBoxElement.setAttribute("type", "checkbox");
    listItemCheckBoxElement.setAttribute("name", "checkBoxName");
    listItemCheckBoxElement.setAttribute("type", "checkbox");
    listItemCheckBoxElement.setAttribute("class", "checkBoxClass");



    // create a label
    const checkBoxLabelElement = document.createElement("label")
    checkBoxLabelElement.setAttribute("for", "checkBoxName");
    // get the text of inputfield

    const ItemTextDescription = document.getElementById("newItemDescription")
    checkBoxLabelElement.textContent = ItemTextDescription.textContent
    // append the new elements into the div
    const pageDiv = document.getElementById("listOfItems");
    pageDiv.appendChild(divElement);
    // append the div into the page div
    // remove the inputs
}

function selectItems() {

}

function deleteItems() {

}