import React, { useState, useEffect } from "react";
import './Section9.css';
import img9 from './image/img9.png';

function Section9() {
    const [animationCount, setAnimationCount] = useState(0);

    useEffect(() => {
        const imgElement = document.querySelector('.img9 img');
        const handleAnimationEnd = () => {
            setAnimationCount(prevCount => prevCount + 1);
        };

        imgElement.addEventListener('animationiteration', handleAnimationEnd);

        return () => {
            imgElement.removeEventListener('animationiteration', handleAnimationEnd);
        };
    }, []);

    useEffect(() => {
        const imgElement = document.querySelector('.img9 img');
        if (animationCount >= 3) {
            imgElement.classList.remove('animate');
        }
    }, [animationCount]);

    return (
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
                <img src={img9} alt="img9" className="animate" />
            </div>
        </div>
    );
}

export default Section9;
