import angela from '../public/images/avatar-angela-gray.webp';
import anna from '../public/images/avatar-anna-kim.webp';
import jacob from '../public/images/avatar-jacob-thompson.webp';
import kimberly from '../public/images/avatar-kimberly-smith.webp';
import mark from '../public/images/avatar-mark-webber.webp';
import nathan from '../public/images/avatar-nathan-peterson.webp';
import rizky from '../public/images/avatar-rizky-hasanuddin.webp';
import chess from '../public/images/image-chess.webp';


function Section() {
    return (
      <section>
         <ol>
             <li className='unread'>
              <img src={mark} alt=""></img>
              <div className='post-container'>
              <p className='post'><span className='user-name'>Mark Webber</span> reacted to your recent post <span className='recent-post'>My first tournament today!</span>
              <span className='dot'></span></p>
              <p className='post-time'>1m ago</p>
              </div>
             </li>

             <li className='unread'>
              <img src={angela} alt=""></img>
              <div className='post-container'>
              <p className='post'><span className='user-name'>Angela Gray</span> followed you<span className='dot'></span></p>
              <p className='post-time'>5m ago</p>
              </div>
             </li>

             <li className='unread'>
              <img src={jacob} alt=""></img>
              <div className='post-container'>
              <p className='post'><span className='user-name'>Jacob Thompson</span> has joined your group <span className='channel'>Chess Club</span><span className='dot'></span></p>
              <p className='post-time'>1 day ago</p>
              </div>
             </li>

             <li>
              <img src={rizky} alt=""></img>
              <div className='post-container'>
              <p className='post'><span className='user-name'>Rizky Hasanuddin</span> sent you a private message</p>
              <p className='post-time'>5 days ago</p>
              <p className='post-comments'>Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and 
                I'm already having lots of fun and improving my game.</p>
              </div>
              </li>

             <li>
              <img src={kimberly} alt=""></img>
              <div className='post-container'>
              <p className='post'><span className='user-name'>Kimberly Smith</span> commented on your picture</p>
              <img src={chess} className='post-pic'></img>
              <p className='post-time'>1 week ago</p>
              </div>
             </li>

             <li>
              <img src={nathan} alt=""></img>
              <div className='post-container'>
              <p className='post'><span className='user-name'>Nathan Peterson</span> reacted to your recent post <span className='recent-post'>5 end-game strategies to increase your win rate</span></p>
              <p className='post-time'>2 weeks ago</p>
              </div>
              </li>

             <li>
              <img src={anna} alt=""></img>
              <div className='post-container'>
              <p className='post'><span className='user-name'>Anna Kim</span> left the group <span className='channel'>Chess Club</span></p>
              <p className='post-time'>2 weeks ago</p>
              </div>
             </li>
         </ol>
      </section>
    )
  }
  
  export default Section