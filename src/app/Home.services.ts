
export async function getAllProducts(brandId?: string) {
  try {
    
    let url = 'https://ecommerce.routemisr.com/api/v1/products';

    if (brandId) {
      url += `?brand=${brandId}`;
    }

    const res = await fetch(url);
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
}