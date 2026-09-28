
import { product } from "@/app/Home.interface";
import Image from "next/image";
import Link from "next/link";
import AddToCartBtn from "./AddToCartBtn/AddToCartBtn";
import AddToWishlistBtn from "./AddToWishlistBtn/AddToWishlistBtn";

export default function ProductCard({ prod ,iswishListed}: { prod: product ,iswishListed :boolean}) {
  const {
    _id,
    category,
    imageCover,
    price,
    ratingsAverage,
    ratingsQuantity,
    title,
    priceAfterDiscount,
  } = prod;

  const discountPercentage = priceAfterDiscount
    ? Math.round(((price - priceAfterDiscount) / price) * 100)
    : 0;

  return (
    <>

      <div
        key={_id}
        className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:-translate-y-1.25 hover:shadow-[0_10px_15px_-3px_rgba(0,0,0,0.1),0_4px_6px_-4px_rgba(0,0,0,0.1)] duration-200"
      >
        <div className="relative h-60 bg-white">
          <Image
            fill
            loading="lazy"
            alt={title}
            src={imageCover}
            className="w-full h-full object-contain bg-white"
          />
          {/* offer */}
          {priceAfterDiscount && (
            <div className="absolute top-3 left-3">
              <span className="bg-red-500 text-white text-xs px-2 py-1 rounded">
                -{discountPercentage}%
              </span>
            </div>
          )}

          <div className="absolute top-3 right-3 flex flex-col space-y-2">
            <AddToWishlistBtn productId={_id} iswishListed={iswishListed}/>

            <button className="bg-white h-8 w-8 rounded-full flex items-center justify-center text-gray-600 hover:text-main-color shadow-sm">
              <svg
                width="20"
                height="16"
                viewBox="0 0 20 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.05938 7.14062C4.47501 4.23438 6.97813 2 10 2C11.6563 2 13.1563 2.67188 14.2438 3.75625C14.25 3.7625 14.2563 3.76875 14.2625 3.775L14.5 4H13.0031C12.45 4 12.0031 4.44688 12.0031 5C12.0031 5.55312 12.45 6 13.0031 6H17.0031C17.5563 6 18.0031 5.55312 18.0031 5V1C18.0031 0.446875 17.5563 0 17.0031 0C16.45 0 16.0031 0.446875 16.0031 1V2.66875L15.65 2.33437C14.2031 0.89375 12.2031 0 10 0C5.96876 0 2.63438 2.98125 2.08126 6.85938C2.00313 7.40625 2.38126 7.9125 2.92813 7.99062C3.47501 8.06875 3.98126 7.6875 4.05938 7.14375V7.14062ZM17.9188 9.14062C17.9969 8.59375 17.6156 8.0875 17.0719 8.00937C16.5281 7.93125 16.0188 8.3125 15.9406 8.85625C15.525 11.7625 13.0219 13.9969 10 13.9969C8.34376 13.9969 6.84376 13.325 5.75626 12.2406C5.75001 12.2344 5.74376 12.2281 5.73751 12.2219L5.50001 11.9969H6.99688C7.55001 11.9969 7.99688 11.55 7.99688 10.9969C7.99688 10.4437 7.55001 9.99687 6.99688 9.99687L3.00001 10C2.73438 10 2.47813 10.1062 2.29063 10.2969C2.10313 10.4875 1.99688 10.7406 2.00001 11.0094L2.03126 14.9781C2.03438 15.5312 2.48751 15.975 3.04063 15.9688C3.59376 15.9625 4.03751 15.5125 4.03126 14.9594L4.01876 13.35L4.35313 13.6656C5.80001 15.1062 7.79688 16 10 16C14.0313 16 17.3656 13.0188 17.9188 9.14062Z"
                  fill="currentColor"
                />
              </svg>
            </button>

            <Link
              href={`/products/${_id}`}
              className="bg-white h-8 w-8 rounded-full flex items-center justify-center text-gray-600 hover:text-main-color shadow-sm"
            >
              <svg
                width="18"
                height="14"
                viewBox="0 0 18 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.00234 1.5C6.96484 1.5 5.28984 2.425 4.00547 3.61562C2.80234 4.73438 1.97109 6.0625 1.54609 7C1.97109 7.9375 2.80234 9.26562 4.00547 10.3844C5.28984 11.575 6.96484 12.5 9.00234 12.5C11.0398 12.5 12.7148 11.575 13.9992 10.3844C15.2023 9.26562 16.0336 7.9375 16.4586 7C16.0336 6.0625 15.2023 4.73438 13.9992 3.61562C12.7148 2.425 11.0398 1.5 9.00234 1.5ZM2.98359 2.51875C4.45547 1.15 6.47734 0 9.00234 0C11.5273 0 13.5492 1.15 15.0211 2.51875C16.4836 3.87812 17.4617 5.5 17.9273 6.61562C18.0305 6.8625 18.0305 7.1375 17.9273 7.38437C17.4617 8.5 16.4836 10.125 15.0211 11.4812C13.5492 12.8469 11.5273 14 9.00234 14C6.47734 14 4.45547 12.85 2.98359 11.4812C1.52109 10.1219 0.542969 8.5 0.0773437 7.38437C-0.0257813 7.1375 -0.0257813 6.8625 0.0773437 6.61562C0.542969 5.5 1.52109 3.875 2.98359 2.51875ZM9.00234 9.5C10.3836 9.5 11.5023 8.38125 11.5023 7C11.5023 6.075 10.9992 5.26562 10.2523 4.83437C10.2086 6.7 8.70234 8.20625 6.83672 8.25C7.26797 8.99687 8.07734 9.5 9.00234 9.5ZM6.51484 6.7375C6.59297 6.74688 6.67109 6.75 6.75234 6.75C7.85547 6.75 8.75234 5.85313 8.75234 4.75C8.75234 4.66875 8.74609 4.59062 8.73984 4.5125C7.57109 4.63437 6.63984 5.56563 6.51797 6.73438L6.51484 6.7375ZM7.93984 3.14375C8.27734 3.05 8.63359 3.00313 8.99922 3.00313C9.27422 3.00313 9.54609 3.03125 9.80547 3.08437C9.81484 3.0875 9.82109 3.0875 9.83047 3.09062C11.6398 3.47187 12.9992 5.08125 12.9992 7.00313C12.9992 9.2125 11.2086 11.0031 8.99922 11.0031C7.07422 11.0031 5.46797 9.64375 5.08672 7.83438C5.03047 7.56563 4.99922 7.2875 4.99922 7.00313C4.99922 6.65938 5.04297 6.32188 5.12422 6.00313C5.13047 5.98125 5.13359 5.9625 5.13984 5.94375C5.51172 4.5875 6.58047 3.51875 7.93672 3.14687L7.93984 3.14375Z"
                  fill="currentColor"
                />
              </svg>
            </Link>
          </div>
        </div>

        <div className="p-4">
          <div className="text-xs text-gray-500 mb-1">{category.name}</div>
          <h3 className="font-medium mb-1 cursor-pointer ">
            <Link href={`/products/${_id}`} className="line-clamp-2">
              {title}
            </Link>
          </h3>
          <div className="flex items-center mb-2">
            <div className="flex text-amber-400 mr-2">
              <div className="text-yellow-400 flex">
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
            </div>
            <span className="text-xs text-gray-500">
              {ratingsAverage} ({ratingsQuantity})
            </span>
          </div>
          <div className="flex items-center justify-between">
            <div className="">
              <span
                className={`text-lg font-bold ${priceAfterDiscount ? "text-main-color" : "text-gray-800"}`}
              >
                {priceAfterDiscount
                  ? `${priceAfterDiscount} EGP`
                  : `${price} EGP`}
              </span>
              <span className="text-sm text-gray-500 line-through ml-2">
                {priceAfterDiscount ? `${price} EGP` : ""}
              </span>
            </div>
            <AddToCartBtn style="h-10 w-10 rounded-full flex items-center justify-center transition bg-main-color text-white hover:bg-main-color-hover disabled:opacity-70 cursor-pointer" productId={_id}>
            <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8 1C8 0.446875 7.55312 0 7 0C6.44688 0 6 0.446875 6 1V6H1C0.446875 6 0 6.446875 0 7C0 7.553125 0.446875 8 1 8H6V13C6 13.553125 6.446875 14 7 14C7.553125 14 8 13.553125 8 13V8H13C13.553125 8 14 7.553125 14 7C14 6.446875 13.553125 6 13 6H8V1Z"
              fill="white"
            />
          </svg>
          </AddToCartBtn>
          </div>
        </div>
      </div>
    </>
  );
}
