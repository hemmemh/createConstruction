import React from 'react'
import Button from './button/Button'
import AccordionUser from './accordionUser/AccordionUser'
import AccordionUserItem from './accordionUser/AccordionUserItem'

const Footer = () => {

    
  return (
    <div className="Footer">
        <div className="Footer__container">
            <div className="Footer__body">
                <div className="Footer__top top-footer">
                    <div className="top-footer__info">
                        <div className="top-footer__logo">
                            <img src={require('../images/logo.png')}alt=""/>
                        </div>
                        <div className="top-footer__text">
                            Createx 
                        Construction Bureau has been successfully operating in the USA construction market since 2000. We are proud to offer you quality 
                        construction and exemplary service. Our mission is to set the highest standards for construction sphere.</div>
                        
                    </div>
                    <div className="top-footer__email">
                        <div className="top-footer__touch">Let’s stay in touch</div>
                        <form className="top-footer__form">
                            <input className="top-footer__input" placeholder='Your email address '></input>
                            <Button className='main orange footer-top'>subscribe</Button>
                        </form>
                        <div className="top-footer__formText">*Subscribe to our newsletter to receive communications and early updates from Createx Construction Bureau.</div>
                        
                    </div>
                    
                </div>
                <div className="Footer__center center-footer">
                    <AccordionUser accordionClass='footer'breakpoint={870} VisibleAll={true}>
                        <AccordionUserItem>
                        <div className="center-footer__accordionItemName">HEAD OFFICE</div>
                        <div className="center-footer__accordionItem">
                            <div className="center-footer__accordionText">Address: <span>8502 Preston Rd. Inglewood, New York</span></div>
                            <div className="center-footer__accordionText">Call: <span>(405) 555-0128</span></div>
                            <div className="center-footer__accordionText">Email: <span>hello@createx.com</span></div>
                        </div>
                        </AccordionUserItem>
                        <AccordionUserItem>
                        <div className="center-footer__accordionItemName">WHO WE ARE</div>
                            <div className="center-footer__accordionItem">
                                <div className="center-footer__accordionText"><span>About Us </span></div>
                                <div className="center-footer__accordionText"><span>Available Positions</span></div>
                                <div className="center-footer__accordionText"><span>Contacts</span></div>
                            </div>
                        </AccordionUserItem>
                        <AccordionUserItem>
                        <div className="center-footer__accordionItemName">OUR EXPERIENCE</div>
                            <div className="center-footer__accordionItem">
                                <div className="center-footer__accordionText"><span>Services</span></div>
                                <div className="center-footer__accordionText"><span>Work</span></div>
                                <div className="center-footer__accordionText"><span>News</span></div>
                            </div>
                        </AccordionUserItem>
                    </AccordionUser>
                </div>
                <div className="Footer__bottom bottom-footer">
                    <div className="bottom-footer__left">© All rights reserved</div>
                    <div onClick={()=> window.scrollTo({top:0,behavior:'smooth'})} className="bottom-footer__right">
                        <div className="bottom-footer__go">GO TO TOP</div>
                        <Button  className='main orange footer'>
                            <img src={require('../images/Up.png')} alt=""/>
                        </Button>
                    </div>
                    
                </div>
                
            </div>
            
        </div>
        
    </div>
    
  )
}

export default Footer