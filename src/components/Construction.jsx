import React from 'react'

const Construction = () => {
  return (
    <div className="Construction">
        <div className="Construction__container">
            <div className="Construction__top">
                <div className="Construction__title">We are Createx Construction Bureau </div>
                <div className="Construction__text">We are rightfully considered to be the best construction company in the USA.</div>
            </div>
            <div className="Construction__video">
            <iframe  src="https://www.youtube.com/embed/BHACKCNDMW8?si=GcQEoBK8rWXonh8a" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            <div className="Construction__start">
            <img src={require("../images/video/start.jpg")} alt=""/>
            </div>
            
            </div>
            
        </div>
        
    </div>
    
  )
}

export default Construction