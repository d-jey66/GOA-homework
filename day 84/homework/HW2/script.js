let child = document.querySelector('.child');
let emoji = document.getElementById('emoji');
let p = document.getElementById('p');
let moveAmnt = 5;
let y = 0;
let x = 0;
document.addEventListener('keydown', event => {

    if (event.key.startsWith('Arrow')) {
        switch (event.key) {
            case 'ArrowUp':
                if (y > 0) { 
                    y -= moveAmnt;
                }
                break;
            case 'ArrowDown':
                if (y < 495) {
                    y += moveAmnt;
                }
                break;
            case 'ArrowLeft':
                if (x > 0) {
                    x -= moveAmnt;
                }
                break;
            case 'ArrowRight':
                if (x < 495) {
                    x += moveAmnt;
                }
                break;
        }

        child.style.top = `${y}px`;
        child.style.left = `${x}px`;
        emoji.textContent = '😬';
        p.textContent = 'AAH ITS TOO FAST!!!';
        
    }
});

document.addEventListener('keyup', event => {
    if (event.key.startsWith('Arrow')) {
        emoji.textContent = '😀';
        p.textContent = '';
    }
});