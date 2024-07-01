function updateClock() {
    const now = new Date();

    const hours = now.getHours().toString().padStart(2,0);
    const minutes = now.getMinutes().toString().padStart(2,0);
    const seconds = now.getSeconds().toString().padStart(2,0);

    const timeString = `${hours}:${minutes}:${seconds}`;
    // console.log(timeString);
    document.getElementById("clock").textContent = timeString;
}

function updateClock12Hours() {
    const now = new Date();

    let hours = now.getHours();
    const meridiem = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12;
    hours = hours.toString().padStart(2, 0);

    const minutes = now.getMinutes().toString().padStart(2,0);
    const seconds = now.getSeconds().toString().padStart(2,0);

    const timeString = `${hours}:${minutes}:${seconds} ${meridiem}`;
    // console.log(timeString);
    document.getElementById("clock").textContent = timeString;
}

updateClock12Hours();
setInterval(updateClock12Hours, 1000);

