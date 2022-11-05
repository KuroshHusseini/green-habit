import { PurchaseOverviewListItem } from "../";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
export const Carousel = ({ list, imageSrc }) => {
  return (
    <Swiper
      spaceBetween={5}
      slidesPerView={1}
      breakpoints={{
        360: {
          width: 340,
          slidesPerView: 1.09,
        },
        // when window width is >= 640px
        688: {
          width: 688,
          slidesPerView: 2.09,
        },
        // when window width is >= 768px
        768: {
          width: 768,
          slidesPerView: 3.09,
        },
        768: {
          width: 1024,
          slidesPerView: 3.09,
        },
      }}
    >
      {list?.slice(0, 10).map((item) => (
        <SwiperSlide key={item.id}>
          <PurchaseOverviewListItem {...item} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
