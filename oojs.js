// Alap osztály létrehozása
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    describe() {
        return `${this.name}, ${this.age} éves`;
    }
}

// Leszármazott osztály
class Student extends Person {
    constructor(name, age, subject) {
        super(name, age);
        this.subject = subject;
    }

    describe() {
        return `${super.describe()}, tanul: ${this.subject}`;
    }
}

// DOM manipuláció – Megjelenítés az oldalon
window.createPerson = function () {
    let randomNames = ["Anna", "Bence", "Csilla", "Dávid", "Evelin"];
    let randomSubjects = ["Matematika", "Fizika", "Történelem", "Programozás", "Biológia"];
    let name = randomNames[Math.floor(Math.random() * randomNames.length)];
    let age = Math.floor(Math.random() * (30 - 18 + 1)) + 18;
    let subject = randomSubjects[Math.floor(Math.random() * randomSubjects.length)];

    let student = new Student(name, age, subject);
    let p = document.createElement("p");
    p.textContent = student.describe();
    document.getElementById("people-list").appendChild(p);
};
