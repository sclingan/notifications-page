import { useState } from 'react'


function Header() {
  const [unread, setUnRead] = useState(3)
    
    return (
      <header>
         <h2>Notifications <span className='notification'>{unread}</span></h2>
         <button>Mark all as read</button>
      </header>
    )
  }
  
  export default Header