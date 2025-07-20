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

fetchProductsThen();

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

