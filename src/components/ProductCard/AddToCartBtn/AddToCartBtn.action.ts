"use server"

import { getUserToken } from "@/lib/auth"
import { AddToCartResponse } from "./AddToCart.interface"


export async function addProductToUserCart(productId:string): Promise<AddToCartResponse>{
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/v2/cart` ,{
        method : "POST",
        headers : {
            token : await getUserToken() as string,
            "content-type" : "application/json"
        },
        body : JSON.stringify({productId})
    })

    const {message , numOfCartItems , cartId , data: {products , totalCartPrice}} = await response.json()
    return {message , numOfCartItems , cartId , products , totalCartPrice}
}