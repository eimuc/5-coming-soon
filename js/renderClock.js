import renderSingleTime from './renderSingleTime.js';

function renderClock(data) {
    let HTML = '';
    for (let i = 0; i < data.length; i++) {
        const time = data[i];
        HTML += renderSingleTime(time);
    }
    const heroDOM = document.querySelector('clock');
    heroDOM.innerHTML = HTML;
}

export default renderClock;