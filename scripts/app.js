//Jesse Abarca
//5/17/22
//Build out a table that is able to sort in ascending and descending order in each field
//Make pagination work for this data
//Able to display 10, 20, 30, 40, 50 results at a time.
// Sort By: ID ,First Name, Last Name, Email, Height, Age
//Import and export and create elements. Build out application for desktop

import { people, getData } from "./fetch.js";

let searchBtn = document.getElementById("searchBtn");
let sortDataSelect = document.getElementById("sortDataSelect");
let numberOfResultsSelect = document.getElementById("numberOfResultsSelect");
let orderOfResultsSelect = document.getElementById("orderOfResultsSelect");


//element to inject to!
let injectHere = document.getElementById("injectHere");
let injectAlert = document.getElementById("injectAlert");

//people has data!

searchBtn.addEventListener('click', function (e) {
    let tempArr = [];
    injectHere.innerHTML = ""; //this allows the table to reset and querry again!
    injectAlert.innerHTML = "";
    let querySpecified = sortDataSelect.value;
    let numberOfResultsSpecified = numberOfResultsSelect.value;
    let orderAscOrDec = orderOfResultsSelect.value;

    //data validation prior to executing a query search!
    if (querySpecified.length < 1 || numberOfResultsSelect.length < 1 || orderAscOrDec.length < 1) {
        //Enter the alert here!
        createAlert();
    } else {

        switch (numberOfResultsSpecified) {
            case "10":
                for (let i = 0; i <= 9; i++) {
                    tempArr.push(people[i]);
                }
                break;

            case "20":
                for (let i = 0; i <= 19; i++) {
                    tempArr.push(people[i]);
                }
                break;

            case "30":
                for (let i = 0; i <= 29; i++) {
                    tempArr.push(people[i]);
                }
                break;

            case "40":
                for (let i = 0; i <= 39; i++) {
                    tempArr.push(people[i]);
                }
                break;

            case "50":
                for (let i = 0; i <= 49; i++) {
                    tempArr.push(people[i]);
                }
                break;

            case "100":
                for (let i = 0; i < people.length; i++) {
                    tempArr.push(people[i]);
                }
                break;

            default:
                for (let i = 0; i < people.length; i++) {
                    tempArr.push(people[i]);
                }
                break;
        }

        if (orderAscOrDec == "ASC") {
            //The order is ascending 
            switch (querySpecified) {
                case "Id":
                    sortByIdsAsc(tempArr);
                    break;

                case "firstName":
                    sortByFirstNameAsc(tempArr);
                    break;

                case "lastName":
                    sortByLastNameAsc(tempArr);
                    break;

                case "Email":
                    sortByEmailAddressAsc(tempArr);
                    break;

                case "Height":
                    sortByHeightAsc(tempArr);
                    break;

                case "Age":
                    sortByAgeAsc(tempArr);
                    break;
            }
        } else {
            //The order is descending
            switch (querySpecified) {
                case "Id":
                    sortByIdsDesc(tempArr);
                    break;

                case "firstName":
                    sortByFirstNameDesc(tempArr);
                    break;

                case "lastName":
                    sortByLastNameDesc(tempArr);
                    break;

                case "Email":
                    sortByEmailAddressDesc(tempArr);
                    break;

                case "Height":
                    sortByHeightDesc(tempArr);
                    break;

                case "Age":
                    sortByAgeDesc(tempArr);
                    break;
            }
        }
    }


});

function sortByIdsAsc(People) {
    People.sort((a, b) => a.Id - b.Id);
    People.map(person => {
        createRowWithData(person);
    });
}

function sortByIdsDesc(People) {
    People.sort((a, b) => b.Id - a.Id);
    People.map(person => {
        createRowWithData(person);
    });
}

function sortByFirstNameAsc(People) {
    People.sort((a, b) => a.FirstName.localeCompare(b.FirstName));
    People.map(person => {
        createRowWithData(person);
    });
}

function sortByFirstNameDesc(People) {
    People.sort((a, b) => b.FirstName.localeCompare(a.FirstName));
    People.map(person => {
        createRowWithData(person);
    });
}

function sortByLastNameAsc(People) {
    People.sort((a, b) => a.LastName.localeCompare(b.LastName));
    People.map(person => {
        createRowWithData(person);
    })
}

function sortByLastNameDesc(People) {
    People.sort((a, b) => b.LastName.localeCompare(a.LastName));
    People.map(person => {
        createRowWithData(person);
    });
}


function sortByEmailAddressAsc(People) {
    People.sort((a, b) => a.Email.localeCompare(b.Email));
    People.map(person => {
        createRowWithData(person);
    });
}

function sortByEmailAddressDesc(People) {
    People.sort((a, b) => b.Email.localeCompare(a.Email));
    People.map(person => {
        createRowWithData(person);
    });
}

function sortByHeightAsc(People) {
    People.sort((a, b) => a.Height.substr(0, 2).localeCompare(b.Height.substr(0, 2)));
    People.map(person => {
        createRowWithData(person);
    });
}

function sortByHeightDesc(People) {
    People.sort((a, b) => b.Height.substr(0, 2).localeCompare(a.Height.substr(0, 2)));
    People.map(person => {
        createRowWithData(person);
    });
}

function sortByAgeAsc(People) {
    People.sort((a, b) => a.Age - b.Age);
    People.map(person => {
        createRowWithData(person);
    });
}

function sortByAgeDesc(People) {
    People.sort((a, b) => b.Age - a.Age);
    People.map(person => {
        createRowWithData(person);
    });
}


let examplePerson = {
    "Id": 1,
    "FirstName": "Tina",
    "LastName": "Ahlering",
    "Email": "tahlering94@outlook.com",
    "Height": "50 inches",
    "Age": 26
}



//create elements using Javascript
function createRowWithData(person) {
    //outerDiv!
    let outterMostRow = document.createElement("div");
    outterMostRow.className = "row mt-1 justify-content-center";

    //firstDiv Inside, contains id
    let oneDivIn = document.createElement("div");
    oneDivIn.className = "col-1 text-center";
    oneDivIn.textContent = `${person.Id}`;

    //secondDiv Inside, contains first name
    let secondDivIn = document.createElement("div");
    secondDivIn.className = "col-2 text-center";
    secondDivIn.textContent = `${person.FirstName}`;

    //thirdDiv Inside, contains Last name
    let thirdDivIn = document.createElement("div");
    thirdDivIn.className = "col-2 text-center";
    thirdDivIn.textContent = `${person.LastName}`;

    //fourthDivInside, contains Email Address
    let fourthDivIn = document.createElement("div");
    fourthDivIn.className = "col-3 text-center";
    fourthDivIn.textContent = `${person.Email}`;

    //fifthDivInside, contains Height
    let fifthDivIn = document.createElement("div");
    fifthDivIn.className = "col-2 text-center";
    fifthDivIn.textContent = `${person.Height}`;

    //finalDiv, contains Age
    let finalDiv = document.createElement("div");
    finalDiv.className = "col-1 text-center";
    finalDiv.textContent = `${person.Age}`;

    let breakLine = document.createElement("hr");
    breakLine.className = "mt-3";

    //append the whole element together! start with the outside first
    outterMostRow.appendChild(oneDivIn);
    outterMostRow.appendChild(secondDivIn);
    outterMostRow.appendChild(thirdDivIn);
    outterMostRow.appendChild(fourthDivIn);
    outterMostRow.appendChild(fifthDivIn);
    outterMostRow.appendChild(finalDiv);
    outterMostRow.appendChild(breakLine);
    injectHere.appendChild(outterMostRow);

}


//create an alert
function createAlert() {
    let outerDiv = document.createElement("div");
    outerDiv.className = "alert alert-danger justify-content-center";
    outerDiv.ariaRoleDescription = "alert";
    outerDiv.textContent = "Fill out the search parameters!";

    injectAlert.appendChild(outerDiv);
}

/*
Alert HTML

<div class="alert alert-danger justify-content-center" role="alert">
          Fill out the search parameters!
    </div>
*/


getData();



