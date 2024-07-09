import React from "react";
import homeStyles from "../home.module.scss";
import CartProductList from "./components/CartProductsList";
import PaymentSummary from "./components/PaymentSummary";
import shirt_hanger from "../../../public/assets/images/shirt_hanger.png";
import ShopProgress from "../components/ShopProgress";
import Image from "next/image";

const Cart = () => {
  return (
    <>
      <main
        className={
          homeStyles.body +
          " w-screen flex flex-col items-center justify-center pt-[173px] lg:px-0 px-2"
        }
      >
        <ShopProgress active="cart" />
        <div className="flex lg:flex-row flex-col items-start justify-between gap-10 max-w-7xl w-[100%] py-4">
          <CartProductList />
          <PaymentSummary />

          <div className="lg:hidden block w-[100%] mt-8 bg-gradient-to-r from-[#CC95C0] via-[#DBD4B4] to-[#7AA1D2] rounded-3xl flex items-center justify-center px-4 py-[18px] relative">
            <div className="font-medium flex flex-col items-center gap-2 px-6 py-2">
              <p className="text-gray-900 text-xl">
                Checkout the Newest T-Shirt
              </p>
              <p className="text-[#5F606D] text-[16px]">
                {"You won't be disappointed 🎒✨"}
              </p>
              <button className="text-gray-900 text-[16px] border-gray-800 border-[1.5px] border-solid rounded-[100vw] p-2 ">
                Shop Now
              </button>
            </div>
            <Image
              src={shirt_hanger}
              alt=""
              width={171}
              height={82}
              objectFit="cover"
              className="w-[171px] h-[82px] object-cover absolute right-0 bottom-0"
            />
          </div>
        </div>
      </main>
    </>
  );
};

export default Cart;
