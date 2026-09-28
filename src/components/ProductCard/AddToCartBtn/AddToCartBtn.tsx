"use client";

import { ReactNode, useState } from "react";
import { toast } from "react-hot-toast";
import { addProductToUserCart } from "./AddToCartBtn.action";
import { useRouter } from "next/navigation";

export default function AddToCartBtn({
  children,
  productId,
  style
}: {
  children: ReactNode, productId: string, style: string
}) {


  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const router = useRouter()

  async function handleAddToCart() {
    try {
      setLoading(true);
      setSuccess(false);
      const { message } = await addProductToUserCart(productId);
      router.refresh()
      toast.success(message);
      setSuccess(true);
      setTimeout(() => {
        setSuccess(false);
      }, 1500);
    } catch (error) {
      toast.error(
        error instanceof Error
          ? error.message
          : "Something wrong"
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <button
      onClick={handleAddToCart}
      disabled={loading}
      className={style}
    >
      {loading ?
        // Loading
        <svg
          className="animate-spin"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
        >
          <circle
            cx="12"
            cy="12"
            r="9"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeDasharray="40 20"
          />
        </svg>
        : success ?
          <svg
            width="17"
            height="17"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M5 12L10 17L19 7"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          :
          children
      }
    </button>
  );
}