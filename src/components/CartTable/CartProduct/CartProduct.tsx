import type { CartProduct } from "@/app/cart/cart.interface";
import Image from "next/image";
import Link from "next/link";
import RemoveItemFromCart from "./RemoveItemFromCart/RemoveItemFromCart";
import UpdateCartCount from "./UpdateCartCount/UpdateCartCount";

export default function CartProduct({prop} : {prop :CartProduct}) {
    const {_id , product : {_id:id , imageCover ,title ,category} , price ,count} = prop
    return (
        <>
            <div className="relative bg-white rounded-2xl shadow-sm hover:shadow-md border border-gray-100 transition-all duration-300 " key={_id}>
                <div className="p-4 sm:p-5">
                    <div className="flex gap-4 sm:gap-6">
                        <Link href={`/products/${id}`} className="relative shrink-0 group/img">
                            <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-xl bg-linear-to-br from-gray-50 via-white to-gray-100 p-3 border border-gray-100 overflow-hidden relative">
                                <Image loading="lazy" sizes="128px" className="w-full h-full object-contain transition-transform duration-300 group-hover/img:scale-110" fill src={imageCover} alt={title} />
                            </div>
                            <div className="absolute -bottom-1 -right-1 bg-green-500 text-white text-[10px] font-semibold px-2 py-0.5 rounded-full flex items-center gap-1">
                                <svg data-prefix="fas" data-icon="check" className="w-3 h-3" role="img" viewBox="0 0 448 512" aria-hidden="true"><path fill="currentColor" d="M434.8 70.1c14.3 10.4 17.5 30.4 7.1 44.7l-256 352c-5.5 7.6-14 12.3-23.4 13.1s-18.5-2.7-25.1-9.3l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l101.5 101.5 234-321.7c10.4-14.3 30.4-17.5 44.7-7.1z"></path></svg>
                                In Stock
                            </div>
                        </Link>

                        <div className="flex-1 min-w-0 flex flex-col">

                            <div className="mb-3">
                                <Link href={`/products/${id}`} className="group/title">
                                    <h3 className="font-semibold text-gray-900 group-hover/title:text-main-color transition-colors leading-relaxed text-base sm:text-lg">
                                        {title}
                                    </h3>
                                </Link>
                                <div className="flex items-center gap-2 mt-2">
                                    <span className="inline-block px-2.5 py-1 bg-linear-to-r from-primary-50 to-emerald-50 text-main-color text-xs font-medium rounded-full">{category.name}</span>
                                    <span className="text-xs text-gray-500">•</span>
                                    <span className="text-xs text-gray-500">SKU: 5CA067</span>
                                </div>
                            </div>

                            <div className="mb-4">
                                <div className="flex items-baseline gap-2">
                                    <span className="text-main-color font-bold text-lg">{price} EGP</span>
                                    <span className="text-xs text-gray-400">per unit</span>
                                </div>
                            </div>

                            <div className="mt-auto flex flex-wrap items-center justify-between gap-4">
                                {/* + & - */}
                                <UpdateCartCount productId={id} count={count}/>

                                <div className="flex items-center gap-4">
                                    <div className="text-right">
                                        <p className="text-xs text-gray-400 mb-0.5">Total</p>
                                        <p className="text-xl font-bold text-gray-900">
                                            {count * price}
                                            <span className="text-sm font-medium text-gray-400">EGP</span>
                                        </p>
                                    </div>
                                    <RemoveItemFromCart productName={title} id={id}/>
                                </div>

                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}
