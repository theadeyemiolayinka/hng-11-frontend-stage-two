"use client";

import { ICartProduct } from "@/models/Cart";
import { IProduct } from "@/models/Product";
import { Minus, Add, Trash } from "iconsax-react";
import { useAppContext } from "@/hooks/AppContext";
import styles from "./cart_item.module.scss";
import Image from "next/image";
import React from "react";

type Prop = {
  product: ICartProduct;
};

export default function CartItem({ product }: Prop) {
  const {
    cart,
    addProductToCart,
    removeProductFromCart,
    decreaseProductFromCart,
  } = useAppContext();

  const handleAddProductToCart = (product: IProduct) => {
    addProductToCart(product, 1);
  };

  const handleRemoveProductFromCart = (product: IProduct) => {
    removeProductFromCart(product._id?.toString() || "");
  };

  const handleDecreaseProductFromCart = (product: IProduct) => {
    decreaseProductFromCart(product._id?.toString() || "");
  };

  const formatPriceToNaira = (price: number): string => {
    return price.toLocaleString("en-NG", {
      style: "currency",
      currency: "NGN",
    });
  };

  return (
    <div
      key={product.images[0]}
      className="flex items-center gap-6 p-4 border-2 border-solid border-gray-300 rounded-[32px] w-[100%]"
    >
      <div className="lg:w-[116px] lg:h-[112px] w-[63px] h-[61px]">
        <Image
          src={product.images[0]}
          className="lg:w-[116px] lg:h-[112px] w-[63px] h-[61px] object-cover rounded-[16px]"
          alt=""
          width={116}
          height={112}
          objectFit="cover"
        />
      </div>
      <div className="flex items-center justify-between w-[100%] gap-2 lg:gap-16">
        <div>
          <h2 className={styles.productName}>{product.name}</h2>
          <b>{formatPriceToNaira(product.price * product.quantity)}</b>
        </div>
        <div className="flex flex-row items-center justify-between gap-2">
          <div className="flex items-stretch gap-2 lg:gap-6">
            <button
              className="lg:px-[13px] border-2 border-solid border-gray-300 rounded-[100vw] text-black w-[20px] h-[20px] lg:w-[50px] lg:h-[50px] cursor-pointer"
              onClick={() => handleAddProductToCart(product)}
            >
              <Add
                variant="Outline"
                color="#292D32"
                className={styles.twenty_4_or_16}
              />
            </button>
            <span className="self-center">{product.quantity}</span>
            <button
              className="lg:px-[13px] border-2 border-solid border-gray-300 rounded-[100vw] text-black w-[20px] h-[20px] lg:w-[50px] lg:h-[50px] cursor-pointer"
              onClick={() => handleDecreaseProductFromCart(product)}
            >
              <Minus
                variant="Outline"
                color="#292D32"
                className={styles.twenty_4_or_16}
              />
            </button>
          </div>
          <Trash
            size={35}
            variant="Outline"
            color="#292D32"
            className="w-[20px] h-[20px] lg:w-[50px] lg:h-[35px] cursor-pointer"
            onClick={() => handleRemoveProductFromCart(product)}
          />
        </div>
      </div>
    </div>
  );
}
