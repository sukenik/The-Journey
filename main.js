const recentlyUsedItemsElementList = document.querySelectorAll('#recently-used-container > .items');
const popularItemsElementList = document.querySelectorAll('#popular-container > .items');

fetch('data.json')
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        const lastUsedJSONList = data["lastUsed"];
        const mostPopularJSONList = data["mostPopular"];

        matchIconToType(lastUsedJSONList, recentlyUsedItemsElementList);
        matchIconToType(mostPopularJSONList, popularItemsElementList);
    });

function matchIconToType(JSONdataList, itemsList) {
    for (let i = 0; i < JSONdataList.length; i++) {
        const iconType = JSONdataList[i]["type"];
        const itemTitle = JSONdataList[i]["title"]
        itemsList[i].children[2].textContent = itemTitle;
        let img = document.createElement("img");
        switch(iconType) {
            case "unicorn":
                img.src = "Assets/unicorn-g8421e3a51_640.png";
                break;
            case "dove":
                img.src = "Assets/dove-g1c8d3200e_640.png";
                break;
            case "alligator":
                img.src = "Assets/alligator-gbcc9b6ad5_640.png";
                break;
            case "postgres":
                img.src = "Assets/baby-elephant-g721c6ce8d_640.png";
                break;
            case "python":
                img.src = "Assets/snake-gb30a86d56_640.png";
                break;
            case "mysql":
                img.src = "Assets/dolphin-gc797926dc_640.png";
                break;
            case "beaver":
                img.src = "Assets/beaver-g9672e2117_640.png";
                break;
            case "docker":
                img.src = "Assets/blue-g08e427f26_640.png";
                break;
            default:
                break;
        }
        itemsList[i].children[1].appendChild(img);
    }
}