import React from 'react'
import Button from './button/Button'

const Details = () => {
  return (
  <div className="Details">
    <div className="Details__back">
        <img src={require('../images/details/image.jpg')} alt=""/>
    </div>
    <div className="Details__container">
        <form className="Details__form form-details">
            <div className="form-details__title">A quick way to discuss details</div>
            <div className="form-details__inputs">
                <label>
                    <div className="form-details__inputText">Name*</div>
                    <input type="text"  className='form-details__input' placeholder='Your name'/>
                </label>
                <label>
                    <div className="form-details__inputText">Phone*</div>
                    <input type="text"  className='form-details__input' placeholder='Your phone number'/>
                </label>
                <label>
                    <div className="form-details__inputText">Email</div>
                    <input type="text"  className='form-details__input' placeholder='Your working email'/>
                </label>
                <label>
                    <div className="form-details__inputText">Name*</div>
                    <textarea className="form-details__area" placeholder='Your message'></textarea>
                </label>
            </div>
            <div className="form-details__check check-details">
                <input id="c_1" data-error="Ошибка" className='check-details__check'  type="checkbox" value="1" name="form[]"/>
                <label for='c_1'  className="check-details__checkCover">
                    <img src={require('../images/check.png')} alt=""/>
                </label>
                <label for="c_1" class="checkbox__label"><span class="check-details__text">I agree to receive communications from Createx Construction Bureau.</span></label>
            </div>
            <div className="form-details__button">
            <Button className='main orange'>send request</Button>
            </div>
            
           
        </form>
        
    </div>
    
  </div>
  
  )
}

export default Details