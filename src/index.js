const $app = document.getElementById('app');
const API = "https://api.escuelajs.co/api/v1/products?offset=0&limit=10";

const main = async () => {
    const response = await fetch(API);
    const products = await response.json();

    const output = products?.map((product) => {
        return `
        <artcicle class="Card">
            <img src="${product.images[0]}" alt="${product.title}" />
            <h2>${product.title} <small>Precio $ ${product.price}</small> 
            </h2>
            </artcicle>
            `
    }).join("");
    let newItem = document.createElement("section");
    newItem.classList.add("Items");
    newItem.innerHTML = output;
    $app.appendChild(newItem);
}

main();