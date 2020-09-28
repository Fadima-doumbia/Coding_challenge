import React from 'react';
import facebookIcone from '../assets/social/facebook-white.svg';
import twiter from '../assets/social/twitter-white.svg';
import instagrame from '../assets/social/instagram-white.svg';
import appStore from '../assets/store/app-store.svg';
import playStore from '../assets/store/play-store.svg';
import windowStore from '../assets/store/windows-store.svg';
import '../style/footer.css'


function MonFooter(){
    return(
        <footer className = "footer">
            <article>
               <ul>
                   <li>Home | </li>
                   <li> Terme and conditions | </li> 
                   <li> Privacy Policy| </li> 
                   <li> collection Statement | </li> 
                   <li> Help | </li> 
                   <li> Manage Account </li>
               </ul>
               
               <h5>copyrights @ 2016 DEMO Streaming ALL RIGHTS Reservent</h5>
            </article>
           
            <div className = "logos">
                <div className = "left">
                    <img src={facebookIcone} alt=""/>
                    <img src={twiter} alt=""/>
                    <img src={instagrame} alt=""/>
                </div>
                <div className = "right">
                <img src={appStore} alt=""/>
                <img src={playStore} alt=""/>
                <img src={windowStore} alt="windows"/>
                </div>
            </div>
        </footer>
    )
}

export default MonFooter