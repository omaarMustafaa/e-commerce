'use client'
type AddAddressProps = {
  display: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function NoAddress({display}:AddAddressProps) {
    return (
        <>
            <div className="w-20 h-20 rounded-full bg-gray-100 flex items-center justify-center mx-auto mb-5">
                <svg data-prefix="fas" data-icon="location-dot" className="w-8 h-8 text-3xl text-gray-400" role="img" viewBox="0 0 384 512" aria-hidden="true"><path fill="currentColor" d="M0 188.6C0 84.4 86 0 192 0S384 84.4 384 188.6c0 119.3-120.2 262.3-170.4 316.8-11.8 12.8-31.5 12.8-43.3 0-50.2-54.5-170.4-197.5-170.4-316.8zM192 256a64 64 0 1 0 0-128 64 64 0 1 0 0 128z"></path></svg>
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">No Addresses Yet</h3>
            <p className="text-gray-500 mb-6 max-w-sm mx-auto">Add your first delivery address to make checkout faster and easier.</p>
            <button className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-main-color text-white font-semibold hover:bg-main-color-hover transition-colors shadow-lg shadow-main-color/25" onClick={_ => display(true)}>
                <svg data-prefix="fas" data-icon="plus" className="w-4 h-4" role="img" viewBox="0 0 448 512" aria-hidden="true"><path fill="currentColor" d="M256 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 160-160 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l160 0 0 160c0 17.7 14.3 32 32 32s32-14.3 32-32l0-160 160 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-160 0 0-160z"></path></svg>
                Add Your First Address
            </button>
        </>
    )
}
