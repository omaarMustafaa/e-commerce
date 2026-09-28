
import { WishlistProduct } from "@/app/wishlist/wishlist.interface";
import Image from "next/image";
import Link from "next/link";
import RemoveItemWishList from "./RemoveItemWishList/RemoveItemWishList";
import AddToCartInWishlist from "./AddToCartInWishlist/AddToCartInWishlist";

export default function ProductWishList({
  product,
  isInCart = false,
}: {
  product: WishlistProduct;
  isInCart?: boolean;
}) {
  const { _id, imageCover, quantity, title, priceAfterDiscount, price, category: { name } } = product;

  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-4 p-4 md:px-6 md:py-5 items-center hover:bg-gray-50/50 transition-colors">
      <div className="md:col-span-6 flex items-center gap-4">
        <Link href={`/products/${_id}`} className="w-20 h-20 rounded-xl bg-gray-50 border border-gray-100 overflow-hidden shrink-0 relative">
          <Image src={imageCover} alt={title} fill className="object-cover" />
        </Link>
        <div className="min-w-0">
          <Link href={`/products/${_id}`} className="font-medium text-gray-900 hover:text-main-color transition-colors line-clamp-2">
            {title}
          </Link>
          <p className="text-sm text-gray-400 mt-1">{name}</p>
        </div>
      </div>

      <div className="md:col-span-2 flex md:justify-center items-center gap-2">
        <div className="md:hidden text-sm text-gray-500">Price:</div>
        <div className="text-right md:text-center">
          <div className="font-semibold text-gray-900">
            {priceAfterDiscount ? priceAfterDiscount : price} EGP
          </div>
          {priceAfterDiscount && <div className="text-sm text-gray-400 line-through">{price} EGP</div>}
        </div>
      </div>

      <div className="md:col-span-2 flex md:justify-center">
        <span className="md:hidden text-sm text-gray-500 mr-2">Status:</span>
        {quantity !== 0 && (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-green-50 text-green-700">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
            In Stock
          </span>
        )}
      </div>

      <div className="md:col-span-2 flex items-center gap-2 md:justify-center">
        <AddToCartInWishlist productId={_id} initialIsInCart={isInCart} />
        <RemoveItemWishList id={_id} />
      </div>
    </div>
  );
}