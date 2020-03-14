import './style.css';

function draw() {
    const el = document.createElement('div');
    el.innerHTML = 'Hello WebPack';
    el.classList.add('hello');
    return el;
}

document.body.append(draw());