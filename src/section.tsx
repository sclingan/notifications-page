import angela from '../public/images/avatar-angela-gray.webp';
import anna from '../public/images/avatar-anna-kim.webp';
import jacob from '../public/images/avatar-jacob-thompson.webp';
import kimberly from '../public/images/avatar-kimberly-smith.webp';
import mark from '../public/images/avatar-mark-webber.webp';
import nathan from '../public/images/avatar-nathan-peterson.webp';
import rizky from '../public/images/avatar-rizky-hasanuddin.webp';


function Section() {
    return (
      <section>
         <ol>
             <li>
              <img src={mark} alt=""></img>
              <p>Mark Webber reacted to your recent post My first tournament today!</p>
                 1m ago
             </li>

             <li>
              <img src={angela} alt=""></img>
              <p>Angela Gray followed you</p>
                 5m ago
             </li>

             <li>
              <img src={jacob} alt=""></img>
              <p>Jacob Thompson has joined your group Chess Club</p>
                 1 day ago
             </li>

             <li>
              <img src={rizky} alt=""></img>
              <p>Rizky Hasanuddin sent you a private message</p>
                 5 days ago
              <p>Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and 
                I'm already having lots of fun and improving my game.</p>
              </li>

             <li>
              <img src={kimberly} alt=""></img>
              <p>Kimberly Smith commented on your picture</p>
                 1 week ago
             </li>

             <li>
              <img src={nathan} alt=""></img>
              <p>Nathan Peterson reacted to your recent post 5 end-game strategies to increase your win rate</p>
                 2 weeks ago
              </li>

             <li>
              <img src={anna} alt=""></img>
              <p>Anna Kim left the group Chess Club</p>
                 2 weeks ago
             </li>
         </ol>
      </section>
    )
  }
  
  export default Section