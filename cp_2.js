//established "product-container" from the HTML file
const container = document.getElementById('product-container');

//this will plug in data from the source page, log each products name, and catch any errors 
function fetchProductsThen() {
    fetch('https://www.course-api.com/javascript-store-products')
    .then((response) => {
        if (!response.ok) {
            throw new Error('Oh no, something went wrong!');
        }
        return response.json();
    })
    .then((products) => {
        products.forEach((product) => {
            console.log(product.fields.name);
        });
    })
    .catch((error) => {
        console.error('Error:', error.message);
    });
}

//calls the function above, so it runs on the webpage
fetchProductsThen();

//established the handleError() function
function handleError(error) {
    console.error('Looks like something went wrong...', error.message);
}

//fetches and sends products to displayProducts(), catches any errors
async function fetchProductsAsync() {
    try{
        const response = await fetch('https://www.course-api.com/javascript-store-products');
        if (!response.ok) {
            throw new Error('Oh no, something went wrong!');
        }
        const data = await response.json();
        displayProducts(data);
    } catch (error) {
        handleError(error);
    }
}

//calls the above function
fetchProductsAsync();

//Displays 5 products with name, image, and price 
function displayProducts(products) {
    container.innerHTML = '';
    for(let i = 0; i < 5; i++) {
        const product = products[i];
        const productDiv = document.createElement('div');

        const name = document.createElement('p');
        name.textContent = product.fields.name;

        const img = document.createElement('img');
        img.src = product.fields.image[0].url;
        img.alt = product.fields.name;

        const price = document.createElement('p');
        price.textContent = `$${(product.fields.price / 100).toFixed(2)}`;

        productDiv.appendChild(img);
        productDiv.appendChild(name);
        productDiv.appendChild(price);
        container.appendChild(productDiv);

    }
}
