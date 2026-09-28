import { brandResponse } from "./brandCard.interface"


export async function getAllBrands(): Promise<brandResponse> {
    try {
        const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://ecommerce.routemisr.com"
        const response = await fetch(`${baseUrl}/api/v1/brands`)
        const data = await response.json()
        return data
    } catch {
        return { results: 0, metadata: {} as any, data: [] }
    }
}