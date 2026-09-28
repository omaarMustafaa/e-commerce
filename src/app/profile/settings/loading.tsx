import React from 'react'

export default function loading() {
  return (
    <>
        <div className="flex items-center justify-center py-20 flex-col">
            <svg data-prefix="fas" data-icon="spinner" className="w-10 h-10 text-3xl text-main-color animate-spin mb-4" role="img" viewBox="0 0 512 512" aria-hidden="true"><path fill="currentColor" d="M208 48a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm0 416a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zM48 208a48 48 0 1 1 0 96 48 48 0 1 1 0-96zm368 48a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zM75 369.1A48 48 0 1 1 142.9 437 48 48 0 1 1 75 369.1zM75 75A48 48 0 1 1 142.9 142.9 48 48 0 1 1 75 75zM437 369.1A48 48 0 1 1 369.1 437 48 48 0 1 1 437 369.1z"></path></svg>
            <p className="text-gray-500">Loading profile...</p>
        </div>
    </>
  )
}
