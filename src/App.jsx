import Card from "./components/Card";
import TextExpander from "./components/TextExpander";
import DateCounter from "./components/DateCounter";
import StarRating from "./components/StarRating";

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
            <DateCounter />
            <StarRating />
        </div>
    );
}

export default App;