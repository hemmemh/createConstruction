import React, { useRef, useState } from 'react'
import { useEffect } from 'react'

const Header = () => {
  const [menu, setmenu] = useState(false)
  const [headerActive, setheaderActive] = useState(false)
  const headerRef = useRef()
  function headerActiveF() {

    if (window.scrollY > headerRef.current.offsetHeight) {
      setheaderActive(true)
 
  }else{
    setheaderActive(false)
  
  }
  }
  useEffect(() => {
    document.addEventListener('scroll',headerActiveF)
  
    return () => {
      document.removeEventListener('scroll',headerActiveF)
    }
  }, [])


  return (
    <div  className={headerActive ?"Header active" : "Header"}>
      <div className="Header__container">
        <div ref={headerRef} className="Header__body body-header">
          <div onClick={()=>setmenu(prev=>!prev)} className={menu ? "body-header__menu icon-menu active" : "body-header__menu icon-menu"}> <span></span></div>
          
          <div className="body-header__logo">
            <div className="body-header__logoImage">
              <img src={require("../images/header/logo.png")} alt=""/>
            </div>
          </div>
          <div className="body-header__navigation navigation-header">
            <div className="navigation-header__item">About Us</div>
            <div className="navigation-header__item">Services</div>
            <div className="navigation-header__item">Work</div>
            <div className="navigation-header__item">News</div>
            <div className="navigation-header__item">Contacts</div>
          
            
          </div>
          <div className="navigation-header__info info-header">
            <div className="info-header__item ">
            <a href="tel:123-456-7890"  className="info-header__svg _icon-iPhone"></a>
              <div className="info-header__main md">
                  <div className="info-header__top">Call us</div>
                  <div className="info-header__bottom">(405) 555-0128</div>
              </div>
            </div>
            <div className="info-header__item">
              <div className="info-header__svg _icon-Chat"></div>
              <div className="info-header__main">
                  <div className="info-header__top">Talk to us</div>
                  <div className="info-header__bottom">hello@createx.com</div>
              </div>
            </div>
          </div>
          <div className={menu ? "body-header__menu menu-header active" : "body-header__menu menu-header "}>
            <div className="menu-header__navigation">
            <div className="menu-header__item">About Us</div>
            <div className="menu-header__item">Services</div>
            <div className="menu-header__item">Work</div>
            <div className="menu-header__item">News</div>
            <div className="menu-header__item">Contacts</div>
            </div>
            <div className="menu-header__talk">
            <div className="info-header__item">
              <div className="info-header__svg _icon-Chat"></div>
              <div className="info-header__main">
                  <div className="info-header__top">Talk to us</div>
                  <div className="info-header__bottom">hello@createx.com</div>
              </div>
            </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
    
  )
}

export default Header