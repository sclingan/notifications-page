import { useState } from 'react'


function Header() {
  const [unread, setRead] = useState(0);
  const [count, setCount] = useState(3);
  function mark_Read() {
    // All new msg are marked unread
    // keep running count of unread msg and display in variable
    let msg = document.getElementsByClassName('unread');
    setCount(msg.length);
    // onClick of li, change state to read: remove background color, remove red dot
    // onClick of button mark all as read
    for(let i = 0; i < count; i++) {
      if(msg[i].className === 'unread') {
        msg[i].classList.remove('unread');
        msg[i].classList.add('test');
      }
    }
    
    console.log(msg, typeof(msg), msg.item(count -1));
  }
    
    return (
      <header>
         <h2>Notifications <span className='notification'>{count}</span></h2>{/*Fix unread notification*/}
         <button onClick={mark_Read}>Mark all as read</button>
      </header>
    )
  }
  
  export default Header