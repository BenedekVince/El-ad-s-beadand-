const API_URL = "http://gamf.nhely.hu/ajax2/";  
const USER_CODE = "BBBBBBefg456";  // Cseréld le saját Neptun kódodra!

// 📌 Adatok lekérése (READ)
window.fetchData = function () {
    fetch(`${API_URL}?op=read&code=${USER_CODE}`)
        .then(response => response.json())
        .then(data => {
            document.getElementById("api-output").innerHTML = JSON.stringify(data.list, null, 2);
        })
        .catch(error => console.error("Hiba a lekérésnél:", error));
};

// 📌 Adat lekérése ID alapján (READ)
window.getDataForId = function () {
    let id = document.getElementById("input-id").value;
    fetch(`${API_URL}?op=read&code=${USER_CODE}`)
        .then(response => response.json())
        .then(data => {
            let record = data.list.find(item => item.id === id);
            if (record) {
                document.getElementById("input-name").value = record.name;
                document.getElementById("input-height").value = record.height;
                document.getElementById("input-weight").value = record.weight;
            } else {
                alert("Nincs ilyen ID!");
            }
        })
        .catch(error => console.error("Hiba ID lekérésnél:", error));
};

// 📌 Adat hozzáadása (CREATE)
window.createData = function () {
    let name = document.getElementById("input-name").value;
    let height = document.getElementById("input-height").value;
    let weight = document.getElementById("input-weight").value;

    if (name.length === 0 || height.length === 0 || weight.length === 0) {
        alert("Minden mezőt ki kell tölteni!");
        return;
    }

    fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: `op=create&name=${name}&height=${height}&weight=${weight}&code=${USER_CODE}`
    })
    .then(response => response.json())
    .then(result => {
        alert("Sikeres hozzáadás!");
        fetchData();
    })
    .catch(error => console.error("Hiba a hozzáadásnál:", error));
};

// 📌 Adat módosítása (UPDATE)
window.updateData = function () {
    let id = document.getElementById("input-id").value;
    let name = document.getElementById("input-name").value;
    let height = document.getElementById("input-height").value;
    let weight = document.getElementById("input-weight").value;

    if (id.length === 0 || name.length === 0 || height.length === 0 || weight.length === 0) {
        alert("Minden mezőt ki kell tölteni!");
        return;
    }

    fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: `op=update&id=${id}&name=${name}&height=${height}&weight=${weight}&code=${USER_CODE}`
    })
    .then(response => response.json())
    .then(result => {
        alert("Sikeres módosítás!");
        fetchData();
    })
    .catch(error => console.error("Hiba a módosításnál:", error));
};

// 📌 Adat törlése (DELETE)
window.deleteData = function () {
    let id = document.getElementById("input-id").value;

    if (id.length === 0) {
        alert("Meg kell adni egy ID-t a törléshez!");
        return;
    }

    fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: `op=delete&id=${id}&code=${USER_CODE}`
    })
    .then(response => response.json())
    .then(result => {
        alert("Sikeres törlés!");
        fetchData();
    })
    .catch(error => console.error("Hiba a törlésnél:", error));
};
