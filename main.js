const itemOneTitle = document.querySelector('#item-1-title');
const itemOneIcon = document.querySelector('#item-1-icon');
let lastUsed;

fetch('./hafifa.json')
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        itemOneTitle.textContent = (data["lastUsed"][0]["title"]);
    });