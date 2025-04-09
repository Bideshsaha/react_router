import React from "react";
import { useNavigate } from "react-router-dom";

const Labs = () => {
    const navigate = useNavigate();
    function clickHandler(){
        navigate("/about");
    }
    function backHandler(){
        navigate(-1);
    }
    return (
        <div>
            
            <div>
                This is Lab Page
            </div>
            
                <button onClick={clickHandler}>Move to above page</button>
                <button onClick={backHandler}>Go back</button>
            
        </div>
        
    )
}

export default Labs;