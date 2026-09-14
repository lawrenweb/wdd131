<<<<<<< HEAD

=======
// Current Year
document.getElementById("currentyear").textContent =
    new Date().getFullYear();

// Last Modified
document.getElementById("lastModified").textContent =
    `Last Modified: ${document.lastModified}`;

// Static Weather Values
const temperature = 8;
const windSpeed = 10;

// Wind Chill Function
function calculateWindChill(temp, speed) {
    return (
        13.12 +
        (0.6215 * temp) -
        (11.37 * Math.pow(speed, 0.16)) +
        (0.3965 * temp * Math.pow(speed, 0.16))
    ).toFixed(1);
}

let windChill = "N/A";

if (temperature <= 10 && windSpeed > 4.8) {
    windChill = `${calculateWindChill(temperature, windSpeed)} °C`;
}

document.getElementById("windchill").textContent = windChill;
>>>>>>> bc56fef (Completed Place Project)
