let howMany = 16;

const outerBox = document.querySelector(".box");
const totalWidth = outerBox.scrollHeight;

// for (let i = 1; i <= howMany; i++) {

//     let oneRow = document.createElement('DIV');
//     oneRow.classList = (`row${i} row`); 
//     outerBox.appendChild(oneRow);

//     addInnerBoxes(i);

// }

for (let i = 1; i <= howMany * howMany; i++) {

    let innerBox = document.createElement("DIV");
    innerBox.classList = (`innerBox${i} innerbox`);
    innerBox.style.width=`${totalWidth/howMany}px`;
    innerBox.style.height=`${totalWidth/howMany}px`;
    outerBox.appendChild(innerBox);

}

// function addInnerBoxes(i) {

//     for (let a = 1; a <= howMany; a++) {

//         let oneRow = document.querySelector(`.row${i}`)
//         let innerBox = document.createElement("DIV");
//         innerBox.classList = (`innerBox${a} innerbox`);
//         oneRow.clientHeight = totalWidth / howMany;
//         oneRow.clientWidth = totalWidth / howMany;
//         oneRow.appendChild(innerBox);

//     }

// }
