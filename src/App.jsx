import Card from "./components/Card";
import TextExpander from "./components/TextExpander";

import "./index.css";

const appStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    gap: "4rem",

    padding: "4rem 0",
};

function App() {
    return (
        <div style={appStyle}>
            <Card />
            <TextExpander />
        </div>
    );
}

export default App;