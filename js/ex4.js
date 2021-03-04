const tableElement = document.createElement("Table");
tableElement.style.borderStyle = "solid";
tableElement.style.borderColor = "black";
tableElement.style.textAlign = "center";


for (let i = 1; i <= 12; i++) {

    const trElement = document.createElement("tr");
    trElement.style.borderStyle = "solid";
    
    const tdElement = document.createElement("td");
    tdElement.style.borderStyle = "solid";
    tdElement.innerText = i;
    if(i % 4 === 0) {
        tdElement.style.backgroundColor = "lightblue";
    }
    trElement.appendChild(tdElement);
    tableElement.appendChild(trElement);
};

const divElement = document.getElementById("output");
divElement.appendChild(tableElement);
