import React from 'react'
import Button from './button/Button'

const Services = () => {
  return (
  <div className="Services">
    <div className="Services__back">
        <img src={require('../images/services/bg-color.png')} alt=""/>
    </div>
    <div className="Services__container">
            <div className="Services__body">
                <div className="Core__top">
            <div className="Core__title">Our services</div>
            <div className="Core__text">Createx Construction Bureau is a construction giant with a full range of construction services.</div>           
                </div>
                <div className="Services__cards">
                <div className="Services__card card-services">
                    <div className="card-services__cover2">
                    <div className="card-services__cover">
                    <div className="card-services__image">
                        <img src={require("../images/services/image.jpg")} alt=""/>
                    </div>
                    <div className="card-services__body">
                        <div className="card-services__icon">
                        <img src={require("../images/services/icon.png")} alt=""/>
                        </div>
                        <div className="card-services__name">Construction</div>
                        
                    </div>
                    </div>
                    </div>
                    
                   
                </div>
                <div className="Services__card card-services">
                    <div className="card-services__cover2">
                    <div className="card-services__cover">
                    <div className="card-services__image">
                        <img src={require("../images/services/image.jpg")} alt=""/>
                    </div>
                    <div className="card-services__body">
                        <div className="card-services__icon">
                        <img src={require("../images/services/icon.png")} alt=""/>
                        </div>
                        <div className="card-services__name">Construction</div>
                        
                    </div>
                    </div>
                    </div>
                    
                   
                </div>
                <div className="Services__card card-services">
                    <div className="card-services__cover2">
                    <div className="card-services__cover">
                    <div className="card-services__image">
                        <img src={require("../images/services/image.jpg")} alt=""/>
                    </div>
                    <div className="card-services__body">
                        <div className="card-services__icon">
                        <img src={require("../images/services/icon.png")} alt=""/>
                        </div>
                        <div className="card-services__name">Construction</div>
                        
                    </div>
                    </div>
                    </div>
                    
                   
                </div>
                <div className="Services__card card-services">
                    <div className="card-services__cover2">
                    <div className="card-services__cover">
                    <div className="card-services__image">
                        <img src={require("../images/services/image.jpg")} alt=""/>
                    </div>
                    <div className="card-services__body">
                        <div className="card-services__icon">
                        <img src={require("../images/services/icon.png")} alt=""/>
                        </div>
                        <div className="card-services__name">Construction</div>
                        
                    </div>
                    </div>
                    </div>
                    
                   
                </div>
                </div>
                <div className="Services__bottom bottom-services">
                    <div className="bottom-services__name">Learn more about our services</div>
                    <Button className='main orange'>View services</Button>
                </div>
                
            </div>
        </div>      
  </div>
  
  )
}

export default Services