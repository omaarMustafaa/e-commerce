import { InfinitySpin } from "react-loader-spinner";


export default function loading() {
  return (
    <>
      <div className="min-h-screen flex items-center justify-center fixed inset-0 bg-white z-50">
        <InfinitySpin
          width="200"
          color="#16A34A"
        />
      </div>
    </>
  )
}
