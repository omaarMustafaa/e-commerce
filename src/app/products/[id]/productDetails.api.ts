import { AllProductsResponse } from "@/app/Home.interface";
import { product } from "./productDetails.interface";

export async function getProductDetails(Id: string): Promise<product> {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://ecommerce.routemisr.com";
    const response = await fetch(`${baseUrl}/api/v1/products/${Id}`);
    const data = await response.json();
    return data.data;
  } catch {
    throw new Error("feald to featch data");
  }
}

export async function getProductsDetailsCategory(categoryId: string) {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://ecommerce.routemisr.com";
    const response = await fetch(
      `${baseUrl}/api/v1/products?category[in]=${categoryId}`,
    );

    const data: AllProductsResponse = await response.json();

    return data.data || [];
  } catch {
    return [];
  }
}
