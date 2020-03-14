import './style.css';

import getProfile from './profile';

function draw() {
    const el = document.createElement('div');
    el.innerHTML = 'Hello WebPack';
    el.classList.add('hello');

    const btn = document.createElement('button');
    btn.innerHTML = 'GET PROFILE';
    btn.onclick = getProfile;
    el.append(btn);

    return el;
}

document.body.append(draw());