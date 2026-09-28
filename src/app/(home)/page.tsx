
import Features from "@/components/Features/Features";
import Offers from "@/components/Offers/Offers";
import Link from "next/link";
import ProductCard from "@/components/ProductCard/ProductCard";
import Slider from "@/components/Slider/Slider";
import homeImage from "@/assets/images/home-slider.png";
import homeImage2 from "@/assets/images/slider-image-1.jpeg";
import homeImage3 from "@/assets/images/slider-image-2.jpeg";
import { getAllProducts } from "../Home.services";
import dynamic from "next/dynamic";
import LoadingCpt from "@/components/LoadingCpt/LoadingCpt";
import { getLoggedUserWishlist } from "../wishlist/wishlist.action";


const CategoryCard = dynamic(
  () => import("@/components/CategoryCard/CategoryCard"),
  {
    loading: () => <LoadingCpt />,
  }
);

export default async function Home() {

  const productList = await getAllProducts();


  const wishListData = await getLoggedUserWishlist()

  const wishlistIds = wishListData.data.map((wishlist) => wishlist._id)

  const imageList = [<div
    className="relative h-100 bg-cover bg-center flex items-center"
    style={{
      backgroundImage: `url(${homeImage.src})`,
    }}
  >
    {/* Overlay */}
    <div className="absolute inset-0 bg-linear-to-r from-[#00C950E5] to-[#05DF7280]" />

    {/* Content */}
    {/* relative z-10 container mx-auto h-full flex flex-col justify-center */}
    <div className="relative z-10 container mx-auto h-full flex flex-col justify-center gap-4 ">
      <h2 className="text-white text-3xl font-bold max-w-96">
        Fresh Products Delivered to Your Door
      </h2>

      <p className="text-white font-medium text-[16px]">
        Get 20% off your first order
      </p>
      <div className="flex gap-2">
        <Link href="/products" className="">
          <button className="py-2 px-6 bg-white rounded-[8px] border-2 border-white text-[#00C950] font-semibold text-[16px] transition-transform duration-300 hover:scale-105">
            Shop Now
          </button>
        </Link>
        <Link href="/z">
          <button className="py-2 px-6  rounded-[8px] border-2 border-white text-white font-semibold text-[16px] transition-transform duration-300 hover:scale-110">
            View Details
          </button>
        </Link>
      </div>
    </div>
  </div>, <div
    className="relative h-100 bg-cover bg-center flex items-center"
    style={{
      backgroundImage: `url(${homeImage2.src})`,
    }}
  >
    {/* Overlay */}
    <div className="absolute inset-0 bg-linear-to-r from-[#00C950E5] to-[#05DF7280]" />

    {/* Content */}
    {/* relative z-10 container mx-auto h-full flex flex-col justify-center */}
    <div className="absolute lg:top-21 lg:left-31.25 py-8.5 lg:ps-21.5 ps-4 flex flex-col gap-4 ">
      <h2 className="text-white text-3xl font-bold max-w-96">
        Premium Quality Guaranteed
      </h2>

      <p className="text-white font-medium text-[16px]">
        Fresh from farm to your table
      </p>
      <div className="flex gap-2">
        <Link href="" className="">
          <button className="py-2 px-6 bg-white rounded-[8px] border-2 border-white text-[#00C950] font-semibold text-[16px] transition-transform duration-300 hover:scale-105">
            Shop Now
          </button>
        </Link>
        <Link href="">
          <button className="py-2 px-6  rounded-[8px] border-2 border-white text-white font-semibold text-[16px] transition-transform duration-300 hover:scale-110">
            Learn More
          </button>
        </Link>
      </div>
    </div>
  </div>, <div
    className="relative h-100 bg-cover bg-center flex items-center"
    style={{
      backgroundImage: `url(${homeImage3.src})`,
    }}
  >
    {/* Overlay */}
    <div className="absolute inset-0 bg-linear-to-r from-[#00C950E5] to-[#05DF7280]" />

    {/* Content */}
    {/* relative z-10 container mx-auto h-full flex flex-col justify-center */}
    <div className="absolute lg:top-21 lg:left-31.25 py-8.5 lg:ps-21.5 ps-4 flex flex-col gap-4 ">
      <h2 className="text-white text-3xl font-bold max-w-96">
        Fast & Free Delivery
      </h2>

      <p className="text-white font-medium text-[16px]">
        Same day delivery available
      </p>
      <div className="flex gap-2">
        <Link href="" className="">
          <button className="py-2 px-6 bg-white rounded-[8px] border-2 border-white text-[#00C950] font-semibold text-[16px] transition-transform duration-300 hover:scale-105">
            Shop Now
          </button>
        </Link>
        <Link href="">
          <button className="py-2 px-6  rounded-[8px] border-2 border-white text-white font-semibold text-[16px] transition-transform duration-300 hover:scale-110">
            Delivery Info
          </button>
        </Link>
      </div>
    </div>
  </div>]

  return (
    <>
      <Slider imageList={imageList} />
      <Features />
      <section className="py-10">
        {/* lg:px-56 md:p-8 p-4 flex flex-col gap-8 */}
        <div className="container mx-auto flex flex-col gap-8">
          {/* header */}
          <div className="w-full flex items-center justify-between">
            <div className="py-8 flex items-center gap-3">
              <div className="h-8 w-1.5 bg-linear-to-b from-emerald-500 to-emerald-700 rounded-full"></div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
                Shop By
                <span className="text-emerald-600"> Category</span>
              </h2>
            </div>

            <Link
              href="/categories"
              className="text-main-color self-end sm:self-auto hover:text-main-color-hover font-medium flex items-center cursor-pointer"
            >
              View All Categories
              <svg
                width="20"
                height="16"
                viewBox="0 0 20 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.7063 8.70627C18.0969 8.31565 18.0969 7.68127 17.7063 7.29065L12.7063 2.29065C12.3156 1.90002 11.6812 1.90002 11.2906 2.29065C10.9 2.68127 10.9 3.31565 11.2906 3.70627L14.5844 7.00002H3C2.44687 7.00002 2 7.4469 2 8.00002C2 8.55315 2.44687 9.00002 3 9.00002H14.5844L11.2906 12.2938C10.9 12.6844 10.9 13.3188 11.2906 13.7094C11.6812 14.1 12.3156 14.1 12.7063 13.7094L17.7063 8.7094V8.70627Z"
                  fill="#16A34A"
                />
              </svg>
            </Link>
          </div>
          <CategoryCard />
        </div>
      </section>
      <section className="py-10">
        {/* lg:px-56 md:p-8 p-4 grid md:grid-cols-2 gap-6 */}
        <div className="container mx-auto grid md:grid-cols-2 gap-6">
          <Offers />
        </div>
      </section>
      <section className="py-10">
        {/* lg:px-56 md:p-8 p-4 flex flex-col gap-8 */}
        <div className="container mx-auto flex flex-col gap-8">
          {/* header */}
          <div className="w-full flex items-center justify-between">
            <div className="py-8 flex items-center gap-3">
              <div className="h-8 w-1.5 bg-linear-to-b from-emerald-500 to-emerald-700 rounded-full"></div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
                Featured
                <span className="text-emerald-600"> Products</span>
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {/* Cpt */}
            {productList.data.map((e: any) => (
              <ProductCard key={e._id} prod={e} iswishListed={wishlistIds.includes(e._id)} />
            ))}
          </div>

        </div>
      </section>

      <section className="py-16 bg-linear-to-b from-white to-gray-50">
        <div className="container mx-auto">
          <div className="relative">
            <div className="opacity-100 transform-none bg-linear-to-br from-emerald-50 via-white to-teal-50 rounded-[2.5rem] border border-emerald-100/50 shadow-2xl shadow-emerald-500/10 overflow-hidden">
              <div className="absolute top-0 right-0 w-80 h-80 bg-linear-to-br from-emerald-200/40 to-transparent rounded-full blur-3xl -translate-y-1/2 translate-x-1/4 pointer-events-none"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-linear-to-tr from-teal-200/30 to-transparent rounded-full blur-3xl translate-y-1/2 -translate-x-1/4 pointer-events-none"></div>
              {/* CPT */}
              <div className="relative grid lg:grid-cols-5 gap-8 p-8 lg:p-14">
                <div className="lg:col-span-3 space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-linear-to-br from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center shadow-lg shadow-emerald-500/30">
                      <svg
                        width="25"
                        height="20"
                        viewBox="0 0 25 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M4.375 2.5C3.33984 2.5 2.5 3.33984 2.5 4.375C2.5 4.96484 2.77734 5.51953 3.25 5.875L11.375 11.9688C12.043 12.4688 12.957 12.4688 13.625 11.9688L21.75 5.875C22.2227 5.51953 22.5 4.96484 22.5 4.375C22.5 3.33984 21.6602 2.5 20.625 2.5H4.375ZM2.5 7.65625V15C2.5 16.3789 3.62109 17.5 5 17.5H20C21.3789 17.5 22.5 16.3789 22.5 15V7.65625L14.75 13.4688C13.418 14.4688 11.582 14.4688 10.25 13.4688L2.5 7.65625Z"
                          fill="white"
                        />
                      </svg>
                    </div>
                    <div className="">
                      <h3 className="text-sm font-semibold text-emerald-600 uppercase tracking-wide">
                        Newsletter
                      </h3>
                      <p className="text-xs text-gray-500">
                        50,000+ subscribers
                      </p>
                    </div>
                  </div>

                  <div className="">
                    <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-snug">
                      Get the Freshest Updates{" "}
                    </h2>
                    <span className="text-main-color"> Delivered Free</span>
                    <p className="text-gray-500 mt-3 text-lg">
                      Weekly recipes, seasonal offers & exclusive member perks.
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    <div className="flex items-center gap-2.5 bg-white/80 backdrop-blur-sm border border-emerald-100 px-4 py-2.5 rounded-full shadow-sm">
                      <div className="w-7 h-7 bg-emerald-100 rounded-full flex items-center justify-center">
                        <svg
                          width="12"
                          height="12"
                          viewBox="0 0 12 12"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M11.0461 0.157063C11.1961 0.0140938 11.4141 -0.0374687 11.6156 0.0281563C11.8453 0.1055 12 0.321125 12 0.562531V4.943C12 8.018 9.46641 10.5 6.40313 10.5C4.59844 10.5 3.04219 9.33988 2.47734 7.718C1.64766 8.43987 1.125 9.50159 1.125 10.6875C1.125 10.9993 0.874219 11.25 0.5625 11.25C0.250781 11.25 0 10.9993 0 10.6875C0 8.93206 0.895312 7.38519 2.25234 6.47581C3.07969 5.92269 4.06641 5.62503 5.0625 5.62503H6.9375C7.24922 5.62503 7.5 5.37425 7.5 5.06253C7.5 4.75081 7.24922 4.50003 6.9375 4.50003H5.0625C4.13203 4.50003 3.25078 4.70628 2.46094 5.07425C3.00703 3.43363 4.55156 2.25003 6.375 2.25003C7.93125 2.25003 9.08906 1.73206 9.86016 1.21878C10.3102 0.918781 10.6922 0.560188 11.0484 0.157063H11.0461Z"
                            fill="#009966"
                          />
                        </svg>
                      </div>
                      <span className="text-sm font-medium text-gray-700">
                        Fresh Picks Weekly
                      </span>
                    </div>

                    <div className="flex items-center gap-2.5 bg-white/80 backdrop-blur-sm border border-emerald-100 px-4 py-2.5 rounded-full shadow-sm">
                      <div className="w-7 h-7 bg-emerald-100 rounded-full flex items-center justify-center">
                        <svg
                          width="15"
                          height="12"
                          viewBox="0 0 15 12"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M0.75 2.25C0.75 1.42266 1.42266 0.75 2.25 0.75H9C9.82734 0.75 10.5 1.42266 10.5 2.25V3H11.6883C12.0867 3 12.4688 3.15703 12.75 3.43828L13.8117 4.5C14.093 4.78125 14.25 5.16328 14.25 5.56172V9C14.25 9.82734 13.5773 10.5 12.75 10.5H12.6727C12.4289 11.3648 11.632 12 10.6875 12C9.74297 12 8.94844 11.3648 8.70234 10.5H6.29766C6.05391 11.3648 5.25703 12 4.3125 12C3.36797 12 2.57344 11.3648 2.32734 10.5H2.25C1.42266 10.5 0.75 9.82734 0.75 9V2.25ZM12.75 6.75V5.56172L11.6883 4.5H10.5V6.75H12.75ZM5.25 9.9375C5.25 9.68886 5.15123 9.4504 4.97541 9.27459C4.7996 9.09877 4.56114 9 4.3125 9C4.06386 9 3.8254 9.09877 3.64959 9.27459C3.47377 9.4504 3.375 9.68886 3.375 9.9375C3.375 10.1861 3.47377 10.4246 3.64959 10.6004C3.8254 10.7762 4.06386 10.875 4.3125 10.875C4.56114 10.875 4.7996 10.7762 4.97541 10.6004C5.15123 10.4246 5.25 10.1861 5.25 9.9375ZM10.6875 10.875C10.9361 10.875 11.1746 10.7762 11.3504 10.6004C11.5262 10.4246 11.625 10.1861 11.625 9.9375C11.625 9.68886 11.5262 9.4504 11.3504 9.27459C11.1746 9.09877 10.9361 9 10.6875 9C10.4389 9 10.2004 9.09877 10.0246 9.27459C9.84877 9.4504 9.75 9.68886 9.75 9.9375C9.75 10.1861 9.84877 10.4246 10.0246 10.6004C10.2004 10.7762 10.4389 10.875 10.6875 10.875Z"
                            fill="#009966"
                          />
                        </svg>
                      </div>
                      <span className="text-sm font-medium text-gray-700">
                        Free Delivery Codes
                      </span>
                    </div>

                    <div className="flex items-center gap-2.5 bg-white/80 backdrop-blur-sm border border-emerald-100 px-4 py-2.5 rounded-full shadow-sm">
                      <div className="w-7 h-7 bg-emerald-100 rounded-full flex items-center justify-center">
                        <svg
                          width="15"
                          height="12"
                          viewBox="0 0 15 12"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M2.26172 2.25V5.75391C2.26172 6.15234 2.41875 6.53437 2.7 6.81562L7.2 11.3156C7.78594 11.9016 8.73516 11.9016 9.32109 11.3156L12.825 7.81172C13.4109 7.22578 13.4109 6.27656 12.825 5.69062L8.325 1.19062C8.04375 0.907031 7.66406 0.75 7.26563 0.75H3.76172C2.93438 0.75 2.26172 1.42266 2.26172 2.25ZM4.88672 2.625C5.08563 2.625 5.2764 2.70402 5.41705 2.84467C5.5577 2.98532 5.63672 3.17609 5.63672 3.375C5.63672 3.57391 5.5577 3.76468 5.41705 3.90533C5.2764 4.04598 5.08563 4.125 4.88672 4.125C4.68781 4.125 4.49704 4.04598 4.35639 3.90533C4.21574 3.76468 4.13672 3.57391 4.13672 3.375C4.13672 3.17609 4.21574 2.98532 4.35639 2.84467C4.49704 2.70402 4.68781 2.625 4.88672 2.625Z"
                            fill="#009966"
                          />
                        </svg>
                      </div>
                      <span className="text-sm font-medium text-gray-700">
                        Members-Only Deals
                      </span>
                    </div>
                  </div>

                  <form action="" className="pt-2">
                    <div className="flex flex-col sm:flex-row gap-3">
                      <div className="relative flex-1">
                        <input placeholder="you@example.com" className="w-full pl-5 pr-5 py-4 bg-white border-2 border-gray-200 rounded-2xl text-gray-800 placeholder-gray-400 focus:outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 transition-all text-base shadow-sm" type="email" ></input>

                      </div>
                      <button type="submit" className="group flex items-center justify-center gap-3 px-8 py-4 rounded-2xl font-semibold text-base transition-all duration-300 shadow-lg bg-linear-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-teal-500 text-white shadow-emerald-500/30 hover:shadow-emerald-500/40 hover:scale-[1.02]"><span>Subscribe</span><svg width="14" height="11" viewBox="0 0 14 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13.743 5.87002C14.0848 5.52822 14.0848 4.97315 13.743 4.63135L9.36797 0.256348C9.02617 -0.0854492 8.47109 -0.0854492 8.1293 0.256348C7.7875 0.598145 7.7875 1.15322 8.1293 1.49502L11.0113 4.37705H0.875C0.391016 4.37705 0 4.76807 0 5.25205C0 5.73604 0.391016 6.12705 0.875 6.12705H11.0113L8.1293 9.00908C7.7875 9.35088 7.7875 9.90596 8.1293 10.2478C8.47109 10.5896 9.02617 10.5896 9.36797 10.2478L13.743 5.87275V5.87002Z" fill="white" />
                      </svg>
                      </button>
                    </div>
                    <p className="text-xs text-gray-400 mt-3 pl-1">✨ Unsubscribe anytime. No spam, ever.</p>
                  </form>


                  <div className="lg:col-span-2 lg:border-l lg:border-emerald-100 lg:pl-8"></div>
                </div>

                <div className="lg:col-span-2 lg:border-l lg:border-emerald-100 lg:pl-8">
                  <div className="h-full flex flex-col justify-center">
                    <div className="bg-linear-to-br from-gray-900 to-gray-800 rounded-3xl p-8 text-white relative overflow-hidden">

                      <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/20 rounded-full blur-2xl"></div>
                      <div className="absolute bottom-0 left-0 w-24 h-24 bg-teal-500/20 rounded-full blur-2xl"></div>

                      <div className="relative space-y-5">
                        <div className="inline-block bg-emerald-500/20 text-emerald-400 text-xs font-semibold px-3 py-1.5 rounded-full border border-emerald-500/30">
                          📱 MOBILE APP
                        </div>
                        <h3 className="text-2xl font-bold leading-tight">Shop Faster on Our App</h3>
                        <p className="text-gray-400 text-sm leading-relaxed">Get app-exclusive deals & 15% off your first order.</p>

                        <div className="flex flex-col gap-3 pt-2">
                          <Link href="/" className="flex items-center gap-3 bg-white/10 hover:bg-white/15 backdrop-blur-sm border border-white/10 px-4 py-3 rounded-xl transition-all hover:scale-[1.02]">
                            <svg width="25" height="20" viewBox="0 0 25 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M17.4648 10.4961C17.457 9.0625 18.1055 7.98047 19.418 7.18359C18.6836 6.13281 17.5742 5.55469 16.1094 5.44141C14.7227 5.33203 13.207 6.25 12.6523 6.25C12.0664 6.25 10.7227 5.48047 9.66797 5.48047C7.48828 5.51562 5.17188 7.21875 5.17188 10.6836C5.17188 11.707 5.35937 12.7656 5.73438 13.8555C6.23438 15.2891 8.03906 18.8047 9.92188 18.7461C10.9062 18.7227 11.6016 18.0469 12.8828 18.0469C14.125 18.0469 14.7695 18.7461 15.8672 18.7461C17.7656 18.7188 19.3984 15.5234 19.875 14.0859C17.3281 12.8867 17.4648 10.5703 17.4648 10.4961ZM15.2539 4.08203C16.3203 2.81641 16.2227 1.66406 16.1914 1.25C15.25 1.30469 14.1602 1.89063 13.5391 2.61328C12.8555 3.38672 12.4531 4.34375 12.5391 5.42188C13.5586 5.5 14.4883 4.97656 15.2539 4.08203Z" fill="white" />
                            </svg>
                            <div className="text-left">
                              <div className="text-[10px] text-gray-400 uppercase tracking-wide">Download on</div>
                              <div className="text-sm font-semibold -mt-0.5">App Store</div>
                            </div>
                          </Link>

                          <Link href="/" className="flex items-center gap-3 bg-white/10 hover:bg-white/15 backdrop-blur-sm border border-white/10 px-4 py-3 rounded-xl transition-all hover:scale-[1.02]">
                            <svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M11.7188 9.15234L3.09766 0.507812L14.0664 6.80469L11.7188 9.15234ZM0.847656 0C0.339844 0.265625 0 0.75 0 1.37891V18.6172C0 19.2461 0.339844 19.7305 0.847656 19.9961L10.8711 9.99609L0.847656 0ZM17.457 8.8125L15.1562 7.48047L12.5898 10L15.1562 12.5195L17.5039 11.1875C18.207 10.6289 18.207 9.37109 17.457 8.8125ZM3.09766 19.4922L14.0664 13.1953L11.7188 10.8477L3.09766 19.4922Z" fill="white" />
                            </svg>
                            <div className="text-left">
                              <div className="text-[10px] text-gray-400 uppercase tracking-wide">Get it on</div>
                              <div className="text-sm font-semibold -mt-0.5">Google Play</div>
                            </div>
                          </Link>
                        </div>

                        <div className="flex items-center gap-2 pt-2 text-sm">
                          <span className="text-yellow-400">★★★★★</span>
                          <span className="text-gray-400">4.9 • 100K+ downloads</span>

                        </div>

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
