
function myFunction() {
    const newLink = document.createElement("LI");
    const textnode = document.createTextNode("College of Business");
    newLink.appendChild(textnode);
  
    const list = document.getElementById("links");
    list.insertBefore(newLink, list.childNodes[2]);
}
myFunction();    


