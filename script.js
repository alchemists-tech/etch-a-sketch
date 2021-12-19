let howMany = 16;
const outerBox = document.querySelector(".box");
const totalWidth = outerBox.scrollHeight;
const input = document.querySelector("input");
const button = document.querySelector("button");

setTable(howMany);

button.addEventListener('click', function () { resetTable(input.value) } );

function resetTable(value) {

    if (+value) {

        outerBox.innerHTML = ''
        setTable(+value);

    } else {

        alert("Please enter a real number");

    }
}

function setTable(value) {
    
    for (let i = 1; i <= value * value; i++) {

        let innerBox = document.createElement("DIV");
        innerBox.classList = (`innerBox${i} innerBox`);
        innerBox.style.width=`${totalWidth/value}px`;
        innerBox.style.height=`${totalWidth/value}px`;
        outerBox.appendChild(innerBox);

    }

}






