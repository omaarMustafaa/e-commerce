
"use client";

import type { CartResponse } from "@/app/cart/cart.interface";
import { createCashOrder, createVisaCheckoutSession } from "@/app/checkout/checkout.action";
import { getAllAddresses } from "@/app/profile/addresses/address.action";
import type { AddressResponse } from "@/app/profile/addresses/address.interface";
import { ArrowLeft, Check, CreditCard, House, MapPin, PackageCheck, Plus, ShieldCheck, Truck, Wallet } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import type { ReactNode } from "react";
import toast from "react-hot-toast";

const cardClass = "bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm";
const fieldClass = "mt-1.5 h-10 w-full rounded-md border border-slate-200 bg-white px-3 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-main-color focus:ring-2 focus:ring-main-color/10";
type AddressFormValues = { city: string; details: string; phone: string; postalCode: string };
const emptyAddress: AddressFormValues = { city: "", details: "", phone: "", postalCode: "" };

export default function CheckoutForm({ cart }: { cart: CartResponse }) {
  const [addresses, setAddresses] = useState<AddressResponse[]>([]);
  const [addressesLoading, setAddressesLoading] = useState(true);
  const [selectedAddress, setSelectedAddress] = useState("");
  const [isDifferentAddress, setIsDifferentAddress] = useState(true);
  const [addressForm, setAddressForm] = useState<AddressFormValues>(emptyAddress);
  const [paymentMethod, setPaymentMethod] = useState<"cash" | "visa">("cash");
  const [submitting, setSubmitting] = useState(false);
  const router = useRouter();
  async function refreshAddresses() {
    try {
      const saved = await getAllAddresses();
      const list: AddressResponse[] = Array.isArray(saved) ? saved : [];
      setAddresses(list);
      return list;
    } catch {
      toast.error("Could not load your saved addresses");
      return [];
    } finally {
      setAddressesLoading(false);
    }
  }

  useEffect(() => { void refreshAddresses(); }, []);

  async function submitOrder(shippingAddress: { details: string; phone: string; city: string }) {
    setSubmitting(true);
    try {
      if (paymentMethod === "cash") {
        const result = await createCashOrder(cart.cartId, shippingAddress);
        if (!result.success) throw new Error(result.message || "Cash order could not be created");
        toast.success("Your order has been placed");
        router.push("/");
      } else {
        const result = await createVisaCheckoutSession(cart.cartId, shippingAddress, window.location.origin);
        if (!result.success || !result.url) throw new Error(result.message || "Payment session could not be created");
        window.location.assign(result.url);
      }
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Could not place your order");
      setSubmitting(false);
    }
  }

  async function placeOrder() {
    const shippingAddress = {
      details: addressForm.details.trim(),
      phone: addressForm.phone.trim(),
      city: addressForm.city.trim(),
    };
    if (!shippingAddress.details || !shippingAddress.phone || !shippingAddress.city) {
      toast.error("Complete the city, street address, and phone number to continue");
      return;
    }
    await submitOrder(shippingAddress);
  }

  function selectAddress(address: AddressResponse) {
    setSelectedAddress(address._id);
    setIsDifferentAddress(false);
    setAddressForm({ city: address.city || "", details: address.details || "", phone: address.phone || "", postalCode: "" });
  }

  function useDifferentAddress() {
    setSelectedAddress("");
    setIsDifferentAddress(true);
    setAddressForm({ ...emptyAddress });
  }

  const { products, totalCartPrice } = cart.data;
  const activeAddress = addresses.find((address) => address._id === selectedAddress);
  const shipping = totalCartPrice >= 500 ? 0 : 50;
  const total = totalCartPrice + shipping;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
      <div className="lg:col-span-2 space-y-6">
        <section className={cardClass}>
          <div className="bg-linear-to-r from-main-color to-main-color-hover px-6 py-4">
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <svg data-prefix="fas" data-icon="house" className="w-4 h-4 svg-inline--fa fa-house" role="img" viewBox="0 0 512 512" aria-hidden="true"><path fill="currentColor" d="M277.8 8.6c-12.3-11.4-31.3-11.4-43.5 0l-224 208c-9.6 9-12.8 22.9-8 35.1S18.8 272 32 272l16 0 0 176c0 35.3 28.7 64 64 64l288 0c35.3 0 64-28.7 64-64l0-176 16 0c13.2 0 25-8.1 29.8-20.3s1.6-26.2-8-35.1l-224-208zM240 320l32 0c26.5 0 48 21.5 48 48l0 96-128 0 0-96c0-26.5 21.5-48 48-48z"></path></svg>
              Shipping Address
            </h2>
            <p className="text-[#DCFCE7] text-sm mt-1">Where should we deliver your order?</p>
          </div>
          {/* INPUTS */}
          <div className="p-6 space-y-5">
            <div>
              <div className="mb-2 flex items-center gap-2 text-sm font-semibold text-slate-800"><svg data-prefix="fas" data-icon="bookmark" className="w-4 h-4 svg-inline--fa fa-bookmark text-main-color text-sm" role="img" viewBox="0 0 384 512" aria-hidden="true"><path fill="currentColor" d="M64 0C28.7 0 0 28.7 0 64L0 480c0 11.5 6.2 22.2 16.2 27.8s22.3 5.5 32.2-.4L192 421.3 335.5 507.4c9.9 5.9 22.2 6.1 32.2 .4S384 491.5 384 480l0-416c0-35.3-28.7-64-64-64L64 0z"></path></svg> Saved Addresses</div>
              <p className="mb-3 text-xs text-[#4A5565]">Select a saved address or enter a new one below</p>
              {addressesLoading ? <div className="h-19 animate-pulse rounded-md bg-slate-100" /> : addresses.length ? (
                <div className="grid gap-2">
                  {addresses.map((address) => {
                    const selected = selectedAddress === address._id;
                    return <button key={address._id} type="button" aria-pressed={selected} onClick={() => selectAddress(address)} className={`flex min-h-18 items-start gap-2.5 rounded-md border p-3 text-left transition ${selected ? "border-main-color bg-green-50/50 ring-1 ring-main-color/40" : "border-slate-200 bg-white hover:border-main-color/40"}`}>
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0 transition-colors bg-gray-100 text-gray-500"><svg data-prefix="fas" data-icon="location-dot" className="w-3 h-3 svg-inline--fa fa-location-dot" role="img" viewBox="0 0 384 512" aria-hidden="true"><path fill="currentColor" d="M0 188.6C0 84.4 86 0 192 0S384 84.4 384 188.6c0 119.3-120.2 262.3-170.4 316.8-11.8 12.8-31.5 12.8-43.3 0-50.2-54.5-170.4-197.5-170.4-316.8zM192 256a64 64 0 1 0 0-128 64 64 0 1 0 0 128z"></path></svg></div>

                        <div className="flex-1 min-w-0">
                          <p className="font-semibold text-gray-900">{address.name}</p>
                          <p className="text-sm text-gray-600 mt-0.5 line-clamp-1">{address.details}</p>
                          <div className="flex items-center gap-4 mt-2 text-xs text-gray-500">
                            <span className="flex items-center gap-1"><svg data-prefix="fas" data-icon="phone" className="svg-inline--fa fa-phone w-2 h-2" role="img" viewBox="0 0 512 512" aria-hidden="true"><path fill="currentColor" d="M160.2 25C152.3 6.1 131.7-3.9 112.1 1.4l-5.5 1.5c-64.6 17.6-119.8 80.2-103.7 156.4 37.1 175 174.8 312.7 349.8 349.8 76.3 16.2 138.8-39.1 156.4-103.7l1.5-5.5c5.4-19.7-4.7-40.3-23.5-48.1l-97.3-40.5c-16.5-6.9-35.6-2.1-47 11.8l-38.6 47.2C233.9 335.4 177.3 277 144.8 205.3L189 169.3c13.9-11.3 18.6-30.4 11.8-47L160.2 25z"></path></svg>{address.phone}</span>
                            <span className="flex items-center gap-1"><svg data-prefix="fas" data-icon="city" className="svg-inline--fa fa-city w-3 h-3" role="img" viewBox="0 0 576 512" aria-hidden="true"><path fill="currentColor" d="M320 0c-35.3 0-64 28.7-64 64l0 32-48 0 0-72c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 72-64 0 0-72C96 10.7 85.3 0 72 0S48 10.7 48 24l0 74c-27.6 7.1-48 32.2-48 62L0 448c0 35.3 28.7 64 64 64l448 0c35.3 0 64-28.7 64-64l0-192c0-35.3-28.7-64-64-64l-64 0 0-128c0-35.3-28.7-64-64-64L320 0zm64 112l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32c0-8.8 7.2-16 16-16l32 0c8.8 0 16 7.2 16 16zm-16 80c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32c0-8.8 7.2-16 16-16l32 0zm16 112l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32c0-8.8 7.2-16 16-16l32 0c8.8 0 16 7.2 16 16zm112-16c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32c0-8.8 7.2-16 16-16l32 0zM256 304l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32c0-8.8 7.2-16 16-16l32 0c8.8 0 16 7.2 16 16zM240 192c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32c0-8.8 7.2-16 16-16l32 0zM128 304l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32c0-8.8 7.2-16 16-16l32 0c8.8 0 16 7.2 16 16zM112 192c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32c0-8.8 7.2-16 16-16l32 0z"></path></svg>{address.city}</span>
                          </div>
                        </div>
                      </div>
                    </button>;
                  })}
                </div>
              ) : <div className="rounded-md border border-dashed border-slate-300 px-3 py-4 text-center text-xs text-slate-500">No saved addresses yet. Add a delivery address below.</div>}
            </div>

            <button type="button" aria-pressed={isDifferentAddress} onClick={useDifferentAddress} className={`flex w-full items-center gap-2 rounded-md border border-dashed px-3 py-2.5 text-left transition ${isDifferentAddress ? "border-main-color bg-green-50" : "border-green-300 bg-green-50/40 hover:bg-green-50"}`}>
              <span className="flex size-7 items-center justify-center rounded-md bg-main-color text-white"><Plus className="size-4" /></span>
              <span><span className="block text-xs font-semibold text-main-color">Use a Different Address</span><span className="mt-0.5 block text-[10px] text-slate-500">Enter a new address for this delivery</span></span>
            </button>

            <div className="space-y-3">
              <div className="flex items-start gap-3 p-4 bg-blue-50 rounded-xl border border-blue-100">
                <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                  <svg
                    data-prefix="fas"
                    data-icon="circle-info"
                    className="w-3 h-3 svg-inline--fa fa-circle-info text-blue-600 text-sm"
                    role="img"
                    viewBox="0 0 512 512"
                    aria-hidden="true"
                  >
                    <path
                      fill="currentColor"
                      d="M256 512a256 256 0 1 0 0-512 256 256 0 0 0 0 512zM224 160a32 32 0 1 1 64 0 32 32 0 0 1-64 0zm-8 64h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24h-80c-13.3 0-24-10.7-24-24s10.7-24 24-24h24v-64h-24c-13.3 0-24-10.7 24-24 0-13.3 10.7-24 24-24z"
                    />
                  </svg>
                </div>

                <div>
                  <p className="text-sm text-blue-800 font-medium">
                    Delivery Information
                  </p>

                  <p className="text-xs text-blue-600 mt-0.5">
                    Please ensure your address is accurate for smooth delivery
                  </p>
                </div>
              </div>

              <label className="block text-xs font-medium text-slate-700">City <span className="text-red-500">*</span><input value={addressForm.city} onChange={(event) => setAddressForm((current) => ({ ...current, city: event.target.value }))} placeholder="e.g. Cairo, Alexandria, Giza" className={fieldClass} /></label>
              <label className="block text-xs font-medium text-slate-700">Street Address <span className="text-red-500">*</span><textarea value={addressForm.details} onChange={(event) => setAddressForm((current) => ({ ...current, details: event.target.value }))} rows={2} placeholder="Street name, building, floor, apartment…" className="mt-1.5 min-h-16 w-full resize-y rounded-md border border-slate-200 bg-white px-3 py-2 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-main-color focus:ring-2 focus:ring-main-color/10" /></label>
              <label className="block text-xs font-medium text-slate-700">Phone Number <span className="text-red-500">*</span><input type="tel" value={addressForm.phone} onChange={(event) => setAddressForm((current) => ({ ...current, phone: event.target.value }))} placeholder="01xxxxxxxxx" className={fieldClass} /></label>

            </div>
          </div>
        </section>
        {/* payment */}
        <section className={cardClass}>
          <div className="bg-linear-to-r from-main-color to-main-color-hover px-6 py-4">
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <svg data-prefix="fas" data-icon="wallet" className="w-4 h-4 svg-inline--fa fa-wallet" role="img" viewBox="0 0 512 512" aria-hidden="true"><path fill="currentColor" d="M64 32C28.7 32 0 60.7 0 96L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-192c0-35.3-28.7-64-64-64L72 128c-13.3 0-24-10.7-24-24S58.7 80 72 80l384 0c13.3 0 24-10.7 24-24s-10.7-24-24-24L64 32zM416 256a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"></path></svg>
              Payment Method
            </h2>
            <p className="text-[#DCFCE7] text-sm mt-1">Choose how you’d like to pay</p>
          </div>

          <div className="space-y-2.5 p-4 sm:p-5">
            <PaymentChoice selected={paymentMethod === "cash"} onClick={() => setPaymentMethod("cash")} icon={<Wallet className="size-4" />} title="Cash on Delivery" subtitle="Pay when you receive your order" color="green" />
            <PaymentChoice selected={paymentMethod === "visa"} onClick={() => setPaymentMethod("visa")} icon={<CreditCard className="size-4" />} title="Pay Online" subtitle="Secure payment with your Visa card" color="slate" />
            {paymentMethod === "visa" && <div className="flex items-center gap-2 pl-12 text-[10px] font-semibold text-slate-500"><span className="rounded border border-slate-200 bg-white px-1.5 py-0.5 text-blue-700">VISA</span><span className="flex"><span className="size-3 rounded-full bg-red-500" /><span className="-ml-1 size-3 rounded-full bg-amber-400" /></span><span>Secure online checkout</span></div>}

            <div className="flex items-center gap-3 p-4 bg-linear-to-r from-green-50 to-emerald-50 rounded-xl border border-green-100 mt-4">
              <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center shrink-0">
                <svg data-prefix="fas" data-icon="shield-halved" className="w-4 h-4 svg-inline--fa fa-shield-halved text-green-600" role="img" viewBox="0 0 512 512" aria-hidden="true"><path fill="currentColor" d="M256 0c4.6 0 9.2 1 13.4 2.9L457.8 82.8c22 9.3 38.4 31 38.3 57.2-.5 99.2-41.3 280.7-213.6 363.2-16.7 8-36.1 8-52.8 0-172.4-82.5-213.1-264-213.6-363.2-.1-26.2 16.3-47.9 38.3-57.2L242.7 2.9C246.9 1 251.4 0 256 0zm0 66.8l0 378.1c138-66.8 175.1-214.8 176-303.4l-176-74.6 0 0z"></path></svg>
              </div>
              <div>
                <p className="text-sm font-medium text-green-800">Secure & Encrypted</p>
                <p className="text-xs text-green-600 mt-0.5">Your payment info is protected with 256-bit SSL encryption</p>
              </div>
            </div>

          </div>
        </section>
      </div>

      <aside className={`${cardClass} lg:sticky lg:top-24`}>

        <div className="bg-linear-to-r from-main-color to-main-color-hover px-6 py-4">
          <h2 className="text-lg font-bold text-white flex items-center gap-2">
            <svg data-prefix="fas" data-icon="bag-shopping" className="w-4 h-4 svg-inline--fa fa-bag-shopping" role="img" viewBox="0 0 448 512" aria-hidden="true"><path fill="currentColor" d="M160 80c0-35.3 28.7-64 64-64s64 28.7 64 64l0 48-128 0 0-48zm-48 48l-64 0c-26.5 0-48 21.5-48 48L0 384c0 53 43 96 96 96l256 0c53 0 96-43 96-96l0-208c0-26.5-21.5-48-48-48l-64 0 0-48c0-61.9-50.1-112-112-112S112 18.1 112 80l0 48zm24 48a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm152 24a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z"></path></svg>
            Order Summary
          </h2>
          <p className="text-[#DCFCE7] text-sm mt-1">{`${cart.numOfCartItems} ${cart.numOfCartItems === 1 ? "item" : "items"}`}</p>
        </div>


        <div className="space-y-3 p-4">
          <div className="max-h-70 space-y-2.5 overflow-y-auto pr-1">
            {products.map(({ _id, count, price, product }) => <div key={_id} className="flex items-center gap-2.5 rounded-md bg-slate-50 p-2">
              <div className="relative size-10 shrink-0 overflow-hidden rounded border border-slate-100 bg-white"><Image src={product.imageCover} alt={product.title} fill sizes="40px" className="object-contain p-1" /></div>
              <div className="min-w-0 flex-1"><p className="line-clamp-1 text-[11px] font-semibold text-slate-800">{product.title}</p><p className="mt-0.5 text-[10px] text-slate-500">{count} × {price} EGP</p></div>
              <span className="shrink-0 text-[11px] font-semibold text-slate-800">{count * price} EGP</span>
            </div>)}
          </div>
          <div className="space-y-2 border-t border-slate-100 pt-3 text-xs">
            <div className="flex justify-between text-slate-600"><span>Subtotal</span><span className="font-medium text-slate-800">{totalCartPrice} EGP</span></div>
            <div className="flex justify-between text-slate-600"><span className="flex items-center gap-1.5"><svg data-prefix="fas" data-icon="truck" className="w-3 h-3 svg-inline--fa fa-truck text-gray-400" role="img" viewBox="0 0 576 512" aria-hidden="true"><path fill="currentColor" d="M0 96C0 60.7 28.7 32 64 32l288 0c35.3 0 64 28.7 64 64l0 32 50.7 0c17 0 33.3 6.7 45.3 18.7L557.3 192c12 12 18.7 28.3 18.7 45.3L576 384c0 35.3-28.7 64-64 64l-3.3 0c-10.4 36.9-44.4 64-84.7 64s-74.2-27.1-84.7-64l-102.6 0c-10.4 36.9-44.4 64-84.7 64s-74.2-27.1-84.7-64L64 448c-35.3 0-64-28.7-64-64L0 96zM512 288l0-50.7-45.3-45.3-50.7 0 0 96 96 0zM192 424a40 40 0 1 0 -80 0 40 40 0 1 0 80 0zm232 40a40 40 0 1 0 0-80 40 40 0 1 0 0 80z"></path></svg> Shipping</span><span className="font-semibold text-main-color">{shipping ? `${shipping} EGP` : "FREE"}</span></div>
            <div className="flex justify-between border-t border-slate-100 pt-2 text-sm font-bold text-slate-900"><span>Total</span><span className="text-main-color">{total} <span className="text-[10px] font-medium">EGP</span></span></div>
          </div>
          <button type="button" disabled={submitting || addressesLoading || products.length === 0} onClick={placeOrder} className="flex w-full items-center justify-center gap-2 rounded-md bg-main-color px-4 py-3 text-xs font-semibold text-white shadow-sm transition hover:bg-main-color-hover disabled:cursor-not-allowed disabled:opacity-60">{submitting ? "Processing…" : paymentMethod === "visa" ? <><svg data-prefix="fas" data-icon="shield-halved" className="w-4 h-4 svg-inline--fa fa-shield-halved" role="img" viewBox="0 0 512 512" aria-hidden="true"><path fill="currentColor" d="M256 0c4.6 0 9.2 1 13.4 2.9L457.8 82.8c22 9.3 38.4 31 38.3 57.2-.5 99.2-41.3 280.7-213.6 363.2-16.7 8-36.1 8-52.8 0-172.4-82.5-213.1-264-213.6-363.2-.1-26.2 16.3-47.9 38.3-57.2L242.7 2.9C246.9 1 251.4 0 256 0zm0 66.8l0 378.1c138-66.8 175.1-214.8 176-303.4l-176-74.6 0 0z"></path></svg> Proceed to Payment</> : <><svg data-prefix="fas" data-icon="box" className="w-4 h-4 svg-inline--fa fa-box" role="img" viewBox="0 0 448 512" aria-hidden="true"><path fill="currentColor" d="M369.4 128l-34.3-48-222.1 0-34.3 48 290.7 0zM0 148.5c0-13.3 4.2-26.3 11.9-37.2L60.9 42.8C72.9 26 92.3 16 112.9 16l222.1 0c20.7 0 40.1 10 52.1 26.8l48.9 68.5c7.8 10.9 11.9 23.9 11.9 37.2L448 416c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 148.5z"></path></svg> Place Order</>}</button>


          <div className="flex items-center justify-center gap-4 mt-4 py-3 border-t border-gray-100">
            <div className="flex items-center gap-1.5 text-xs text-gray-500">
              <svg data-prefix="fas" data-icon="shield-halved" className="2-3 h-3 svg-inline--fa fa-shield-halved text-green-500" role="img" viewBox="0 0 512 512" aria-hidden="true"><path fill="currentColor" d="M256 0c4.6 0 9.2 1 13.4 2.9L457.8 82.8c22 9.3 38.4 31 38.3 57.2-.5 99.2-41.3 280.7-213.6 363.2-16.7 8-36.1 8-52.8 0-172.4-82.5-213.1-264-213.6-363.2-.1-26.2 16.3-47.9 38.3-57.2L242.7 2.9C246.9 1 251.4 0 256 0zm0 66.8l0 378.1c138-66.8 175.1-214.8 176-303.4l-176-74.6 0 0z"></path></svg>
              <span>Secure</span>
            </div>
            <div className="w-px h-4 bg-gray-200"></div>
            <div className="flex items-center gap-1.5 text-xs text-gray-500">
              <svg data-prefix="fas" data-icon="truck" className="w-3 h-3 svg-inline--fa fa-truck text-blue-500" role="img" viewBox="0 0 576 512" aria-hidden="true"><path fill="currentColor" d="M0 96C0 60.7 28.7 32 64 32l288 0c35.3 0 64 28.7 64 64l0 32 50.7 0c17 0 33.3 6.7 45.3 18.7L557.3 192c12 12 18.7 28.3 18.7 45.3L576 384c0 35.3-28.7 64-64 64l-3.3 0c-10.4 36.9-44.4 64-84.7 64s-74.2-27.1-84.7-64l-102.6 0c-10.4 36.9-44.4 64-84.7 64s-74.2-27.1-84.7-64L64 448c-35.3 0-64-28.7-64-64L0 96zM512 288l0-50.7-45.3-45.3-50.7 0 0 96 96 0zM192 424a40 40 0 1 0 -80 0 40 40 0 1 0 80 0zm232 40a40 40 0 1 0 0-80 40 40 0 1 0 0 80z"></path></svg>
              <span>Fast Delivery</span>
            </div>
            <div className="w-px h-4 bg-gray-200"></div>
            <div className="flex items-center gap-1.5 text-xs text-gray-500">
              <svg data-prefix="fas" data-icon="box" className="w-3 h-3 svg-inline--fa fa-box text-orange-500" role="img" viewBox="0 0 448 512" aria-hidden="true"><path fill="currentColor" d="M369.4 128l-34.3-48-222.1 0-34.3 48 290.7 0zM0 148.5c0-13.3 4.2-26.3 11.9-37.2L60.9 42.8C72.9 26 92.3 16 112.9 16l222.1 0c20.7 0 40.1 10 52.1 26.8l48.9 68.5c7.8 10.9 11.9 23.9 11.9 37.2L448 416c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 148.5z"></path></svg>
              <span>Easy Returns</span>
            </div>
          </div>

        </div>
      </aside>
    </div>
  );
}

function SectionHeading({ icon, title, subtitle }: { icon: ReactNode; title: string; subtitle: string }) {
  return <div className="flex items-center gap-2.5 bg-[#2f7d3e] px-4 py-3 text-white">
    <span className="flex size-7 items-center justify-center rounded-md bg-white/15">{icon}</span>
    <span><span className="block text-xs font-semibold leading-4">{title}</span><span className="block text-[10px] leading-4 text-green-100">{subtitle}</span></span>
  </div>;
}

function PaymentChoice({ selected, onClick, icon, title, subtitle, color }: { selected: boolean; onClick: () => void; icon: ReactNode; title: string; subtitle: string; color: "green" | "slate" }) {
  return <button type="button" aria-pressed={selected} onClick={onClick} className={`flex w-full items-center gap-2.5 rounded-md border px-3 py-2.5 text-left transition ${selected ? "border-main-color bg-green-50/50 ring-1 ring-main-color/40" : "border-slate-200 hover:border-slate-300"}`}>
    <span className={`flex size-8 shrink-0 items-center justify-center rounded-md ${color === "green" ? "bg-green-100 text-main-color" : "bg-slate-100 text-slate-500"}`}>{icon}</span>
    <span className="min-w-0 flex-1"><span className="block text-xs font-semibold text-slate-800">{title}</span><span className="mt-0.5 block text-[10px] text-slate-500">{subtitle}</span></span>
    <span className={`flex size-4 shrink-0 items-center justify-center rounded-full border ${selected ? "border-main-color bg-main-color text-white" : "border-slate-300"}`}>{selected && <Check className="size-2.5" />}</span>
  </button>;
}
