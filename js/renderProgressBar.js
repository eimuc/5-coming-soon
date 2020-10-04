import renderSingleProgressBar from './renderSingleProgressBar.js';

function renderProgressBar(data) {
    let HTML = '';
    for (let i = 0; i < data.length; i++) {
        const stats = data[i];
        HTML += renderSingleProgressBar(stats);
    }
    const mainDOM = document.querySelector('left-column');
    mainDOM.innerHTML = HTML;
}

export default renderProgressBar;