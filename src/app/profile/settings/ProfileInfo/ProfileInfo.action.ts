"use server"

import { getUserToken } from "@/lib/auth";
import { ProfileDataType } from "./ProfileInfo.interface";

export async function updateUserProfileData(profileData: ProfileDataType) {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/users/updateMe/`, {
            method: "PUT",
            headers: {
                token : await getUserToken() as string,
                "Content-Type": "application/json",
            },
            body: JSON.stringify(profileData),
        });

        const data = await response.json();

        if (!response.ok) {
            return {
                success: false,
                message: data.message || data.errors?.param || "Failed to update profile data",
            };
        }

        return {
            success: true,
            message: data.message || "Update Profile Successful!",
        };
    } catch (error: any) {
        return {
            success: false,
            message: error.message || "Network error occurred",
        };
    }
}