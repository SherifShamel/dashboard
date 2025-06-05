//inputs
var productNameInput = document.getElementById("productName");
var productPriceInput = document.getElementById("productPrice");
var productCategoryInput = document.getElementById("productCategory");
var productDescriptionInput = document.getElementById("productDescription");
var productImageInput = document.getElementById("productImage");



var productList;

if (localStorage.getItem("products") == null) {
    productList = [];
} else {
    productList = JSON.parse(localStorage.getItem("products"))

    display();
}

// addProduct() function is called from line 48 in index.html
function addProduct() {
    var product = {
        code: productNameInput.value,
        price: productPriceInput.value,
        category: productCategoryInput.value,
        description: productDescriptionInput.value,
        image: "image",
    }
    productList.push(product);
    localStorage.setItem("products", JSON.stringify(productList));

    display();
    // clearInputs();
}

function display() {
    var cartona = "";
    for (var i = 0; i < productList.length; i++) {
        cartona += `<div class="col-md-2 py-4">
                        <div class="item">
                            <img src="assets/meal-1.jpg" class="w-100" alt="">
                            <h2 class="h4">Name: ${productList[i].code}</h2>
                            <p>Price: ${productList[i].price}</p>
                            <p>Category: ${productList[i].category}</p>
                            <p>Description: ${productList[i].description}</p>
                            <button onClick="deleteProduct(${i})" class="btn btn-outline-danger w-100">Delete <i class="fas fa-trash"></i></button>
                            <button class="btn btn-outline-warning my-2 w-100">Update <i class="fas fa-pen"></i></button>
                        </div>
                    </div>`
    }
    document.getElementById("myRow").innerHTML = cartona;
}

function deleteProduct(deletedIndex) {
    productList.splice(deletedIndex, 1)
    localStorage.setItem("products", JSON.stringify(productList));
    display();
}

function clearInputs() {
    productNameInput.value = null;
    productPriceInput.value = null;
    productCategoryInput.value = null;
    productDescriptionInput.value = null;
    productImageInput.value = null;
}