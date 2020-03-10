var im_path = "../res/images/";
var im_extension = ".jpg";
var image_elements = [];
var column_size = 4;
var columns = [];
var curr_column = 0;

window.addEventListener("load", onDocumentLoad);

function onDocumentLoad() {
    for (i = 0; i < column_size; i++) {
        columns[i] = document.createElement("DIV");
        columns[i].classList.add("column");
        document.getElementsByClassName("row")[0].appendChild(columns[i]);
        // document.getElementsByClassName("row")[0].style.height = 
    }
    for (i = 0; i < files.length; i++) {
        if (i % Math.floor(files.length / column_size) == 0) {
            curr_column++;
        }
        var a = document.createElement("A");
        a.href = im_path + files[i] + im_extension;
        var img = document.createElement("IMG");
        img.src = im_path + files[i] + im_extension;
        img.style.width = "100%";
        var height = (100 / Math.floor(files.length / column_size));
        console.log(files.length/column_size);
        img.style.height = height + "%";
        a.appendChild(img);
        columns[curr_column-1].appendChild(a);
    }
}