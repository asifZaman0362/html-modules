window.addEventListener("load", onDocumentLoad);

function onDocumentLoad() {

    const PATH = "../res/images/";
    const EXTENSION = ".jpg";

    var grid = document.getElementsByClassName("gallery_grid")[0];
    
    for (i = 0; i < files.length; i++) {

        var hyperlink = document.createElement("A");
        hyperlink.href = PATH + files[i] + EXTENSION;
        hyperlink.target = "_blank";
        hyperlink.classList.add("img_container");
        
        var img = document.createElement("IMG");
        img.src = hyperlink.href;

        hyperlink.appendChild(img);
        grid.appendChild(hyperlink);
        
    }
}