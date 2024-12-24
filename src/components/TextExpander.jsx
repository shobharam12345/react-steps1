import { useState } from "react";

const textStyle = {
    maxWidth: "40rem",
};

const btnStyle = {
    border: "none",
    backgroundColor: "transparent",
    marginLeft: "0.5rem",
    color: "blue",
    cursor: "pointer",
};

const rawText = `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis
                nihil quia cum alias harum voluptatem aliquam odio eum rerum
                dolor maxime, laborum dolorum iure magni quos, aut consequatur
                doloribus sunt.Lorem ipsum dolor, sit amet consectetur
                adipisicing elit. Nobis nihil quia cum alias harum voluptatem
                aliquam odio eum rerum dolor maxime, laborum dolorum iure magni
                quos, aut consequatur doloribus sunt.Lorem ipsum dolor, sit amet
                consectetur adipisicing elit. Nobis nihil quia cum alias harum
                voluptatem aliquam odio eum rerum dolor maxime.`;

function TextExpander() {
    const [show, setShow] = useState(false);

    // Derived State
    const text = show ? rawText : rawText.slice(0, 100);

    function handleClick() {
        setShow((show) => !show);
    }

    return (
        <div style={textStyle}>
            <span>{text}</span>
            <button style={btnStyle} onClick={handleClick}>
                {show ? "show Less" : "...show More"}
            </button>
        </div>
    );
}

export default TextExpander;