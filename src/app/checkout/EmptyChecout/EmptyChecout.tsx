import Link from 'next/link'
import React from 'react'

export default function EmptyChecout() {
  return (
    <div className='min-h-[60vh] flex items-center justify-center px-4'>
        <div className="max-w-md text-center">
            <div className="w-24 h-24 rounded-full bg-linear-to-br from-amber-50 to-orange-50 flex items-center justify-center mx-auto mb-6">
                <svg data-prefix="fas" data-icon="triangle-exclamation" className="w-8 h-8 svg-inline--fa fa-triangle-exclamation text-4xl text-amber-500" role="img" viewBox="0 0 512 512" aria-hidden="true"><path fill="currentColor" d="M256 0c14.7 0 28.2 8.1 35.2 21l216 400c6.7 12.4 6.4 27.4-.8 39.5S486.1 480 472 480L40 480c-14.1 0-27.2-7.4-34.4-19.5s-7.5-27.1-.8-39.5l216-400c7-12.9 20.5-21 35.2-21zm0 352a32 32 0 1 0 0 64 32 32 0 1 0 0-64zm0-192c-18.2 0-32.7 15.5-31.4 33.7l7.4 104c.9 12.5 11.4 22.3 23.9 22.3 12.6 0 23-9.7 23.9-22.3l7.4-104c1.3-18.2-13.1-33.7-31.4-33.7z"></path></svg>
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Your cart is empty</h2>
            <p className="text-gray-500 mb-6">Add some items to your cart before checking out.</p>
            <Link href={'/'} className='inline-flex items-center gap-2 bg-gradient-to-r from-main-color to-main-color-hover text-white py-3.5 px-8 rounded-xl font-semibold hover:from-main-color-hover hover:to-main-color-hover transition-all shadow-lg shadow-main-color/20'>Continue Shopping</Link>
        </div>
    </div>
  )
}
