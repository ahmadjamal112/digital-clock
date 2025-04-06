function updateClockOnce() {
    const now = new Date();
    
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    let session = "AM";

    if (hours >= 12) {
        session = "PM";
        if (hours > 12) hours -= 12;
    }
    if (hours === 0) hours = 12;

    hours = hours.toString().padStart(2, "0");
    minutes = minutes.toString().padStart(2, "0");
    seconds = seconds.toString().padStart(2, "0");

    const timeString = `${hours}:${minutes}:${seconds} ${session}`;
    const dateString = now.toLocaleDateString("en-US", {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

    document.getElementById("digitalClock").innerText = timeString;
    document.getElementById("digitalDate").innerText = dateString;
}

// صرف ایک بار اپڈیٹ کرنے کے لیے
updateClockOnce();
