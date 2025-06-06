//inputs
var productNameInput = document.getElementById("productName");
var productPriceInput = document.getElementById("productPrice");
var productCategoryInput = document.getElementById("productCategory");
var productDescriptionInput = document.getElementById("productDescription");
var productImageInput = document.getElementById("productImage");
var searchInput = document.getElementById("search");



var productList;

if (localStorage.getItem("products") == null) {
    productList = [];
} else {
    productList = JSON.parse(localStorage.getItem("products"))

    display(productList);
}

// addProduct() function is called from line 48 in index.html
function addProduct() {
    var product = {
        code: productNameInput.value,
        price: productPriceInput.value,
        category: productCategoryInput.value,
        description: productDescriptionInput.value,
        image: `assets/${productImageInput.files[0].name}`,
    }
    productList.push(product);
    localStorage.setItem("products", JSON.stringify(productList));

    display(productList);
    // clearInputs();
}

function display(arr) {
    var cartona = "";
    for (var i = 0; i < arr.length; i++) {
        cartona += `<div class="col-md-2 py-4">
                        <div class="item">
                            <img src="${arr[i].image}" class="w-100" alt="">
                            <h2 class="h4">Name: ${arr[i].code}</h2>
                            <p>Price: ${arr[i].price}</p>
                            <p>Category: ${arr[i].category}</p>
                            <p>Description: ${arr[i].description}</p>
                            <button onClick="deleteProduct(${i})" class="btn btn-outline-danger w-100">Delete <i class="fas fa-trash"></i></button>
                            <button class="btn btn-outline-warning my-2 w-100">Update <i class="fas fa-pen"></i></button>
                        </div>
                    </div>`
    }
    if (cartona == "") {
        document.getElementById("myRow").innerHTML = `<h3 class="text-center"> Not Found</h3>`;
    } else {
        document.getElementById("myRow").innerHTML = cartona;
    }
}

function deleteProduct(deletedIndex) {
    productList.splice(deletedIndex, 1)
    localStorage.setItem("products", JSON.stringify(productList));
    display(productList);
}

function searchProduct() {
    var word = searchInput.value;
    var searchedProducts = [];
    for (var i = 0; i < productList.length; i++) {
        if (productList[i].code.toLowerCase().includes(word.toLowerCase())) {
            searchedProducts.push(productList[i]);
        }
    }
    display(searchedProducts)
}

function clearInputs() {
    productNameInput.value = null;
    productPriceInput.value = null;
    productCategoryInput.value = null;
    productDescriptionInput.value = null;
    productImageInput.value = null;
}