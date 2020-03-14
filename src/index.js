function draw() {
    const el = document.createElement('div');
    el.innerHTML = 'Hello WebPack';
    return el;
}

document.body.append(draw());