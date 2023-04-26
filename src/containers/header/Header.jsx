import React from 'react'
import people from '../../assets/people.png'
import man from '../../assets/man2.png'
import './Header.css'

const Header = () => {
  return (
    <div className='gpt3_header section__padding'>
    {/* left part */}
      <div className='gpt3_header-content'>
        <h1 className='gradient__text'>Let's Build Something amazing with GPT-3 OpenAI</h1>
        <p>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>

        <div className='gpt3_header-content_input'>
          <input type="text" placeholder='Your Email Address'/>
          <button>Get Started</button>
        </div>

        <div className='gpt3_header-content_people'>
          <img src={people} alt="Not found" />
          <p>1,600 people requested access a visit in last 24 hours</p>
        </div>
      </div>
      {/* right part */}
      <div className='gpt3_header-image'>
        <img src={man} alt="Not found" />
      </div>
    </div>
  )
}

export default Header