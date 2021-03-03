const tableElement = document.createElement("Table");

for (let i = 1; i <= 12; i++) {

    const trElement = document.createElement("tr");
    const tdElement = document.createElement("td");
    tdElement.innerText = i;
    if(i % 4 === 0) {
        tdElement.style.backgroundColor = "lightblue";
    }
    trElement.appendChild(tdElement);
    tableElement.appendChild(trElement);
};

const divElement = document.getElementById("output");
divElement.appendChild(tableElement);