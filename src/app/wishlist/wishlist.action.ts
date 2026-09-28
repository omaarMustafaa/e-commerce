
"use server"

import { getUserToken } from "@/lib/auth"
import { WishlistResponse } from "./wishlist.interface"

export async function getLoggedUserWishlist():Promise<WishlistResponse>{
    try {
        const token = await getUserToken()
        if (!token) {
            return { status: "fail", message: "No token", count: 0, data: [] } as any
        }
        const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/wishlist` ,{
            method : "GET" ,
            headers : {
                token : token as string,
                "content-type" : "application/json"
            },
            cache: "no-store",
        })

        const data = await response.json()
        return data
    } catch (error) {
        return { status: "error", message: "Failed to fetch wishlist", count: 0, data: [] } as any
    }
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

