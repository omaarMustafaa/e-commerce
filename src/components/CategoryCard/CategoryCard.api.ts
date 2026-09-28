import {  CategoriesResponse} from "./CategoryCard.interface"

export async function getAllGategories(): Promise<CategoriesResponse> {
    try {
        const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://ecommerce.routemisr.com"
        const response = await fetch(`${baseUrl}/api/v1/categories`)
        const data = await response.json()
        return data
    } catch {
        return { results: 0, metadata: {} as any, data: [] }
    }
}