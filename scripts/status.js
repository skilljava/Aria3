// Update current time
function updateTime() {
    const now = new Date();
    const timeString = now.toLocaleTimeString('fa-IR');
    const dateString = now.toLocaleDateString('fa-IR');
    const currentTimeEl = document.getElementById('currentTime');
    if (currentTimeEl) {
        currentTimeEl.textContent = `${timeString} - ${dateString}`;
    }
}

// Update time every second
setInterval(updateTime, 1000);
updateTime();

// Generate uptime chart
function generateUptimeChart() {
    const chartContainer = document.getElementById('uptimeChart');
    if (!chartContainer) return;

    for (let i = 0; i < 30; i++) {
        const bar = document.createElement('div');
        bar.className = 'chart-bar';
        const height = Math.random() * 30 + 70; // Random height between 70-100%
        bar.style.height = height + '%';
        bar.title = `روز ${i + 1}: ${height.toFixed(2)}%`;
        chartContainer.appendChild(bar);
    }
}

// Animate progress bars
function animateProgressBars() {
    const progressBars = document.querySelectorAll('.progress-fill');
    progressBars.forEach((bar, index) => {
        setTimeout(() => {
            const width = bar.style.width;
            bar.style.width = '0%';
            setTimeout(() => {
                bar.style.width = width;
            }, 100);
        }, index * 100);
    });
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    generateUptimeChart();
    animateProgressBars();
});
