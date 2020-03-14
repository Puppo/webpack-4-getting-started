import './style.css';

import getProfile from './profile';
import { product } from './catalog';

function draw() {
    const el: HTMLDivElement = document.createElement('div');
    el.innerHTML = product.title;
    el.classList.add('hello');

    const btn: HTMLButtonElement = document.createElement('button');
    btn.innerHTML = 'GET PROFILE';
    btn.onclick = getProfile;
    el.append(btn);

    return el;
}

document.body.append(draw());