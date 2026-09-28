
"use client"

import * as React from "react"
import Link from "next/link"
import {
} from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { Button } from "@base-ui/react"
import logo from "@/assets/images/freshcart-logo.svg"
import Image from "next/image"
import { useSession } from "next-auth/react"
import { handelLogOut } from "@/Util";
import { getLoggedUserCart } from "@/app/cart/cart.action";
import { useRouter } from "next/navigation";

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Alert Dialog",
    href: "/docs/primitives/alert-dialog",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Hover Card",
    href: "/docs/primitives/hover-card",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "Progress",
    href: "/docs/primitives/progress",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "Scroll-area",
    href: "/docs/primitives/scroll-area",
    description: "Visually or semantically separates content.",
  },
  {
    title: "Tabs",
    href: "/docs/primitives/tabs",
    description:
      "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
  {
    title: "Tooltip",
    href: "/docs/primitives/tooltip",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  },
]

export default function Navbar({ cart, wishList }: { cart: number, wishList: number }) {
  const [openMenu, setOpenMenu] = React.useState(false);
  const router = useRouter()
  

  function handleOpenMenu() {
    setOpenMenu(true);
  }

  function handleCloseMenu() {
    setOpenMenu(false);
  }


  const { data } = useSession()
  // update ui

  return (
    <nav className="sticky top-0 z-50 shadow-xl bg-white ">
      <div className="container mx-auto">
        <NavigationMenu className=" max-w-full  justify-between h-18">

          <NavigationMenuList className="flex items-center justify-between h-16 lg:h-18 gap-4 lg:gap-8">

            <Link href="/">
              <Image src={logo} alt="logo" />
            </Link>

            <div className="relative hidden lg:flex flex-1 max-w-2xl">
              <input type="text" className="border border-[#E5E7EB] rounded-full w-full pt-3 pb-3.25 pr-12 pl-5 text-[#364152] font-medium text-sm focus:border-main-color focus:outline-none focus:shadow focus:shadow-main-color" placeholder="Search for products, brands and more..." />
              <div className="absolute right-1.5 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-main-color text-white flex items-center justify-center hover:bg-main-color-hover transition-colors">
                <svg className="text-white" width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13.125 5.6875C13.125 6.94258 12.7176 8.10195 12.0312 9.04258L15.493 12.507C15.8348 12.8488 15.8348 13.4039 15.493 13.7457C15.1512 14.0875 14.5961 14.0875 14.2543 13.7457L10.7926 10.2812C9.85195 10.9676 8.69258 11.375 7.4375 11.375C4.2957 11.375 1.75 8.8293 1.75 5.6875C1.75 2.5457 4.2957 0 7.4375 0C10.5793 0 13.125 2.5457 13.125 5.6875ZM7.4375 9.625C7.95458 9.625 8.4666 9.52315 8.94432 9.32528C9.42204 9.1274 9.8561 8.83736 10.2217 8.47173C10.5874 8.1061 10.8774 7.67204 11.0753 7.19432C11.2732 6.7166 11.375 6.20458 11.375 5.6875C11.375 5.17042 11.2732 4.6584 11.0753 4.18068C10.8774 3.70296 10.5874 3.2689 10.2217 2.90327C9.8561 2.53764 9.42204 2.2476 8.94432 2.04972C8.4666 1.85185 7.95458 1.75 7.4375 1.75C6.92042 1.75 6.4084 1.85185 5.93068 2.04972C5.45296 2.2476 5.0189 2.53764 4.65327 2.90327C4.28764 3.2689 3.9976 3.70296 3.79972 4.18068C3.60185 4.6584 3.5 5.17042 3.5 5.6875C3.5 6.20458 3.60185 6.7166 3.79972 7.19432C3.9976 7.67204 4.28764 8.1061 4.65327 8.47173C5.0189 8.83736 5.45296 9.1274 5.93068 9.32528C6.4084 9.52315 6.92042 9.625 7.4375 9.625Z" fill="white" />
                </svg>

              </div>
            </div>

            <div className="gap-6 hidden xl:flex items-center font-medium text-[#364153] text-[16px]">
              <NavigationMenuItem>
                <Link href="/" className=" hover:text-main-color">Home</Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/products" className=" hover:text-main-color">Shop</Link>
              </NavigationMenuItem>
              <NavigationMenuItem className="hidden md:flex">
                <NavigationMenuTrigger className={'flex items-center gap-1.5 text-gray-700 hover:text-main-color hover:bg-white! text-[16px] font-medium transition-colors py-2'}>Components</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-2 mt-1">
                    <Link className="block px-4 py-2.5 text-gray-600 hover:text-main-color! hover:bg-main-color/10!  transition-colors font-medium rounded" href="/categories">All Categories</Link>
                    <Link className="block px-4 py-2.5 text-gray-600 hover:text-main-color! hover:bg-main-color/10!  transition-colors font-medium rounded" href="/products?category=">Electronics</Link>
                    <Link className="block px-4 py-2.5 text-gray-600 hover:text-main-color! hover:bg-main-color/10!  transition-colors font-medium rounded" href="/products?category=">Women's Fashion</Link>
                    <Link className="block px-4 py-2.5 text-gray-600 hover:text-main-color! hover:bg-main-color/10!  transition-colors font-medium rounded" href="/products?category=">Men's Fashion</Link>
                    <Link className="block px-4 py-2.5 text-gray-600 hover:text-main-color! hover:bg-main-color/10!  transition-colors font-medium rounded" href="/products?category=">Beauty & Health</Link>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/brands" className=" hover:text-main-color">Brands</Link>
              </NavigationMenuItem>
            </div>

            <div className="flex items-center gap-1 lg:gap-2">

              <Link href="/contact" className="hidden lg:flex items-center gap-2 pr-3 mr-2 border-r border-[#E5E7EB] hover:opacity-80 transition-opacity">

                <div className="w-10 h-10 rounded-full bg-[#F0FDF4] flex items-center justify-center">
                  <svg className="text-main-color" width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 2C7.53125 2 5.47813 3.79062 5.07188 6.14687C5.3625 6.05312 5.675 6 6 6H6.5C7.32812 6 8 6.67188 8 7.5V10.5C8 11.3281 7.32812 12 6.5 12H6C4.34375 12 3 10.6562 3 9V7C3 3.13438 6.13438 0 10 0C13.8656 0 17 3.13438 17 7V12.2531C17 14.325 15.3188 16.0031 13.2469 16.0031L10.5 16H9.5C8.67188 16 8 15.3281 8 14.5C8 13.6719 8.67188 13 9.5 13H10.5C11.3281 13 12 13.6719 12 14.5H13.25C14.4937 14.5 15.5 13.4937 15.5 12.25V11.5969C15.0594 11.8531 14.5469 11.9969 14 11.9969H13.5C12.6719 11.9969 12 11.325 12 10.4969V7.49687C12 6.66875 12.6719 5.99687 13.5 5.99687H14C14.325 5.99687 14.6344 6.04688 14.9281 6.14375C14.5219 3.79063 12.4719 1.99688 10 1.99688V2Z" fill="#16A34A" />
                  </svg>

                </div>

                <div className="text-xs">
                  <div className="text-[#99A1AF] font-medium text-[12px]">Support</div>
                  <div className="text-[#364153] font-semibold text-[12px]">42/7 Help</div>
                </div>

              </Link>

              {/* Wishlist */}
              <Link
                href="/wishlist"
                className="relative p-2.5 rounded-full hover:bg-gray-100 transition-colors group/wishlist"
              >
                {data && wishList > 0 && <span className="absolute top-0.5 right-0.5 size-4.5 rounded-full bg-red-500 text-white text-[10px] font-bold flex items-center justify-center ring-2 ring-white">{wishList}</span>}
                <svg
                  className="text-[#6A7282] transition-colors group-hover/wishlist:text-main-color "
                  width="20"
                  height="18"
                  viewBox="0 0 20 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.8008 1.875C13.7344 1.875 12.7305 2.38672 12.1055 3.25L10.7617 5.10938C10.5859 5.35156 10.3047 5.49609 10.0039 5.49609C9.70312 5.49609 9.42188 5.35156 9.24609 5.10938L7.90234 3.25C7.27734 2.38672 6.27344 1.875 5.20703 1.875C3.37109 1.875 1.88281 3.36328 1.88281 5.19922C1.88281 7.14844 3.13281 9.04297 4.54297 10.7578C6.14844 12.7109 8.11328 14.4297 9.46094 15.457C9.58594 15.5508 9.76953 15.6211 10.0078 15.6211C10.2461 15.6211 10.4297 15.5508 10.5547 15.457C11.9023 14.4297 13.8672 12.707 15.4727 10.7578C16.8867 9.04297 18.1328 7.14844 18.1328 5.19922C18.1328 3.36328 16.6445 1.875 14.8086 1.875H14.8008ZM10.5859 2.15234C11.5625 0.800781 13.1328 0 14.8008 0C17.6719 0 20 2.32813 20 5.19922C20 7.87891 18.3242 10.2344 16.9102 11.9492C15.1875 14.043 13.1094 15.8594 11.6836 16.9453C11.2031 17.3125 10.6094 17.4961 10 17.4961C9.39062 17.4961 8.79688 17.3125 8.31641 16.9453C6.89062 15.8594 4.8125 14.043 3.08984 11.9531C1.67578 10.2383 0 7.87891 0 5.19922C0 2.32813 2.32813 0 5.19922 0C6.86719 0 8.4375 0.800781 9.41406 2.15234L10 2.96094L10.5859 2.15234Z"
                    fill="currentColor"
                  />
                </svg>
              </Link>

              {/* Cart */}
              <Link
                href="/cart"
                className="relative p-2.5 rounded-full hover:bg-gray-100 transition-colors group/cart"
              >
                {data && cart > 0 && <span className="absolute top-0.5 right-0.5 size-4.5 rounded-full bg-main-color text-white text-[10px] font-bold flex items-center justify-center ring-2 ring-white">{cart}</span>}
                <svg className="text-[#6A7282] transition-colors group-hover/cart:text-main-color" width="25" height="21" viewBox="0 0 25 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0.9375 0C0.417969 0 0 0.417969 0 0.9375C0 1.45703 0.417969 1.875 0.9375 1.875H2.70703C2.85938 1.875 2.98828 1.98438 3.01562 2.13281L5.05078 13.3164C5.29297 14.6523 6.45703 15.625 7.81641 15.625H17.8125C18.332 15.625 18.75 15.207 18.75 14.6875C18.75 14.168 18.332 13.75 17.8125 13.75H7.81641C7.36328 13.75 6.97656 13.4258 6.89453 12.9805L6.69531 11.875H18.5547C19.7578 11.875 20.7891 11.0195 21.0117 9.83594L22.2227 3.35547C22.3672 2.58594 21.7773 1.875 20.9922 1.875H4.87109L4.85547 1.79688C4.66797 0.757812 3.76172 0 2.70312 0H0.9375ZM8.125 20.625C8.62228 20.625 9.09919 20.4275 9.45083 20.0758C9.80246 19.7242 10 19.2473 10 18.75C10 18.2527 9.80246 17.7758 9.45083 17.4242C9.09919 17.0725 8.62228 16.875 8.125 16.875C7.62772 16.875 7.15081 17.0725 6.79917 17.4242C6.44754 17.7758 6.25 18.2527 6.25 18.75C6.25 19.2473 6.44754 19.7242 6.79917 20.0758C7.15081 20.4275 7.62772 20.625 8.125 20.625ZM16.875 20.625C17.3723 20.625 17.8492 20.4275 18.2008 20.0758C18.5525 19.7242 18.75 19.2473 18.75 18.75C18.75 18.2527 18.5525 17.7758 18.2008 17.4242C17.8492 17.0725 17.3723 16.875 16.875 16.875C16.3777 16.875 15.9008 17.0725 15.5492 17.4242C15.1975 17.7758 15 18.2527 15 18.75C15 19.2473 15.1975 19.7242 15.5492 20.0758C15.9008 20.4275 16.3777 20.625 16.875 20.625Z" fill="currentColor" />
                </svg>

              </Link>

              {data ? <DropdownMenu>
                <DropdownMenuTrigger className="relative p-2.5 rounded-full hover:bg-gray-100 transition-colors group/profile">

                  <svg
                    data-prefix="far"
                    data-icon="circle-user"
                    className="w-5 h-5 text-xl text-gray-500 group-hover/profile:text-main-color transition-colors"
                    role="img"
                    viewBox="0 0 512 512"
                    aria-hidden="true"
                  >
                    <path
                      fill="currentColor"
                      d="M406.5 399.6C387.4 352.9 341.5 320 288 320l-64 0c-53.5 0-99.4 32.9-118.5 79.6-35.6-37.3-57.5-87.9-57.5-143.6 0-114.9 93.1-208 208-208s208 93.1 208 208c0 55.7-21.9 106.2-57.5 143.6zm-40.1 32.7C334.4 452.4 296.6 464 256 464s-78.4-11.6-110.5-31.7c7.3-36.7 39.7-64.3 78.5-64.3l64 0c38.8 0 71.2 27.6 78.5 64.3zM256 512a256 256 0 1 0 0-512 256 256 0 1 0 0 512zm0-272a40 40 0 1 1 0-80 40 40 0 1 1 0 80zm-88-40a88 88 0 1 0 176 0 88 88 0 1 0 -176 0z"
                    />
                  </svg>
                </DropdownMenuTrigger>

                <DropdownMenuContent
                  align="end"
                  sideOffset={8}
                  className="w-64 rounded-xl border border-gray-100 bg-white p-0 shadow-xl font-medium scrollbar-hide overflow-y-auto"
                >
                  {/* User Info */}
                  <div className="p-4 border-b border-gray-100">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-main-color/10 flex items-center justify-center">
                        <svg
                          data-prefix="far"
                          data-icon="circle-user"
                          className="w-5 h-5 text-xl text-main-color"
                          role="img"
                          viewBox="0 0 512 512"
                          aria-hidden="true"
                        >
                          <path
                            fill="currentColor"
                            d="M406.5 399.6C387.4 352.9 341.5 320 288 320l-64 0c-53.5 0-99.4 32.9-118.5 79.6-35.6-37.3-57.5-87.9-57.5-143.6 0-114.9 93.1-208 208-208s208 93.1 208 208c0 55.7-21.9 106.2-57.5 143.6zm-40.1 32.7C334.4 452.4 296.6 464 256 464s-78.4-11.6-110.5-31.7c7.3-36.7 39.7-64.3 78.5-64.3l64 0c38.8 0 71.2 27.6 78.5 64.3zM256 512a256 256 0 1 0 0-512 256 256 0 0 0 0 512zm0-272a40 40 0 1 1 0-80 40 40 0 1 1 0 80zm-88-40a88 88 0 1 0 176 0 88 88 0 1 0 -176 0z"
                          />
                        </svg>
                      </div>

                      <div className="min-w-0">
                        <p className="text-sm font-semibold text-gray-800 truncate">
                          {data?.user?.name}
                        </p>
                        <p className="text-xs text-gray-400 truncate"></p>
                      </div>
                    </div>
                  </div>

                  {/* Links */}
                  <div className="py-2">
                    <Link
                      href="/profile/addresses"
                      className="flex items-center gap-3 px-4 py-2.5 text-sm text-gray-600 hover:text-main-color hover:bg-main-color/10 transition-colors"
                    >
                      <svg
                        data-prefix="far"
                        data-icon="user"
                        className="h-4 w-4 text-gray-400"
                        role="img"
                        viewBox="0 0 448 512"
                        aria-hidden="true"
                      >
                        <path
                          fill="currentColor"
                          d="M144 128a80 80 0 1 1 160 0 80 80 0 1 1 -160 0zm208 0a128 128 0 1 0 -256 0 128 128 0 1 0 256 0zM48 480c0-70.7 57.3-128 128-128l96 0c70.7 0 128 57.3 128 128l0 8c0 13.3 10.7 24 24 24s24-10.7 24-24l0-8c0-97.2-78.8-176-176-176l-96 0C78.8 304 0 382.8 0 480l0 8c0 13.3 10.7 24 24 24s24-10.7 24-24l0-8z"
                        />
                      </svg>
                      My Profile
                    </Link>

                    <Link
                      href="/orders"
                      className="flex items-center gap-3 px-4 py-2.5 text-sm text-gray-600 hover:text-main-color hover:bg-main-color/10 transition-colors"
                    >
                      <svg
                        data-prefix="fas"
                        data-icon="box-open"
                        className="h-4 w-4 text-gray-400"
                        role="img"
                        viewBox="0 0 640 512"
                        aria-hidden="true"
                      >
                        <path
                          fill="currentColor"
                          d="M560.3 237.2c10.4 11.8 28.3 14.4 41.8 5.5 14.7-9.8 18.7-29.7 8.9-44.4l-48-72c-2.8-4.2-6.6-7.7-11.1-10.2L351.4 4.7c-19.3-10.7-42.8-10.7-62.2 0L88.8 116c-4.5 2.5-8.3 6-11.1 10.2l-50 92.5c-12.6 23.4-3.8 52.5 19.6 65.1l33 17.7 0 53.3c0 23 12.4 44.3 32.4 55.7l176 99.7c19.6 11.1 43.5 11.1 63.1 0l176-99.7c20.1-11.4 32.4-32.6 32.4-55.7l0-117.5zm-240-9.8L170.2 144 320.3 60.6 470.4 144 320.3 227.4zm-41.5 50.2l-21.3 46.2-165.8-88.8 25.4-47.2 161.7 89.8z"
                        />
                      </svg>
                      My Orders
                    </Link>

                    <Link
                      href="/wishlist"
                      className="flex items-center gap-3 px-4 py-2.5 text-sm text-gray-600 hover:text-main-color hover:bg-main-color/10 transition-colors"
                    >
                      <svg
                        data-prefix="far"
                        data-icon="heart"
                        className="h-4 w-4 text-gray-400"
                        role="img"
                        viewBox="0 0 512 512"
                        aria-hidden="true"
                      >
                        <path
                          fill="currentColor"
                          d="M378.9 80c-27.3 0-53 13.1-69 35.2l-34.4 47.6c-4.5 6.2-11.7 9.9-19.4 9.9s-14.9-3.7-19.4-9.9l-34.4-47.6c-16-22.1-41.7-35.2-69-35.2-47 0-85.1 38.1-85.1 85.1 0 49.9 32 98.4 68.1 142.3 41.1 50 91.4 94 125.9 120.3 3.2 2.4 7.9 4.2 14 4.2s10.8-1.8 14-4.2c34.5-26.3 84.8-70.4 125.9-120.3 36.2-43.9 68.1-92.4 68.1-142.3 0-47-38.1-85.1-85.1-85.1zM271 87.1c25-34.6 65.2-55.1 107.9-55.1 73.5 0 133.1 59.6 133.1 133.1 0 68.6-42.9 128.9-79.1 172.8-44.1 53.6-97.3 100.1-133.8 127.9-12.3 9.4-27.5 14.1-43.1 14.1s-30.8-4.7-43.1-14.1C176.4 438 123.2 391.5 79.1 338 42.9 294.1 0 233.7 0 165.1 0 91.6 59.6 32 133.1 32 175.8 32 216 52.5 241 87.1l15 20.7 15-20.7z"
                        />
                      </svg>
                      My Wishlist
                    </Link>

                    <Link
                      href="/profile/addresses"
                      className="flex items-center gap-3 px-4 py-2.5 text-sm text-gray-600 hover:text-main-color hover:bg-main-color/10 transition-colors"
                    >
                      <svg
                        data-prefix="far"
                        data-icon="address-book"
                        className="h-4 w-4 text-gray-400"
                        role="img"
                        viewBox="0 0 512 512"
                        aria-hidden="true"
                      >
                        <path
                          fill="currentColor"
                          d="M384 48c8.8 0 16 7.2 16 16l0 384c0 8.8-7.2 16-16 16L96 464c-8.8 0-16-7.2-16-16L80 64c0-8.8 7.2-16 16-16l288 0zM96 0C60.7 0 32 28.7 32 64l0 384c0 35.3 28.7 64 64 64l288 0c35.3 0 64-28.7 64-64l0-384c0-35.3-28.7-64-64-64L96 0zM240 248a56 56 0 1 0 0-112 56 56 0 1 0 0 112zm-32 40c-44.2 0-80 35.8-80 80 0 8.8 7.2 16 16 16l192 0c8.8 0 16-7.2 16-16 0-44.2-35.8-80-80-80l-64 0zM512 80c0-8.8-7.2-16-16-16s-16 7.2-16 16l0 64c0 8.8 7.2 16 16 16s16-7.2 16-16l0-64zM496 192c-8.8 0-16 8.8-16 16l0 64c0 8.8 7.2 16 16 16s16-7.2 16-16l0-64zm16 144c0-8.8-7.2-16-16-16s-16 7.2-16 16l0 64c0 8.8 7.2 16 16 16s16-7.2 16-16l0-64z"
                        />
                      </svg>
                      Addresses
                    </Link>

                    <Link
                      href="/profile/settings"
                      className="flex items-center gap-3 px-4 py-2.5 text-sm text-gray-600 hover:text-main-color hover:bg-main-color/10 transition-colors"
                    >
                      <svg
                        data-prefix="fas"
                        data-icon="gear"
                        className="h-4 w-4 text-gray-400"
                        role="img"
                        viewBox="0 0 512 512"
                        aria-hidden="true"
                      >
                        <path
                          fill="currentColor"
                          d="M195.1 9.5C198.1-5.3 211.2-16 226.4-16l59.8 0c15.2 0 28.3 10.7 31.3 25.5L332 79.5c14.1 6 27.3 13.7 39.3 22.8l67.8-22.5c14.4-4.8 30.2 1.2 37.8 14.4l29.9 51.8c7.6 13.2 4.9 29.8-6.5 39.9L447 233.3c.9 7.4 1.3 15 1.3 22.7s-.5 15.3-1.3 22.7l53.4 47.5c11.4 10.1 14 26.8 6.5 39.9l-29.9 51.8c-7.6 13.1-23.4 19.2-37.8 14.4l-67.8-22.5c-12.1 9.1-25.3 16.7-39.3 22.8l-14.4 69.9c-3.1 14.9-16.2 25.5-31.3 25.5l-59.8 0c-15.2 0-28.3-10.7-31.3-25.5l-14.4-69.9c-14.1-6-27.2-13.7-39.3-22.8L73.5 432.3c-14.4 4.8-30.2-1.2-37.8-14.4L5.8 366.1c-7.6-13.2-4.9-29.8 6.5-39.9l53.4-47.5c-.9-7.4-1.3-15-1.3-22.7s.5-15.3-1.3-22.7L12.3 185.8c-11.4-10.1-14-26.8-6.5-39.9L35.7 94.1c7.6-13.2 23.4-19.2 37.8-14.4l67.8 22.5c12.1-9.1 25.3-16.7 39.3-22.8L195.1 9.5zM256.3 336a80 80 0 1 0 -.6-160 80 80 0 1 0 .6 160z"
                        />
                      </svg>
                      Settings
                    </Link>
                  </div>

                  {/* Sign Out */}
                  <div className="border-t border-gray-100 py-2">
                    <button className="flex items-center gap-3 px-4 py-2.5 text-sm text-red-500 hover:bg-red-50 transition-colors w-full text-left cursor-pointer" onClick={async () => {
                      await handelLogOut()
                      router.refresh()
                    }}>
                      <svg
                        data-prefix="fas"
                        data-icon="right-from-bracket"
                        className="h-4 w-4"
                        role="img"
                        viewBox="0 0 512 512"
                        aria-hidden="true"
                      >
                        <path
                          fill="currentColor"
                          d="M505 273c9.4-9.4 9.4-24.6 0-33.9L361 95c-6.9-6.9-17.2-8.9-26.2-5.2S320 102.3 320 112l0 80-112 0c-26.5 0-48 21.5-48 48l0 32c0 26.5 21.5 48 48 48l112 0 0 80c0 9.7 5.8 18.5 14.8 22.2s19.3 1.7 26.2-5.2L505 273zM160 96c17.7 0 32-14.3 32-32s-14.3-32-32-32L96 32C43 32 0 75 0 128L0 384c0 53 43 96 96 96l64 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-64 0c-17.7 0-32-14.3-32-32l0-256c0-17.7 14.3-32 32-32l64 0z"
                        />
                      </svg>
                      Sign Out
                    </button>
                  </div>
                </DropdownMenuContent>
              </DropdownMenu> :
                <Link href="/login">
                  <Button className="hidden ml-1 px-5 py-2.5 rounded-full bg-main-color hover:bg-main-color-hover text-white lg:flex items-center justify-center transition-colorsfont-semibold text-[14px] font-semibold">
                    <svg width="15" height="12" viewBox="0 0 15 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5.625 3C5.625 2.50272 5.82254 2.02581 6.17417 1.67417C6.52581 1.32254 7.00272 1.125 7.5 1.125C7.99728 1.125 8.47419 1.32254 8.82583 1.67417C9.17746 2.02581 9.375 2.50272 9.375 3C9.375 3.49728 9.17746 3.97419 8.82583 4.32583C8.47419 4.67746 7.99728 4.875 7.5 4.875C7.00272 4.875 6.52581 4.67746 6.17417 4.32583C5.82254 3.97419 5.625 3.49728 5.625 3ZM10.5 3C10.5 2.20435 10.1839 1.44129 9.62132 0.87868C9.05871 0.316071 8.29565 0 7.5 0C6.70435 0 5.94129 0.316071 5.37868 0.87868C4.81607 1.44129 4.5 2.20435 4.5 3C4.5 3.79565 4.81607 4.55871 5.37868 5.12132C5.94129 5.68393 6.70435 6 7.5 6C8.29565 6 9.05871 5.68393 9.62132 5.12132C10.1839 4.55871 10.5 3.79565 10.5 3ZM3.375 11.25C3.375 9.59297 4.71797 8.25 6.375 8.25H8.625C10.282 8.25 11.625 9.59297 11.625 11.25V11.4375C11.625 11.7492 11.8758 12 12.1875 12C12.4992 12 12.75 11.7492 12.75 11.4375V11.25C12.75 8.97188 10.9031 7.125 8.625 7.125H6.375C4.09688 7.125 2.25 8.97188 2.25 11.25V11.4375C2.25 11.7492 2.50078 12 2.8125 12C3.12422 12 3.375 11.7492 3.375 11.4375V11.25Z" fill="white" />
                    </svg>
                    Sign In
                  </Button>
                </Link>
              }

              {/* bars */}
              <button className="lg:hidden ml-1 w-10 h-10 rounded-full bg-main-color hover:bg-main-color text-white flex items-center justify-center transition-colors" onClick={() => handleOpenMenu()}>
                <svg data-prefix="fas" data-icon="bars" className="w-4 h-4" role="img" viewBox="0 0 448 512" aria-hidden="true"><path fill="currentColor" d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z"></path></svg>
              </button>

              {openMenu &&
                <div className="fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-white shadow-2xl transition-transform duration-300 overflow-y-auto translate-x-0">
                  {/* header */}
                  <div className="flex items-center justify-between p-4 border-b border-gray-100 bg-gray-50/50">
                    <Image src={logo} alt="FreshCart" loading="lazy" width="160" height="31" className="h-8 w-auto" />
                    <button className="w-9 h-9 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors" onClick={() => handleCloseMenu()}>
                      <svg data-prefix="fas" data-icon="xmark" className="w-3 h-3 text-gray-600" role="img" viewBox="0 0 384 512" aria-hidden="true"><path fill="currentColor" d="M55.1 73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L147.2 256 9.9 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192.5 301.3 329.9 438.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.8 256 375.1 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192.5 210.7 55.1 73.4z"></path></svg>
                    </button>
                  </div>
                  {/* search */}
                  <div className="p-4 border-b border-gray-100">
                    <div className="relative">
                      <input type="text" placeholder="Search products..." className="w-full px-4 py-3 pr-12 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-main-color/20 focus:border-main-coring-main-color text-sm" />
                      <button className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-lg bg-main-color text-white flex items-center justify-center">
                        <svg data-prefix="fas" data-icon="magnifying-glass" className="w-3 h-3 text-sm" role="img" viewBox="0 0 512 512" aria-hidden="true"><path fill="currentColor" d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376C296.3 401.1 253.9 416 208 416 93.1 416 0 322.9 0 208S93.1 0 208 0 416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"></path></svg>
                      </button>
                    </div>
                  </div>
                  {/* items */}
                  <div className="p-4">
                    <div className="space-y-1">
                      <Link href={'/'} className="flex items-center gap-3 px-4 py-3 rounded-xl font-medium text-gray-700 hover:text-main-color hover:bg-main-color/10 transition-colors">Home</Link>
                      <Link href={'/products'} className="flex items-center gap-3 px-4 py-3 rounded-xl font-medium text-gray-700 hover:text-main-color hover:bg-main-color/10 transition-colors">Shop</Link>
                      <Link href={'/categories'} className="flex items-center gap-3 px-4 py-3 rounded-xl font-medium text-gray-700 hover:text-main-color hover:bg-main-color/10 transition-colors">Categories</Link>
                      <Link href={'/brands'} className="flex items-center gap-3 px-4 py-3 rounded-xl font-medium text-gray-700 hover:text-main-color hover:bg-main-color/10 transition-colors">Brands</Link>
                    </div>
                  </div>
                  {/* border */}
                  <div className="mx-4 border-t border-gray-100"></div>
                  {/* Cart */}
                  <div className="p-4 space-y-1">
                    <Link href={'/wishlist'} className="flex items-center justify-between px-4 py-3 rounded-xl hover:bg-main-color/10 transition-colors">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-full bg-red-50 flex items-center justify-center">
                          <svg data-prefix="far" data-icon="heart" className="w-4 h-4 text-red-500" role="img" viewBox="0 0 512 512" aria-hidden="true"><path fill="currentColor" d="M378.9 80c-27.3 0-53 13.1-69 35.2l-34.4 47.6c-4.5 6.2-11.7 9.9-19.4 9.9s-14.9-3.7-19.4-9.9l-34.4-47.6c-16-22.1-41.7-35.2-69-35.2-47 0-85.1 38.1-85.1 85.1 0 49.9 32 98.4 68.1 142.3 41.1 50 91.4 94 125.9 120.3 3.2 2.4 7.9 4.2 14 4.2s10.8-1.8 14-4.2c34.5-26.3 84.8-70.4 125.9-120.3 36.2-43.9 68.1-92.4 68.1-142.3 0-47-38.1-85.1-85.1-85.1zM271 87.1c25-34.6 65.2-55.1 107.9-55.1 73.5 0 133.1 59.6 133.1 133.1 0 68.6-42.9 128.9-79.1 172.8-44.1 53.6-97.3 100.1-133.8 127.9-12.3 9.4-27.5 14.1-43.1 14.1s-30.8-4.7-43.1-14.1C176.4 438 123.2 391.5 79.1 338 42.9 294.1 0 233.7 0 165.1 0 91.6 59.6 32 133.1 32 175.8 32 216 52.5 241 87.1l15 20.7 15-20.7z"></path></svg>
                        </div>
                        <span className="font-medium text-gray-700">Wishlist</span>
                      </div>
                      {/* number of items */}
                      {data && wishList > 0 && 
                        <span className="bg-red-500 text-white text-xs font-bold px-2.5 py-1 rounded-full">{wishList}</span>
                      }
                    </Link>
                    <Link href={'/cart'} className="flex items-center justify-between px-4 py-3 rounded-xl hover:bg-primary-50 transition-colors">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-full bg-primary-50 flex items-center justify-center">
                          <svg data-prefix="fas" data-icon="cart-shopping" className="w-4 h-4 text-main-color" role="img" viewBox="0 0 640 512" aria-hidden="true"><path fill="currentColor" d="M24-16C10.7-16 0-5.3 0 8S10.7 32 24 32l45.3 0c3.9 0 7.2 2.8 7.9 6.6l52.1 286.3c6.2 34.2 36 59.1 70.8 59.1L456 384c13.3 0 24-10.7 24-24s-10.7-24-24-24l-255.9 0c-11.6 0-21.5-8.3-23.6-19.7l-5.1-28.3 303.6 0c30.8 0 57.2-21.9 62.9-52.2L568.9 69.9C572.6 50.2 557.5 32 537.4 32l-412.7 0-.4-2c-4.8-26.6-28-46-55.1-46L24-16zM208 512a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm224 0a48 48 0 1 0 0-96 48 48 0 1 0 0 96z"></path></svg>
                        </div>
                        <span className="font-medium text-gray-700">Cart</span>
                      </div>
                      {/* number of items */}
                      {data && cart > 0 && <span className="bg-main-color text-white text-xs font-bold px-2.5 py-1 rounded-full">{cart}</span>}
                    </Link>
                  </div>
                  {/* auth */}
                  <div className="p-4 space-y-1">
                    {data ? <>
                      <Link href={'/profile'} className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-main-color/10 transition-colors">
                        <div className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center">
                          <svg data-prefix="far" data-icon="user" className="w-4 h-4 text-gray-500" role="img" viewBox="0 0 448 512" aria-hidden="true"><path fill="currentColor" d="M144 128a80 80 0 1 1 160 0 80 80 0 1 1 -160 0zm208 0a128 128 0 1 0 -256 0 128 128 0 1 0 256 0zM48 480c0-70.7 57.3-128 128-128l96 0c70.7 0 128 57.3 128 128l0 8c0 13.3 10.7 24 24 24s24-10.7 24-24l0-8c0-97.2-78.8-176-176-176l-96 0C78.8 304 0 382.8 0 480l0 8c0 13.3 10.7 24 24 24s24-10.7 24-24l0-8z"></path></svg>
                        </div>
                        <span className="font-medium text-gray-700">{data?.user?.name}</span>
                      </Link>
                      <button className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-red-50 transition-colors w-full text-left">
                        <div className="w-9 h-9 rounded-full bg-red-50 flex items-center justify-center">
                          <svg data-prefix="fas" data-icon="right-from-bracket" className="w-4 h-4 text-red-500" role="img" viewBox="0 0 512 512" aria-hidden="true"><path fill="currentColor" d="M505 273c9.4-9.4 9.4-24.6 0-33.9L361 95c-6.9-6.9-17.2-8.9-26.2-5.2S320 102.3 320 112l0 80-112 0c-26.5 0-48 21.5-48 48l0 32c0 26.5 21.5 48 48 48l112 0 0 80c0 9.7 5.8 18.5 14.8 22.2s19.3 1.7 26.2-5.2L505 273zM160 96c17.7 0 32-14.3 32-32s-14.3-32-32-32L96 32C43 32 0 75 0 128L0 384c0 53 43 96 96 96l64 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-64 0c-17.7 0-32-14.3-32-32l0-256c0-17.7 14.3-32 32-32l64 0z"></path></svg>
                        </div>
                        <span className="font-medium text-red-600">Sign Out</span>
                      </button>
                    </> : <div className="grid grid-cols-2 gap-3 pt-2">
                      <Link href={'/login'} className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-main-color text-white font-semibold hover:bg-main-color-hover transition-colors">Sign In</Link>
                      <Link href={'/register'} className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl border-2 border-main-color text-main-color font-semibold hover:bg-main-color/10 transition-colors">Sign Up</Link>
                    </div>}


                  </div>

                  {/* help */}
                  <Link href={'/contact'} className="mx-4 mt-2 p-4 rounded-xl bg-gray-50 border border-gray-100 flex items-center gap-3 hover:bg-main-color/10 transition-colors">
                    <div className="w-10 h-10 rounded-full bg-main-color/10 flex items-center justify-center">
                      <svg data-prefix="fas" data-icon="headset" className="w-4 h-4 text-main-color" role="img" viewBox="0 0 448 512" aria-hidden="true"><path fill="currentColor" d="M224 64c-79 0-144.7 57.3-157.7 132.7 9.3-3 19.3-4.7 29.7-4.7l16 0c26.5 0 48 21.5 48 48l0 96c0 26.5-21.5 48-48 48l-16 0c-53 0-96-43-96-96l0-64C0 100.3 100.3 0 224 0S448 100.3 448 224l0 168.1c0 66.3-53.8 120-120.1 120l-87.9-.1-32 0c-26.5 0-48-21.5-48-48s21.5-48 48-48l32 0c26.5 0 48 21.5 48 48l0 0 40 0c39.8 0 72-32.2 72-72l0-20.9c-14.1 8.2-30.5 12.8-48 12.8l-16 0c-26.5 0-48-21.5-48-48l0-96c0-26.5 21.5-48 48-48l16 0c10.4 0 20.3 1.6 29.7 4.7-13-75.3-78.6-132.7-157.7-132.7z"></path></svg>
                    </div>
                    <div className="">
                      <div className="text-sm font-semibold text-gray-700">Need Help?</div>
                      <div className="text-sm text-main-color">Contact Support</div>
                    </div>
                  </Link>

                </div>
              }



            </div>



          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </nav>
  )
}


