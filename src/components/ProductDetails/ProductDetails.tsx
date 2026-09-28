"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useRef } from "react";
import { Button } from "@/components/ui/button"
import { Minus, Plus } from "lucide-react";
import AddToCartBtn from "../ProductCard/AddToCartBtn/AddToCartBtn";

export default function ProductDetails({ product }: any) {
  const {
    category,
    title,
    brand,
    ratingsAverage,
    ratingsQuantity,
    price,
    priceAfterDiscount,
    quantity,
    description,
    imageCover,
    images,
    _id
  } = product;

  const [selectedImage, setSelectedImage] = useState(imageCover);

  const discountPercentage = priceAfterDiscount
    ? Math.round(((price - priceAfterDiscount) / price) * 100)
    : 0;

  const thumbnailsRef = useRef<HTMLDivElement>(null);
  const [value, setValue] = useState(1)


  return (
    <>
      <section className="py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="lg:w-1/4">
              <div className="bg-white rounded-xl shadow-sm p-4 sticky top-4">
                <div className="w-full">
                  {/* Main Image */}
                  <div className="relative w-full h-112.5 mb-4">
                    <Image
                      src={selectedImage}
                      alt="Product"
                      fill
                      className="object-contain"
                    />
                  </div>

                  {/* Thumbnails */}
                  <div
                    ref={thumbnailsRef}
                    className="flex gap-3 overflow-x-auto scrollbar-hide"
                  >
                    {images.map((image: string, index: number) => (
                      <div
                        key={index}
                        onClick={(e) => {
                          setSelectedImage(image);

                          (e.currentTarget as HTMLElement).scrollIntoView({
                            behavior: "smooth",
                            block: "nearest",
                            inline: "center",
                          });
                        }}
                        className={`relative w-20 h-20 shrink-0 cursor-pointer rounded-md overflow-hidden border-2 ${selectedImage === image
                          ? "border-gray-500"
                          : "border-gray-200"
                          }`}
                      >
                        <Image
                          src={image}
                          alt={`Thumbnail ${index + 1}`}
                          fill
                          className="object-contain"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:w-3/4">
              <div className="bg-white rounded-xl shadow-sm p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  <Link
                    href={`/categories/${category._id}`}
                    className="bg-main-color/10 text-main-color text-xs px-3 py-1.5 rounded-full hover:bg-main-color/20 transition font-medium"
                  >
                    {category.name}
                  </Link>
                  <span className="bg-gray-100 text-gray-700 text-xs px-3 py-1.5 rounded-full font-medium">
                    {brand.name}
                  </span>
                </div>
                <h1 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3">
                  {title}
                </h1>
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex text-yellow-400">
                    {Array.from({ length: Math.floor(ratingsAverage) }).map(
                      (e, i) => (
                        <svg
                          key={i}
                          width="20"
                          height="17"
                          viewBox="0 0 20 17"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M10.6719 0.409375C10.5438 0.159375 10.2844 0 10.0031 0C9.72189 0 9.46252 0.159375 9.33439 0.409375L7.03439 4.91563L2.03752 5.70937C1.75939 5.75312 1.52814 5.95 1.44064 6.21875C1.35314 6.4875 1.42502 6.78125 1.62189 6.98125L5.19689 10.5594L4.40939 15.5562C4.36564 15.8344 4.48127 16.1156 4.70939 16.2812C4.93752 16.4469 5.23752 16.4719 5.49064 16.3438L10.0031 14.05L14.5125 16.3438C14.7625 16.4719 15.0656 16.4469 15.2938 16.2812C15.5219 16.1156 15.6375 15.8375 15.5938 15.5562L14.8031 10.5594L18.3781 6.98125C18.5781 6.78125 18.6469 6.4875 18.5594 6.21875C18.4719 5.95 18.2438 5.75312 17.9625 5.70937L12.9688 4.91563L10.6719 0.409375Z"
                            fill="#FCC800"
                          />
                        </svg>
                      ),
                    )}
                    {Array.from({ length: 5 - Math.floor(ratingsAverage) }).map(
                      (e, i) => (
                        <svg
                          key={i}
                          width="20"
                          height="17"
                          viewBox="0 0 20 17"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M10.0031 0C10.2844 0 10.5438 0.159375 10.6719 0.409375L12.9688 4.91563L17.9656 5.70937C18.2438 5.75312 18.475 5.95 18.5625 6.21875C18.65 6.4875 18.5781 6.78125 18.3813 6.98125L14.8031 10.5594L15.5938 15.5562C15.6375 15.8344 15.5219 16.1156 15.2938 16.2812C15.0656 16.4469 14.7625 16.4719 14.5125 16.3438L10.0031 14.05L5.49375 16.3438C5.24375 16.4719 4.94063 16.4469 4.7125 16.2812C4.48438 16.1156 4.36875 15.8375 4.4125 15.5562L5.2 10.5594L1.625 6.98125C1.425 6.78125 1.35625 6.4875 1.44375 6.21875C1.53125 5.95 1.75938 5.75312 2.04063 5.70937L7.0375 4.91563L9.3375 0.409375C9.46563 0.159375 9.725 0 10.0063 0H10.0031ZM10.0031 2.4L8.19688 5.9375C8.0875 6.15 7.88438 6.3 7.64688 6.3375L3.725 6.9625L6.53125 9.77188C6.7 9.94063 6.77813 10.1812 6.74063 10.4187L6.12188 14.3406L9.6625 12.5406C9.875 12.4312 10.1281 12.4312 10.3438 12.5406L13.8844 14.3406L13.2656 10.4187C13.2281 10.1812 13.3063 9.94063 13.475 9.77188L16.2813 6.9625L12.3594 6.3375C12.1219 6.3 11.9188 6.15 11.8094 5.9375L10.0031 2.4Z"
                            fill="#FCC800"
                          />
                        </svg>
                      ),
                    )}
                  </div>
                  <span className="text-sm text-gray-600">
                    {ratingsAverage} ({ratingsQuantity} reviews)
                  </span>
                </div>

                <div className="flex items-center flex-wrap gap-3 mb-6">
                  {priceAfterDiscount ? (
                    <>
                      <span className="text-3xl font-bold text-gray-900">
                        {priceAfterDiscount} EGP
                      </span>
                      <span className="text-lg text-gray-400 line-through">
                        {price} EGP
                      </span>
                      <span className="bg-red-500 text-white text-sm px-3 py-1 rounded-full font-medium">
                        Save {discountPercentage}%
                      </span>
                    </>
                  ) : (
                    <span className="text-3xl font-bold text-gray-900">
                      {price} EGP
                    </span>
                  )}
                </div>

                {quantity != 0 && (
                  <div className="flex items-center gap-2 mb-6">
                    <span className="flex items-center gap-1.5 text-sm px-3 py-1.5 rounded-full bg-[#F0FDF4] text-green-700">
                      <svg
                        width="8"
                        height="8"
                        viewBox="0 0 8 8"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect width="8" height="8" rx="4" fill="#00C950" />
                      </svg>
                      <span className="font-medium">In Stock</span>
                    </span>
                  </div>
                )}

                <div className="border-t border-gray-100 pt-5 mb-6">
                  <p className="text-gray-600 leading-relaxed">{description}</p>
                </div>

                {/* Quantity */}
                <div className="mb-6">
                  <span className="block text-sm font-medium text-gray-700 mb-2">
                    Quantity
                  </span>
                  <div className="flex items-center space-x-2">
                    <div className="flex items-center border rounded-lg px-2 bg-background py-2">
                      <Button
                        variant="ghost"
                        size="icon"
                        className="text-muted-foreground"
                        onClick={() => setValue(Math.max(1, value - 1))}
                      >
                        <Minus/>
                      </Button>
                      <span className="w-12 text-center font-medium">{value}</span>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="text-muted-foreground"
                        onClick={() => setValue(value + 1)}
                      >
                        <Plus/>
                      </Button>
                    </div>
                    <span className="text-sm text-muted-foreground">{quantity} available</span>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-lg p-4 mb-6">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Total Price:</span>
                    <span className="text-2xl font-bold text-main-color">
                      {priceAfterDiscount ? priceAfterDiscount * value : price * value}.00 EGP
                    </span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 mb-6">
                  {/* <button className="flex-1 text-white py-3.5 px-6 rounded-xl font-medium hover:bg-main-color-hover active:scale-[0.98] transition-all flex items-center justify-center gap-2 shadow-lg shadow-main-color/25 bg-main-color">
                    <svg
                      data-prefix="fas"
                      data-icon="cart-shopping"
                      className="h-4 w-4"
                      role="img"
                      viewBox="0 0 640 512"
                      aria-hidden="true"
                    >
                      <path
                        fill="currentColor"
                        d="M24-16C10.7-16 0-5.3 0 8S10.7 32 24 32l45.3 0c3.9 0 7.2 2.8 7.9 6.6l52.1 286.3c6.2 34.2 36 59.1 70.8 59.1L456 384c13.3 0 24-10.7 24-24s-10.7-24-24-24l-255.9 0c-11.6 0-21.5-8.3-23.6-19.7l-5.1-28.3 303.6 0c30.8 0 57.2-21.9 62.9-52.2L568.9 69.9C572.6 50.2 557.5 32 537.4 32l-412.7 0-.4-2c-4.8-26.6-28-46-55.1-46L24-16zM208 512a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm224 0a48 48 0 1 0 0-96 48 48 0 1 0 0 96z"
                      ></path>
                    </svg>
                    Add to Cart
                  </button> */}
                  <AddToCartBtn style="flex-1 text-white py-3.5 px-6 rounded-xl font-medium hover:bg-main-color-hover active:scale-[0.98] transition-all flex items-center justify-center gap-2 shadow-lg shadow-main-color/25 bg-main-color" productId={_id}>
                    <svg
                      data-prefix="fas"
                      data-icon="cart-shopping"
                      className="h-4 w-4"
                      role="img"
                      viewBox="0 0 640 512"
                      aria-hidden="true"
                    >
                      <path
                        fill="currentColor"
                        d="M24-16C10.7-16 0-5.3 0 8S10.7 32 24 32l45.3 0c3.9 0 7.2 2.8 7.9 6.6l52.1 286.3c6.2 34.2 36 59.1 70.8 59.1L456 384c13.3 0 24-10.7 24-24s-10.7-24-24-24l-255.9 0c-11.6 0-21.5-8.3-23.6-19.7l-5.1-28.3 303.6 0c30.8 0 57.2-21.9 62.9-52.2L568.9 69.9C572.6 50.2 557.5 32 537.4 32l-412.7 0-.4-2c-4.8-26.6-28-46-55.1-46L24-16zM208 512a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm224 0a48 48 0 1 0 0-96 48 48 0 1 0 0 96z"
                      ></path>
                    </svg>
                    Add to Cart
                  </AddToCartBtn>
                  <button className="flex-1 bg-gray-900 text-white py-3.5 px-6 rounded-xl font-medium hover:bg-gray-800 active:scale-[0.98] transition-all flex items-center justify-center gap-2">
                    <svg
                      data-prefix="fas"
                      data-icon="bolt"
                      className="w-4 h-4"
                      role="img"
                      viewBox="0 0 448 512"
                      aria-hidden="true"
                    >
                      <path
                        fill="currentColor"
                        d="M338.8-9.9c11.9 8.6 16.3 24.2 10.9 37.8L271.3 224 416 224c13.5 0 25.5 8.4 30.1 21.1s.7 26.9-9.6 35.5l-288 240c-11.3 9.4-27.4 9.9-39.3 1.3s-16.3-24.2-10.9-37.8L176.7 288 32 288c-13.5 0-25.5-8.4-30.1-21.1s-.7-26.9 9.6-35.5l288-240c11.3-9.4 27.4-9.9 39.3-1.3z"
                      ></path>
                    </svg>
                    Buy Now
                  </button>
                </div>

                <div className="flex gap-3 mb-6">
                  <button className="flex-1 border-2 py-3 px-4 rounded-xl font-medium transition flex items-center justify-center gap-2 border-gray-200 text-gray-700 hover:border-main-color hover:text-main-color">
                    <svg
                      data-prefix="far"
                      data-icon="heart"
                      className="w-4 h-4"
                      role="img"
                      viewBox="0 0 512 512"
                      aria-hidden="true"
                    >
                      <path
                        fill="currentColor"
                        d="M378.9 80c-27.3 0-53 13.1-69 35.2l-34.4 47.6c-4.5 6.2-11.7 9.9-19.4 9.9s-14.9-3.7-19.4-9.9l-34.4-47.6c-16-22.1-41.7-35.2-69-35.2-47 0-85.1 38.1-85.1 85.1 0 49.9 32 98.4 68.1 142.3 41.1 50 91.4 94 125.9 120.3 3.2 2.4 7.9 4.2 14 4.2s10.8-1.8 14-4.2c34.5-26.3 84.8-70.4 125.9-120.3 36.2-43.9 68.1-92.4 68.1-142.3 0-47-38.1-85.1-85.1-85.1zM271 87.1c25-34.6 65.2-55.1 107.9-55.1 73.5 0 133.1 59.6 133.1 133.1 0 68.6-42.9 128.9-79.1 172.8-44.1 53.6-97.3 100.1-133.8 127.9-12.3 9.4-27.5 14.1-43.1 14.1s-30.8-4.7-43.1-14.1C176.4 438 123.2 391.5 79.1 338 42.9 294.1 0 233.7 0 165.1 0 91.6 59.6 32 133.1 32 175.8 32 216 52.5 241 87.1l15 20.7 15-20.7z"
                      ></path>
                    </svg>
                    Add to Wishlist
                  </button>
                  <button className="border-2 border-gray-200 text-gray-700 py-3 px-4 rounded-xl hover:border-main-color hover:text-main-color transition">
                    <svg
                      data-prefix="fas"
                      data-icon="share-nodes"
                      className="w-4 h-4"
                      role="img"
                      viewBox="0 0 512 512"
                      aria-hidden="true"
                    >
                      <path
                        fill="currentColor"
                        d="M384 192c53 0 96-43 96-96s-43-96-96-96-96 43-96 96c0 5.4 .5 10.8 1.3 16L159.6 184.1c-16.9-15-39.2-24.1-63.6-24.1-53 0-96 43-96 96s43 96 96 96c24.4 0 46.6-9.1 63.6-24.1L289.3 400c-.9 5.2-1.3 10.5-1.3 16 0 53 43 96 96 96s96-43 96-96-43-96-96-96c-24.4 0-46.6 9.1-63.6 24.1L190.7 272c.9-5.2 1.3-10.5 1.3-16s-.5-10.8-1.3-16l129.7-72.1c16.9 15 39.2 24.1 63.6 24.1z"
                      ></path>
                    </svg>
                  </button>
                </div>

                <div className="border-t border-gray-100 pt-6">
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 bg-main-color/20 text-main-color rounded-full flex items-center justify-center shrink-0">
                        <svg
                          data-prefix="fas"
                          data-icon="truck-fast"
                          className="w-4 h-4"
                          role="img"
                          viewBox="0 0 640 512"
                          aria-hidden="true"
                        >
                          <path
                            fill="currentColor"
                            d="M64 96c0-35.3 28.7-64 64-64l288 0c35.3 0 64 28.7 64 64l0 32 50.7 0c17 0 33.3 6.7 45.3 18.7L621.3 192c12 12 18.7 28.3 18.7 45.3L640 384c0 35.3-28.7 64-64 64l-3.3 0c-10.4 36.9-44.4 64-84.7 64s-74.2-27.1-84.7-64l-102.6 0c-10.4 36.9-44.4 64-84.7 64s-74.2-27.1-84.7-64l-3.3 0c-35.3 0-64-28.7-64-64l0-48-40 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l112 0c13.3 0 24-10.7 24-24s-10.7-24-24-24L24 240c-13.3 0-24-10.7-24-24s10.7-24 24-24l176 0c13.3 0 24-10.7 24-24s-10.7-24-24-24L24 144c-13.3 0-24-10.7-24-24S10.7 96 24 96l40 0zM576 288l0-50.7-45.3-45.3-50.7 0 0 96 96 0zM256 424a40 40 0 1 0 -80 0 40 40 0 1 0 80 0zm232 40a40 40 0 1 0 0-80 40 40 0 1 0 0 80z"
                          ></path>
                        </svg>
                      </div>
                      <div className="">
                        <h4 className="font-medium text-gray-900 text-sm">
                          Free Delivery
                        </h4>
                        <p className="text-xs text-gray-500">Orders over $50</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 bg-main-color/20 text-main-color rounded-full flex items-center justify-center shrink-0">
                        <svg
                          data-prefix="fas"
                          data-icon="arrow-rotate-left"
                          className="w-4 h-4"
                          role="img"
                          viewBox="0 0 512 512"
                          aria-hidden="true"
                        >
                          <path
                            fill="currentColor"
                            d="M256 64c-56.8 0-107.9 24.7-143.1 64l47.1 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 192c-17.7 0-32-14.3-32-32L0 32C0 14.3 14.3 0 32 0S64 14.3 64 32l0 54.7C110.9 33.6 179.5 0 256 0 397.4 0 512 114.6 512 256S397.4 512 256 512c-87 0-163.9-43.4-210.1-109.7-10.1-14.5-6.6-34.4 7.9-44.6s34.4-6.6 44.6 7.9c34.8 49.8 92.4 82.3 157.6 82.3 106 0 192-86 192-192S362 64 256 64z"
                          ></path>
                        </svg>
                      </div>
                      <div className="">
                        <h4 className="font-medium text-gray-900 text-sm">
                          30 Days Return
                        </h4>
                        <p className="text-xs text-gray-500">Money back</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 bg-main-color/20 text-main-color rounded-full flex items-center justify-center shrink-0">
                        <svg
                          data-prefix="fas"
                          data-icon="shield-halved"
                          className="w-4 h-4"
                          role="img"
                          viewBox="0 0 512 512"
                          aria-hidden="true"
                        >
                          <path
                            fill="currentColor"
                            d="M256 0c4.6 0 9.2 1 13.4 2.9L457.8 82.8c22 9.3 38.4 31 38.3 57.2-.5 99.2-41.3 280.7-213.6 363.2-16.7 8-36.1 8-52.8 0-172.4-82.5-213.1-264-213.6-363.2-.1-26.2 16.3-47.9 38.3-57.2L242.7 2.9C246.9 1 251.4 0 256 0zm0 66.8l0 378.1c138-66.8 175.1-214.8 176-303.4l-176-74.6 0 0z"
                          ></path>
                        </svg>
                      </div>
                      <div className="">
                        <h4 className="font-medium text-gray-900 text-sm">
                          Secure Payment
                        </h4>
                        <p className="text-xs text-gray-500">100% Protected</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  );
}
