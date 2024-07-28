function updateClock() {
    const clock = document.getElementById('clock');
    const timeZone = document.getElementById('timeZoneSelect').value;
    const options = { timeZone: timeZone, hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit' };
    const timeString = new Date().toLocaleTimeString('en-US', options);
    clock.textContent = timeString;
}

function changeTimeZone(timeZone) {
    updateClock();
}

updateClock();
setInterval(updateClock, 1000);
