import {  CategoriesResponse} from "./CategoryCard.interface"

export async function getAllGategories(): Promise<CategoriesResponse> {
        try{
            const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/categories`)
            const data = await response.json()
            return data
        }catch{
            throw new Error("feald to featch data")
        }
    }