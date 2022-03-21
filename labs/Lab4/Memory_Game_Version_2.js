// scripting code should be in its own separate file .js
// you will move this code into that js file for your labsetupGame();
// array containing the name of each image to be placed into the web page
const images = ["camera", "desktop_computer", "game_control", "ipod", "laundry",
    "microwave", "mouse", "pen_driver", "phone", "projector",
    "refrigerator", "vacuum_cleaner"];


// an array of indices. they will point to a figure image
const myArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9,
    10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
    20, 21, 22, 23];

// The figure locations must be random/shuffled for every game played
shuffleArray(myArray);
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}
console.log(myArray);   // just printing the cards location in case you want to know before playing the game...

// how the game is played:
// user clicks on a card: if it is the first card, leave it open and store the card information in memory
// the user clicks a second card: the program checks if it has the same img as the first card (stored in memory)
// if it has the same image, replace both card pictures with a blank picture
// if not, turn the cards up side down again (replace current pictures with the back side picture)

// variables needed for the above logic
var numberOfCardsOpened = 0;
var firstCardSelectedSrc;
var firstCardSelected;
var numbTrials = 1; //counter for numbTrials

// this function is called everytime the player clicks on the top of a card
function check_selection(selectedCard) {
    const imageElement = selectedCard;
    const cardNumber = imageElement.getAttribute("cardNumber");

    // if it is the first card, e.g., (numberOfCardsOpened === 0), 
    // leave it open and store the card information in memory
    if (numberOfCardsOpened === 0) {
        // this logic only should be run if the user clicks a card that is 
        // not already open or doesn't have a blank picture
        if (imageElement.src.includes("images/back_side.png")) {
            // save info of the open card to be used for comparing with the second card later
            imageElement.src = `/images/${images[Math.floor(myArray[cardNumber] / 2)]}.png`;
            firstCardSelectedSrc = imageElement.src;
            numberOfCardsOpened = 1;
            firstCardSelected = imageElement;
        }
    } else if (numberOfCardsOpened === 1) {
        // second card being selected 
        if (imageElement.src.includes("images/back_side.png")) {
            imageElement.src = `/images/${images[Math.floor(myArray[cardNumber] / 2)]}.png`;
            // check if both cards have the same image
            if (firstCardSelectedSrc === imageElement.src) {
                // if they have the same picture, wait 0.5 seconds and 
                // them replace the cards' images with a blank image 
                // and reset other variables as shown below
                setTimeout(function () {
                    firstCardSelected.src = "images/empty_image.png";
                    imageElement.src = "images/empty_image.png";
                    numberOfCardsOpened = 0;
                    firstCardSelected = "";
                }, 500);
            } else {
                // if they do not have the same picture, wait 0.5 seconds and
                // flip the cards again, i.e., placing the back_side.png image
                // on those cards and reset other variables as shown below
                setTimeout(function () {
                    firstCardSelected.src = "images/back_side.png";
                    imageElement.src = "images/back_side.png";
                    numberOfCardsOpened = 0;
                    firstCardSelected = "";
                    document.getElementById("numberOfTrials").innerHTML = numbTrials++;
                }, 500);

            }
        }
    }
}
window.onload = function setupGame() {
    for (var i = 0; i < 24; i++) {
        var img = document.createElement("img");
        img.src = "images/back_side.png";
        img.setAttribute("cardNumber", i);
        img.addEventListener("click", (e) => check_selection(e.target));
        document.getElementById("wrapper").appendChild(img);

    }
}


