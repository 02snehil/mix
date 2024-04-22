import React, { useEffect } from "react";
import './Section2.css';
import icons1 from './image/icons1.png'
import icons2 from './image/icons2.png'

function Section2(){

    useEffect(() => {
        const img1 = document.querySelector('.leftToRight');
        const img2 = document.querySelector('.rightToLeft');
        let animationCount1 = 0;
        let animationCount2 = 0;

        const handleAnimationIteration = (event) => {
            if (event.animationName === 'moveLeftToRight') {
                animationCount1++;
                if (animationCount1 >= 3) {
                    img1.style.animation = 'none';
                }
            } else if (event.animationName === 'moveRightToLeft') {
                animationCount2++;
                if (animationCount2 >= 3) {
                    img2.style.animation = 'none';
                }
            }
        };
        
        img1.addEventListener('animationiteration', handleAnimationIteration);
        img2.addEventListener('animationiteration', handleAnimationIteration);
        
        return () => {
            img1.removeEventListener('animationiteration', handleAnimationIteration);
            img2.removeEventListener('animationiteration', handleAnimationIteration);
        };
    }, []);

    return(
        <> 
            <div className="container2">
                <div className="heading2">
                    <h1>
                        <br />Become <br /> the Top <br /> 1%              
                    </h1>
                    <h4>
                        Whether it is Product, Growth, Design, 
                        Management, Business, Tech & Data  
                        GrowthSchool is the place to learn from top  
                        experts in the field.
                    </h4>
                    <button className="explore_programs">
                        <b>Explore Programs</b>
                    </button>
                </div>
                <div className="paragraph">
                    {/* <p> and many more who are working at  <br />
                        some of the top companies
                    </p> */}
                </div>
                <div className="images">
                    <img src={icons1} alt="icons1" className="leftToRight" />
                </div>
                <div className="images">
                    <img src={icons2} alt="icons2" className="rightToLeft" />
                </div>
            </div>
        </>
    )
}

export default Section2;
