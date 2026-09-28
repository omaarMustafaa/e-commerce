
"use server";

import { RegisterDataType } from "./register.interface";

export async function sendUserRegister(data: RegisterDataType) {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/auth/signup`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });

        const resData = await response.json();

        if (!response.ok) {
            return {
                success: false,
                message: resData.message || resData.errors?.param || "Failed to register account",
            };
        }

        return {
            success: true,
            message: resData.message || "Registration Successful!",
        };
    } catch (error: any) {
        return {
            success: false,
            message: error.message || "Network error occurred",
        };
    }
}