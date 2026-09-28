
import EmptyCart from "@/components/EmptyCart/EmptyCart";
import { getLoggedUserCart } from "./cart.action";
import CartTable from "@/components/CartTable/CartTable";

export default async function page() {

  const cartData = await getLoggedUserCart()
  
  return (
    <>
      {cartData.numOfCartItems == 0 ? <EmptyCart /> : <CartTable cart={cartData} />}
    </>
  )
}
