// Web Storage (localStorage mentés és visszaolvasás)
window.saveToLocalStorage = function () {
    let inputValue = document.getElementById("storageInput").value;
    localStorage.setItem("storedData", inputValue);
    document.getElementById("storageOutput").innerText = "Mentett érték: " + inputValue;
};

// Geolocation API – Felhasználó helyének meghatározása
window.getLocation = function () {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            document.getElementById("locationOutput").innerText = 
                `Koordináták: ${position.coords.latitude}, ${position.coords.longitude}`;
        });
    } else {
        alert("A böngésző nem támogatja a Geolocation API-t.");
    }
};

// Canvas rajzolás – Egyszerű téglalap megjelenítése
window.drawCanvas = function () {
    let canvas = document.getElementById("myCanvas");
    let ctx = canvas.getContext("2d");
    ctx.fillStyle = "blue";
    ctx.fillRect(50, 50, 100, 50);
};
// Drag and Drop API – Fogd és vidd
let dragItem = document.getElementById("draggable");
let dropZone = document.getElementById("drop-zone");

dragItem.addEventListener("dragstart", function(event) {
    event.dataTransfer.setData("text", event.target.id);
});

dropZone.addEventListener("dragover", function(event) {
    event.preventDefault();
});

dropZone.addEventListener("drop", function(event) {
    event.preventDefault();
    let data = event.dataTransfer.getData("text");
    let draggedElement = document.getElementById(data);
    dropZone.appendChild(draggedElement);
});
// Web Worker – Háttérszámítás
window.startWorker = function () {
    let worker = new Worker("worker.js");
    worker.onmessage = function(e) {
        alert("Számítás eredménye: " + e.data);
    };
};
// Server-Sent Events – Folyamatos adatok a szerverről
window.startSSE = function () {
    if (typeof EventSource !== "undefined") {
        let source = new EventSource("https://demo.sse.dev/events");
        source.onmessage = function(event) {
            document.getElementById("sse-output").innerHTML += `<p>${event.data}</p>`;
        };
    } else {
        alert("A böngésző nem támogatja a Server-Sent Events API-t.");
    }
};
// SVG rajzolás – Dinamikus forma létrehozása
window.drawSVG = function () {
    let svg = document.getElementById("svgCanvas");
    let circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    circle.setAttribute("cx", 50);
    circle.setAttribute("cy", 50);
    circle.setAttribute("r", 30);
    circle.setAttribute("fill", "red");
    svg.appendChild(circle);
};
