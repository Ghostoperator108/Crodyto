import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import BannerBox from '../BannerBox';


// import required modules
import { Autoplay, EffectCoverflow, Pagination } from 'swiper/modules';

function AdsBannerSlider(props) {
  return (
    <div className='py-5 w-full '>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={props.items}
        
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        
        pagination={true}
        modules={[EffectCoverflow, Pagination,Autoplay]}
        className="mySwiper items-center"
         >
        <SwiperSlide>
         <BannerBox  img={"./oleg-ivanov-QhR78CbFPoE-unsplash.jpg"}/>
        </SwiperSlide>
        <SwiperSlide>
         <BannerBox  img={"./oleg-ivanov-QhR78CbFPoE-unsplash.jpg"}/>
        </SwiperSlide>      
        <SwiperSlide>
         <BannerBox  img={"./oleg-ivanov-QhR78CbFPoE-unsplash.jpg"}/>
        </SwiperSlide>  
        <SwiperSlide>
         <BannerBox  img={"./oleg-ivanov-QhR78CbFPoE-unsplash.jpg"}/>
        </SwiperSlide>   
        <SwiperSlide>
         <BannerBox  img={"./oleg-ivanov-QhR78CbFPoE-unsplash.jpg"}/>
        </SwiperSlide>
         <SwiperSlide>
         <BannerBox  img={"./oleg-ivanov-QhR78CbFPoE-unsplash.jpg"}/>
        </SwiperSlide>
         <SwiperSlide>
         <BannerBox  img={"./oleg-ivanov-QhR78CbFPoE-unsplash.jpg"}/>
        </SwiperSlide>
         <SwiperSlide>
         <BannerBox  img={"./oleg-ivanov-QhR78CbFPoE-unsplash.jpg"}/>
        </SwiperSlide>
         <SwiperSlide>
         <BannerBox  img={"./oleg-ivanov-QhR78CbFPoE-unsplash.jpg"}/>
        </SwiperSlide>
         <SwiperSlide>
         <BannerBox  img={"./oleg-ivanov-QhR78CbFPoE-unsplash.jpg"}/>
        </SwiperSlide>
         <SwiperSlide>
         <BannerBox  img={"./oleg-ivanov-QhR78CbFPoE-unsplash.jpg"}/>
        </SwiperSlide>
         <SwiperSlide>
         <BannerBox  img={"./oleg-ivanov-QhR78CbFPoE-unsplash.jpg"}/>
        </SwiperSlide>
         <SwiperSlide>
         <BannerBox  img={"./oleg-ivanov-QhR78CbFPoE-unsplash.jpg"}/>
        </SwiperSlide>
       
      </Swiper>
    </div>
  );
}

export default AdsBannerSlider