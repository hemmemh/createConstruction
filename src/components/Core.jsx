import React from 'react'

const Core = () => {
  return (
   <div className="Core">
    <div className="Core__container">
        <div className="Core__top">
            <div className="Core__title">Our core values</div>
            <div className="Core__text">Our mission is to set the highest standards for construction sphere.</div>           
        </div>
        <div className="Core__body body-core">
            <div className="body-core__item item-core">
                <div className="item-core__body">
                    <div className="item-core__image">
                        <img src={require("../images/core/1.jpg")} alt=""/>
                    </div>
                    <div className="item-core__title">Quality</div>
                    <div className="item-core__text">Culpa nostrud commodo ea consequat aliquip reprehenderit. Veniam velit nostrud aliquip sunt.</div>
                </div>
                
            </div>
            <div className="body-core__item item-core _center">
                <div className="item-core__body ">
                    <div className="item-core__image">
                        <img src={require("../images/core/2.jpg")} alt=""/>
                    </div>
                    <div className="item-core__title">Safety</div>
                    <div className="item-core__text">Comfort
Sit veniam aute dolore adipisicing nulla sit culpa. Minim mollit voluptate ullamco proident ea ad.</div>
                </div>
                
            </div>
            <div className="body-core__item item-core _right">
                <div className="item-core__body ">
                    <div className="item-core__image">
                        <img src={require("../images/core/3.jpg")} alt=""/>
                    </div>
                    <div className="item-core__title">Comfort</div>
                    <div className="item-core__text">Anim reprehenderit sint voluptate exercitation adipisicing laborum adipisicing. Minim empor est ea.</div>
                </div>
                
            </div>
        </div>
        
    </div>
    
   </div>
   
  )
}

export default Core