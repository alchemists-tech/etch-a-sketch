let howMany = 16;

const outerBox = document.querySelector(".box");
const totalWidth = outerBox.scrollHeight;

for (let i = 1; i <= howMany * howMany; i++) {

    let innerBox = document.createElement("DIV");
    innerBox.classList = (`innerBox${i} innerBox`);
    innerBox.style.width=`${totalWidth/howMany}px`;
    innerBox.style.height=`${totalWidth/howMany}px`;
    outerBox.appendChild(innerBox);

}



