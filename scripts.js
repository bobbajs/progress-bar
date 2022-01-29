const statusElem = document.getElementsByClassName('status');

let width = 0;
let interval = null;
let i = 0;

const loadStatus = () => {
    interval = setInterval(() => {
        if (width >= 100 && i < statusElem.length) {
            width = 0;
            i++;
        } else if (i === statusElem.length) {
            clearInterval(interval);
        } else {
            width += 1;
            statusElem[i].style.width = width + '%';

        }
    }, 100);
}

loadStatus();