
"use client"

import { updateCartProductQuantity } from "@/app/cart/cart.action"
import { useRouter } from "next/navigation"
import { useState } from "react"

export default function UpdateCartCount({
    count,
    productId,
}: {
    count: number
    productId: string
}) {
    const [quantity, setQuantity] = useState(count)
    const [loading, setLoading] = useState(false)
    const router = useRouter()

    async function handleUpdateCartCount(newQuantity: number) {
        if (newQuantity < 1) return

        try {
            setLoading(true)
            const response = await updateCartProductQuantity(
                newQuantity,
                productId
            )

            router.refresh()
            const updatedProduct = response.data.products.find(
                (item) => item.product._id === productId
            )

            if (updatedProduct) {
                setQuantity(updatedProduct.count)
            }

        } catch (error) {
            throw new Error('Error')
        } finally {
            setLoading(false)
        }
    }

    return (
        <>
            {loading &&
                <div className="absolute inset-0 bg-white/60 backdrop-blur-[2px] z-10 rounded-2xl flex items-center justify-center">
                    <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-lg">
                        <div className="w-4 h-4 border-2 border-main-color border-t-transparent rounded-full animate-spin"></div>
                        <span className="text-sm font-medium text-gray-600">
                            loading....
                        </span>
                    </div>
                </div>
            }
            <div className="flex items-center">
                <div className="flex items-center bg-gray-50 rounded-xl p-1 border border-gray-200">
                    {/* - */}
                    <button
                        onClick={() =>
                            handleUpdateCartCount(quantity - 1)
                        }
                        disabled={loading || quantity <= 1}
                        type="button"
                        className="h-8 w-8 rounded-lg bg-white shadow-sm flex items-center justify-center text-gray-500 hover:text-gray-700 hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed disabled:shadow-none transition-all cursor-pointer"
                    >
                        <svg
                            data-prefix="fas"
                            data-icon="minus"
                            className="w-3 h-3"
                            role="img"
                            viewBox="0 0 448 512"
                            aria-hidden="true"
                        >
                            <path
                                fill="currentColor"
                                d="M0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32z"
                            />
                        </svg>
                    </button>

                    <span className="w-12 text-center font-bold text-gray-900">
                        {quantity}
                    </span>

                    {/* + */}
                    <button
                        onClick={() =>
                            handleUpdateCartCount(quantity + 1)
                        }
                        disabled={loading}
                        type="button"
                        className="h-8 w-8 rounded-lg bg-main-color shadow-sm shadow-main-color/30 flex items-center justify-center text-white hover:bg-main-color-hover disabled:opacity-40 disabled:cursor-not-allowed transition-all cursor-pointer"
                    >
                        <svg
                            data-prefix="fas"
                            data-icon="plus"
                            className="w-3 h-3"
                            role="img"
                            viewBox="0 0 448 512"
                            aria-hidden="true"
                        >
                            <path
                                fill="currentColor"
                                d="M256 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 160-160 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l160 0 0 160c0 17.7 14.3 32 32 32s32-14.3 32-32l0-160 160 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-160 0 0-160z"
                            />
                        </svg>
                    </button>
                </div>
            </div>
        </>
    )
}