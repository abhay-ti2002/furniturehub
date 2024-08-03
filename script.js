const unorderList = document.getElementsByClassName("slideranimated");
const listSlider = document.querySelectorAll(".slider");
const prevbtn = document.querySelector("#previous");
const nextbtn = document.querySelector("#next");

let currentIndex = 0;

// console.log(listSlider);

nextbtn.addEventListener("click", (event) => {
    // console.log(event);
    nextImage(listSlider, event);
});

prevbtn.addEventListener("click", (event) => {
    if (currentIndex > 0) {
        currentIndex--;
        decrraseSlider(currentIndex, listSlider);
    }
});

function updateSlider(i, listSlider) {
    listSlider[i].style.transform = "translate3d(-550px, 0px, 0px)";
    listSlider[i].style.transitionDuration = "850ms";
    listSlider[i].style.marginRight = "-539px";

}
// ----------------next image function--------------
function nextImage(listSlider, event) {
    // console.log(listSlider);
    if (currentIndex < listSlider.length - 1) {
        updateSlider(currentIndex, listSlider);
        currentIndex++;
    }

}
// ----------------------previous image function----------------
function decrraseSlider(i, listSlider) {
    listSlider[i].style.transform = "translate3d(0px, 0px, 0px)";
    listSlider[i].style.transitionDuration = "850ms";
    listSlider[i].style.marginRight = "-6px";
}

// ------------------click and slide are change according to logo button------------

const furImage = document.querySelectorAll(".furimage");
const slideImage = document.querySelectorAll(".slideimage");
// console.log(furImage.length);
// console.log(slideImage);
for (let i = 0; i < furImage.length; i++) {

    furImage[i].addEventListener("click", (event) => {
        //  console.log(`${furImage[i].id} = ${slideimage[i].id}`);
        checkImageSlide(furImage[i].id, slideImage);

    });

}

function checkImageSlide(furImage, slideImage) {
    let j = 0;
    // console.log(slideImage.length);
    while (j < slideImage.length) {
        let imgId = slideImage[j].id;
        // console.log(imgId);
        changeImageSrc(imgId, furImage);
        ++j;
    }
}

function changeImageSrc(imgId, furImage) {
    // console.log(`${imgId} = ${furImage}`);
    if (furImage === "living") {
        // console.log(imgId);
        setImageLiving(imgId);
    }
    else if (furImage === "study") {
        setImageStudy(imgId);
    }
    else if (furImage === "dining") {
        setImageDining(imgId);
    }
    else if (furImage === "appliances") {
        setImageAppliance(imgId);
    }
    else {
        setImageBedroom(imgId);
    }
}
// -------------------image for Living living-------------

function setImageLiving(imgId) {
    // console.log(typeof imgId);
    if (imgId === "image1") {
        // console.log(imgId);
        image1.src = "./living1.jpg";
    }
    else if (imgId === "image2") {
        image2.src = "./living2.jpg";
    }
    else if (imgId === "image3") {
        image3.src = "./living3.jpg";
    }
    else {
        image4.src = "./living4.jpg";
    }

}
// ---------------image for study slide----------------

function setImageStudy(imgId) {
    //  console.log(imgId); 
    //  console.log(typeof imgId);
    if (imgId === "image1") {
        // console.log(imgId);
        image1.src = "./study1.jpg";
    }
    else if (imgId === "image2") {
        image2.src = "./study2.jpg";
    }
    else if (imgId === "image3") {
        image3.src = "./study3.jpg";
    }
    else {
        image4.src = "./study4.jpg";
    }
}
// -------------------image for dining slide------------------

function setImageDining(imgId) {
    // console.log(imgId);
    //  console.log(typeof imgId);
    if (imgId === "image1") {
        // console.log(imgId);
        image1.src = "./dining1.jpg";
    }
    else if (imgId === "image2") {
        image2.src = "./dining2.jpg";
    }
    else if (imgId === "image3") {
        image3.src = "./dining3.jpg";
    }
    else {
        image4.src = "./dining4.jpg";
    }
}
// -------------------image for appliances slide-------------------
function setImageAppliance(imgId) {
    //  console.log(imgId);
    //  console.log(typeof imgId);
    if (imgId === "image1") {
        // console.log(imgId);
        image1.src = "./appliance1.jpg";
    }
    else if (imgId === "image2") {
        image2.src = "./appliance2.jpg";
    }
    else if (imgId === "image3") {
        image3.src = "./appliance3.jpg";
    }
    else {
        image4.src = "./appliance4.jpg";
    }

}

// --------------image for bedroom slide-----------

function setImageBedroom(imgId) {
    //  console.log(imgId);
    //  console.log(typeof imgId);
    if (imgId === "image1") {
        // console.log(imgId);
        image1.src = "./bedroom1.jpg";
    }
    else if (imgId === "image2") {
        image2.src = "./bedroom2.jpg";
    }
    else if (imgId === "image3") {
        image3.src = "./bedroom3.jpg";
    }
    else {
        image4.src = "./bedroom4.jpg";
    }

}
// -----------hover card-----------------
const cardItem = document.querySelector("#wrapOfCardItem");
const browserCatalog = document.querySelector("#manyItemSelect");
const homeLoad = document.querySelector("#Home");


// console.log(typeof cardItem);
// console.log(typeof browserCatalog);

browserCatalog.addEventListener("mousemove", (event) => {
    // console.log(event.movementX);
    if (event.movementX > -1) {

        cardItem.style.visibility = "visible";
        cardItem.style.transform = "translate(-50px, 10px)";
        cardItem.style.transitionDuration = "350ms";
    }
    else {
        cardItem.style.visibility = "hidden";
    }
});

cardItem.addEventListener("mouseleave", (event) => {
    //   console.log(`${event.screenX} = ${event.screenY}`);
    cardItem.style.visibility = "hidden";

});
