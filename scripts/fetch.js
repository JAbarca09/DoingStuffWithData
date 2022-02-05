let people = [];
function getData(){
    fetch('../data/data.json')
    .then(resp => resp.json())
    .then(data =>{ 
        people = data.People;
        
    })
}

getData();
export {people, getData}