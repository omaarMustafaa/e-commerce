

import Link from "next/link";
import { getProductDetails, getProductsDetailsCategory } from "./productDetails.api";
import ProductDetails from "@/components/ProductDetails/ProductDetails";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Box, Check, RotateCcw, Star, Truck } from "lucide-react";
import ProductCard from "@/components/ProductCard/ProductCard";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function page({ params }: PageProps) {

  const { id } = await params;
  const product = await getProductDetails(id)
  const {
    sold,
    category,
    subcategory,
    title,
    brand,
    ratingsAverage,
    reviews,
  } = product;

  const productCategorys = await getProductsDetailsCategory(category._id)

  const ratingCounts = [5, 4, 3, 2, 1].map((star) => {
    const count = product.reviews.filter(
      (review: any) => review.rating === star,
    ).length;

    const percentage = product.reviews.length
      ? Math.round((count / product.reviews.length) * 100)
      : 0;

    return {
      star,
      count,
      percentage,
    };
  });

  return (
    <>
      <div className="py-4">
        <div className="container mx-auto px-4">
          <ol className="flex items-center flex-wrap gap-1 font-medium text-sm">
            <li className="flex items-center">
              <Link
                href="/"
                className="text-gray-500 hover:text-main-color transition flex items-center gap-1.5"
              >
                <svg
                  className="w-3 h-3"
                  viewBox="0 0 512 512"
                  aria-hidden="true"
                >
                  <path
                    fill="currentColor"
                    d="M277.8 8.6c-12.3-11.4-31.3-11.4-43.5 0l-224 208c-9.6 9-12.8 22.9-8 35.1S18.8 272 32 272l16 0 0 176c0 35.3 28.7 64 64 64l288 0c35.3 0 64-28.7 64-64l0-176 16 0c13.2 0 25-8.1 29.8-20.3s1.6-26.2-8-35.1l-224-208zM240 320l32 0c26.5 0 48 21.5 48 48l0 96-128 0 0-96c0-26.5 21.5-48 48-48z"
                  />
                </svg>
                Home
                <svg
                  className="w-3 h-3 text-gray-400 mx-2"
                  viewBox="0 0 320 512"
                  aria-hidden="true"
                >
                  <path
                    fill="currentColor"
                    d="M311.1 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L243.2 256 73.9 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"
                  />
                </svg>
              </Link>
            </li>
            <li className="flex items-center">
              <Link
                href={`/categories/${category._id}`}
                className="text-gray-500 hover:text-main-color transition flex items-center gap-1.5"
              >
                {category.name}
                <svg
                  className="w-3 h-3 text-gray-400 mx-2"
                  viewBox="0 0 320 512"
                  aria-hidden="true"
                >
                  <path
                    fill="currentColor"
                    d="M311.1 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L243.2 256 73.9 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"
                  />
                </svg>
              </Link>
            </li>
            <li className="flex items-center">
              <Link
                href={`/categories/${category._id}/${subcategory[0]._id}`}
                className="text-gray-500 hover:text-main-color transition flex items-center gap-1.5"
              >
                {subcategory[0].name}
                <svg
                  className="w-3 h-3 text-gray-400 mx-2"
                  viewBox="0 0 320 512"
                  aria-hidden="true"
                >
                  <path
                    fill="currentColor"
                    d="M311.1 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L243.2 256 73.9 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"
                  />
                </svg>
              </Link>
            </li>
            <li className="text-gray-900 font-medium truncate max-w-xs">
              {title}
            </li>
          </ol>
        </div>
      </div>
      <ProductDetails product={product} />
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
            <Tabs defaultValue="details" className="w-full">
              {/* ================= TABS ================= */}
              <div className="border-b border-gray-200">
                <TabsList
                  className="
                  flex
                  w-full
                  h-auto
                  justify-start
                  items-stretch
                  rounded-none
                  bg-transparent
                  p-0
                  overflow-x-auto
                  scrollbar-hide
                "
                >
                  {/* Product Details */}
                  <TabsTrigger
                    value="details"
                    className="
                    flex
                    items-center
                    gap-2
                    shrink-0
                    px-4
                    py-3
                    rounded-none
                    border-0
                    border-b-2
                    border-transparent
                    bg-transparent
                    text-[16px]
                    font-medium
                    text-[#4A5565]
                    shadow-none
                    transition-all

                    hover:bg-main-color/20
                    hover:text-main-color

                    data-active:border-main-color
data-active:bg-main-color/20
data-active:text-main-color
data-active:shadow-none
data-active:hover:bg-main-color/20

                    focus-visible:ring-0
                  "
                  >
                    <Box className="w-3 h-3" />
                    Product Details
                  </TabsTrigger>

                  {/* Reviews */}
                  <TabsTrigger
                    value="reviews"
                    className="
                    flex
                    items-center
                    gap-2
                    shrink-0
                    px-4
                    py-3
                    rounded-none
                    border-0
                    border-b-2
                    border-transparent
                    bg-transparent
                    text-[16px]
                    font-medium
                    text-[#4A5565]
                    shadow-none
                    transition-all

                    hover:bg-main-color/20
                    hover:text-main-color

                    data-active:border-main-color
data-active:bg-main-color/20
data-active:text-main-color
data-active:shadow-none
data-active:hover:bg-main-color/20

                    focus-visible:ring-0
                  "
                  >
                    <Star className="w-3 h-3" />
                    Reviews ({reviews.length})
                  </TabsTrigger>

                  {/* Shipping */}
                  <TabsTrigger
                    value="shipping"
                    className="
                    flex
                    items-center
                    gap-2
                    shrink-0
                    px-4
                    py-3
                    rounded-none
                    border-0
                    border-b-2
                    border-transparent
                    bg-transparent
                    text-[16px]
                    font-medium
                    text-[#4A5565]
                    shadow-none
                    transition-all

                    hover:bg-main-color/20
                    hover:text-main-color

                    data-active:border-main-color
data-active:bg-main-color/20
data-active:text-main-color
data-active:shadow-none
data-active:hover:bg-main-color/20

                    focus-visible:ring-0
                  "
                  >
                    <Truck className="w-3 h-3" />
                    Shipping & Returns
                  </TabsTrigger>
                </TabsList>
              </div>

              {/* ================= DETAILS ================= */}
              <TabsContent value="details" className="mt-0 p-3">
                <div className="space-y-4">
                  {/* About */}
                  <div>
                    <h3 className="text-[18px] font-semibold text-[#101828] mb-2">
                      About this Product
                    </h3>

                    {/* <p className="text-xs text-gray-600 leading-relaxed">
                    Material Polyester Blend
                    <span className="mx-1">•</span>
                    Colour Name Multicolour
                    <span className="mx-1">•</span>
                    Department Women
                  </p> */}
                  </div>

                  {/* Information + Features */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {/* Product Information */}
                    <div className="bg-gray-50 rounded-md p-3">
                      <h4 className="text-[16px] font-medium text-[#101828] mb-3">
                        Product Information
                      </h4>

                      <ul className="space-y-2">
                        <li className="flex justify-between text-[11px]">
                          <span className="text-[#6A7282] text-[14px]">
                            Category
                          </span>

                          <span className="text-[#101828] font-medium text-[14px]">
                            {category.name}
                          </span>
                        </li>

                        <li className="flex justify-between text-[11px]">
                          <span className="text-[#6A7282] text-[14px]">
                            Subcategory
                          </span>

                          <span className="text-[#101828] font-medium text-[14px]">
                            {subcategory[0].name}
                          </span>
                        </li>

                        <li className="flex justify-between text-[11px]">
                          <span className="text-[#6A7282] text-[14px]">
                            Brand
                          </span>

                          <span className="text-[#101828] font-medium text-[14px]">
                            {brand.name}
                          </span>
                        </li>

                        <li className="flex justify-between text-[11px]">
                          <span className="text-[#6A7282] text-[14px]">
                            Items Sold
                          </span>

                          <span className="text-[#101828] font-medium text-[14px]">
                            {sold}+ sold
                          </span>
                        </li>
                      </ul>
                    </div>

                    {/* Key Features */}
                    <div className="bg-gray-50 rounded-md p-3">
                      <h4 className="text-[18px] font-medium text-gray-900 mb-3">
                        Key Features
                      </h4>

                      <ul className="space-y-2">
                        {[
                          "Premium Quality Product",
                          "100% Authentic Guarantee",
                          "Fast & Secure Packaging",
                          "Quality Tested",
                        ].map((feature) => (
                          <li
                            key={feature}
                            className="flex items-center text-[14px] text-gray-600"
                          >
                            <Check className="w-3 h-3 text-main-color mr-2 shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </TabsContent>

              {/* ================= REVIEWS ================= */}
              <TabsContent value="reviews" className="mt-0 p-4">
                <div className="flex flex-col md:flex-row gap-8 items-start md:items-center">
                  <div className="text-center">
                    <div className="text-5xl font-bold text-gray-900 mb-2">
                      {ratingsAverage}
                    </div>
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
                      {Array.from({
                        length: 5 - Math.floor(ratingsAverage),
                      }).map((e, i) => (
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
                      ))}
                    </div>
                    <div className="text-sm text-gray-500 mt-2">
                      Based on {reviews.length} reviews
                    </div>
                  </div>


                  <div className="flex-1 w-full">
                    {ratingCounts.map((item) => (
                      <div
                        key={item.star}
                        className="flex items-center gap-3 mb-2"
                      >
                        <span className="text-sm text-gray-600 w-8">
                          {item.star} star
                        </span>

                        <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-yellow-400 rounded-full transition-all duration-300"
                            style={{ width: `${item.percentage}%` }}
                          />
                        </div>

                        <span className="text-sm text-gray-500 w-10">
                          {item.percentage}%
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </TabsContent>

              {/* ================= SHIPPING ================= */}
              <TabsContent value="shipping" className="mt-0 p-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Shipping Information */}
                  <div className="rounded-lg bg-green-50 p-7">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-10 h-10 rounded-full bg-green-600 flex items-center justify-center text-white shrink-0">
                        <Truck size={20} />
                      </div>

                      <h4 className="text-xl font-medium text-gray-900">
                        Shipping Information
                      </h4>
                    </div>

                    <ul className="space-y-4">
                      <li className="flex items-center gap-3 text-base text-gray-700">
                        <Check size={20} className="text-green-600 shrink-0" />
                        <span>Free shipping on orders over $50</span>
                      </li>

                      <li className="flex items-center gap-3 text-base text-gray-700">
                        <Check size={20} className="text-green-600 shrink-0" />
                        <span>Standard delivery: 3-5 business days</span>
                      </li>

                      <li className="flex items-center gap-3 text-base text-gray-700">
                        <Check size={20} className="text-green-600 shrink-0" />
                        <span>
                          Express delivery available (1-2 business days)
                        </span>
                      </li>

                      <li className="flex items-center gap-3 text-base text-gray-700">
                        <Check size={20} className="text-green-600 shrink-0" />
                        <span>Track your order in real-time</span>
                      </li>
                    </ul>
                  </div>

                  {/* Returns & Refunds */}
                  <div className="rounded-lg bg-green-50 p-7">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-10 h-10 rounded-full bg-green-600 flex items-center justify-center text-white shrink-0">
                        <RotateCcw size={20} />
                      </div>

                      <h4 className="text-xl font-medium text-gray-900">
                        Returns & Refunds
                      </h4>
                    </div>

                    <ul className="space-y-4">
                      <li className="flex items-center gap-3 text-base text-gray-700">
                        <Check size={20} className="text-green-600 shrink-0" />
                        <span>30-day hassle-free returns</span>
                      </li>

                      <li className="flex items-center gap-3 text-base text-gray-700">
                        <Check size={20} className="text-green-600 shrink-0" />
                        <span>Full refund or exchange available</span>
                      </li>

                      <li className="flex items-center gap-3 text-base text-gray-700">
                        <Check size={20} className="text-green-600 shrink-0" />
                        <span>Free return shipping on defective items</span>
                      </li>

                      <li className="flex items-center gap-3 text-base text-gray-700">
                        <Check size={20} className="text-green-600 shrink-0" />
                        <span>Easy online return process</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>
      <section className="py-10">
        <div className="container mx-auto px-4">

          <Carousel
            opts={{
              align: "start",
              slidesToScroll: 1,
            }}
            className="w-full"
          >

            {/* Header */}
            <div className="flex items-center justify-between mb-6">

              {/* Title */}
              <div className="py-8 flex items-center gap-3">
                <div className="h-8 w-1.5 bg-linear-to-b from-emerald-500 to-emerald-700 rounded-full" />

                <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
                  You May Also
                  <span className="text-emerald-600"> Like</span>
                </h2>
              </div>

              {/* Arrows */}
              <div className="flex items-center gap-2">
                <CarouselPrevious className="static translate-y-0 h-10 w-10 bg-[#F3F4F6] hover:bg-main-color/20 hover:text-main-color border-0" />
                <CarouselNext className="static translate-y-0 h-10 w-10 bg-[#F3F4F6] hover:bg-main-color/20 hover:text-main-color border-0" />
              </div>

            </div>

            {/* Products */}
            <CarouselContent className="-ml-4">
              {productCategorys.map((product) => (
                <CarouselItem
                  key={product._id}
                  className="pl-4 basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5"
                >
                  <ProductCard prod={product} />
                </CarouselItem>
              ))}
            </CarouselContent>

          </Carousel>

        </div>
      </section>
    </>
  )
}
