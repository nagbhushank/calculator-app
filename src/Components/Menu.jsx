import Button from "@mui/material/Button";
import { useState } from "react";

const Menu = () => {
    const [counter, setCounter] = useState(0);

    const handleClick = () => {
        console.log("Button Clicked");
        setCounter(counter + 1);
    };

    return (
        <>
            <div>
                <Button variant="text">Text</Button>
                <Button variant="contained" color="error">
                    Contained
                </Button>
                <Button onClick={handleClick} variant="outlined">
                    Outlined
                </Button>
            </div>
            <div>
                <h2>{counter}</h2>
            </div>
        </>
    );
};
export default Menu;
