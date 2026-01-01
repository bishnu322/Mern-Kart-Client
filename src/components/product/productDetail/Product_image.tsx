import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import type { IImage } from "../../../types/global.types";
import Slider from "react-slick";

interface IProps {
  images: IImage[];
}

const Product_image: React.FC<IProps> = ({ images }) => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    slidesToShow: 1,
    autoplaySpeed: 2000,
    slidesToScroll: 1,
  };
  return (
    <div>
      <Slider {...settings}>
        {images.map((image, i) => (
          <img
            src={image.path}
            alt={"product_img"}
            key={i}
            className="w-[200px] h-[500px] object-contain"
          />
        ))}
      </Slider>
    </div>
  );
};

export default Product_image;
