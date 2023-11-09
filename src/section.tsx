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
              <p className='post'>Mark Webber reacted to your recent post My first tournament today!</p>
                 <p className='post-time'>1m ago</p>
             </li>

             <li>
              <img src={angela} alt=""></img>
              <p className='post'>Angela Gray followed you</p>
                 <p className='post-time'>5m ago</p>
             </li>

             <li>
              <img src={jacob} alt=""></img>
              <p className='post'>Jacob Thompson has joined your group Chess Club</p>
                 <p className='post-time'>1 day ago</p>
             </li>

             <li>
              <img src={rizky} alt=""></img>
              <p className='post'>Rizky Hasanuddin sent you a private message</p>
                 <p className='post-time'>5 days ago</p>
              <p className='post-comments'>Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and 
                I'm already having lots of fun and improving my game.</p>
              </li>

             <li>
              <img src={kimberly} alt=""></img>
              <p className='post'>Kimberly Smith commented on your picture</p>
                 <p className='post-time'>1 week ago</p>
             </li>

             <li>
              <img src={nathan} alt=""></img>
              <p className='post'>Nathan Peterson reacted to your recent post 5 end-game strategies to increase your win rate</p>
                 <p className='post-time'>2 weeks ago</p>
              </li>

             <li>
              <img src={anna} alt=""></img>
              <p className='post'>Anna Kim left the group Chess Club</p>
                 <p className='post-time'>2 weeks ago</p>
             </li>
         </ol>
      </section>
    )
  }
  
  export default Section