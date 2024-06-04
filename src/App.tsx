import { useState } from "react";
import WithController from "./WithController";
import WithoutController from "./WithoutController";

function App() {
    const [withController, setWithController] = useState(true);
    const [height, setHeight] = useState(50);
    const [width, setWidth] = useState(50);

    const handleHeightChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        const value = Number(e.target.value)
        console.log(value, Number.isInteger(value))
        if (Number.isInteger(value)) {
            setHeight(value)
        }
    }

    const handleWidthChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        const value = Number(e.target.value)
        if (Number.isInteger(value)) {
            setWidth(value)
        }
    }

    return (
        <div className="App">
            <h2>{withController ? "With Controller" : "Without Controller"}</h2>
            <div className="grid-sizer">
                Height: <input type="text" value={height} onChange={handleHeightChange} />
                Width: <input type="text" value={width} onChange={handleWidthChange} />
            </div>
            <div className="button-row">
                <button
                    type="button"
                    onClick={() => setWithController(!withController)}
                >
                    Change Grid
                </button>
            </div>

            {withController ? (
                <WithController height={height} width={width} />
            ) : (
                <WithoutController height={height} width={width} />
            )}
        </div>
    );
}

export default App;
