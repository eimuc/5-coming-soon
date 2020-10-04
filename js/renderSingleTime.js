function renderSingleTime(data) {
     return `<div class="time">
                <div class="value">${data.number}</div>
                <div class="label">${data.text}</div>
            </div>`;
}

export default renderSingleTime;