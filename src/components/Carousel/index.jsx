import { PurchaseOverviewListItem } from "../";
import { Swiper, SwiperSlide } from "swiper/react";
export const Carousel = ({ list, imageSrc }) => {
  if (!list) return null;

  return (
    <Swiper
      id="main"
      width="480"
      navigation
      spaceBetween={5}
      slidesPerView={1}
      breakpoints={{
        360: {
          width: 340,
          slidesPerView: 1,
        },
        // when window width is >= 640px
        688: {
          width: 688,
          slidesPerView: 2,
        },
        // when window width is >= 768px
        768: {
          width: 768,
          slidesPerView: 3,
        },
        768: {
          width: 1024,
          slidesPerView: 3,
        },
      }}
    >
      {list.map((item) => (
        <SwiperSlide direction="row" key={item.id}>
          <PurchaseOverviewListItem
            id={item.id}
            imageSrc={imageSrc}
            company={item.company}
            amount={item.amount}
            products={item.products}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
