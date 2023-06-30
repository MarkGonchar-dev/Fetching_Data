
const container = document.getElementById("container");

fetch('https://dummyjson.com/products')
.then(res => res.json())
.then(json => {
    for (let i = 0; i < json["products"].length; i++) {
        const product = json["products"][i];
        if (product["price"] > 40) {
            const element = document.createElement("p");
            container.appendChild(element);
            element.innerText = product["title"] + " " + product["price"];
        }
    }
});
