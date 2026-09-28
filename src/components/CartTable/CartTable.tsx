import { CartResponse } from "@/app/cart/cart.interface";
import Link from "next/link";
import CartProduct from "./CartProduct/CartProduct";
import RemoveAllCart from "./CartProduct/RemoveAllCart/RemoveAllCart";

export default function CartTable({ cart }: { cart: CartResponse }) {
    const { numOfCartItems, cartId, data: { products, totalCartPrice } } = cart
    const freeShippingLimit = 500

const progress = Math.min(
  (totalCartPrice / freeShippingLimit) * 100,
  100
)

const remaining = Math.max(
  freeShippingLimit - totalCartPrice,
  0
)
    return (
        <>
            <div className="bg-gray-50 min-h-screen py-8">
                <div className="container mx-auto px-4">

                    <div className="mb-8">
                        <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
                            <Link href={'/'} className="hover:text-main-color transition">Home</Link>
                            <span>/</span>
                            <span className="text-gray-900 font-medium">Shopping Cart</span>
                        </div>
                        <div className="">
                            <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
                                <span className="bg-main-color text-white w-12 h-12 rounded-xl flex items-center justify-center">
                                    <svg data-prefix="fas" data-icon="cart-shopping" className="w-6 h-6" role="img" viewBox="0 0 640 512" aria-hidden="true"><path fill="currentColor" d="M24-16C10.7-16 0-5.3 0 8S10.7 32 24 32l45.3 0c3.9 0 7.2 2.8 7.9 6.6l52.1 286.3c6.2 34.2 36 59.1 70.8 59.1L456 384c13.3 0 24-10.7 24-24s-10.7-24-24-24l-255.9 0c-11.6 0-21.5-8.3-23.6-19.7l-5.1-28.3 303.6 0c30.8 0 57.2-21.9 62.9-52.2L568.9 69.9C572.6 50.2 557.5 32 537.4 32l-412.7 0-.4-2c-4.8-26.6-28-46-55.1-46L24-16zM208 512a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm224 0a48 48 0 1 0 0-96 48 48 0 1 0 0 96z"></path></svg>
                                </span>
                                Shopping Cart
                            </h1>
                            <p className="text-gray-500 mt-2">You have <span className="font-semibold text-main-color">{numOfCartItems} items</span> in your cart</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                        <div className="lg:col-span-2">
                            <div className="space-y-4">
                                {/* CartCPT */}
                                {products.map(e => <CartProduct key={e._id} prop={e} />)}
                            </div>

                            <div className="mt-6 pt-6 border-t border-gray-200 flex items-center justify-between">
                                <Link href={'/'} className="text-main-color hover:text-main-color-hover font-medium text-sm flex items-center gap-2">
                                    <span>
                                        ←
                                    </span>
                                    Continue Shopping
                                </Link>
                                <RemoveAllCart />
                            </div>

                        </div>


                        <div className="lg:col-span-1">
                            <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden sticky top-24 shadow-sm">

                                <div className="bg-linear-to-r from-main-color to-main-color-hover px-6 py-4">
                                    <h2 className="text-lg font-bold text-white flex items-center gap-2">
                                        <svg data-prefix="fas" data-icon="bag-shopping" className="w-3 h-3" role="img" viewBox="0 0 448 512" aria-hidden="true"><path fill="currentColor" d="M160 80c0-35.3 28.7-64 64-64s64 28.7 64 64l0 48-128 0 0-48zm-48 48l-64 0c-26.5 0-48 21.5-48 48L0 384c0 53 43 96 96 96l256 0c53 0 96-43 96-96l0-208c0-26.5-21.5-48-48-48l-64 0 0-48c0-61.9-50.1-112-112-112S112 18.1 112 80l0 48zm24 48a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm152 24a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z"></path></svg>
                                        Order Summary
                                    </h2>
                                    <p className="text-[#DCFCE7] text-sm mt-1">{numOfCartItems} items in your cart</p>
                                </div>

                                <div className="p-6 space-y-5">
                                    {totalCartPrice >= 500 ? 
                                    <div className="bg-linear-to-r from-green-50 to-emerald-50 rounded-xl p-4 flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                                            <svg data-prefix="fas" data-icon="truck" className="w-3 h-3 text-green-600" role="img" viewBox="0 0 576 512" aria-hidden="true"><path fill="currentColor" d="M0 96C0 60.7 28.7 32 64 32l288 0c35.3 0 64 28.7 64 64l0 32 50.7 0c17 0 33.3 6.7 45.3 18.7L557.3 192c12 12 18.7 28.3 18.7 45.3L576 384c0 35.3-28.7 64-64 64l-3.3 0c-10.4 36.9-44.4 64-84.7 64s-74.2-27.1-84.7-64l-102.6 0c-10.4 36.9-44.4 64-84.7 64s-74.2-27.1-84.7-64L64 448c-35.3 0-64-28.7-64-64L0 96zM512 288l0-50.7-45.3-45.3-50.7 0 0 96 96 0zM192 424a40 40 0 1 0 -80 0 40 40 0 1 0 80 0zm232 40a40 40 0 1 0 0-80 40 40 0 1 0 0 80z"></path></svg>
                                        </div>
                                        <div className="">
                                            <p className="font-semibold text-green-700">
                                                Free Shipping!
                                            </p>
                                            <p className="text-sm text-green-600">
                                                You qualify for free delivery
                                            </p>
                                        </div>
                                    </div> :
                                    
                                    <div className="bg-linear-to-r from-orange-50 to-amber-50 rounded-xl p-4">
                                        <div className="flex items-center gap-2 mb-2">
                                            <svg data-prefix="fas" data-icon="truck" className="w-3 h-3 text-orange-500" role="img" viewBox="0 0 576 512" aria-hidden="true"><path fill="currentColor" d="M0 96C0 60.7 28.7 32 64 32l288 0c35.3 0 64 28.7 64 64l0 32 50.7 0c17 0 33.3 6.7 45.3 18.7L557.3 192c12 12 18.7 28.3 18.7 45.3L576 384c0 35.3-28.7 64-64 64l-3.3 0c-10.4 36.9-44.4 64-84.7 64s-74.2-27.1-84.7-64l-102.6 0c-10.4 36.9-44.4 64-84.7 64s-74.2-27.1-84.7-64L64 448c-35.3 0-64-28.7-64-64L0 96zM512 288l0-50.7-45.3-45.3-50.7 0 0 96 96 0zM192 424a40 40 0 1 0 -80 0 40 40 0 1 0 80 0zm232 40a40 40 0 1 0 0-80 40 40 0 1 0 0 80z"></path></svg>
                                            <span className="text-sm font-medium text-gray-700">Add {remaining}  EGP for free shipping</span>
                                        </div>
                                        <div className="h-2 bg-orange-100 rounded-full overflow-hidden">
                                            <div className="h-full bg-linear-to-r from-orange-400 to-amber-400 rounded-full transition-all duration-500" style={{ width: `${progress}%` }}></div>
                                        </div>
                                    </div>
                                }

                                    <div className="space-y-3">
                                        <div className="flex justify-between text-gray-600">
                                            <span>Subtotal</span>
                                            <span className="font-medium text-gray-900">{totalCartPrice} EGP</span>
                                        </div>
                                        <div className="flex justify-between text-gray-600">
                                            <span>Shipping</span>
                                            {totalCartPrice >= 500 ?
                                            <span className="font-medium text-green-600">FREE</span> :
                                            <span className="font-medium text-gray-900">50 EGP</span>
                                            }
                                        </div>
                                        <div className="border-t border-dashed border-gray-200 pt-3 mt-3">
                                            <div className="flex justify-between items-baseline">
                                                <span className="text-gray-900 font-semibold">Total</span>
                                                <div className="text-right">
                                                    <span className="text-2xl font-bold text-gray-900">{totalCartPrice >= 500 ? totalCartPrice : totalCartPrice + 50}</span>
                                                    <span className="text-sm text-gray-500 ml-1">EGP</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <button className="w-full flex items-center justify-center gap-2 py-3 border border-dashed border-gray-300 rounded-xl text-gray-600 hover:border-main-color hover:text-main-color hover:bg-main-color/10 transition-all">
                                        <svg data-prefix="fas" data-icon="tag" className="w-4 h-4" role="img" viewBox="0 0 512 512" aria-hidden="true"><path fill="currentColor" d="M32.5 96l0 149.5c0 17 6.7 33.3 18.7 45.3l192 192c25 25 65.5 25 90.5 0L483.2 333.3c25-25 25-65.5 0-90.5l-192-192C279.2 38.7 263 32 246 32L96.5 32c-35.3 0-64 28.7-64 64zm112 16a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"></path></svg>
                                        <span className="text-sm font-medium">Apply Promo Code</span>
                                    </button>

                                    <Link href={`/checkout/${cartId}`} className="w-full bg-linear-to-r from-main-color to-main-color-hover text-white py-4 px-6 rounded-xl font-semibold hover:from-main-color hover:to-main-color-hover transition-all flex items-center justify-center gap-3 shadow-lg shadow-main-color/20 active:scale-[0.98]">
                                        <svg data-prefix="fas" data-icon="lock" className="w-4 h-4" role="img" viewBox="0 0 384 512" aria-hidden="true"><path fill="currentColor" d="M128 96l0 64 128 0 0-64c0-35.3-28.7-64-64-64s-64 28.7-64 64zM64 160l0-64C64 25.3 121.3-32 192-32S320 25.3 320 96l0 64c35.3 0 64 28.7 64 64l0 224c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 224c0-35.3 28.7-64 64-64z"></path></svg>
                                        <span>Secure Checkout</span>
                                    </Link>

                                    <div className="flex items-center justify-center gap-4 py-2">
                                        <div className="flex items-center gap-1.5 text-xs text-gray-500">
                                            <svg data-prefix="fas" data-icon="shield-halved" className="w-3 h-3 text-green-500" role="img" viewBox="0 0 512 512" aria-hidden="true"><path fill="currentColor" d="M256 0c4.6 0 9.2 1 13.4 2.9L457.8 82.8c22 9.3 38.4 31 38.3 57.2-.5 99.2-41.3 280.7-213.6 363.2-16.7 8-36.1 8-52.8 0-172.4-82.5-213.1-264-213.6-363.2-.1-26.2 16.3-47.9 38.3-57.2L242.7 2.9C246.9 1 251.4 0 256 0zm0 66.8l0 378.1c138-66.8 175.1-214.8 176-303.4l-176-74.6 0 0z"></path></svg>
                                            <span>Secure Payment</span>
                                        </div>
                                        <div className="w-px h-4 bg-gray-200"></div>
                                        <div className="flex items-center gap-1.5 text-xs text-gray-500">
                                            <svg data-prefix="fas" data-icon="truck" className="w-3 h-3 text-blue-500" role="img" viewBox="0 0 576 512" aria-hidden="true"><path fill="currentColor" d="M0 96C0 60.7 28.7 32 64 32l288 0c35.3 0 64 28.7 64 64l0 32 50.7 0c17 0 33.3 6.7 45.3 18.7L557.3 192c12 12 18.7 28.3 18.7 45.3L576 384c0 35.3-28.7 64-64 64l-3.3 0c-10.4 36.9-44.4 64-84.7 64s-74.2-27.1-84.7-64l-102.6 0c-10.4 36.9-44.4 64-84.7 64s-74.2-27.1-84.7-64L64 448c-35.3 0-64-28.7-64-64L0 96zM512 288l0-50.7-45.3-45.3-50.7 0 0 96 96 0zM192 424a40 40 0 1 0 -80 0 40 40 0 1 0 80 0zm232 40a40 40 0 1 0 0-80 40 40 0 1 0 0 80z"></path></svg>
                                            <span>Fast Delivery</span>
                                        </div>
                                    </div>

                                    <Link href={'/'} className="block text-center text-main-color hover:text-main-color-hover text-sm font-medium py-2">← Continue Shopping</Link>

                                </div>

                            </div>
                        </div>

                    </div>


                </div>
            </div>
        </>
    )
}
