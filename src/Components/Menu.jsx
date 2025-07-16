import { useState } from "react";
import "../../style.css";

const Menu = () => {
    const [counter, setCounter] = useState(0);

    const btnObj = [
        {
            id: 1,
            text: "1",
        },
        {
            id: 2,
            text: "2",
        },
        {
            id: 3,
            text: "3",
        },
        {
            id: 4,
            text: "4",
        },
        {
            id: 5,
            text: "5",
        },
        {
            id: 6,
            text: "6",
        },
        {
            id: 7,
            text: "7",
        },
        {
            id: 8,
            text: "8",
        },
        {
            id: 9,
            text: "9",
        },
        {
            id: 0,
            text: "0",
        },
        // {
        //     id: 10,
        //     text: "+",
        // },
    ];

    const handleClick = (e) => {
        // console.log("Button Clicked");
        // setCounter(counter + 1);
        console.log(e);
        setCounter(parseInt(counter) + parseInt(e));
    };

    return (
        <div className="main-containter">
            <div className="label-wrapper">
                <p>{counter}</p>
            </div>
            <div>
                {btnObj.map((btn) => {
                    // console.log(btn.text);

                    return (
                        <button
                            className="btn"
                            onClick={() => handleClick(btn.text)}
                            key={btn.id}
                        >
                            {btn.text}
                        </button>
                    );
                })}
            </div>

            {/* <div>
                <div className="btn-container">
                    <button onClick={handleClick} className="btn">
                        1
                    </button>
                    <button onClick={handleClick} className="btn">
                        2
                    </button>
                    <button onClick={handleClick} className="btn">
                        3
                    </button>
                    <button onClick={handleClick} className="btn">
                        +
                    </button>
                </div>

                <div className="btn-container">
                    <button onClick={handleClick} className="btn">
                        4
                    </button>
                    <button onClick={handleClick} className="btn">
                        5
                    </button>
                    <button onClick={handleClick} className="btn">
                        6
                    </button>
                    <button onClick={handleClick} className="btn">
                        -
                    </button>
                </div>

                <div className="btn-container">
                    <button onClick={handleClick} className="btn">
                        7
                    </button>
                    <button onClick={handleClick} className="btn">
                        8
                    </button>
                    <button onClick={handleClick} className="btn">
                        9
                    </button>
                    <button onClick={handleClick} className="btn">
                        *
                    </button>
                </div>

                <div className="btn-container">
                    <button onClick={handleClick} className="btn">
                        /
                    </button>
                    <button onClick={handleClick} className="btn">
                        0
                    </button>
                </div>
            </div> */}
        </div>
    );
};
export default Menu;
