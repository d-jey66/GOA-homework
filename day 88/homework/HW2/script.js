const colorValue = document.getElementById("color");
const mainContainer = document.getElementsByClassName("main-box-container")[0];
const addItemIcon = document.getElementById("+");

addItemIcon.addEventListener("click", handleAdd);

let newX, newY, oldy = 0, oldx = 0;

function handleAdd() {
    let newDiv = document.createElement("div");

    newDiv.innerHTML = `
        <form class="box-container">
            <div class="box-bar">
                <span class="number" style="float: left; margin-left: 10px; margin-top: 2px;"></span>
                <span id="x">&#10005;</span>
            </div>
            <textarea name="ta" id="ta" placeholder="Enter text..."></textarea>
        </form>
    `;

    const boxValue = newDiv.querySelector(".box-bar");
    const boxContainer = newDiv.querySelector(".box-container");
    const exitElement = newDiv.querySelector("#x");
    const txtArea = newDiv.querySelector("#ta");

    txtArea.style.background = colorValue.value;

    mainContainer.appendChild(newDiv);

    updateNumbers(); 

    exitElement.addEventListener("click", handleRemove);

    function handleRemove() {
        boxContainer.parentElement.remove();
        updateNumbers(); 
    }

    boxValue.addEventListener("mousedown", handleMouseDown);

    function handleMouseDown(e) {
        e.preventDefault();

        oldx = e.clientX;
        oldy = e.clientY;

        document.addEventListener("mousemove", handleMove);
        document.addEventListener("mouseup", handleMoveUp);

        function handleMove(e) {
            e.preventDefault();

            newY = oldy - e.clientY;
            newX = oldx - e.clientX;

            oldx = e.clientX;
            oldy = e.clientY;

            boxContainer.style.top = (boxContainer.getBoundingClientRect().top - newY) + "px";
            boxContainer.style.left = (boxContainer.getBoundingClientRect().left - newX) + "px";
        }

        function handleMoveUp() {
            document.removeEventListener("mousemove", handleMove);
            document.removeEventListener("mouseup", handleMoveUp);
        }

        let TC = document.getElementById('color1').value;
        let BC = document.getElementById('color2').value;

        txtArea.style.color = TC;
        boxContainer.style.border = `${'3px solid ' + BC}`
    }
}

function updateNumbers() {
    const allTextareas = document.querySelectorAll('.main-box-container .box-bar .number');
    allTextareas.forEach((element, index) => {
        element.textContent = index + 1;
    });
}
//here it logs 10000 with + / and *

let count = 0;

function handleAdd() {
    count++;
    console.log(count);
}