import Image from 'next/image'
import Link from 'next/link'
import { getAllBrands } from './brandCard.api'
export default async function BrandCard() {
    const brand = await getAllBrands()
    return (
        <>
            <section className="px-4 py-10 ">
                <div className="container mx-auto ">
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-5">
                        {brand.data.map(({ _id ,image ,name })=> (
                        <Link key={_id} href={`/products?brand=${_id}`} className="group/brand bg-white rounded-2xl border border-gray-100 p-4 sm:p-5 shadow-sm hover:shadow-xl hover:border-violet-200 transition-all duration-300 hover:-translate-y-1">
                            {/* img */}
                            <div className="aspect-square rounded-xl overflow-hidden bg-gray-50 mb-3 p-4 flex items-center justify-center relative border-0">
                                <Image
                                    fill
                                    loading="lazy"
                                    alt={''}
                                    src={image}
                                    className="p-4 object-contain group-hover/brand:scale-110 transition-transform duration-500"
                                />
                            </div>
                            <h3 className="font-semibold text-gray-900 text-center text-sm group-hover/brand:text-violet-600 transition-colors truncate">{name}</h3>
                            <div className="flex justify-center mt-1.5 opacity-0 group-hover/brand:opacity-100 transition-opacity">
                                <span className="text-xs text-violet-600 flex items-center gap-1">View Products
                                    <svg data-prefix="fas" data-icon="arrow-right" className="w-3 h-3 text-[10px]" role="img" viewBox="0 0 512 512" aria-hidden="true"><path fill="currentColor" d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-105.4 105.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"></path></svg>
                                </span>
                            </div>
                        </Link>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}
