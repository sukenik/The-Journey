const itemOneTitle = document.querySelector('#item-1-title');
const itemOneIcon = document.querySelector('#item-1-icon');
const itemsList = document.querySelectorAll('.items');

fetch('./hafifa.json')
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        const lastUsedList = data["lastUsed"];
        matchIconToType(lastUsedList);
    });

function matchIconToType(JSONdataList) {
    for (let i = 0; i < JSONdataList.length; i++) {
        const iconType = JSONdataList[i]["type"];
        const itemTitle = JSONdataList[i]["title"]
        itemsList[i].children[2].textContent = itemTitle;
        let img = document.createElement("img");
        switch(iconType) {
            case "unicorn":
                img.src = "unicorn-g8421e3a51_640.png";
                break;
            case "dove":
                img.src = "dove-g1c8d3200e_640.png";
                break;
            case "alligator":
                img.src = "alligator-gbcc9b6ad5_640.png";
                break;
            case "postgres":
                img.src = "baby-elephant-g721c6ce8d_640.png";
                break;
            case "python":
                img.src = "snake-gb30a86d56_640.png";
                break;
            case "mysql":
                img.src = "dolphin-gc797926dc_640.png";
                break;
            case "beaver":
                img.src = "beaver-g9672e2117_640.png";
            default:
                break;
        }
        itemsList[i].children[1].appendChild(img);
    }
}