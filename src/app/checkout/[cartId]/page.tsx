// import Link from "next/link";
// import CheckoutForm from "../CheckoutForm/CheckoutForm";
// import EmptyChecout from "../EmptyChecout/EmptyChecout";

// type props ={
//   params : {
//     cartId : string
//   }
// }

// export default async function page(props :props) {
//   const params = await props.params
//   const {cartId} = params
//   return (
//     <>
//     {/* <EmptyChecout/> */}
//     <div className="bg-linear-to-b from-gray-50 to-white min-h-screen py-8">
//       <div className="container mx-auto px-4">

//         <div className="mb-8">
//           <div className="flex items-center gap-2 text-sm text-gray-500 mb-6">
//             <Link href={'/'} className="hover:text-main-color transition">Home</Link>
//             <span className="text-gray-300">/</span>
//             <Link href={'/cart'} className="hover:text-main-color transition">Cart</Link>
//             <span className="text-gray-300">/</span>
//             <span className="text-gray-900 font-medium">Checkout</span>
//           </div>

//           <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
//             <div className="">
//               <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
//                 <span className="bg-linear-to-br from-main-color to-main-color-hover text-white w-12 h-12 rounded-xl flex items-center justify-center shadow-lg shadow-main-color/20">
//                   <svg data-prefix="fas" data-icon="receipt" className="w-6 h-6 svg-inline--fa fa-receipt" role="img" viewBox="0 0 384 512" aria-hidden="true"><path fill="currentColor" d="M14 2.2C22.5-1.7 32.5-.3 39.6 5.8L80 40.4 120.4 5.8c9-7.7 22.3-7.7 31.2 0L192 40.4 232.4 5.8c9-7.7 22.2-7.7 31.2 0L304 40.4 344.4 5.8c7.1-6.1 17.1-7.5 25.6-3.6S384 14.6 384 24l0 464c0 9.4-5.5 17.9-14 21.8s-18.5 2.5-25.6-3.6l-40.4-34.6-40.4 34.6c-9 7.7-22.2 7.7-31.2 0l-40.4-34.6-40.4 34.6c-9 7.7-22.3 7.7-31.2 0L80 471.6 39.6 506.2c-7.1 6.1-17.1 7.5-25.6 3.6S0 497.4 0 488L0 24C0 14.6 5.5 6.1 14 2.2zM104 136c-13.3 0-24 10.7-24 24s10.7 24 24 24l176 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-176 0zM80 352c0 13.3 10.7 24 24 24l176 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-176 0c-13.3 0-24 10.7-24 24zm24-120c-13.3 0-24 10.7-24 24s10.7 24 24 24l176 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-176 0z"></path></svg>
//                 </span>
//                 Complete Your Order
//               </h1>
//               <p className="text-gray-500 mt-2">Review your items and complete your purchase</p>
//             </div>
//             <Link href={'/cart'} className="text-main-color hover:text-main-color-hover font-medium flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-main-color/5 transition-all"><svg data-prefix="fas" data-icon="arrow-left" className="w-4 h-4 svg-inline--fa fa-arrow-left" role="img" viewBox="0 0 512 512" aria-hidden="true"><path fill="currentColor" d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 288 480 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-370.7 0 105.4-105.4c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"></path></svg>
//               Back to Cart
//             </Link>
//           </div>

//         </div>
//         <CheckoutForm cart={cartId}/>
//       </div>
//     </div>
//     </>
//   )
// }
import Link from "next/link";
import CheckoutForm from "../CheckoutForm/CheckoutForm";
import EmptyChecout from "../EmptyChecout/EmptyChecout";
import { getLoggedUserCart } from "@/app/cart/cart.action";
import { ArrowLeft, PackageCheck } from "lucide-react";

type props ={
  params : Promise<{
    cartId : string
  }>
}

export default async function page(props :props) {
  await props.params;
  const cart = await getLoggedUserCart();
  if (!cart?.data?.products?.length) return <EmptyChecout />;
  return (
    <>
    <main className="min-h-screen bg-slate-50 py-5 sm:py-7">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">

        <div className="mb-5">
          <div className="mb-3 flex items-center gap-2 text-[11px] text-slate-500">
            <Link href={'/'} className="hover:text-main-color transition">Home</Link>
            <span className="text-slate-300">/</span>
            <Link href={'/cart'} className="hover:text-main-color transition">Cart</Link>
            <span className="text-slate-300">/</span>
            <span className="font-medium text-slate-800">Checkout</span>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h1 className="flex items-center gap-2.5 text-xl font-bold text-slate-900 sm:text-2xl">
                <span className="flex size-8 items-center justify-center rounded-md bg-main-color text-white shadow-sm">
                  <PackageCheck className="size-4" />
                </span>
                Complete Your Order
              </h1>
              <p className="mt-1 text-xs text-slate-500">Review your items and complete your purchase</p>
            </div>
            <Link href={'/cart'} className="flex items-center gap-1.5 rounded-md px-2 py-1.5 text-[11px] font-semibold text-main-color transition hover:bg-green-50"><ArrowLeft className="size-3.5" /> Back to Cart
            </Link>
          </div>

        </div>
        <CheckoutForm cart={cart}/>
      </div>
    </main>
    </>
  )
}
