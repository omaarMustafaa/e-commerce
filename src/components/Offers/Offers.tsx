import Link from "next/link";

export default function Offers() {
  return (
    <>
    {/* Left Offer */}
    <div className="p-8 rounded-[16px] bg-linear-to-br from-[#00BC7D] to-[#007A55] relative overflow-hidden text-white">
        <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2"></div>
        {/* content */}
        <div className="relative z-10">

            <div className="inline-flex items-center gap-2 bg-white/20 px-3 py-1 rounded-full text-sm mb-4 font-medium text-[14px]">
            <span>
                🔥
            </span>
            <span>Deal of the Day</span>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold mb-2">Fresh Organic Fruits</h3>
            <p className="text-white/80 mb-4">Get up to 40% off on selected organic fruits</p>
            <div className="flex items-center gap-4 mb-6">
                <div className="text-3xl font-bold">40% OFF</div>
                <div className="text-sm text-white/70">
                Use code: <span className="font-bold text-white">ORGANIC40</span></div>
            </div>
            <Link href="" className="inline-flex items-center gap-2 bg-white text-emerald-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors">
            Shop Now
            <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17.7063 8.70627C18.0969 8.31565 18.0969 7.68127 17.7063 7.29065L12.7063 2.29065C12.3156 1.90002 11.6812 1.90002 11.2906 2.29065C10.9 2.68127 10.9 3.31565 11.2906 3.70627L14.5844 7.00002H3C2.44687 7.00002 2 7.4469 2 8.00002C2 8.55315 2.44687 9.00002 3 9.00002H14.5844L11.2906 12.2938C10.9 12.6844 10.9 13.3188 11.2906 13.7094C11.6812 14.1 12.3156 14.1 12.7063 13.7094L17.7063 8.7094V8.70627Z" fill="#009966"/>
            </svg>


            </Link>

        </div>
    </div>

    {/* Right Offer */}
    <div className="p-8 rounded-[16px] bg-linear-to-br from-[#FF8904] to-[#FF2056] relative overflow-hidden text-white">
        <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2"></div>

        {/* content */}
        <div className="relative z-10">

        <div className="inline-flex items-center gap-2 bg-white/20 px-3 py-1 rounded-full text-sm mb-4 font-medium text-[14px]">
            <span>
                ✨
            </span>
            <span>New Arrivals</span>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold mb-2">Exotic Vegetables</h3>
            <p className="text-white/80 mb-4">Discover our latest collection of premium vegetables</p>
            <div className="flex items-center gap-4 mb-6">
                <div className="text-3xl font-bold">25% OFF</div>
                <div className="text-sm text-white/70">
                Use code: <span className="font-bold text-white">FRESH25</span></div>
            </div>
            <Link href="" className="inline-flex items-center gap-2 bg-white text-orange-500 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors">
            Explore Now
            <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17.7063 8.70627C18.0969 8.31565 18.0969 7.68127 17.7063 7.29065L12.7063 2.29065C12.3156 1.90002 11.6812 1.90002 11.2906 2.29065C10.9 2.68127 10.9 3.31565 11.2906 3.70627L14.5844 7.00002H3C2.44687 7.00002 2 7.4469 2 8.00002C2 8.55315 2.44687 9.00002 3 9.00002H14.5844L11.2906 12.2938C10.9 12.6844 10.9 13.3188 11.2906 13.7094C11.6812 14.1 12.3156 14.1 12.7063 13.7094L17.7063 8.7094V8.70627Z" fill="#FF6900"/>
            </svg>

            </Link>

        </div>

    </div>
    </>
  )
}
