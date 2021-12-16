let howMany = 16;

let grid = [];

const outerBox = document.querySelector(".box");

for (let i = 1; i <= howMany; i++) {

    let oneRow = document.createElement('DIV');
    oneRow.classList = ('row'); 
    outerBox.appendChild(oneRow);

}

let boxRows = document.querySelectorAll(".row")

for (item in boxRows) {

    let innerBox = document.createElement("DIV");
    innerBox.classList.add("innerBox");
    item.appendChild(innerBox);

}

//let i = boxRows[0]; i <= boxRows.length; i++
