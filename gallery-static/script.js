window.addEventListener("load", onDocumentLoad);

function onDocumentLoad() {

    const PATH = "../res/images/";
    const EXTENSION = ".jpg";
    const COL_SIZE = 4;

    var columns = [];
    var curr_column = 0;

    var no_columns = Math.floor(files.length / COL_SIZE);
    
    for (i = 0; i < COL_SIZE; i++) {
        columns[i] = document.createElement("DIV");
        columns[i].classList.add("column");
        document.getElementsByClassName("row")[0].appendChild(columns[i]);
    }
    
    for (i = 0; i < files.length; i++) {
        
        if (i % no_columns == 0) {
            curr_column++;
        }

        var hyperlink = document.createElement("A");
        hyperlink.href = PATH + files[i] + EXTENSION;

        var column_child = document.createElement("DIV");
        column_child.style.width = "100%";
        var height = (100 / Math.floor(files.length / COL_SIZE));
        column_child.style.height = height + "%";

        var img_container = document.createElement("DIV");
        img_container.classList.add("img_container");
        
        var img = document.createElement("IMG");
        img.src = hyperlink.href;

        hyperlink.appendChild(img);
        img_container.appendChild(hyperlink);
        column_child.appendChild(img_container);
        columns[curr_column-1].appendChild(column_child);
    }
}