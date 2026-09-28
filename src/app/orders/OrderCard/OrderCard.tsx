
"use client"

import Image from 'next/image'
import { useState } from 'react'
import { UserOrder } from './../orders.interface';

export default function OrderCard({ order }: { order: UserOrder }) {
    const [openDetails, setOpenDetails] = useState(false)

    const { cartItems, shippingAddress } = order

    const totalItems = cartItems.reduce(
        (total, item) => total + item.count,
        0
    )

    const subtotal = cartItems.reduce(
        (total, item) => total + (item.price * item.count),
        0
    )

    const orderDate = new Date(order.createdAt).toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
    })

    return (
        <>
            <div className={`bg-white rounded-2xl border transition-all duration-300 overflow-hidden ${openDetails ? 'border-[#BBF7D0]' : 'border-gray-100 hover:border-gray-200'} shadow-sm hover:shadow-md`}>
                <div className="p-5 sm:p-6">
                    <div className="flex gap-5">

                        <div className="relative shrink-0">
                            <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl bg-linear-to-br from-gray-50 to-white border border-gray-100 p-2.5 overflow-hidden relative">
                                <Image
                                    fill
                                    alt={cartItems[0].product.title}
                                    src={cartItems[0].product.imageCover}
                                    className='w-full h-full object-contain'
                                    sizes="(max-width: 640px) 96px, 112px"
                                    loading='lazy'
                                />
                            </div>

                            {cartItems.length > 1 &&
                                <div className="absolute -top-2 -right-2 w-7 h-7 bg-gray-900 text-white text-xs font-bold rounded-full flex items-center justify-center shadow-lg">
                                    + {cartItems.length - 1}
                                </div>
                            }
                        </div>

                        <div className="flex-1 min-w-0">

                            <div className="flex items-start justify-between gap-3 mb-3">
                                <div className="">

                                    <div className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg mb-2 ${order.isDelivered ? 'bg-[#DCFCE7]' : 'bg-amber-100'}`}>

                                        {order.isDelivered ? <svg className='w-3 h-3' viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M0 1.5C0 0.672656 0.672656 0 1.5 0H8.25C9.07734 0 9.75 0.672656 9.75 1.5V2.25H10.9383C11.3367 2.25 11.7188 2.40703 12 2.68828L13.0617 3.75C13.343 4.03125 13.5 4.41328 13.5 4.81172V8.25C13.5 9.07734 12.8273 9.75 12 9.75H11.9227C11.6789 10.6148 10.882 11.25 9.9375 11.25C8.99297 11.25 8.19844 10.6148 7.95234 9.75H5.54766C5.30391 10.6148 4.50703 11.25 3.5625 11.25C2.61797 11.25 1.82344 10.6148 1.57734 9.75H1.5C0.672656 9.75 0 9.07734 0 8.25V1.5ZM12 6V4.81172L10.9383 3.75H9.75V6H12ZM4.5 9.1875C4.5 8.93886 4.40123 8.7004 4.22541 8.52459C4.0496 8.34877 3.81114 8.25 3.5625 8.25C3.31386 8.25 3.0754 8.34877 2.89959 8.52459C2.72377 8.7004 2.625 8.93886 2.625 9.1875C2.625 9.43614 2.72377 9.6746 2.89959 9.85041C3.0754 10.0262 3.31386 10.125 3.5625 10.125C3.81114 10.125 4.0496 10.0262 4.22541 9.85041C4.40123 9.6746 4.5 9.43614 4.5 9.1875ZM9.9375 10.125C10.1861 10.125 10.4246 10.0262 10.6004 9.85041C10.7762 9.6746 10.875 9.43614 10.875 9.1875C10.875 8.93886 10.7762 8.7004 10.6004 8.52459C10.4246 8.34877 10.1861 8.25 9.9375 8.25C9.68886 8.25 9.4504 8.34877 9.27459 8.52459C9.09877 8.7004 9 8.93886 9 9.1875C9 9.43614 9.09877 9.6746 9.27459 9.85041C9.4504 10.0262 9.68886 10.125 9.9375 10.125Z" fill="#155DFC" />
                                        </svg>
                                            : <svg data-prefix="fas" data-icon="clock" className='w-3 h-3 svg-inline--fa fa-clock text-xs text-amber-600' role="img" viewBox="0 0 512 512" aria-hidden="true"><path fill="currentColor" d="M256 0a256 256 0 1 1 0 512 256 256 0 1 1 0-512zM232 120l0 136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2 280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24z"></path></svg>}


                                        <span className={`text-xs font-semibold ${order.isDelivered ? 'text-[#155DFC]' : "text-amber-600"}`}>
                                            {order.isDelivered ? 'On the way' : 'Processing'}
                                        </span>
                                    </div>

                                    <h3 className="font-bold text-gray-900 text-lg flex items-center gap-2">
                                        <svg data-prefix="fas" data-icon="hashtag" className="w-3 h-3  svg-inline--fa fa-hashtag text-xs text-gray-400" role="img" viewBox="0 0 512 512" aria-hidden="true"><path fill="currentColor" d="M214.7 .7c17.3 3.7 28.3 20.7 24.6 38l-19.1 89.3 126.5 0 22-102.7C372.4 8 389.4-3 406.7 .7s28.3 20.7 24.6 38L412.2 128 480 128c17.7 0 32 14.3 32 32s-14.3 32-32 32l-81.6 0-27.4 128 67.8 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-81.6 0-22 102.7c-3.7 17.3-20.7 28.3-38 24.6s-28.3-20.7-24.6-38l19.1-89.3-126.5 0-22 102.7c-3.7 17.3-20.7 28.3-38 24.6s-28.3-20.7-24.6-38L99.8 384 32 384c-17.7 0-32-14.3-32-32s14.3-32 32-32l81.6 0 27.4-128-67.8 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l81.6 0 22-102.7C180.4 8 197.4-3 214.7 .7zM206.4 192l-27.4 128 126.5 0 27.4-128-126.5 0z"></path></svg>
                                        {""} {order.id}
                                    </h3>
                                </div>

                                <div className={`shrink-0 w-10 h-10 rounded-xl flex items-center justify-center  ${order.paymentMethodType == 'cash' ? 'bg-gray-100' : 'bg-[#F3E8FF]'}`}>
                                    {order.paymentMethodType == 'cash' ? <svg data-prefix="fas" data-icon="money-bill" className="w-4 h-4 svg-inline--fa fa-money-bill text-gray-600" role="img" viewBox="0 0 512 512" aria-hidden="true"><path fill="currentColor" d="M64 64C28.7 64 0 92.7 0 128L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-256c0-35.3-28.7-64-64-64L64 64zm192 96a96 96 0 1 1 0 192 96 96 0 1 1 0-192zm192 24c0 4.4-3.6 8.1-8 7.5-29-3.6-51.9-26.6-55.5-55.5-.5-4.4 3.1-8 7.5-8l48 0c4.4 0 8 3.6 8 8l0 48zM64 328c0-4.4 3.6-8.1 8-7.5 29 3.6 51.9 26.6 55.5 55.5 .5 4.4-3.1 8-7.5 8l-48 0c-4.4 0-8-3.6-8-8l0-48zm8-136.5c-4.4 .5-8-3.1-8-7.5l0-48c0-4.4 3.6-8 8-8l48 0c4.4 0 8.1 3.6 7.5 8-3.6 29-26.6 51.9-55.5 55.5zm368 129c4.4-.5 8 3.1 8 7.5l0 48c0 4.4-3.6 8-8 8l-48 0c-4.4 0-8.1 3.6-7.5-8 3.6-29 26.6-51.9-55.5-55.5z"></path></svg> : <svg className='w-4 h-4' viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0 2V3H16V2C16 0.896875 15.1031 0 14 0H2C0.896875 0 0 0.896875 0 2ZM0 4.5V10C0 11.1031 0.896875 12 2 12H14C15.1031 12 16 11.1031 16 10V4.5H0ZM2 9.25C2 8.83438 2.33437 8.5 2.75 8.5H4.25C4.66563 8.5 5 8.83438 5 9.25C5 9.66562 4.66563 10 4.25 10H2.75C2.33437 10 2 9.66562 2 9.25ZM6.5 9.25C6.5 8.83438 6.83437 8.5 7.25 8.5H9.25C9.66562 8.5 10 8.83438 10 9.25C10 9.66562 9.66562 10 9.25 10H7.25C6.83437 10 6.5 9.66562 6.5 9.25Z" fill="#9810FA" />
                                    </svg>
                                    }

                                </div>
                            </div>

                            <div className="flex flex-wrap items-center gap-3 text-sm text-gray-500 mb-4">
                                <span className="flex items-center gap-1.5">
                                    <svg data-prefix="fas" data-icon="calendar-days" className=" w-3 h-3 svg-inline--fa fa-calendar-days text-xs text-gray-400" role="img" viewBox="0 0 448 512" aria-hidden="true"><path fill="currentColor" d="M128 0c17.7 0 32 14.3 32 32l0 32 128 0 0-32c0-17.7 14.3-32 32-32s32 14.3 32 32l0 32 32 0c35.3 0 64 28.7 64 64l0 288c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 128C0 92.7 28.7 64 64 64l32 0 0-32c0-17.7 14.3-32 32-32zM64 240l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16zm128 0l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0zM64 368l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0 13.3 10.7 24 24 24l176 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-176 0z"></path></svg>
                                    {orderDate}
                                </span>

                                <span className="w-1 h-1 rounded-full bg-gray-300"></span>

                                <span className="flex items-center gap-1.5">
                                    <svg data-prefix="fas" data-icon="box" className="w-3 h-3 svg-inline--fa fa-box text-xs text-gray-400" role="img" viewBox="0 0 448 512" aria-hidden="true"><path fill="currentColor" d="M369.4 128l-34.3-48-222.1 0-34.3 48 290.7 0zM0 148.5c0-13.3 4.2-26.3 11.9-37.2L60.9 42.8C72.9 26 92.3 16 112.9 16l222.1 0c20.7 0 40.1 10 52.1 26.8l48.9 68.5c7.8 10.9 11.9 23.9 11.9 37.2L448 416c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 148.5z"></path></svg>
                                    {totalItems} items
                                </span>

                                <span className="w-1 h-1 rounded-full bg-gray-300"></span>

                                <span className="flex items-center gap-1.5">
                                    <svg data-prefix="fas" data-icon="location-dot" className="w-3 h-3 svg-inline--fa fa-location-dot text-xs text-gray-400" role="img" viewBox="0 0 384 512" aria-hidden="true"><path fill="currentColor" d="M0 188.6C0 84.4 86 0 192 0S384 84.4 384 188.6c0 119.3-120.2 262.3-170.4 316.8-11.8 12.8-31.5 12.8-43.3 0C120.2 450.9 0 307.9 0 188.6zM192 256a64 64 0 1 0 0-128 64 64 0 0 0 0 128z"></path></svg>
                                    {shippingAddress.city}
                                </span>
                            </div>

                            <div className='flex items-center justify-between gap-4'>
                                <div>
                                    <span className="text-2xl font-bold text-gray-900">
                                        {order.totalOrderPrice.toLocaleString()}
                                    </span>
                                    <span className="text-sm font-medium text-gray-400 ml-1">EGP</span>
                                </div>

                                <button
                                    className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all ${openDetails ? 'shadow-lg shadow-main-color/25 bg-main-color text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
                                    onClick={_ => setOpenDetails(!openDetails)}
                                >
                                    {openDetails ? <>
                                        Hide
                                        <svg data-prefix="fas" data-icon="chevron-down" className="w-3 h-3 svg-inline--fa fa-chevron-down text-xs transition-transform duration-300 rotate-180" role="img" viewBox="0 0 448 512" aria-hidden="true"><path fill="currentColor" d="M201.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 338.7 54.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"></path></svg>
                                    </> :
                                        <>
                                            Details
                                            <svg data-prefix="fas" data-icon="chevron-down" className="w-3 h-3 svg-inline--fa fa-chevron-down text-xs transition-transform duration-300 " role="img" viewBox="0 0 448 512" aria-hidden="true"><path fill="currentColor" d="M201.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5 12.5-32.8 12.5-45.3 0L224 338.7 54.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"></path></svg>
                                        </>
                                    }
                                </button>
                            </div>
                        </div>

                    </div>
                </div>


                {/* Hidden */}
                {openDetails && <div className='border-t border-gray-100 bg-gray-50/50'>

                    <div className="p-5 sm:p-6">
                        <h4 className="font-semibold text-gray-900 text-sm flex items-center gap-2 mb-4">
                            <div className="w-6 h-6 rounded-lg bg-main-color/15 flex items-center justify-center">
                                <svg data-prefix="fas" data-icon="receipt" className="w-2 h-2 svg-inline--fa fa-receipt text-xs text-main-color" role="img" viewBox="0 0 384 512" aria-hidden="true"><path fill="currentColor" d="M14 2.2C22.5-1.7 32.5-.3 39.6 5.8L80 40.4 120.4 5.8c9-7.7 22.3-7.7 31.2 0L192 40.4 232.4 5.8c9-7.7 22.2-7.7 31.2 0L304 40.4 344.4 5.8c7.1-6.1 17.1-7.5 25.6-3.6S384 14.6 384 24l0 464c0 9.4-5.5 17.9-14 21.8s-18.5 2.5-25.6-3.6l-40.4-34.6-40.4 34.6c-9 7.7-22.2 7.7-31.2 0l-40.4-34.6-40.4 34.6c-9 7.7-22.3 7.7-31.2 0L80 471.6 39.6 506.2c-7.1 6.1-17.1 7.5-25.6 3.6S0 497.4 0 488L0 24C0 14.6 5.5 6.1 14 2.2zM104 136c-13.3 0-24 10.7-24 24s10.7 24 24 24l176 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-176 0zM80 352c0 13.3 10.7 24 24 24l176 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-176 0z"></path></svg>
                            </div>
                            Order Items
                        </h4>

                        <div className="space-y-3">

                            {cartItems.map((item) => (
                                <div
                                    key={item._id}
                                    className="flex items-center gap-4 p-4 bg-white rounded-xl border border-gray-100"
                                >
                                    <div className="w-16 h-16 rounded-xl bg-gray-50 p-2 shrink-0 relative">
                                        <Image
                                            fill
                                            src={item.product.imageCover}
                                            alt={item.product.title}
                                            className="object-contain"
                                            sizes="(max-width: 640px) 96px, 112px"
                                        />
                                    </div>

                                    <div className="flex-1 min-w-0">
                                        <p className="font-medium text-gray-900 truncate">
                                            {item.product.title}
                                        </p>

                                        <p className="text-sm text-gray-500 mt-1">
                                            <span className="font-medium text-gray-700">
                                                {item.count}
                                            </span>
                                            {" × "}
                                            {item.price.toLocaleString()}
                                            {" EGP"}
                                        </p>
                                    </div>

                                    <div className="text-right shrink-0">
                                        <p className="text-lg font-bold text-gray-900">
                                            {(item.price * item.count).toLocaleString()}
                                        </p>
                                        <p className="text-xs text-gray-400">EGP</p>
                                    </div>
                                </div>
                            ))}

                        </div>
                    </div>


                    <div className="px-5 sm:px-6 pb-5 sm:pb-6 grid sm:grid-cols-2 gap-4">

                        <div className="p-4 bg-white rounded-xl border border-gray-100">
                            <h4 className="font-semibold text-gray-900 text-sm flex items-center gap-2 mb-3">
                                <div className="w-6 h-6 rounded-lg bg-blue-100 flex items-center justify-center">
                                    <svg data-prefix="fas" data-icon="location-dot" className="w-3 h-3 svg-inline--fa fa-location-dot text-xs text-blue-600" role="img" viewBox="0 0 384 512" aria-hidden="true"><path fill="currentColor" d="M0 188.6C0 84.4 86 0 192 0S384 84.4 384 188.6c0 119.3-120.2 262.3-170.4 316.8-11.8 12.8-31.5 12.8-43.3 0C120.2 450.9 0 307.9 0 188.6zM192 256a64 64 0 1 0 0-128 64 64 0 0 0 0 128z"></path></svg>
                                </div>
                                Delivery Address
                            </h4>

                            <div className="space-y-2">
                                <p className="font-medium text-gray-900">
                                    {shippingAddress.city}
                                </p>

                                <p className="text-sm text-gray-600 leading-relaxed">
                                    {shippingAddress.details}
                                </p>

                                <p className="text-sm text-gray-600 flex items-center gap-2 pt-1">
                                    <svg data-prefix="fas" data-icon="phone" className="w-3 h-3 svg-inline--fa fa-phone text-xs text-gray-400" role="img" viewBox="0 0 512 512" aria-hidden="true"><path fill="currentColor" d="M160.2 25C152.3 6.1 131.7-3.9 112.1 1.4l-5.5 1.5c-64.6 17.6-119.8 80.2-103.7 156.4 37.1 175 174.8 312.7 349.8 349.8 76.3 16.2 138.8-39.1 156.4-103.7l1.5-5.5c5.4-19.7-4.7-40.3-23.5-48.1l-97.3-40.5c-16.5-6.9-35.6-2.1-47 11.8l-38.6 47.2C233.9 335.4 177.3 277 144.8 205.3L189 169.3c13.9-11.3 18.6-30.4 11.8-47L160.2 25z"></path></svg>
                                    {shippingAddress.phone}
                                </p>
                            </div>
                        </div>


                        <div className="p-4 rounded-xl bg-amber-100 border border-amber-200">
                            <h4 className="font-semibold text-gray-900 text-sm flex items-center gap-2 mb-3">
                                <div className="w-6 h-6 rounded-lg bg-amber-500 flex items-center justify-center">
                                    <svg data-prefix="fas" data-icon="clock" className="w-3 h-3 svg-inline--fa fa-clock text-xs text-white" role="img" viewBox="0 0 512 512" aria-hidden="true"><path fill="currentColor" d="M256 0a256 256 0 1 1 0 512 256 256 0 1 1 0-512zM232 120l0 136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2 280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24z"></path></svg>
                                </div>
                                Order Summary
                            </h4>

                            <div className="space-y-2 text-sm">
                                <div className="flex justify-between text-gray-600">
                                    <span>Subtotal</span>
                                    <span className="font-medium">
                                        {subtotal.toLocaleString()} EGP
                                    </span>
                                </div>

                                <div className="flex justify-between text-gray-600">
                                    <span>Shipping</span>
                                    <span className='font-medium'>
                                        {order.shippingPrice === 0
                                            ? "Free"
                                            : `${order.shippingPrice.toLocaleString()} EGP`
                                        }
                                    </span>
                                </div>

                                <hr className='border-gray-200/50 my-2' />

                                <div className="flex justify-between pt-1">
                                    <span className='font-semibold text-gray-900'>
                                        Total
                                    </span>

                                    <span className="font-bold text-lg text-gray-900">
                                        {order.totalOrderPrice.toLocaleString()} EGP
                                    </span>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>}

            </div>
        </>
    )
}