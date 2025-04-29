document.addEventListener("DOMContentLoaded", function () {
    const tableBody = document.querySelector("#data-table tbody");

    let data = [
        { id: 1, name: "Anna", age: 23, city: "Budapest" },
        { id: 2, name: "Bence", age: 30, city: "Szeged" },
        { id: 3, name: "Csilla", age: 27, city: "Debrecen" },
        { id: 4, name: "Dávid", age: 35, city: "Győr" },
    ];

    function renderTable() {
        tableBody.innerHTML = "";
        data.forEach((item, index) => {
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${item.id}</td>
                <td contenteditable="true">${item.name}</td>
                <td contenteditable="true">${item.age}</td>
                <td contenteditable="true">${item.city}</td>
                <td>
                    <button onclick="deleteRow(${index})">❌ Törlés</button>
                </td>
            `;
            tableBody.appendChild(row);
        });
    }

    window.addRow = function () {
        const nameInput = document.getElementById("name").value;
        const ageInput = document.getElementById("age").value;
        const cityInput = document.getElementById("city").value;

        if (!nameInput || !ageInput || !cityInput) {
            alert("Minden mezőt ki kell tölteni!");
            return;
        }

        const newEntry = {
            id: data.length + 1,
            name: nameInput,
            age: parseInt(ageInput),
            city: cityInput
        };

        data.push(newEntry);
        renderTable();
    };
    window.sortTable = function (columnIndex) {
        let sortedData = [...data];
        sortedData.sort((a, b) => {
            let valueA = Object.values(a)[columnIndex];
            let valueB = Object.values(b)[columnIndex];
    
            if (typeof valueA === "string") {
                return valueA.localeCompare(valueB);
            } else {
                return valueA - valueB;
            }
        });
    
        // Ha már növekvően van, fordítsuk meg
        if (JSON.stringify(sortedData) === JSON.stringify(data)) {
            sortedData.reverse();
        }
    
        data = sortedData;
        renderTable();
    };
    window.filterTable = function () {
        let searchInput = document.getElementById("search").value.toLowerCase();
        let filteredData = data.filter(item => {
            return Object.values(item).some(value =>
                value.toString().toLowerCase().includes(searchInput)
            );
        });
    
        tableBody.innerHTML = "";
        filteredData.forEach((item, index) => {
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${item.id}</td>
                <td contenteditable="true">${item.name}</td>
                <td contenteditable="true">${item.age}</td>
                <td contenteditable="true">${item.city}</td>
                <td>
                    <button onclick="deleteRow(${index})">❌ Törlés</button>
                </td>
            `;
            tableBody.appendChild(row);
        });
    };
    
    window.deleteRow = function (index) {
        data.splice(index, 1);
        renderTable();
    };

    renderTable();
});
