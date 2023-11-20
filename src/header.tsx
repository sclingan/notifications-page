import { useState } from 'react'


function Header() {
  const [unread, setRead] = useState(0);
  const [count, setCount] = useState(3);
  function mark_Read() {
    // All new msg are marked unread
    // keep running count of unread msg and display in variable
    let msg = document.getElementsByClassName('unread');
    let icon = document.getElementsByClassName('dot');
    setCount(msg.length);
    // onClick of li, change state to read: remove background color, remove red dot
    // onClick of button mark all as read
    const msgArr = Array.from(msg);
    msgArr.map(e => e.classList.remove('unread'));  
    const dotArr = Array.from(icon);
    dotArr.map(e => e.classList.remove('dot'));
    
  }
    
    return (
      <header>
         <h2>Notifications <span className='notification'>{count}</span></h2>{/*Fix unread notification*/}
         <button onClick={mark_Read}>Mark all as read</button>
      </header>
    )
  }
  
  export default Header