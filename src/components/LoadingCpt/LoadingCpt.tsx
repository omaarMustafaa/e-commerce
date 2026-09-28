import React from 'react'
import { InfinitySpin } from 'react-loader-spinner'

export default function LoadingCpt() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
        <InfinitySpin
          width="200"
          color="#16A34A"
        />
      </div>
  )
}
