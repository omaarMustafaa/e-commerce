
import { getLoggedUserCart } from "@/app/cart/cart.action";
import { getLoggedUserWishlist } from "@/app/wishlist/wishlist.action";
import WishlistCard from "@/components/WishlistCard/WishlistCard";

export default async function Page() {
  const wishListData = await getLoggedUserWishlist();
  const userCart = await getLoggedUserCart();

  const cartProductIds = userCart?.data?.products?.map((item: any) => item.product._id || item.product) || [];

  return <WishlistCard wishListData={wishListData} cartProductIds={cartProductIds} />;
}