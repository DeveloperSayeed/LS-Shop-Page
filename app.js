const submitForm = document.getElementById("submit-form")
const cardbox = document.getElementById("card")
const productList = document.querySelector(".productList")



submitForm.addEventListener("submit", function (e) {
    e.preventDefault();

    let name = this.querySelector("input[name='name']").value
    let regPrice = this.querySelector("input[name='reg-price']").value
    let salePrice = this.querySelector("input[name='sale-Price']").value
    let productImg = this.querySelector("input[name='img']").value

    let product_arry;

    if (getData('product')) {
        product_arry = getData('product')
    } else {
        product_arry = [];
    }



    product_arry.push({
        productName: name,
        regularPrice: regPrice,
        salePrice: salePrice,
        productImg: productImg

    })
    sendData('product', product_arry)
    productDisplay()
})

productDisplay()

function productDisplay() {
    let lcData = getData('product');
    let outputLc = "";
    lcData.map((data) => {
        outputLc += `
        
        <div class="col-lg-4 py-3 my-3">
        <div class="card">
            <div class="card-body">
                <img class="card-img" src="${data.productImg}" alt=""> <hr>
                <h2 class="fs-4">${data.productName}</h2> <hr>
                <p>
                    <del id="r-price" class="text-danger">${data.regularPrice == "" ? "" : "$" + data.regularPrice}</del>
                    <span id="s-price" class="text-success">$${data.salePrice}</span>
                </p>
                <div class="form-group d-flex justify-content-between align-items-center">
                <a class="fs-3 text-danger" href="#"><i class="far fa-heart"></i></a> <input type="submit" value="Add to Card" class="btn btn-danger"> <a class="fs-3 text-danger" href="#"><i class="fas fa-random"></i>
                </a>
                </div>
            </div>
        </div>
    </div>`

    })
    productList.innerHTML = outputLc;
}