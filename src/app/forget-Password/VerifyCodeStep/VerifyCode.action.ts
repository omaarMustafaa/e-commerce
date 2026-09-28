"use server";

import { VerifyCodeResponse, VerifyCodeType } from "./VerifyCode.interface";


export async function sendCode(resetCode :VerifyCodeType){
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/auth/verifyResetCode` ,{
            method : "POST" ,
            headers : {
                "content-type" : "application/json"
            },
            body: JSON.stringify(resetCode),
        })
        const data : VerifyCodeResponse = await response.json() 
        return data
}