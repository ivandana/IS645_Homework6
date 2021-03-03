function changeParaBg(color) {
    const paragraphElements = document.getElementsByTagName("p");
    for (i of paragraphElements) {
        i.style.backgroundColor = color;
    }   
};

function changeParaFont() {
    const paragraphFont = document.getElementsByTagName("p");
       for (i of paragraphFont){
            i.style.fontWeight = "bold"
       }   
};

changeParaBg('yellow');
changeParaFont();
