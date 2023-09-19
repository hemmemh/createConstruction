import React, { useState } from 'react'
import Input from './input/Input'
import Button from './button/Button'

const Know = () => {
    const [nameKnow, setnameKnow] = useState('')
  return (
    <div className="Know">
        <div className="Know__container">
            <div className="Know__body">
                <div className="Know__title">Want to know more? Ask us a question:</div>
                <div className="Know__actions">
                    <label className="Know__action">
                     <div className="Know__name">Name</div>
                     <input className='Know__input' placeholder='Your name' />
                    </label>
                    <label className="Know__action">
                     <div className="Know__name">Phone</div>
                     <input className='Know__input' placeholder='Your phone' />
                    </label>
                    <label className="Know__action">
                     <div className="Know__name">Message</div>
                     <input className='Know__input' placeholder='Your message' />
                    </label>
                    <div className="Know__action">
                        <Button className='main orange know'>SEND</Button>
                    </div>
                    
                </div>
                
            </div>
            
        </div>
        
    </div>
    
  )
}

export default Know