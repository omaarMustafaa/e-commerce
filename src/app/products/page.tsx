
import ProductCard from "@/components/ProductCard/ProductCard";
import { getAllProducts } from "../Home.services";
import PageHeader from "@/components/PageHeader/PageHeader";
import Link from "next/link";
import Image from "next/image";
import NotFoundProuduct from "@/components/NotFoundProuduct/NotFoundProuduct";

interface PageProps {
  searchParams: Promise<{ brand?: string }>;
}

export default async function page({ searchParams }: PageProps) {
  const { brand } = await searchParams;
  const productList = await getAllProducts(brand);

  const brandData = productList?.data?.[0]?.brand;
  const brandName = brandData?.name;
  const brandImage = brandData?.image;

  return (
    <div className="min-h-screen bg-gray-50/50">
      {/* CPT */}
      <PageHeader
        Links={
          brand
            ? [
              <Link
                href="/brands"
                key="brands-link"
                className="hover:text-white transition-colors font-medium flex gap-2"
              >
                <div className="text-white/40 font-medium">/</div>
                Brands
              </Link>,
            ]
            : []
        }
        pageName={brand ? brandName || "Brand Products" : "All Products"}
        iconPage={
          brand && brandImage ? (
            <div className="relative w-12 h-12 rounded-full overflow-hidden bg-white/20 p-1 flex items-center justify-center">
              <Image
                fill
                loading="lazy"
                alt={brandName || "Brand Logo"}
                src={brandImage}
                className="object-contain p-1"
              />
            </div>
          ) : (
            <svg
              data-prefix="fas"
              data-icon="box-open"
              className="w-10 h-10"
              role="img"
              viewBox="0 0 640 512"
              aria-hidden="true"
            >
              <path
                fill="currentColor"
                d="M560.3 237.2c10.4 11.8 28.3 14.4 41.8 5.5 14.7-9.8 18.7-29.7 8.9-44.4l-48-72c-2.8-4.2-6.6-7.7-11.1-10.2L351.4 4.7c-19.3-10.7-42.8-10.7-62.2 0L88.8 116c-5.4 3-9.7 7.4-12.6 12.8L27.7 218.7c-12.6 23.4-3.8 52.5 19.6 65.1l33 17.7 0 53.3c0 23 12.4 44.3 32.4 55.7l176 99.7c19.6 11.1 43.5 11.1 63.1 0l176-99.7c20.1-11.4 32.4-32.6 32.4-55.7l0-117.5zm-240-9.8L170.2 144 320.3 60.6 470.4 144 320.3 227.4zm-41.5 50.2l-21.3 46.2-165.8-88.8 25.4-47.2 161.7 89.8z"
              ></path>
            </svg>
          )
        }
        title={brand ? `${brandName || "Brand"} Products` : "All Products"}
        body={
          brand
            ? `Explore all products from ${brandName || "this brand"}`
            : "Explore our complete product collection"
        }
        bg="bg-linear-to-br from-main-color via-[#22C55E] to-[#4ADE80]"
      />

      <div className="container mx-auto px-4 py-8">
        <div className="mb-6 text-sm text-gray-500">
          Showing {productList?.results || 0} products
        </div>

        {productList?.data && productList.data.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6">
            {productList.data.map((e: any) => (
              <ProductCard key={e._id} prod={e} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12 text-gray-500 font-medium">
            <NotFoundProuduct />
          </div>
        )}
      </div>
    </div>
  );
}
