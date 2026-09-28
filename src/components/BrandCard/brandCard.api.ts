import { brandResponse } from "./brandCard.interface"


export async function getAllBrands(): Promise<brandResponse> {
        try{
            const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/brands`)
            const data = await response.json()
            return data
        }catch{
            throw new Error("feald to featch data")
        }
    }