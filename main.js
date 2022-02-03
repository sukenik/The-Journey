const recentlyUsedItemsElementList = document.querySelectorAll('#recently-used-container > .items');
const popularItemsElementList = document.querySelectorAll('#popular-container > .items');
const recommendedItemsElementList = document.querySelectorAll('#recommended-container > .items');

fetch('data.json')
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        const lastUsedJSONList = data["lastUsed"];
        const mostPopularJSONList = data["mostPopular"];
        const recommendedJSONList = data["recommended"];

        matchIconToType(lastUsedJSONList, recentlyUsedItemsElementList);
        matchIconToType(mostPopularJSONList, popularItemsElementList);
        matchIconToType(recommendedJSONList, recommendedItemsElementList);
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
            case "javascript":
                img.src = "Assets/javascript-g2b05c1f1d_640.png";
                break;
            case "nodejs":
                img.src = "Assets/node-js-gd586d3866_640.png";
                break;
            case "nature":
                img.src = "Assets/field-g8f131f1c4_640.jpg";
                break;
            case "lion":
                img.src = "Assets/lion-g1986bcf8a_640.png";
                break;
            case "brocoli":
                img.src = "Assets/broccoli-g28da88fd4_640.png";
                break;
            case "garlic":
                img.src = "Assets/garlic-ga8d74976d_640.png";
                break;
            case "corn":
                img.src = "Assets/corn-g5c7fd0f7b_640.png";
                break;
            case "rabbit":
                img.src = "Assets/rabbit-g2a6ba1b59_640.png";
                break;
            case "bull":
                img.src = "Assets/bull-gc6520158e_640.png";
                break;
            case "dog":
                img.src = "Assets/dog-g869dfa2ef_640.png";
                break;
            case "fox":
                img.src = "Assets/fox-gd798c8928_640.png";
                break;
            default:
                break;
        }
        itemsList[i].children[1].appendChild(img);
    }
}