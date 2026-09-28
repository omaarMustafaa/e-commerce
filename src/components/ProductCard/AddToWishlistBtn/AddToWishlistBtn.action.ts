"use server"

import { getUserToken } from "@/lib/auth"
import { WishlistResponse } from "./AddToWishlistBtn.interface"

export async function addProductToUserWishlist(productId :string):Promise<WishlistResponse> {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/wishlist` ,{
            method : "POST",
            headers : {
                token : await getUserToken() as string,
                "content-type" : "application/json"
            },
            body : JSON.stringify({productId})
        })
        const data = await response.json()
        return data
}