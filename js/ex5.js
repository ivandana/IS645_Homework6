
function myFunction() {
    const newLink = document.createElement("LI");
    newLink.innerHTML="<a href='https://www.csulb.edu/college-of-business'>College of Business</a>"
    const list = document.getElementById("links");
    list.insertBefore(newLink, list.childNodes[2]);
}
myFunction();    


