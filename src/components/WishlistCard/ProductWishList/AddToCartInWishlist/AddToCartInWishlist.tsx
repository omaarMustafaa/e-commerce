
'use client'

import { addProductToUserCart } from "@/components/ProductCard/AddToCartBtn/AddToCartBtn.action"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useState } from "react"
import toast from "react-hot-toast"

export default function AddToCartInWishlist({
    productId,
    initialIsInCart = false,
}: {
    productId: string;
    initialIsInCart?: boolean;
}) {
    const [isAdded, setIsAdded] = useState(initialIsInCart);
    const router = useRouter();

    async function handleAddToCartInWishlist() {
        try {
            const { message } = await addProductToUserCart(productId);
            setIsAdded(true);
            toast.success(message);
            router.refresh();
        } catch (error) {
            setIsAdded(false);
            toast.error("Can't Add Item In Cart Now");
        }
    }

    return (
        <>
            {isAdded ? 
                <Link href={'/cart'} className="flex-1 md:flex-none inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium bg-gray-100 text-gray-700 hover:bg-gray-200 transition-all">
                    <svg data-prefix="fas" data-icon="check" className="w-4 h-4 text-xs text-green-600" role="img" viewBox="0 0 448 512" aria-hidden="true">
                        <path fill="currentColor" d="M434.8 70.1c14.3 10.4 17.5 30.4 7.1 44.7l-256 352c-5.5 7.6-14 12.3-23.4 13.1s-18.5-2.7-25.1-9.3l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l101.5 101.5 234-321.7c10.4-14.3 30.4-17.5 44.7-7.1z"></path>
                    </svg>
                    <span className="md:hidden lg:inline">View Cart</span>
                </Link>
             : 
                <button onClick={handleAddToCartInWishlist} type="button" className="flex-1 md:flex-none inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium transition-all bg-main-color text-white hover:bg-main-color-hover">
                    <svg data-prefix="fas" data-icon="cart-shopping" className="w-4 h-4 text-xs" role="img" viewBox="0 0 640 512" aria-hidden="true">
                        <path fill="currentColor" d="M24-16C10.7-16 0-5.3 0 8S10.7 32 24 32l45.3 0c3.9 0 7.2 2.8 7.9 6.6l52.1 286.3c6.2 34.2 36 59.1 70.8 59.1L456 384c13.3 0 24-10.7 24-24s-10.7-24-24-24l-255.9 0c-11.6 0-21.5-8.3-23.6-19.7l-5.1-28.3 303.6 0c30.8 0 57.2-21.9 62.9-52.2L568.9 69.9C572.6 50.2 557.5 32 537.4 32l-412.7 0-.4-2c-4.8-26.6-28-46-55.1-46L24-16zM208 512a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm224 0a48 48 0 1 0 0-96 48 48 0 1 0 0 96z"></path>
                    </svg>
                    <span className="md:hidden lg:inline">Add to Cart</span>
                </button>
            }
        </>
    );
}