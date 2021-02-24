z
let tabPressed;
// let category_container = ;
for (let i in allTabs) {
    allTabs[i].onclick = function () {
        tabPressed = allTabs[i].innerHTML;
        tabPressed = tabPressed.split("</i>")[1];
        if (tabPressed == " All Products") {
            products.forEach(element => {
                document.querySelector(".category_container").innerHTML = `<div class="product">
                                        <div class="img_container">
                                            <img src="${element.image}" alt="" class="iPhone"></img>
                                        </div>
                                        <div class="product_action">
                                            <div class="fas fa-eye"></div>
                                            <div class="fas fa-heart"></div>
                                        </div>
                                        <div class="product_details">
                                            <h3>${element.title}</h3>
                                            <div class="stars">
                                                <div class="fas fa-star"></div>
                                                <div class="fas fa-star"></div>
                                                <div class="fas fa-star"></div>
                                                <div class="fas fa-star"></div>
                                                <div class="fas fa-star-half"></div>
                                            </div>
                                            <h4>$ ${element.price}</h4>
                                            <a href="#"><button class="latest_btn">Add To Cart</button></a>
                                        </div>
                                    </div>`
            });

        }
    }
}