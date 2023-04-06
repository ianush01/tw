import { useState } from "react";
import './myInput.css'
const MyInput = () => {
    const [input1, setInput1] = useState("");
    const [input2, setInput2] = useState("");
    const [input3, setInput3] = useState("");

    const handleInputChange = (event, setInput) => {
        setInput(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Input 1:", input1);
        console.log("Input 2:", input2);
        console.log("Input 3:", input3);
        setInput1("");
        setInput2("");
        setInput3("");
    };


    return (
        <form onSubmit={handleSubmit}>
            <label>
                Input 1:
                <input type="text" value={input1} onChange={(e) => handleInputChange(e, setInput1)} />
            </label>
            <br />
            <label>
                Input 2:
                <input type="text" value={input2} onChange={(e) => handleInputChange(e, setInput2)} />
            </label>
            <br />
            <label>
                Input 3:
                <input type="text" value={input3} onChange={(e) => handleInputChange(e, setInput3)} />
            </label>
            <br />
            <button type="submit">Submit</button>
        </form>
    );
};

export default MyInput;
