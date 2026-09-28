"use client";
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { ReactNode } from 'react';

export default function Slider({imageList ,spaceBetween = 100 ,slidesPerView = 1}:{imageList:ReactNode[] ,spaceBetween? :number ,slidesPerView?:number}) {
  return (
    <>
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y ,Autoplay]}
      spaceBetween={spaceBetween}
      slidesPerView={slidesPerView}
    loop={true}
          pagination={{ clickable: true }}
    autoplay={{
        delay : 2500,
  disableOnInteraction: false,
  pauseOnMouseEnter: true,
    }}
    >
      {imageList.map(e => <SwiperSlide>{e}</SwiperSlide>)}
    </Swiper>
    </>
  )
}

// "use client";

// import Link from "next/link";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Pagination, A11y } from "swiper/modules";

// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";

// import homeImage from "@/assets/images/home-slider.png";

// export default function BackgroundHome() {
//   return (
//     <section className="relative">
//       <Swiper
//         modules={[Navigation, Pagination, A11y]}
//         slidesPerView={1}
//         spaceBetween={0}
//         navigation
//         pagination={{ clickable: true }}
//         className="h-100"
//       >
//         {/* Slide 1 */}
//         <SwiperSlide>
//           <div
//             className="relative h-100 bg-cover bg-center flex items-center"
//             style={{
//               backgroundImage: `url(${homeImage.src})`,
//             }}
//           >
//             {/* Overlay */}
//             <div className="absolute inset-0 bg-linear-to-r from-[#00C950E5] to-[#05DF7280]" />

//             {/* Content */}
//             <div className="relative z-10 container mx-auto h-full flex flex-col justify-center gap-4 px-4">
//               <h2 className="text-white text-3xl font-bold max-w-96">
//                 Fresh Products Delivered to Your Door
//               </h2>

//               <p className="text-white font-medium text-[16px]">
//                 Get 20% off your first order
//               </p>

//               <div className="flex gap-2">
//                 <Link href="/products">
//                   <button className="py-2 px-6 bg-white rounded-[8px] border-2 border-white text-[#00C950] font-semibold text-[16px] transition-transform duration-300 hover:scale-105">
//                     Shop Now
//                   </button>
//                 </Link>

//                 <Link href="/z">
//                   <button className="py-2 px-6 rounded-[8px] border-2 border-white text-white font-semibold text-[16px] transition-transform duration-300 hover:scale-110">
//                     View Details
//                   </button>
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </SwiperSlide>

//         {/* Slide 2 */}
//         <SwiperSlide>
//           <div
//             className="relative h-100 bg-cover bg-center flex items-center"
//             style={{
//               backgroundImage: `url(${homeImage.src})`,
//             }}
//           >
//             {/* Overlay */}
//             <div className="absolute inset-0 bg-linear-to-r from-[#00C950E5] to-[#05DF7280]" />

//             {/* Content */}
//             <div className="relative z-10 container mx-auto h-full flex flex-col justify-center gap-4 px-4">
//               <h2 className="text-white text-3xl font-bold max-w-96">
//                 Premium Quality Guaranteed
//               </h2>

//               <p className="text-white font-medium text-[16px]">
//                 Fresh from farm to your table
//               </p>

//               <div className="flex gap-2">
//                 <Link href="/products">
//                   <button className="py-2 px-6 bg-white rounded-[8px] border-2 border-white text-[#00C950] font-semibold text-[16px] transition-transform duration-300 hover:scale-105">
//                     Shop Now
//                   </button>
//                 </Link>

//                 <Link href="/about">
//                   <button className="py-2 px-6 rounded-[8px] border-2 border-white text-white font-semibold text-[16px] transition-transform duration-300 hover:scale-110">
//                     Learn More
//                   </button>
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </SwiperSlide>

//         {/* Slide 3 */}
//         <SwiperSlide>
//           <div
//             className="relative h-100 bg-cover bg-center flex items-center"
//             style={{
//               backgroundImage: `url(${homeImage.src})`,
//             }}
//           >
//             {/* Overlay */}
//             <div className="absolute inset-0 bg-linear-to-r from-[#00C950E5] to-[#05DF7280]" />

//             {/* Content */}
//             <div className="relative z-10 container mx-auto h-full flex flex-col justify-center gap-4 px-4">
//               <h2 className="text-white text-3xl font-bold max-w-96">
//                 Fast & Free Delivery
//               </h2>

//               <p className="text-white font-medium text-[16px]">
//                 Same day delivery available
//               </p>

//               <div className="flex gap-2">
//                 <Link href="/products">
//                   <button className="py-2 px-6 bg-white rounded-[8px] border-2 border-white text-[#00C950] font-semibold text-[16px] transition-transform duration-300 hover:scale-105">
//                     Shop Now
//                   </button>
//                 </Link>

//                 <Link href="/delivery">
//                   <button className="py-2 px-6 rounded-[8px] border-2 border-white text-white font-semibold text-[16px] transition-transform duration-300 hover:scale-110">
//                     Delivery Info
//                   </button>
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </SwiperSlide>
//       </Swiper>
//     </section>
//   );
// }
