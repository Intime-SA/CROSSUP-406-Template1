"use client";

import { useRef } from "react";
import Slider from "react-slick";
import Image from "next/image";
import { TargetProduct } from "@/domain/definitionsTypes";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// componente carrusel de imagenes
export default function ProductCarousel({
  product,
}: {
  product: TargetProduct;
}) {
  const sliderRef = useRef<Slider | null>(null);

  // configuracion del slider de imagenes
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  return (
    <div className="w-full max-w-3xl mx-auto">
      <Slider {...settings} ref={sliderRef}>
        {product.images.map((image, index) => (
          <div
            key={index}
            className="relative aspect-square overflow-hidden rounded-lg"
          >
            <Image
              src={image.src}
              alt={product.name.es}
              layout="fill"
              objectFit="contain"
              priority
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}
