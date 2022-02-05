//Jesse Abarca
//1/25/22
//Doing Stuff With Data
//Design a table with ascending and descending order in each field! Design it and make pagination work
//Sort by a different number of results: first name, last name, email, height, age. Create elements, use import and export
//Build the application for the desktop!


//Btns are really buggy
//My application has bugs with the buttons, if you click for example the asc or the desc btns many consecutive times it causes bugs.
//I was unable to finish pagination, i focused on fixing my bugs, i discovered them quite late and was ultimately unable to fix them!
//Access to things we need 
import {people, getData} from './fetch.js';


//Gain access to all the btns 
let idBtn = document.getElementById('idBtn');
let FirstNameBtn = document.getElementById('FirstNameBtn');
let LastNameBtn = document.getElementById('LastNameBtn');
let emailBtn = document.getElementById('emailBtn');
let ageBtn = document.getElementById('ageBtn');
let heightBtn = document.getElementById('heightBtn');
let ascBtn = document.getElementById('ascBtn');
let descBtn = document.getElementById('descBtn');
let injectHere = document.getElementById('injectHere');

//I need add event listeners for every Btn!
let asc = true;



function displayIdPeople(){
    //this clears what was previously written!
    injectHere.innerHTML = "";
    people.forEach(person =>{
        createRowWithData(person);
    })
}

function displayIdBackwards(){
    injectHere.innerHTML = "";
    let sortIdsBackwards = people.reverse();
    sortIdsBackwards.forEach(person => {
        createRowWithData(person);
    })
}

function sortFirstNames(){
    injectHere.innerHTML = "";
    let sortByFirstNames = people.sort((a, b) => a.FirstName.localeCompare(b.FirstName));
    sortByFirstNames.forEach(person => {
        createRowWithData(person);
    })
}

function SortFirstNamesBackwards(){
    injectHere.innerHTML = "";
    let sortByFirstNamesBackwards = people.sort((a, b) => a.FirstName.localeCompare(b.FirstName));
    sortByFirstNamesBackwards.reverse();
    sortByFirstNamesBackwards.forEach(person => {
        createRowWithData(person);
    })
}

function sortLastNames(){
    injectHere.innerHTML = "";
    let sortbyLastNames = people.sort((a, b) => a.LastName.localeCompare(b.LastName));
    sortbyLastNames.forEach(person => {
        createRowWithData(person);
    })
}

function sortLastNamesBackwards(){
    injectHere.innerHTML = "";
    let sortbyLastNamesBackwards = people.sort((a, b) => a.LastName.localeCompare(b.LastName));
    sortbyLastNamesBackwards.reverse();
    sortbyLastNamesBackwards.forEach(person => {
        createRowWithData(person);
    })
}

function sortEmails(){
    injectHere.innerHTML = "";
    let sortEmails = people.sort((a, b) => a.Email.localeCompare(b.Email));
    sortEmails.forEach(person => {
        createRowWithData(person);
    })
}

function sortEmailsBackwards(){
    injectHere.innerHTML = "";
    let sortEmailsBackwards = people.sort((a, b) => a.Email.localeCompare(b.Email));
    sortEmailsBackwards.reverse();
    sortEmailsBackwards.forEach(person => {
        createRowWithData(person);
    })
}

function sortAge(){
    injectHere.innerHTML = "";
    let sortAges = people.sort((a, b) => a.Age - b.Age);
    sortAges.forEach(person => {
        createRowWithData(person);
    })
}

function sortAgesBackwards(){
    injectHere.innerHTML = "";
    let sortAgeBackwards = people.sort((a, b) => a.Age - b.Age);
    sortAgeBackwards.reverse();
    sortAgeBackwards.forEach(person =>{
        createRowWithData(person);
    })
}

function sortHeight(){
    injectHere.innerHTML = "";
    //take the first 2 indices of each index and compare them!
    let sortHeights = people.sort((a,b) => a.Height.substr(0,2).localeCompare(b.Height.substr(0, 2)));
    sortHeights.forEach(person => {
        createRowWithData(person);
    })
}

function sortHeightBackwards(){
    injectHere.innerHTML = "";
    let sortHeightBackwards = people.sort((a,b) => a.Height.substr(0,2).localeCompare(b.Height.substr(0, 2)));
    sortHeightBackwards.reverse();
    sortHeightBackwards.forEach(person => {
        createRowWithData(person);
    })
}

//Event listeners!

ascBtn.addEventListener('click', function(e){
    //if you click the btn asc is true!
    injectHere.innerHTML = "";
    asc = true;
    console.log('asc: '+asc);
});

descBtn.addEventListener('click', function(e){
    injectHere.innerHTML = "";
    //if you click this btn asc is false!
    asc = false;
    console.log('asc: '+asc);
});

idBtn.addEventListener('click', function(e){
    debugger
    injectHere.innerHTML = "";
    console.log(asc);
    //when true run the asc, false then desc
    if(asc == true){
        setTimeout(displayIdPeople, 1000);
        console.log('id normal');
    }else{
        setTimeout(displayIdBackwards, 1000);
        console.log('id backwards')
    }
});

FirstNameBtn.addEventListener('click', function(e){
    injectHere.innerHTML = "";
    console.log(asc);
    //when true run the asc, false then desc
    if(asc == true){
        setTimeout(sortFirstNames, 1000);
        console.log('First names');
    }else{
        setTimeout(SortFirstNamesBackwards, 1000);
        console.log('First names backwards');
    }
});

LastNameBtn.addEventListener('click', function(e){
    injectHere.innerHTML = "";
    console.log(asc);
    //when true run the asc, false then desc
    if(asc == true){
        setTimeout(sortLastNames, 1000);
        console.log('Last names');
    }else{
        setTimeout(sortLastNamesBackwards, 1000);
        console.log('Last names backwards');
    }
});

emailBtn.addEventListener('click', function(e){
    injectHere.innerHTML = "";
    console.log(asc);
    if(asc == true){
        setTimeout(sortEmails, 1000);
        console.log('Emails');
    }else{
        setTimeout(sortEmailsBackwards, 1000);
        console.log('Emails backwards');
    }
});


ageBtn.addEventListener('click', function(e){
    injectHere.innerHTML = "";
    console.log(asc);
    if(asc == true){
        setTimeout(sortAge, 1000);
    }else{
        setTimeout(sortAgesBackwards, 1000);

    }
});


heightBtn.addEventListener('click', function(e){
    injectHere.innerHTML = "";
    console.log(asc);
    if(asc == true){
        setTimeout(sortHeight, 1000);
    }else{
        setTimeout(sortHeightBackwards, 1000);
    }
});






//Create's the elements
function createRowWithData(person){
    let outerMostRow = document.createElement('div');
    outerMostRow.className = "row";
    let idDiv = document.createElement('div');
    idDiv.className = "col-2 d-flex justify-content-center";
    let pTagId = document.createElement('p');
    pTagId.className = "createElementStyle";
    pTagId.textContent = person.Id;
    //First Div with p tag set!
    idDiv.appendChild(pTagId);

    //Second Div with p tag!
    let nameDiv = document.createElement('div');
    nameDiv.className = "col-1";
    let pTagName = document.createElement('p');
    pTagName.className = "createElementStyle";
    pTagName.textContent = person.FirstName;
    //Second div with ptag set!
    nameDiv.appendChild(pTagName);

    //Third Div with p tag!
    let lastNameDiv = document.createElement('div');
    lastNameDiv.className = "col-1 d-flex justify-content-end";
    let lastNamePTag = document.createElement('p');
    lastNamePTag.className = "createElementStyle";
    lastNamePTag.textContent = person.LastName;
    //Third div set with p tag!
    lastNameDiv.appendChild(lastNamePTag);

    //Fourth div
    let firstEmptyCol = document.createElement('div');
    firstEmptyCol.className = "col-1";

    //fifth div
    let emailDiv = document.createElement('div');
    emailDiv.className = "col-2 d-flex justify-content-center";
    let emailPTag = document.createElement('p');
    emailPTag.className = "createElementStyle";
    emailPTag.textContent = person.Email;
    //fifth div is set!
    emailDiv.appendChild(emailPTag);

    //sixth div
    let heightDiv = document.createElement('div');
    heightDiv.className = "col-2 d-flex justify-content-center";
    let heightPTag = document.createElement('p');
    heightPTag.className = "createElementStyle";
    heightPTag.textContent = person.Height;
    //sixth div is set!
    heightDiv.appendChild(heightPTag);

    let ageDiv = document.createElement('div');
    ageDiv.className = "col-2 d-flex justify-content-center";
    let agePTag = document.createElement('p');
    agePTag.className = "createElementStyle";
    agePTag.textContent = person.Age;
    //seventh div is set!
    ageDiv.appendChild(agePTag);
    let hr = document.createElement('hr');
    hr.className = "horizontalLineCreateElements";


    //append it all together!
    outerMostRow.appendChild(idDiv);
    outerMostRow.appendChild(nameDiv);
    outerMostRow.appendChild(lastNameDiv);
    outerMostRow.appendChild(firstEmptyCol);
    outerMostRow.appendChild(emailDiv);
    outerMostRow.appendChild(heightDiv);
    outerMostRow.appendChild(ageDiv);
    outerMostRow.appendChild(hr);
    injectHere.appendChild(outerMostRow);

    return injectHere;
    
}

getData();

