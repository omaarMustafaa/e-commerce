"use server"
import { getUserToken } from "@/lib/auth";
import {  CartResponse } from "./cart.interface";
import { UpdateCartResponse } from "@/components/CartTable/CartProduct/UpdateCartCount/updateCart.interface";


export async function getLoggedUserCart():Promise<CartResponse>{
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/cart` ,{
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

export async function removeProductFromCart(productId : string){
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/v2/cart/${productId}` ,{
        method : "DELETE" ,
        headers : {
            token : await getUserToken() as string,
            "content-type" : "application/json"
        }
    })

    const data = await response.json()
    return data
}

export async function removeAllFromCart(){
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/v2/cart` ,{
        method : "DELETE" ,
        headers : {
            token : await getUserToken() as string,
            "content-type" : "application/json"
        }
    })
    
    const data = await response.json()
    return data
    
}

export async function updateCartProductQuantity (count :number ,productId : string ):Promise<UpdateCartResponse>{
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/v2/cart/${productId}` ,{
        method : "PUT" ,
        headers : {
            token : await getUserToken() as string,
            "content-type" : "application/json"
        },
        body : JSON.stringify({count : count})
    })
    
    const data = await response.json()
    return data
} 