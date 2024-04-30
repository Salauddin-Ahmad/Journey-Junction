import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  Autoplay,
} from'swiper/modules';
import "swiper/swiper-bundle.css";
import { Fade } from "react-awesome-reveal";

const Sliders = () => {
  return (
    <div className="mb-5"> 
    <Fade>
    <h1 className="text-2xl text-center pt-8 font-serif font-bold">Explore Central Asia Like Never Before</h1>
    <p className="w-[90%] mx-auto mt-3  ">An unforgettable journey awaits for you through Central Asia, where ancient history and vibrant culture await at every turn. From the majestic Silk Road cities to the breathtaking landscapes of the Pamir Mountains, explore a region rich in tradition and diversity. Discover the hidden gems of Uzbekistan, Kazakhstan, Kyrgyzstan, Tajikistan, Turkmenistan and Mongolia as you immerse yourself in the enchanting allure of Central Asia. whether marveling at architectural wonders, or trekking across pristine wilderness, prepare to experience Central Asia like never before. </p>
    </Fade>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        autoplay={{ delay: 4000 }}
        loop={true}
        loopAdditionalSlides={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
      >
        <SwiperSlide>
          <img
            src="https://i.postimg.cc/MTw07g4k/axp-photography-We-Q3-MWBFhk-E-unsplash.jpg"
            alt=""
            style={{
              width: "100%",
              
              height: "85vh",
              marginTop: "20px",
              borderRadius: "5px",
            }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i.postimg.cc/jSWhtHN1/amir-asakeev-1y6x-SXui-VHU-unsplash.jpg"
            alt=""
            style={{
              width: "100%",
              height: "85vh",
              marginTop: "20px",
              borderRadius: "5px",
            }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i.postimg.cc/gjSvPj0d/johann-siemens-EPy0g-BJzz-ZU-unsplash.jpg"
            alt=""
            style={{
              width: "100%",
              height: "85vh",
              marginTop: "20px",
              borderRadius: "5px",
            }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i.postimg.cc/FRxyDD5Y/joel-protasio-60-Fww-Px-V-f-Q-unsplash.jpg"
            alt=""
            style={{
              width: "100%",
              height: "85vh",
              marginTop: "20px",
              borderRadius: "2px",
            }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i.postimg.cc/2y84Jhr2/davide-pirotta-OAXn-A-4-Sp-VM-unsplash.jpg"
            alt=""
            style={{
              width: "100%",
              height: "85vh",
              marginTop: "20px",
              borderRadius: "2px",
            }}
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Sliders;
