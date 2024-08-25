const colorValue = document.getElementById("color");
const mainContainer = document.getElementsByClassName("main-box-container")[0];
const addItemIcon = document.getElementById("+");

const handleAdd = () => {
    const newDiv = document.createElement("div");

    newDiv.innerHTML = `
        <form class="box-container">
            <div class="box-bar">
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

    exitElement.addEventListener("click", () => {
        boxContainer.parentElement.remove();
    });

    const handleMouseDown = (e) => {
        e.preventDefault();

        let oldx = e.clientX;
        let oldy = e.clientY;

        const handleMove = (e) => {
            e.preventDefault();

            const newX = oldx - e.clientX;
            const newY = oldy - e.clientY;

            oldx = e.clientX;
            oldy = e.clientY;

            boxContainer.style.top = `${boxContainer.getBoundingClientRect().top - newY}px`;
            boxContainer.style.left = `${boxContainer.getBoundingClientRect().left - newX}px`;
        };

        const handleMoveUp = () => {
            document.removeEventListener("mousemove", handleMove);
            document.removeEventListener("mouseup", handleMoveUp);
        };

        document.addEventListener("mousemove", handleMove);
        document.addEventListener("mouseup", handleMoveUp);

        const TC = document.getElementById('color1').value;
        const BC = document.getElementById('color2').value;

        txtArea.style.color = TC;
        boxContainer.style.border = `3px solid ${BC}`;
    };

    boxValue.addEventListener("mousedown", handleMouseDown);
};

addItemIcon.addEventListener("click", handleAdd);
