import ReactDOM from "react-dom/client";
import Menu from "./Menu";

const App = () => {
    return (
        <div>
            <Menu />
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);
