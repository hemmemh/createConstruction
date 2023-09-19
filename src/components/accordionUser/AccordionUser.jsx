import React, {useCallback, useEffect, useMemo, useRef, useState,FC,ReactNode,cloneElement,ReactElement } from 'react'






const AccordionUser = ({breakpoint=7677.98,children,oneOpen=false, VisibleAll,accordionClass="origin"}) => {
   const [active, setactive] = useState(false)
   const [visible, setVisible] = useState(null)
   const footerItems = useRef([])
  const accordRef = useRef()
//при нажатии на один аккордион другой закрывается
const accordion = useCallback(
  (i) => {
  
    if (visible ===  i) { 
      setVisible(null)
  }else{
      setVisible(i)
  }
  },
  [visible],
)


//закрытие или открытие всех аккордионов при брейкпоинте
    const ff2 = useCallback(
      () => {
        const clientWidth = window.innerWidth
      if (clientWidth <= breakpoint) {
        setactive(false)
      }else{
        setactive(true)
      }
      
      },
      [],
    )
    
//определяет открыты или закрыты все аккордионы в начале
    useEffect(() => {
      
      const clientWidth = window.innerWidth
      
      if (  clientWidth <= breakpoint) {
        setactive(false)
      }else{
        setactive(true)
      }


      window.addEventListener('resize',ff2)
      return () => {
        window.removeEventListener('resize',ff2)
      }


     
    }, [])

    useEffect(() => {
      
      
     if (!VisibleAll) {
      setVisible(null)
      setactive(false)
     }
    }, [VisibleAll])

  return (
    <div ref={accordRef} className={`AccordionUser ${accordionClass}`}>
     {React.Children.map?.(children,(child,i) =>
   
     
        cloneElement(
          child,
          {active:active,activeItem:visible === i ? true : false,accordion:()=>accordion(i),visible:visible,accordRef:accordRef}) 
        )}
    </div>
  )
  
}

export default AccordionUser