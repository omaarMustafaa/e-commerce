"use server";

import { ResetPasswordResponse, ResetPasswordType } from "./ResetPassword.interface";


export async function ResetPassword(DataPassword :ResetPasswordType ,email: string){
    const newPassword = DataPassword.newPassword
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/auth/resetPassword` ,{
            method : "PUT" ,
            headers : {
                "content-type" : "application/json"
            },
            body: JSON.stringify({email , newPassword}),
        })
        const data : ResetPasswordResponse = await response.json() 
        console.log('response' , data)
        return data
}