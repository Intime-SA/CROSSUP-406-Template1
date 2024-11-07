import React from "react";
import Image from "next/image";
import { ViewProductProps } from "@/domain/definitionsTypes";

const ProductImage: React.FC<{ product: ViewProductProps["product"] }> = ({
  product,
}) => (
  <div className="self-stretch flex justify-start">
    <Image
      className="border border-border w-full h-auto object-cover"
      src={"/backImage.png"}
      alt={product.name.es}
      width={382}
      height={382}
    />
  </div>
);

export default ProductImage;
