
"use client"

import { removeProductFromCart } from "@/app/cart/cart.action"
import {
    AlertDialog,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogTitle,
} from "@/components/ui/alert-dialog"
import { useRouter } from "next/navigation"
import { useState } from "react"
import toast from "react-hot-toast"

export default function RemoveItemFromCart({
    id,
    productName,
}: {
    id: string
    productName: string
}) {
    const router = useRouter()

    const [open, setOpen] = useState(false)
    const [loading, setLoading] = useState(false)

    async function deleteFromCart() {
        try {
            setLoading(true)

            const response = await removeProductFromCart(id)

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
            <button
                type="button"
                onClick={() => setOpen(true)}
                className="h-10 w-10 rounded-xl border border-red-200 bg-red-50 text-red-500 hover:bg-red-500 hover:text-white hover:border-red-500 flex items-center justify-center transition-all duration-200"
            >
                <svg
                    className="w-3 h-3"
                    viewBox="0 0 448 512"
                    aria-hidden="true"
                >
                    <path
                        fill="currentColor"
                        d="M136.7 5.9L128 32 32 32C14.3 32 0 46.3 0 64S14.3 96 32 96l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0-8.7-26.1C306.9-7.2 294.7-16 280.9-16L167.1-16c-13.8 0-26 8.8-30.4 21.9zM416 144L32 144 53.1 467.1C54.7 492.4 75.7 512 101 512L347 512c25.3 0 46.3-19.6 47.9-44.9L416 144z"
                    />
                </svg>
            </button>

            <AlertDialog open={open} onOpenChange={setOpen}>
                <AlertDialogContent className="max-w-md rounded-2xl p-8 text-center">

                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-red-100 text-red-500">
                        <svg
                            className="h-5 w-5"
                            viewBox="0 0 448 512"
                            aria-hidden="true"
                        >
                            <path
                                fill="currentColor"
                                d="M136.7 5.9L128 32 32 32C14.3 32 0 46.3 0 64S14.3 96 32 96l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0-8.7-26.1C306.9-7.2 294.7-16 280.9-16L167.1-16c-13.8 0-26 8.8-30.4 21.9zM416 144L32 144 53.1 467.1C54.7 492.4 75.7 512 101 512L347 512c25.3 0 46.3-19.6 47.9-44.9L416 144z"
                            />
                        </svg>
                    </div>

                    {/* Title */}
                    <AlertDialogTitle className="text-xl font-bold text-gray-900 mb-2">
                        Remove Item?
                    </AlertDialogTitle>

                    {/* Description */}
                    <AlertDialogDescription className="text-gray-500 text-sm">
                        Remove
                        <span className="font-semibold text-gray-700">
                            {productName}
                        </span>
                        from your cart?
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
                            Cancel
                        </button>

                        {/* Remove */}
                        <button
                            type="button"
                            disabled={loading}
                            onClick={deleteFromCart}
                            className="h-12 min-w-30 rounded-xl bg-red-500 px-6 font-semibold text-white transition-colors hover:bg-red-600 disabled:cursor-not-allowed disabled:opacity-50"
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
                                "Remove"
                            )}
                        </button>

                    </div>

                </AlertDialogContent>
            </AlertDialog>
        </>
    )
}