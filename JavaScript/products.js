// Data Fetching
const getProducts = async () => {
    try {
        const results = await fetch("./data/products.json");
        const data = await results.json();
        const products = data.products;
        return products;
    } catch (err) {
        console.log(err);
    }
};


// Load Products

const categoryCenter = document.querySelector(".category_center");

window.addEventListener("DOMContentLoaded", async function () {
    const products = await getProducts();
    displayProductItems(products);
});

const displayProductItems = items => {
    let displayProduct = items.map(
        product => `<div class="product">
                                        <div class="img_container">
                                            <img src="${product.image}" class="${product.class}" alt="" class="headphone">
                                        </div>
                                        <div class="product_action">
                                            <div class="fas fa-eye"></div>
                                            <div class="fas fa-heart"></div>
                                        </div>
                                        <div class="product_details">
                                            <h3>${product.title}</h3>
                                            <div class="stars">
                                                <div class="fas fa-star"></div>
                                                <div class="fas fa-star"></div>
                                                <div class="fas fa-star"></div>
                                                <div class="fas fa-star"></div>
                                                <div class="fas fa-star-half"></div>
                                            </div>
                                            <h4>$${product.price}</h4>
                                            <a href="#"><button class="latest_btn">Add To Cart</button></a>
                                        </div>
                                    </div>`
    );
    displayProduct = displayProduct.join("");
    if (categoryCenter) {
        categoryCenter.innerHTML = displayProduct;
    }
}

// Filter Products


