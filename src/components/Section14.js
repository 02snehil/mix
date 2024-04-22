import React from "react";
import './Section14.css';
import icon14 from './image/icon14.png';
import web from './image/web.png';
import twit from './image/tw.png';
import yt from './image/yt.png';
import insta from './image/insta.png';



function Section14(){

    return(
        <>
           <div className="container14">
               <div className="container14-heading">
                  <div className="container14-heading-left">
                      <div className="container14-heading-left-icon">
                          <img src={icon14} alt="icon14" />&emsp;
                          <p style={{color:'#00C881'}}>CREDMARG</p>
                       </div>
                       <div className="container14-heading-left-details">
                           <p>
                              3rd Floor, Cowork Valley, MMS Divya Diamonds Junction, 
                              Kavuri Hills Phase 2 Rd, Hyderabad, Telangana 500033
                           </p> <br/>
                           <img src={insta} alt="insta"/>&emsp;
                           <img src={web} alt="web"/>&emsp;
                           <img src={twit} alt="twit"/>&emsp;
                           <img src={yt} alt="yt"/>   <br/>
                       </div>
                  </div>
                  <div className="container14-heading-right">
                    <div className="container14-heading-right-company">
                        <p className="p14_1">Company</p>
                        <p>About Us</p>
                        <p>Blog</p>
                        <p>Home</p>
                    </div>
                    <div className="container14-heading-right-legal">
                        <p className="p14_1">Legal</p>
                        <p>Terms of use</p>
                        <p>Privacy policy</p>
                    </div>
                    <div  className="container14-heading-right-support">
                        <p className="p14_1">Support</p>
                        <p>contact@Credmarg.com</p>
                        <p>+91 9672421830</p>
                    </div>
                  </div>
               </div>
               <div className="container14-details">
                   <p>Credmarg technologies pvt. Ltd.(WealthDekho) is neither
                       a stock exchange nor does it intend to get recognized
                       as a stock exchange under the Securities Contracts
                       Regulation Act, 1956. Credmarg technolgies Pvt Ltd is 
                       not authorized by the capital markets regulator to solicit 
                       investments. The securities traded on these platforms are not 
                       traded on any regulated exchange. Wealthdekho also provides that 
                       it does not facilitate any online or offline buying, selling, or 
                       trading of securities.
                   </p>
                   <p>This Site will be updated on a regular basis.</p>
                   <p><b>Credmarg Technologies  Private Limited </b>
                      (CIN-: U74999DL2021PTC386817)Registered Contact: +91 9672421830 
                      (contact@Wealthdekho.com)
                   </p> <br/><br/>
                   <p className="p-copyright">Copyright © 2022 Credmarg All rights reserved</p>
               </div>
           </div>
        </>
    );
}
export default Section14;