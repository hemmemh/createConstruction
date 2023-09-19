import React from 'react'
import Button from './button/Button'

const News = () => {
  return (
    <div className="News">
        <div className="News__container">
            <div className="News__body">
                <div className="News__title">Recent news</div>
                <div className="News__grid grid-news">
                    <div className="grid-news__item item-grid-news">
                        <div className="item-grid-news__image">
                            <img src={require("../images/news/image.jpg")} alt=""/>
                        </div>
                        <div className="item-grid-news__name">How to Build Climate Change-Resilient Infrastructure</div>
                        <div className="item-grid-news__info">Industry News | June 24, 2020 | 4 comments</div>
                        <div className="item-grid-news__text">
                            Ipsum aliquet nisi, hendrerit rhoncus quam tortor, 
                        maecenas faucibus. Tincidunt aliquet sit vel, venenatis nulla. 
                        Integer bibendum turpis convallis enim, nibh convallis...</div>
                        
                    </div>
                    <div className="grid-news__item item-grid-news">
                        <div className="item-grid-news__image">
                            <img src={require("../images/news/image.jpg")} alt=""/>
                        </div>
                        <div className="item-grid-news__name">How to Build Climate Change-Resilient Infrastructure</div>
                        <div className="item-grid-news__info">Industry News | June 24, 2020 | 4 comments</div>
                    </div>
                    <div className="grid-news__item item-grid-news">
                        <div className="item-grid-news__image">
                            <img src={require("../images/news/image.jpg")} alt=""/>
                        </div>
                        <div className="item-grid-news__name">How to Build Climate Change-Resilient Infrastructure</div>
                        <div className="item-grid-news__info">Industry News | June 24, 2020 | 4 comments</div>
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

export default News