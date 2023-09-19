import React,{FC, useEffect,useRef,useState} from 'react'


const Input = ({inputClass='origin',placeholder='name',children,lock=false,value,change}) => {
    const [active, setactive] = useState(false)
    const inputRef = useRef()
    const input2Ref = useRef()
 useEffect(() => {
    console.log(value,')(11');
    
    document.addEventListener('click',addClick)
    if (lock) {
        setactive(true)
    }
    if (value !== '') {
        setactive(true)
    }
  
    return () => document.removeEventListener('click', addClick);
    
 }, [])
 useEffect(() => {
    if (value !== '') {
        setactive(true)  
    }

   
 }, [value])
 
const addClick = (e)=>{
    if (!lock) {
        if (!inputRef.current.contains(e.target) && input2Ref.current.value=='') {
            setactive(false)
        }
    }

}
const onFocus = ()=>{
    setactive(true)
    input2Ref.current.focus()   
}


  return (
    <div ref={inputRef} onClick={()=>onFocus()}  className={active ? `Input ${inputClass} active`: `Input ${inputClass}`} >
        <input value={value} onChange={(e)=>change(e.target.value)}  ref={input2Ref} className='Input__text'  type="text"  />
        <div className={ active ? "Input__placeholder active" : "Input__placeholder"}>{placeholder}</div>
        {children}
     </div>
  )
}

export default Input