var PATH = "images/"; // Path to the folder containing the images
images = ["image", "image2", "image3", "image4", "image5"];

// To get the images from the server automatically instead,
// use the included php script and uncomment the line below :- 
// images = files;


// the <img> elements in the document
var imgFront, imgBack, imgFront1, imgBack1;
var buttonList1 = [], buttonList2 = [];

var len = images.length;
var curr = len-1;
var prev = len-1;

window.addEventListener("load", loadContent);
var intervalId = setInterval(updateSlides, 4000);

function loadContent() {

    // Get the <img> elements and setup style properties.

    // Sliding? slides
    imgBack = document.getElementById("slide01");
    imgBack.src = PATH + images[1] + ".jpg";
    imgBack.style.left = "-100vw";
    imgFront = document.getElementById("slide02");
    imgFront.src = PATH + images[0] + ".jpg";
    var buttonBar = document.getElementById("button_bar1");
    for (i = 0; i < len; i++) {
        var li = document.createElement("LI");
        var button = document.createElement("A");
        button.href = "javascript:void(0);";
        const pos = i;
        button.onclick = () => manualSlide(pos);
        button.innerHTML = "";
        li.appendChild(button);
        buttonBar.appendChild(li);
        buttonList1[i] = button;
    }

    // Fading slides
    imgBack1 = document.getElementById("slide11");
    imgBack1.src = PATH + images[1] + ".jpg";
    imgFront1 = document.getElementById("slide12");
    imgFront1.src = PATH + images[0] + ".jpg";
    var buttonBar1 = document.getElementById("button_bar2");
    for (i = 0; i < len; i++) {
        var li = document.createElement("LI");
        var button = document.createElement("A");
        button.href = "javascript:void(0);";
        const pos = i;
        button.onclick = () => manualSlide(pos);
        button.innerHTML = "";
        li.appendChild(button);
        buttonBar1.appendChild(li);
        buttonList2[i] = button;
    }

    updateSlides();
}

function updateSlides() {
    if (curr >= len-1) curr = 0;
    else curr++;
    slideNext(curr);
}

function manualSlide(pos) {
    curr = pos;
    clearInterval(intervalId);
    slideNext(pos);
    intervalId = setInterval(updateSlides, 4000);
}

function slideNext(pos) {
    buttonList1[prev].classList.remove("active");
    buttonList1[curr].classList.add("active");
    buttonList2[prev].classList.remove("active");
    buttonList2[curr].classList.add("active");
    prev = curr;
    console.log(pos);
    //Sliding
    imgBack.src = PATH + images[pos] + ".jpg"; // Update image source
    imgBack.style.transition = "1s"; // enable transition effect
    imgBack.style.left = "0"; // bring hidden slide in from left
    imgFront.style.transition = "1s"; // enable transition effect for second slide
    imgFront.style.left = "100vw"; // hide it to the right
    setTimeout(resetSlidePosition, 1000); // reset the positions but with changed image sources

    // Fading
    imgBack1.src = PATH + images[pos] + ".jpg"; // update source
    imgFront1.style.transition = "1s"; // enable transition
    imgFront1.style.opacity = "0"; // fade out
    setTimeout(resetSlideOpacity, 1000); // fade back in with no transition and updated source
}

function resetSlideOpacity() {
    imgFront1.src = imgBack1.src;
    imgFront1.style.transition = "none";
    imgFront1.style.opacity = "1";
}

function resetSlidePosition() {
    imgFront.src = imgBack.src;
    imgFront.style.transition = "none";
    imgFront.style.left = "0";
    imgBack.style.transition = "none";
    imgBack.style.left = "-100vw";
}