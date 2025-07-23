let hr = document.getElementById('hour');
let min = document.getElementById('min');
let sec = document.getElementById('sec');

function displayTime() {
    let date = new Date(); // ⛔️ Fix: 'new date()' should be 'new Date()'

    let hh = date.getHours();   // ⛔️ 'gethours()' → should be 'getHours()'
    let mm = date.getMinutes();
    let ss = date.getSeconds(); // ⛔️ 'getSceonds()' → should be 'getSeconds()'

    let hRotation = 30 * hh + mm / 2;
    let mRotation = 6 * mm;
    let sRotation = 6 * ss;

    hr.style.transform = `rotate(${hRotation}deg)`;
    min.style.transform = `rotate(${mRotation}deg)`;
    sec.style.transform = `rotate(${sRotation}deg)`;
}

// Call once to show immediately, then update every second
displayTime();
setInterval(displayTime, 1000);

