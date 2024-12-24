import { useState } from "react";

const cardStyle = {
    backgroundColor: "#f1f3f5",
    padding: "1rem",
    height: "fit-content",
    borderRadius: "1rem",
    border: "2px solid grey",
    width: "20rem",
};

const numsContainer = {
    display: "flex",
    gap: "1rem",
    width: "100%",
    justifyContent: "space-between",
    marginBottom: "2rem",
};

const active = {
    backgroundColor: "#ae3ec9",
    color: "#fff",
};

const numStyle = {
    height: "2rem",
    width: "2rem",
    borderRadius: "100%",

    backgroundColor: "#fff",
    color: "black",
    fontWeight: "bold",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
};

const messageStyle = {
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: "2rem",
};

const buttonContainer = {
    display: "flex",
    justifyContent: "space-between",
};

const btnStyle = {
    padding: "0.5rem 1rem",
    border: "none",
    backgroundColor: "#ae3ec9",
    borderRadius: "1rem",
    color: "#fff",
    cursor: "pointer",
};

const messages = [
    "😎 Learn HTML",
    "🐳 Learn CSS",
    "💪 JavaScript",
    "🤑 Learn React",
];

// 1. Initial Render : step = 1
// 2. setStep(2) : Re-Render Conponet --> step = 2
// 3. setStep(3) : Re-Render Conponet --> step = 3
// 4. setStep(4) : Re-Render Conponet --> step = 4

function Card() {
    const [step, setStep] = useState(1);

    function minusStep() {
        if (step === 1) return;
        setStep(step - 1);
        // Immediately updated state can'not be accessed
        // We can access it after re-render
    }

    function plusStep() {
        if (step === messages.length) return;
        setStep(step + 1);
    }

    return (
        <div style={cardStyle}>
            <ul style={numsContainer}>
                <div style={step >= 1 ? { ...numStyle, ...active } : numStyle}>
                    <span>1</span>
                </div>
                <div style={step >= 2 ? { ...numStyle, ...active } : numStyle}>
                    <span>2</span>
                </div>
                <div style={step >= 3 ? { ...numStyle, ...active } : numStyle}>
                    <span>3</span>
                </div>
                <div style={step >= 4 ? { ...numStyle, ...active } : numStyle}>
                    <span>4</span>
                </div>
            </ul>

            <p style={messageStyle}>{messages[step - 1]}</p>

            <div style={buttonContainer}>
                <button onClick={minusStep} style={btnStyle}>
                    Prev
                </button>
                <button onClick={plusStep} style={btnStyle}>
                    Next
                </button>
            </div>
        </div>
    );
}

export default Card;