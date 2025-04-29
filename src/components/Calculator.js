import React, { useState } from "react";

function Calculator() {
    const [num1, setNum1] = useState("");
    const [num2, setNum2] = useState("");
    const [result, setResult] = useState(null);

    const handleCalculate = () => {
        if (num1 === "" || num2 === "") {
            alert("Kérlek, adj meg mindkét számot!");
            return;
        }
        setResult(Number(num1) + Number(num2));
    };

    return (
        <div style={{ textAlign: "center", marginTop: "50px" }}>
            <h2>Számológép</h2>
            <input
                type="number"
                placeholder="Első szám"
                value={num1}
                onChange={(e) => setNum1(e.target.value)}
            />
            <input
                type="number"
                placeholder="Második szám"
                value={num2}
                onChange={(e) => setNum2(e.target.value)}
            />
            <button onClick={handleCalculate}>Számolj</button>
            {result !== null && <p>Eredmény: {result}</p>}
        </div>
    );
}

export default Calculator;
