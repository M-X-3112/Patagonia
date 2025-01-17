import React, { useContext } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import "../Css/homepage.css";
import { Pagination, Navigation } from 'swiper/modules';
import { DataContext } from '../Data/Data';
import { Link } from 'react-router-dom';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

function SliderHome() {
  const { cards } = useContext(DataContext);
  const path = "./src/images/cards/";

  return (
    <Swiper
      slidesPerView={1}
      centeredSlides={true}
      spaceBetween={30}
      grabCursor={true}
      loop={true}
      pagination={{
        clickable: true,
      }}
      navigation={{
        prevEl: '.swiper-button-prev',
        nextEl: '.swiper-button-next', 
      }}
      breakpoints={{
        320: {slidesPerView: 1.5},
        480: {slidesPerView: 2},
        768: {slidesPerView: 2.5},
        1024: {slidesPerView: 3},
        1440: {slidesPerView: 4}
      }}
      modules={[Pagination, Navigation]}
      className="mySwiper"
    >
      {cards.map((item) => (
        <SwiperSlide key={item.id} className='swiper-slide'>
          <div className="cards-pata">
            <div className="cards-pat-img">
              <img src={path + item.img} alt="card-photo" />
            </div>
            <h3>{item.name}</h3>
            <Link to={item.route} className="card-link-c">
              Shop
            </Link>
          </div>
        </SwiperSlide>
      ))}

      <div className="swiper-button-prev">
        <IoIosArrowBack />
      </div>
      <div className="swiper-button-next">
        <IoIosArrowForward />
      </div>
    </Swiper>
  );
}

export default SliderHome;
