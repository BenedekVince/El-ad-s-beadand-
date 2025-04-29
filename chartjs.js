document.addEventListener("DOMContentLoaded", function () {
    const tableBody = document.querySelector("#data-table tbody");
    const ctx = document.getElementById("chartCanvas").getContext("2d");

    let data = [
        [10, 20, 30, 40, 50],
        [15, 25, 35, 45, 55],
        [12, 22, 32, 42, 52],
        [18, 28, 38, 48, 58],
        [14, 24, 34, 44, 54]
    ];

    // Táblázat generálása
    data.forEach((row, index) => {
        let tr = document.createElement("tr");
        tr.innerHTML = `<td>${index + 1}</td>` + row.map(value => `<td>${value}</td>`).join("");
        tr.addEventListener("click", () => updateChart(row));
        tableBody.appendChild(tr);
    });

    // Diagram létrehozása
    let chart = new Chart(ctx, {
        type: "line",
        data: {
            labels: ["A", "B", "C", "D"],
            datasets: [{
                label: "Adatok",
                data: [],
                borderColor: "blue",
                borderWidth: 2
            }]
        },
        options: {
            responsive: true
        }
    });

    // Frissítjük a diagramot, amikor egy sort kiválasztunk
    window.updateChart = function (rowData) {
        chart.data.datasets[0].data = rowData;
        chart.update();
    };
});
