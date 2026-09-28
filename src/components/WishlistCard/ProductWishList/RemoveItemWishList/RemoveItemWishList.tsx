"use client"

import { removeProductFromWishlist } from "@/app/wishlist/wishlist.action"
import { useRouter } from "next/navigation"
import toast from "react-hot-toast"

export default function RemoveItemWishList({id} :{id :string}) {
    const router = useRouter()
    async function handelRemoveProduct() {
        try {
            const response = await removeProductFromWishlist(id)
            if(response.status == 'success'){
                toast.success(response.message)
                router.refresh()
            }
        } catch (error) {
            toast.error('field to remove product in wishlist')
        }
    }

  return (
    <>
        <button onClick={_ => handelRemoveProduct()} type="button" className="w-10 h-10 rounded-lg border border-gray-200 flex items-center justify-center text-gray-400 hover:text-red-500 hover:border-red-200 hover:bg-red-50 transition-all disabled:opacity-50 cursor-pointer">
                    <svg data-prefix="fas" data-icon="trash" className="w-4 h-4 text-sm" role="img" viewBox="0 0 448 512" aria-hidden="true"><path fill="currentColor" d="M136.7 5.9L128 32 32 32C14.3 32 0 46.3 0 64S14.3 96 32 96l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0-8.7-26.1C306.9-7.2 294.7-16 280.9-16L167.1-16c-13.8 0-26 8.8-30.4 21.9zM416 144L32 144 53.1 467.1C54.7 492.4 75.7 512 101 512L347 512c25.3 0 46.3-19.6 47.9-44.9L416 144z"></path></svg>
                  </button>
    </>
  )
}
