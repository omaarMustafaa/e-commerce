import Image from "next/image";
import Link from "next/link";
import { getAllGategories } from "./CategoryCard.api";

export default async function CategoryCard({ Categories }: { Categories?: string }) {
  const data = await getAllGategories();

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {/* Card */}
        {data.data.map(({ _id, image, name, slug }) => (
          <Link className="group/category " key={_id} href={`categories/${_id}`}>
            <div
              className={`bg-white p-4 rounded-[8px] shadow-[0_1px_2px_-1px_rgba(0,0,0,0.1),0_1px_3px_0_rgba(0,0,0,0.1)] hover:shadow-[0_2px_4px_-1px_rgba(0,0,0,0.12),0_2px_5px_0_rgba(0,0,0,0.1)] flex flex-col gap-3 items-center justify-center cursor-pointer text-center ${Categories && 'hover:-translate-y-1 hover:border-main-color/40 border border-gray-100'}  transition-all duration-300`}
            >
              <div className={` overflow-hidden ${Categories ? 'rounded-xl w-40 h-40' : 'rounded-full h-20 w-20'} flex items-center justify-center mx-auto mb-3 relative border-0`}>
                <Image
                  fill
                  loading="lazy"
                  alt={slug}
                  src={image}
                  className={`w-full h-full object-cover ${Categories && 'group-hover/category:scale-110 transition-transform duration-500'}`}
                />
              </div>
              <h3 className={`text-[#364153] font-medium text-[16px] flex items-center justify-center text-center ${Categories ? 'group-hover/category:text-main-color' : 'h-12'}`}>{name}</h3>
              {Categories && <div className="flex justify-center mt-2 opacity-0 group-hover/category:opacity-100 transition-opacity">
                <span className="text-xs text-main-color flex items-center gap-1">View Subcategories
                  <svg data-prefix="fas" data-icon="arrow-right" className="w-3 h-3 text-[10px]" role="img" viewBox="0 0 512 512" aria-hidden="true"><path fill="currentColor" d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-105.4 105.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"></path></svg>
                </span>
              </div>}
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
