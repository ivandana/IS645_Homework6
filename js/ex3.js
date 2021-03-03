function changeParaBg(color) {
    const paragraphElements = document.getElementsByTagName("p");
    console.log(paragraphElements[0].style.backgroundColor = color);
    console.log(paragraphElements[1].style.backgroundColor = color);


    //document.querySelector("p").style.backgroundColor = color;
}

function changeParaFont() {
    const paragraphFont = document.getElementsByTagName("p");
    console.log(paragraphFont[0].style.fontWeight = "bold")
    console.log(paragraphFont[1].style.fontWeight = "bold")


    //document.querySelector("p").style.fontWeight = "bold";
}

changeParaBg('yellow');
changeParaFont();