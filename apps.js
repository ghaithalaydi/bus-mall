'use strict'
var arrayOfProducts = [];
var parentElement = document.getElementById("containingSection");
var leftImage = document.getElementById("left-image");
var middleImage = document.getElementById("middle-image");
var rightImage = document.getElementById("right-image");
var resultsSection = document.getElementById("results-section")
var resultEntry = [];
var numberOfRounds = 0;
var previousPicks = [];
var drawingArea = document.getElementById("stats").getContext("2d");

var storedPicks = [];
var storedShows = [];

function Product(nameParam, imgPath) {
    this.name = nameParam,
        this.img = imgPath,
        this.timeShown = 0,
        this.timesPicked = 0,
        arrayOfProducts.push(this);
        retrievingData();


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

console.log(localStorage);


function renderImages() {
    var randomNumberFirst = Math.round(Math.random() * (arrayOfProducts.length - 1));
    while (randomNumberFirst === previousPicks[1] || randomNumberFirst === previousPicks[2] || randomNumberFirst === previousPicks[3]) {
        randomNumberFirst = Math.round(Math.random() * (arrayOfProducts.length - 1));
    }
    leftImage.setAttribute("src", arrayOfProducts[randomNumberFirst].img);
    arrayOfProducts[randomNumberFirst].timeShown++;

    var randomNumberSecond = Math.round(Math.random() * (arrayOfProducts.length - 1));
    while (randomNumberSecond === randomNumberFirst || randomNumberSecond === previousPicks[1] || randomNumberSecond === previousPicks[2] || randomNumberSecond === previousPicks[3]) {
        randomNumberSecond = Math.round(Math.random() * (arrayOfProducts.length - 1));
    }
    middleImage.setAttribute("src", arrayOfProducts[randomNumberSecond].img);
    arrayOfProducts[randomNumberSecond].timeShown++;

    var randomNumberThird = Math.round(Math.random() * (arrayOfProducts.length - 1));
    while (randomNumberThird === randomNumberFirst || randomNumberThird === randomNumberSecond || randomNumberThird === previousPicks[1] || randomNumberThird === previousPicks[2] || randomNumberThird === previousPicks[3]) {
        randomNumberThird = Math.round(Math.random() * (arrayOfProducts.length - 1));
    }
    rightImage.setAttribute("src", arrayOfProducts[randomNumberThird].img);
    arrayOfProducts[randomNumberThird].timeShown++;

    previousPicks = [];

    previousPicks.push(randomNumberFirst);
    previousPicks.push(randomNumberSecond);
    previousPicks.push(randomNumberThird);
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
        storingYourData();
        parentElement.removeEventListener("click", userChoice)
        var resultsButton = document.createElement("button");
        resultsSection.appendChild(resultsButton);
        resultsButton.textContent = "View Results";
        resultsButton.addEventListener("click", printOut)
    }
    renderImages();
}
)
// function printOut() {

//     for (var index = 0; index < arrayOfProducts.length; index++) {
//         resultEntry[index] = document.createElement("p");
//         resultEntry[index].textContent = arrayOfProducts[index].name + " had " + arrayOfProducts[index].timesPicked + " votes, and was seen" + arrayOfProducts[index].timeShown + " times.";
//         resultsSection.appendChild(resultEntry[index]);

//     }


// }
function printOut() {
    var arrayProductName = [];
    for (var index = 0; index < arrayOfProducts.length; index++) {
        arrayProductName[index] = arrayOfProducts[index].name;
    }
    var arrayTimesShown = [];
    for (var x = 0; x < arrayOfProducts.length; x++) {
        arrayTimesShown[x] = arrayOfProducts[x].timeShown;
    }
    var arrayTimesPicked = [];
    for (var z = 0; z < arrayOfProducts.length; z++) {
        arrayTimesPicked[z] = arrayOfProducts[z].timesPicked;
    }

    var myChart = new Chart(drawingArea, {
        type: 'bar',
        data: {
            labels: arrayProductName,
            datasets: [{
                label: '# of Times displayed',
                data: arrayTimesShown,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                    "rgba(235, 22, 68, 0.2)",
                    "rgba(117, 85, 5, 0.2)",
                    "rgb(13, 112, 112,0.2)",
                    "rgba(28, 9, 65, 0.2)",
                    "rgba(25, 65, 9, 0.2)",
                    "rgba(53, 65, 9, 0.2)",
                    "rgba(65, 9, 48, 0.2)",
                    "rgba(65, 20, 9, 0.2)",
                    "rgba(75, 20, 9, 0.2)",
                    'rgba(153, 155, 255, 0.2)',
                    'rgba(200, 102, 255, 0.2)',
                    'rgba(153, 50, 70, 0.2)',
                    'rgba(112, 157, 112, 0.2)',
                    'rgba(69, 155, 65, 0.2)',


                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                    "rgba(235, 22, 68, 1),",
                    "rgba(117, 85, 5, 1)",
                    "rgb(13, 112, 112,1)",
                    "rgba(28, 9, 65, 1)",
                    "rgba(25, 65, 9, 1)",
                    "rgba(53, 65, 9, 1)",
                    "rgba(65, 9, 48, 1)",
                    "rgba(65, 20, 9, 1)",
                    "rgba(75, 20, 9, 1)",
                    'rgba(153, 155, 255, 1)',
                    'rgba(200, 102, 255, 1)',
                    'rgba(153, 50, 70, 1)',
                    'rgba(112, 157, 112, 1)',
                    'rgba(69, 155, 65, 1)',

                ],
                borderWidth: 1
            }, {
                label: '# of Times Picked',
                data: arrayTimesPicked,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                    "rgba(235, 22, 68, 0.2)",
                    "rgba(117, 85, 5, 0.2)",
                    "rgb(13, 112, 112,0.2)",
                    "rgba(28, 9, 65, 0.2)",
                    "rgba(25, 65, 9, 0.2)",
                    "rgba(53, 65, 9, 0.2)",
                    "rgba(65, 9, 48, 0.2)",
                    "rgba(65, 20, 9, 0.2)",
                    "rgba(75, 20, 9, 0.2)",
                    'rgba(153, 155, 255, 0.2)',
                    'rgba(200, 102, 255, 0.2)',
                    'rgba(153, 50, 70, 0.2)',
                    'rgba(112, 157, 112, 0.2)',
                    'rgba(69, 155, 65, 0.2)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                    "rgba(235, 22, 68, 1),",
                    "rgba(117, 85, 5, 1)",
                    "rgb(13, 112, 112,1)",
                    "rgba(28, 9, 65, 1)",
                    "rgba(25, 65, 9, 1)",
                    "rgba(53, 65, 9, 1)",
                    "rgba(65, 9, 48, 1)",
                    "rgba(65, 20, 9, 1)",
                    "rgba(75, 20, 9, 1)",
                    'rgba(153, 155, 255, 1)',
                    'rgba(200, 102, 255, 1)',
                    'rgba(153, 50, 70, 1)',
                    'rgba(112, 157, 112, 1)',
                    'rgba(69, 155, 65, 1)',

                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });


}

function storingYourData() {

        // for (var index = 0; index < arrayOfProducts.length; index++) {
            localStorage.setItem("Occurances", JSON.stringify(arrayOfProducts));
        // localStorage.setItem("Times Shown", JSON.stringify(storedShows));
            // storedPicks[index] = arrayOfProducts[index].timesPicked;
            // storedShows[index] = arrayOfProducts[index].timeShown;

        }
        // localStorage.setItem("Times Picked", JSON.stringify(storedPicks));
        // localStorage.setItem("Times Shown", JSON.stringify(storedShows));
// }

function retrievingData(){
    if(localStorage.length>0){
        arrayOfProducts= JSON.parse(localStorage.getItem("Occurances"))}
    }
//         var retrievedPicks = JSON.parse(localStorage.getItem("Times picked"));
//         console.log(retrievedPicks)
//         for (let index = 0; index < arrayOfProducts.length; index++) {
//             arrayOfProducts[index].timesPicked = retrievedPicks[index];
            
//         }
//         var retrievedShows = JSON.parse(localStorage.getItem("Times shown"));
//         for (let z = 0; index < arrayOfProducts.length; z++) {
//             arrayOfProducts[z].timesPicked = retrievedShows[z];
//         }

//     }
// }
