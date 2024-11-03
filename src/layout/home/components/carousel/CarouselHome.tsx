import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import './CarouselHome.scss'; // Archivo SCSS personalizado para estilos adicionales

// Importa los módulos que necesitas (por ejemplo, para navegación o paginación)
import { Autoplay, Pagination } from 'swiper/modules';
import logo from './../../../../assets/mainlogo.png'
import { api } from '../../../../config/enviroment';
import { CarouselDataType } from '../../../../types/api.types';

function CarouselHome() {

  const [carData, setCarData] = useState<CarouselDataType[]>([])
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {

    fetch(api.apiCarousel).then(async (response) => {
      const data = await response.json()
      setCarData(data)
      setLoading(false)
    })

  }, [])


  return (
    <div className='carousel-container'>
      {!loading ? (
        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          speed={3000}
          loop={true}
          className="mySwiper"
        >
          {carData.map((data, key) => {
            return (
              <SwiperSlide key={key}>
                <div className="carousel-slide">
                  <img src={data.imgUrl} alt="Slide 1" />
                  <div className="carousel-content">
                    <h2>{data.title}</h2>
                    <p>{data.subtitle}</p>
                    <button className="carousel-button">{data.buttonText}</button>
                  </div>
                </div>
              </SwiperSlide>
            )
          })}
        </Swiper>
      ) : (
        <></>
      )}
    </div>
  )
}

export default CarouselHome