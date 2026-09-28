
"use client"

import { removeAllFromCart, removeProductFromCart } from "@/app/cart/cart.action"
import {
    AlertDialog,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogTitle,
} from "@/components/ui/alert-dialog"
import { useRouter } from "next/navigation"
import { useState } from "react"
import toast from "react-hot-toast"

export default function RemoveAllCart() {
    const router = useRouter()

    const [open, setOpen] = useState(false)
    const [loading, setLoading] = useState(false)

    async function deleteAllCart() {

        try {
            setLoading(true)
            const response = await removeAllFromCart()

            if (response.status === "success") {
                toast.success("Product removed from cart")
                setOpen(false)
                router.refresh()
            } else {
                toast.error("Failed to remove product")
            }

        } catch (error) {
            toast.error(
                error instanceof Error
                    ? error.message
                    : "Something wrong"
            )
        } finally {
            setLoading(false)
        }
    }

    return (
        <>
            <button className="group/deleteItems flex items-center gap-2 text-sm text-gray-400 hover:text-red-500 transition-colors disabled:opacity-50 font-medium" type="button"
                onClick={() => setOpen(true)}
            >
                <svg data-prefix="fas" data-icon="trash" className="w-3 h-3 text-xs group-hover/deleteItems:scale-110 transition-transform" role="img" viewBox="0 0 448 512" aria-hidden="true"><path fill="currentColor" d="M136.7 5.9L128 32 32 32C14.3 32 0 46.3 0 64S14.3 96 32 96l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0-8.7-26.1C306.9-7.2 294.7-16 280.9-16L167.1-16c-13.8 0-26 8.8-30.4 21.9zM416 144L32 144 53.1 467.1C54.7 492.4 75.7 512 101 512L347 512c25.3 0 46.3-19.6 47.9-44.9L416 144z"></path></svg>
                <span>Clear all items</span>
            </button>
            <AlertDialog open={open} onOpenChange={setOpen}>
                <AlertDialogContent className="max-w-md rounded-2xl p-8 text-center">

                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-red-100 text-red-500">
                        <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
                        </svg>
                    </div>

                    {/* Title */}
                    <AlertDialogTitle className="text-xl font-bold text-gray-900 mb-2">
                        Clear Your Cart?
                    </AlertDialogTitle>

                    {/* Description */}
                    <AlertDialogDescription className="text-gray-500 text-sm">
                        All items will be removed from your cart. This action cannot be undone.
                    </AlertDialogDescription>

                    {/* Buttons */}
                    <div className="mt-2 flex justify-center gap-4">

                        {/* Cancel */}
                        <button
                            type="button"
                            disabled={loading}
                            onClick={() => setOpen(false)}
                            className="h-12 min-w-30 rounded-xl bg-gray-100 px-6 font-semibold text-gray-700 transition-colors hover:bg-gray-200 disabled:opacity-50"
                        >
                            Keep Shopping
                        </button>

                        {/* Remove */}
                        <button
                            type="button"
                            disabled={loading}
                            onClick={deleteAllCart}
                            className="h-12 min-w-30 rounded-xl bg-red-500 px-6 font-semibold text-white transition-colors hover:bg-red-600 disabled:cursor-not-allowed disabled:opacity-50 shadow-lg shadow-red-500/20"
                        >
                            {loading ? (
                                <div className="flex items-center justify-center gap-2">
                                    <svg
                                        className="h-5 w-5 animate-spin"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                    >
                                        <circle
                                            cx="12"
                                            cy="12"
                                            r="9"
                                            stroke="currentColor"
                                            strokeWidth="3"
                                            className="opacity-25"
                                        />
                                        <path
                                            d="M21 12a9 9 0 0 1-9 9"
                                            stroke="currentColor"
                                            strokeWidth="3"
                                            strokeLinecap="round"
                                        />
                                    </svg>
                                </div>
                            ) : (
                                "Yes, Clear All"
                            )}
                        </button>

                    </div>

                </AlertDialogContent>
            </AlertDialog>
        </>
    )
}