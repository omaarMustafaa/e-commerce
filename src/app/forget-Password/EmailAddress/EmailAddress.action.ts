"use server";

import { EmailAddressType, EmailResponse } from "./EmailAddress.interface";

export async function sendEmail(email :EmailAddressType){
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/auth/forgotPasswords` ,{
            method : "POST" ,
            headers : {
                "content-type" : "application/json"
            },
            body: JSON.stringify(email),
        })
        const data : EmailResponse = await response.json() 
        return data
}