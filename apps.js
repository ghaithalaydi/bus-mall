'use strict'
var arrayOfProducts = [];
var parentElement = document.getElementById("containingSection");
var leftImage = document.getElementById("left-image");
var middleImage = document.getElementById("middle-image");
var rightImage = document.getElementById("right-image");
var resultsSection = document.getElementById("results-section")
var resultEntry = [];
var numberOfRounds = 0;

function Product(nameParam, imgPath) {
    this.name = nameParam,
        this.img = imgPath,
        this.timeShown = 0,
        this.timesPicked = 0,
        arrayOfProducts.push(this);

}

new Product("bag", "img/bag.jpg");
new Product("banana", "img/banana.jpg");
new Product("bathroom", "img/bathroom.jpg");
new Product("boots", "img/boots.jpg");
new Product("breakfast", "img/breakfast.jpg");
new Product("bubblegum", "img/bubblegum.jpg");
new Product("chair", "img/chair.jpg");
new Product("cthulhu", "img/cthulhu.jpg");
new Product("dog-duck", "img/dog-duck.jpg");
new Product("dragon", "img/dragon.jpg");
new Product("pen", "img/pen.jpg");
new Product("pet-sweep", "img/pet-sweep.jpg");
new Product("scissors", "img/scissors.jpg");
new Product("shark", "img/shark.jpg");
new Product("sweep", "img/sweep.png");
new Product("tauntaun", "img/tauntaun.jpg");
new Product("unicorn", "img/unicorn.jpg");
new Product("usb", "img/usb.gif");
new Product("water-can", "img/water-can.jpg");
new Product("wine-glas", "img/wine-glass.jpg");

function renderImages() {
    var randomNumberFirst = Math.round(Math.random() * (arrayOfProducts.length - 1));
    leftImage.setAttribute("src", arrayOfProducts[randomNumberFirst].img);
    arrayOfProducts[randomNumberFirst].timeShown++;

    var randomNumberSecond = Math.round(Math.random() * (arrayOfProducts.length - 1));
    while (randomNumberSecond === randomNumberFirst) {
        randomNumberSecond = Math.round(Math.random() * (arrayOfProducts.length - 1));
    }
    middleImage.setAttribute("src", arrayOfProducts[randomNumberSecond].img);
    arrayOfProducts[randomNumberSecond].timeShown++;

    var randomNumberThird = Math.round(Math.random() * (arrayOfProducts.length - 1));
    while (randomNumberThird === randomNumberFirst || randomNumberThird === randomNumberSecond) {
        randomNumberThird = Math.round(Math.random() * (arrayOfProducts.length - 1));
    }
    rightImage.setAttribute("src", arrayOfProducts[randomNumberThird].img);
    arrayOfProducts[randomNumberThird].timeShown++;
}

renderImages();

parentElement.addEventListener("click", function userChoice(event) {
    var targetId = event.target.id;
    if (targetId === "right-image" || targetId === "left-image" || targetId === "middle-image" && numberOfRounds < 25) {
        var choice = event.target.getAttribute("src");

        for (var i = 0; i < arrayOfProducts.length; i++) {
            if (arrayOfProducts[i].img === choice) {
                arrayOfProducts[i].timesPicked++;
                numberOfRounds++;
            }

        }

    }

    if (numberOfRounds === 25) {
        parentElement.removeEventListener("click", userChoice)
        var resultsButton = document.createElement("button");
        parentElement.appendChild(resultsButton);
        resultsButton.textContent = "View Results";
        resultsButton.addEventListener("click", printOut)
    }
    renderImages();
}
)
function printOut() {

    for (var index = 0; index < arrayOfProducts.length; index++) {
        resultEntry[index] = document.createElement("p");
        resultEntry[index].textContent = arrayOfProducts[index].name + " had " + arrayOfProducts[index].timesPicked + " votes, and was seen" + arrayOfProducts[index].timeShown + " times.";
        resultsSection.appendChild(resultEntry[index]);

    }


}
