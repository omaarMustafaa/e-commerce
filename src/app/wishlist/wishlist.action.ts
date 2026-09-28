
"use server"

import { getUserToken } from "@/lib/auth"
import { WishlistResponse } from "./wishlist.interface"

export async function getLoggedUserWishlist():Promise<WishlistResponse>{
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/wishlist` ,{
        method : "GET" ,
        headers : {
            token : await getUserToken() as string,
            "content-type" : "application/json"
        },
        cache: "no-store",
    })

    const data = await response.json()
    return data
}
export async function removeProductFromWishlist(id :string){
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/wishlist/${id}` ,{
        method : "DELETE" ,
        headers : {
            token : await getUserToken() as string,
            "content-type" : "application/json"
        }
    })

    const data = await response.json()
    return data
}

