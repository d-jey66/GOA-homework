const paragraph = document.getElementById('myParagraph');

function changeParagraph() {
    paragraph.style.color = 'white';
    paragraph.style.backgroundColor = 'black';
    paragraph.textContent = 'The text has been changed!';
}

setTimeout(changeParagraph, 3000);
