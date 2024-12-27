/*
Do not edit code here (line 1 - 12)
*/
const createDiv = (name, orden) => {
    const div = document.createElement('div');
    div.className = 'box';
    const now = new Date();
    const time = `${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`;
    div.innerText = `${name} [Enviado de: ${orden}] apareció en ${time}`;
    const body = document.querySelector('body');
    body.appendChild(div);
}

const addA = (callback, orden, delay = 0) => {
    setTimeout(() => {
        createDiv('A', orden)
        if (callback) {
            callback();
        }
    }, delay);
}

const addB = (callback, orden, delay = 0) => {
    setTimeout(() => {
        createDiv('B', orden)
        if (callback) {
            callback();
        }
    }, delay);
}

const addC = (callback, orden, delay = 0) => {
    setTimeout(() => {
        createDiv('C', orden)
        if (callback) {
            callback();
        }
    }, delay);
}

const addD = (callback, orden, delay = 0) => {
    setTimeout(() => {
        createDiv('D', orden)
        if (callback) {
            callback();
        }
    }, delay);
}

const addE = (callback, orden, delay = 0) => {
    setTimeout(() => {
        createDiv('E', orden)
        if (callback) {
            callback();
        }
    }, delay);
}

const addF = (callback, orden, delay = 0) => {
    setTimeout(() => {
        createDiv('F', orden)
        if (callback) {
            callback();
        }
    }, delay);
}

const addG = (callback, orden, delay = 0) => {
    setTimeout(() => {
        createDiv('G', orden)
        if (callback) {
            callback();
        }
    }, delay);
}

const addH = (callback = () => { }, orden, delay = 0) => {
    setTimeout(() => {
        createDiv('H', orden)
        if (callback) {
            callback();
        }
    }, delay);
}

window.onload = () => {
    const dDelay = Math.round(Math.random() * 3000) + 2000; // random 2000 - 5000
    setTimeout(() => {
        addA(function () {
            addB(undefined, 2);
            addF(undefined, 3, 7000);
            addC(undefined, 4, 5000);
        }, 1, 0);
        addD(function () {
            addE(function () {
                /*addF(function () {
                    addG(undefined, 7, 2000);
                    addH(undefined, 8, 3000);
                }, 7, 15000)*/
                addG(undefined, 7, 2000);
                addH(undefined, 8, 5000);
            }, 6, 2000);
        }, 5, dDelay);

    }, 3000);
}
