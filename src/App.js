
import './App.css';
import { useState } from "react";
import BasicButtons from "./MyButton";
import ActionAreaCard from "./MyCard";
import MyInput from "./MyInput";




const App = () => {
const[setCard,setShowCard]=useState(false);
const[setInput,setShowInput]=useState(true);
    const handleClick = () => {
        setShowCard(!setCard);
        setShowInput(setInput);
    };


    return (
        <div>
        <div className="nav">
            <BasicButtons onClick={handleClick}/>
        </div>
            <div className="cutie">
                {setCard && <ActionAreaCard/>}
            </div>
            <div>
                {setInput && <MyInput/>}
            </div>
        </div>

    );
};
export default App;
