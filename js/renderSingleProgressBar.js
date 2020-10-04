function renderSingleProgressBar(data) {
    return `<div class="progress-bar">
                <div class="top">
                    <div class="label">${data.label}</div>
                    <div class="percentage">${data.percentage}</div>
                </div>
                <div class="bottom">
                <div class="progress" style="width: ${data.percentage};">
                    <div class="bar"></div>
                    </div>
                </div>
            </div>`;
}

export default renderSingleProgressBar;