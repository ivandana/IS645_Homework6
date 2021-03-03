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

const table = document.getElementById("table")
table.style.borderStyle = "double";
table.style.borderColor = "black";
table.style.textAlign = "center"

const divElement = document.getElementById("table");
divElement.appendChild(tableElement);
