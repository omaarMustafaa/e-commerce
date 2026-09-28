"use server"
import { ChangePasswordResponse, ChangePasswordType } from "./changePassword.interface";
import { getUserToken } from '@/lib/auth';

 

export async function updatePassword(data:ChangePasswordType){
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/users/changeMyPassword`,{
        method : "PUT",
        headers : {
            token :  await getUserToken() as string, 
            "content-type" : "application/json"
        },
        body : JSON.stringify(data)
    })

    const responseData : ChangePasswordResponse = await response.json()
    return responseData
}