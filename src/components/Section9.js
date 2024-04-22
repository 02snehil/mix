import React from "react";
import './Section9.css';
import img9 from './image/img9.png'

function Section9(){

    return(
        <>
            <div className="container9">
                <div className="heading9">
                    <p>We are trusted by the best!</p>
                </div>  
                <div className="boxes9">
                    <div className="box9_1">
                        <p>Better</p>
                    </div>
                    <div className="box9_2">
                        <p>640 OXFORD VENTURES</p>
                    </div>
                </div>   
                <div className="img9">
                      <img src={img9} alt="img9" />
                </div>    
            </div>
        </>
    );
}
export default Section9;