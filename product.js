const productCount = document.querySelector("#numofproduct");
const addToCart = document.querySelectorAll(".addtocard");
const likeBtn = document.querySelectorAll(".productlike");
const itemCart = document.querySelectorAll(".itemcard");
// console.log(itemCart[1].id);

// -----------------item update logic-----------------------------

for (let i = 0; i < addToCart.length; i++) {
    addToCart[i].addEventListener("click", (event) => {
        let items = itemCart[i].id;
        countItems(items);

    })
}
const arr = new Set([]);
function countItems(items) {
    arr.add(items);
    productCount.innerHTML = arr.size;
}

// ---------------------------------likes logic----------------

for (let j = 0; j < likeBtn.length; j++) {
    likeBtn[j].addEventListener("click", (event) => {
          likeBtn[j].src = "./imagefolder/redHeart.jpg";
    })

}