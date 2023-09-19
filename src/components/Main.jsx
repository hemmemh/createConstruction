import React, { useEffect } from 'react'
import Button from './button/Button'
import 'swiper/css/navigation';
import 'swiper/css';
import 'swiper/css/effect-fade';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination,Autoplay, EffectFade } from 'swiper/modules';

const Main = () => {

    useEffect(() => {
     const body = document.querySelector('.Main__paginationCover')
     const swiperMain = document.querySelector('.swiper.main')
     const pagination = document.querySelector('.swiper-pagination')
     console.log(pagination);

     body.appendChild(pagination)
    }, [])
    
    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
          return '<span class="' + className + '">' + 0 + (index + 1) + '</span>';
        },
      };

  return (
    <div className="Main">
        
         <Swiper
           modules={[Pagination,Navigation,Autoplay,EffectFade]}
           pagination={pagination}
           className='main'
           autoplay={true}
           allowTouchMove={true}
           breakpoints={{
            991.98: {allowTouchMove:false}
           }}
           effect={"fade"}
           navigation={{
            prevEl: '.swiper__nav._left',
            nextEl: '.swiper__nav._right',
          }}
          
          
           >
                <SwiperSlide>
                <div className="Main__swiper">
           
           <div className="Main__image">
               <img src={require("../images/main/bg-image.png")} alt=""/>
           </div>
           <div className="Main__container">
           <div className="Main__body body-main">
               <div className="body-main__title">
                   <div className="body-main__title-top">CREATE<span>X</span></div>
                   <div className="body-main__title-bottom">CONSTRUCTION</div>
               </div>
               <div className="body-main__text">Cras ultrices leo vitae non viverra. Fringilla nisi quisque consequat, dignissim vitae proin ipsum sed. Pellentesque nec turpis purus eget pellentesque integer ipsum elementum felis. </div>
               <div className="body-main__action">
                  <Button className='main' classNameCover='main'>Learn more about us</Button>
                  <Button className='main orange'>SUBMIT REQUEST</Button>
               </div>
               
           </div>
           </div>
                </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className="Main__swiper">
           
           <div className="Main__image">
               <img src={require("../images/main/slide2.jpg")} alt=""/>
           </div>
           <div className="Main__container">
           <div className="Main__body body-main">
               <div className="body-main__title">
                   <div className="body-main__title-top">FUTURE<span>X</span></div>
                   <div className="body-main__title-bottom">CONSTRUCTION</div>
               </div>
               <div className="body-main__text">Cras ultrices laawd ada wdaeo vitae non viverra. Fringilla nisi quisque consequat, dignissim vitae proin ipsum sed. Pellentesque nec turpis purus eget pellentesque integer ipsum elementum felis. </div>
               <div className="body-main__action">
                  <Button className='main' classNameCover='main'>Learn more about us</Button>
                  <Button className='main orange'>SUBMIT REQUEST</Button>
               </div>
               
           </div>
           </div>
                </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className="Main__swiper">
           
           <div className="Main__image">
               <img src={require("../images/main/slide3.jpg")} alt=""/>
           </div>
           <div className="Main__container">
           <div className="Main__body body-main">
               <div className="body-main__title">
                   <div className="body-main__title-top">CREATE<span>X</span></div>
                   <div className="body-main__title-bottom">CONSTRUCTION</div>
               </div>
               <div className="body-main__text">Cras ultrices leo vitae non viverra. Fringilla nisi quisque consequat, dignissim vitae proin ipsum sed. Pellentesque nec turpis purus eget pellentesque integer ipsum elementum felis. </div>
               <div className="body-main__action">
                  <Button className='main' classNameCover='main'>Learn more about us</Button>
                  <Button className='main orange'>SUBMIT REQUEST</Button>
               </div>
               
           </div>
           </div>
                </div>
                </SwiperSlide>
        </Swiper>
       <div className="Main__paginationCover">
       </div>
       <div className="swiper__navigation">
        <div className="swiper__nav _left _icon-arrow"></div>
        <div className="swiper__nav _right _icon-arrow"></div>
       </div>
       
        
        
        
       
        
    </div>
    
  )
}

export default Main