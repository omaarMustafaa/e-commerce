import Link from "next/link";
import logo from "@/assets/images/freshcart-logo.svg"
import Image from "next/image";
export default function Footer() {
  return (
    <>
      <section className="bg-[#F0FDF4] py-6 border-y border-[#DCFCE7]">

        <div className="container mx-auto grid md:grid-cols-4 gap-4">

          <div
            className=" p-4 flex gap-4"
          >

            <div className="bg-[#DCFCE7] w-12 h-12 rounded-[12px] flex items-center justify-center">
              <svg width="25" height="20" viewBox="0 0 25 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.25 3.75C1.25 2.37109 2.37109 1.25 3.75 1.25H15C16.3789 1.25 17.5 2.37109 17.5 3.75V5H19.4805C20.1445 5 20.7812 5.26172 21.25 5.73047L23.0195 7.5C23.4883 7.96875 23.75 8.60547 23.75 9.26953V15C23.75 16.3789 22.6289 17.5 21.25 17.5H21.1211C20.7148 18.9414 19.3867 20 17.8125 20C16.2383 20 14.9141 18.9414 14.5039 17.5H10.4961C10.0898 18.9414 8.76172 20 7.1875 20C5.61328 20 4.28906 18.9414 3.87891 17.5H3.75C2.37109 17.5 1.25 16.3789 1.25 15V3.75ZM21.25 11.25V9.26953L19.4805 7.5H17.5V11.25H21.25ZM8.75 16.5625C8.75 16.1481 8.58538 15.7507 8.29235 15.4576C7.99933 15.1646 7.6019 15 7.1875 15C6.7731 15 6.37567 15.1646 6.08265 15.4576C5.78962 15.7507 5.625 16.1481 5.625 16.5625C5.625 16.9769 5.78962 17.3743 6.08265 17.6674C6.37567 17.9604 6.7731 18.125 7.1875 18.125C7.6019 18.125 7.99933 17.9604 8.29235 17.6674C8.58538 17.3743 8.75 16.9769 8.75 16.5625ZM17.8125 18.125C18.2269 18.125 18.6243 17.9604 18.9174 17.6674C19.2104 17.3743 19.375 16.9769 19.375 16.5625C19.375 16.1481 19.2104 15.7507 18.9174 15.4576C18.6243 15.1646 18.2269 15 17.8125 15C17.3981 15 17.0007 15.1646 16.7076 15.4576C16.4146 15.7507 16.25 16.1481 16.25 16.5625C16.25 16.9769 16.4146 17.3743 16.7076 17.6674C17.0007 17.9604 17.3981 18.125 17.8125 18.125Z" fill="#00BC7D" />
              </svg>

            </div>

            <div className="">
              <h3 className="font-semibold text-[#1E2939] text-sm">Free Shipping</h3>
              <p className="text-xs text-gray-500">On orders over 500 EGP</p>
            </div>

          </div>

          <div
            className=" p-4 flex gap-4"
          >

            <div className="bg-[#DCFCE7] w-12 h-12 rounded-[12px] flex items-center justify-center">
              <svg width="25" height="20" viewBox="0 0 25 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.5 2.5C10.2812 2.5 8.28516 3.46484 6.91016 5H8.75C9.44141 5 10 5.55859 10 6.25C10 6.94141 9.44141 7.5 8.75 7.5H3.75C3.05859 7.5 2.5 6.94141 2.5 6.25V1.25C2.5 0.558594 3.05859 0 3.75 0C4.44141 0 5 0.558594 5 1.25V3.38672C6.83203 1.3125 9.51172 0 12.5 0C18.0234 0 22.5 4.47656 22.5 10C22.5 15.5234 18.0234 20 12.5 20C9.10156 20 6.09766 18.3047 4.29297 15.7148C3.89844 15.1484 4.03516 14.3711 4.60156 13.9727C5.16797 13.5742 5.94531 13.7148 6.34375 14.2812C7.70312 16.2266 9.95312 17.4961 12.5 17.4961C16.6406 17.4961 20 14.1367 20 9.99609C20 5.85547 16.6406 2.5 12.5 2.5Z" fill="#00BC7D" />
              </svg>

            </div>

            <div className="">
              <h3 className="font-semibold text-[#1E2939] text-sm">Easy Returns</h3>
              <p className="text-xs text-gray-500">14-day return policy</p>
            </div>

          </div>

          <div
            className="p-4 flex gap-4 "
          >

            <div className="bg-[#DCFCE7] w-12 h-12 rounded-[12px] flex items-center justify-center">
              <svg width="25" height="20" viewBox="0 0 25 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.5 0C12.6797 0 12.8594 0.0390625 13.0235 0.113281L20.3828 3.23438C21.2422 3.59766 21.8828 4.44531 21.8789 5.46875C21.8594 9.34375 20.2656 16.4336 13.5352 19.6562C12.8828 19.9688 12.125 19.9688 11.4727 19.6562C4.7383 16.4336 3.14846 9.34375 3.12892 5.46875C3.12502 4.44531 3.76564 3.59766 4.62502 3.23438L11.9805 0.113281C12.1445 0.0390625 12.3203 0 12.5 0ZM12.5 2.60938V17.3789C17.8906 14.7695 19.3399 8.98828 19.375 5.52734L12.5 2.61328V2.60938Z" fill="#00BC7D" />
              </svg>


            </div>

            <div className="">
              <h3 className="font-semibold text-[#1E2939] text-sm">Secure Payment</h3>
              <p className="text-xs text-gray-500">100% secure transactions</p>
            </div>

          </div>



          <div
            className="p-4 flex gap-4 "
          >

            <div className="bg-[#DCFCE7] w-12 h-12 rounded-[12px] flex items-center justify-center">
              <svg width="25" height="20" viewBox="0 0 25 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.5 2.5C9.41406 2.5 6.84766 4.73828 6.33984 7.68359C6.70313 7.56641 7.09375 7.5 7.5 7.5H8.125C9.16016 7.5 10 8.33984 10 9.375V13.125C10 14.1602 9.16016 15 8.125 15H7.5C5.42969 15 3.75 13.3203 3.75 11.25V8.75C3.75 3.91797 7.66797 0 12.5 0C17.332 0 21.25 3.91797 21.25 8.75V15.3164C21.25 17.9062 19.1484 20.0039 16.5586 20.0039L13.125 20H11.875C10.8398 20 10 19.1602 10 18.125C10 17.0898 10.8398 16.25 11.875 16.25H13.125C14.1602 16.25 15 17.0898 15 18.125H16.5625C18.1172 18.125 19.375 16.8672 19.375 15.3125V14.4961C18.8242 14.8164 18.1836 14.9961 17.5 14.9961H16.875C15.8398 14.9961 15 14.1562 15 13.1211V9.37109C15 8.33594 15.8398 7.49609 16.875 7.49609H17.5C17.9062 7.49609 18.293 7.55859 18.6602 7.67969C18.1523 4.73828 15.5898 2.49609 12.5 2.49609V2.5Z" fill="#00BC7D" />
              </svg>



            </div>

            <div className="">
              <h3 className="font-semibold text-[#1E2939] text-sm">24/7 Support</h3>
              <p className="text-xs text-gray-500">Dedicated support team</p>
            </div>

          </div>


        </div>
      </section>
      <footer className="bg-[#101828] text-white">

        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">

            <div className="lg:col-span-4">
              <Link href="/" className="inline-block mb-6">
                <div className="bg-white rounded-lg px-4 py-2 inline-block">
                  <Image src={logo} alt="logo" />
                </div>
              </Link>
              <p className="text-gray-400 mb-6 text-sm leading-relaxed">FreshCart is your one-stop destination for quality products. From fashion to electronics, we bring you the best brands at competitive prices with a seamless shopping experience.</p>
              <div className="space-y-3 mb-6">
                <a href="tel:+18001234567" className="flex items-center gap-3 text-gray-400 hover:text-main-color transition-colors text-sm">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.37836 0.683926C4.16235 0.16713 3.59907 -0.106308 3.06313 0.0386139L2.91274 0.0796295C1.14633 0.56088 -0.363044 2.2726 0.0771907 4.35619C1.09164 9.14135 4.85688 12.9066 9.64203 13.921C11.7284 14.364 13.4373 12.8519 13.9186 11.0855L13.9596 10.9351C14.1073 10.3964 13.8311 9.83315 13.317 9.61986L10.6565 8.51244C10.2053 8.32377 9.68305 8.45502 9.37133 8.8351L8.31586 10.1257C6.3936 9.17143 4.84594 7.57455 3.95727 5.614L5.16586 4.62963C5.54594 4.32065 5.67446 3.79838 5.48852 3.34447L4.37836 0.683926Z" fill="#22C55E" />
                  </svg>
                  <span>+1 (800) 123-4567</span>
                </a>
                <a href="mailto:support@freshcart.com" className="flex items-center gap-3 text-gray-400 hover:text-main-color transition-colors text-sm">
                  <svg width="14" height="11" viewBox="0 0 14 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.3125 0C0.587891 0 0 0.587891 0 1.3125C0 1.72539 0.194141 2.11367 0.525 2.3625L6.2125 6.62812C6.68008 6.97812 7.31992 6.97812 7.7875 6.62812L13.475 2.3625C13.8059 2.11367 14 1.72539 14 1.3125C14 0.587891 13.4121 0 12.6875 0H1.3125ZM0 3.60938V8.75C0 9.71523 0.784766 10.5 1.75 10.5H12.25C13.2152 10.5 14 9.71523 14 8.75V3.60938L8.575 7.67812C7.64258 8.37812 6.35742 8.37812 5.425 7.67812L0 3.60938Z" fill="#22C55E" />
                  </svg>
                  <span>support@freshcart.com</span>
                </a>
                <div className="flex items-start gap-3 text-gray-400 text-sm">
                  <svg width="18" height="15" viewBox="0 0 18 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3.50005 5.15703C3.50005 2.30781 5.85161 0 8.75005 0C11.6485 0 14 2.30781 14 5.15703C14 8.41914 10.7133 12.3293 9.34067 13.8195C9.01802 14.1695 8.47935 14.1695 8.15669 13.8195C6.78403 12.3293 3.49731 8.41914 3.49731 5.15703H3.50005ZM8.75005 7C9.21418 7 9.6593 6.81563 9.98749 6.48744C10.3157 6.15925 10.5 5.71413 10.5 5.25C10.5 4.78587 10.3157 4.34075 9.98749 4.01256C9.6593 3.68437 9.21418 3.5 8.75005 3.5C8.28592 3.5 7.8408 3.68437 7.51261 4.01256C7.18442 4.34075 7.00005 4.78587 7.00005 5.25C7.00005 5.71413 7.18442 6.15925 7.51261 6.48744C7.8408 6.81563 8.28592 7 8.75005 7Z" fill="#22C55E" />
                  </svg>

                  <span>123 Commerce Street, New York, NY 10001</span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <a href="https://www.facebook.com/omar.mostafa.751685/?locale=ar_AR" target="_blank" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-main-color hover:text-white transition-colors"><svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2.0625 9.35312V16H5.6875V9.35312H8.39062L8.95312 6.29688H5.6875V5.21562C5.6875 3.6 6.32188 2.98125 7.95938 2.98125C8.46875 2.98125 8.87813 2.99375 9.11563 3.01875V0.246875C8.66875 0.125 7.575 0 6.94375 0C3.60312 0 2.0625 1.57812 2.0625 4.98125V6.29688H0V9.35312H2.0625Z" fill="#99A1AF" />
                </svg>
                </a>
                <a href="https://x.com/" target="_blank" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-main-color hover:text-white transition-colors"><svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16.3562 4.74062C16.3656 4.88125 16.3656 5.025 16.3656 5.16563C16.3656 9.5 13.0656 14.4969 7.03438 14.4969C5.175 14.4969 3.45 13.9594 2 13.025C2.2625 13.0562 2.51875 13.0656 2.79062 13.0656C4.325 13.0656 5.73438 12.5469 6.8625 11.6656C5.42188 11.6344 4.2125 10.6906 3.79688 9.39062C4 9.42188 4.20312 9.44063 4.41563 9.44063C4.70938 9.44063 5.00312 9.4 5.27813 9.32812C3.775 9.025 2.65 7.70312 2.65 6.10938V6.06875C3.0875 6.3125 3.59375 6.46562 4.13125 6.48438C3.24687 5.89687 2.66875 4.89062 2.66875 3.75312C2.66875 3.14375 2.83125 2.58437 3.11563 2.09687C4.73125 4.0875 7.15625 5.3875 9.87813 5.52812C9.82812 5.28437 9.79688 5.03125 9.79688 4.77812C9.79688 2.97187 11.2594 1.5 13.075 1.5C14.0188 1.5 14.8719 1.89687 15.4719 2.53437C16.2125 2.39375 16.925 2.11875 17.5531 1.74375C17.3094 2.50625 16.7906 3.14375 16.1125 3.55C16.7719 3.47812 17.4125 3.29688 18 3.04375C17.5531 3.69375 16.9937 4.27187 16.3562 4.74062Z" fill="#99A1AF" />
                </svg>
                </a>
                <a href="https://www.instagram.com/_omar_mustafaa/" target="_blank" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-main-color hover:text-white transition-colors"><svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7.00547 3.41172C6.53353 3.41049 6.06597 3.50222 5.62949 3.68169C5.193 3.86115 4.79614 4.12483 4.46156 4.45767C3.78584 5.12988 3.40483 6.04297 3.40234 6.99609C3.39986 7.94922 3.7761 8.86429 4.4483 9.54C5.1205 10.2157 6.0336 10.5967 6.98672 10.5992C7.93984 10.6017 8.85491 10.2255 9.53063 9.55326C10.2063 8.88106 10.5874 7.96797 10.5898 7.01484C10.5923 6.06172 10.2161 5.14665 9.54389 4.47093C8.87169 3.79522 7.95859 3.41421 7.00547 3.41172ZM6.98672 4.67422C7.29286 4.67299 7.59625 4.73207 7.87956 4.84809C8.16288 4.96411 8.42056 5.13479 8.63791 5.3504C8.85525 5.566 9.02801 5.82231 9.1463 6.10468C9.26459 6.38705 9.32611 6.68995 9.32734 6.99609C9.32858 7.30224 9.2695 7.60563 9.15348 7.88894C9.03746 8.17225 8.86677 8.42993 8.65117 8.64728C8.43556 8.86463 8.17925 9.03738 7.89689 9.15567C7.61452 9.27397 7.31161 9.33549 7.00547 9.33672C6.69932 9.33795 6.39594 9.27887 6.11262 9.16285C5.82931 9.04683 5.57163 8.87615 5.35428 8.66054C5.13693 8.44493 4.96418 8.18863 4.84589 7.90626C4.72759 7.62389 4.66607 7.32099 4.66484 7.01484C4.66361 6.7087 4.72269 6.40531 4.83871 6.122C4.95473 5.83869 5.12542 5.581 5.34102 5.36366C5.55663 5.14631 5.81293 4.97356 6.0953 4.85526C6.37767 4.73697 6.68057 4.67545 6.98672 4.67422ZM9.90547 3.26484C9.90547 3.04272 9.9937 2.8297 10.1508 2.67264C10.3078 2.51558 10.5209 2.42734 10.743 2.42734C10.9651 2.42734 11.1781 2.51558 11.3352 2.67264C11.4922 2.8297 11.5805 3.04272 11.5805 3.26484C11.5805 3.48696 11.4922 3.69998 11.3352 3.85705C11.1781 4.01411 10.9651 4.10234 10.743 4.10234C10.5209 4.10234 10.3078 4.01411 10.1508 3.85705C9.9937 3.69998 9.90547 3.48696 9.90547 3.26484ZM13.9586 4.11484C13.9055 2.99297 13.6492 1.99922 12.8273 1.18047C12.0086 0.361719 11.0148 0.105469 9.89297 0.0492187C8.73672 -0.0164062 5.27109 -0.0164062 4.11484 0.0492187C2.99609 0.102344 2.00234 0.358594 1.18047 1.17734C0.358594 1.99609 0.105469 2.98984 0.0492187 4.11172C-0.0164062 5.26797 -0.0164062 8.73359 0.0492187 9.88984C0.102344 11.0117 0.358594 12.0055 1.18047 12.8242C2.00234 13.643 2.99297 13.8992 4.11484 13.9555C5.27109 14.0211 8.73672 14.0211 9.89297 13.9555C11.0148 13.9023 12.0086 13.6461 12.8273 12.8242C13.6461 12.0055 13.9023 11.0117 13.9586 9.88984C14.0242 8.73359 14.0242 5.27109 13.9586 4.11484ZM12.4648 11.1305C12.2211 11.743 11.7492 12.2148 11.1336 12.4617C10.2117 12.8273 8.02422 12.743 7.00547 12.743C5.98672 12.743 3.79609 12.8242 2.87734 12.4617C2.26484 12.218 1.79297 11.7461 1.54609 11.1305C1.18047 10.2086 1.26484 8.02109 1.26484 7.00234C1.26484 5.98359 1.18359 3.79297 1.54609 2.87422C1.78984 2.26172 2.26172 1.78984 2.87734 1.54297C3.79922 1.17734 5.98672 1.26172 7.00547 1.26172C8.02422 1.26172 10.2148 1.18047 11.1336 1.54297C11.7461 1.78672 12.218 2.25859 12.4648 2.87422C12.8305 3.79609 12.7461 5.98359 12.7461 7.00234C12.7461 8.02109 12.8305 10.2117 12.4648 11.1305Z" fill="#99A1AF" />
                </svg>

                </a>
                <a href="https://www.youtube.com/" target="_blank" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-main-color hover:text-white transition-colors"><svg width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16.7094 1.87812C16.5156 1.1375 15.9344 0.55625 15.2 0.359375C13.8719 0 8.53438 0 8.53438 0C8.53438 0 3.19687 0 1.86562 0.359375C1.13125 0.55625 0.553125 1.1375 0.35625 1.87812C0 3.21875 0 6.0125 0 6.0125C0 6.0125 0 8.80625 0.35625 10.1469C0.553125 10.8844 1.13125 11.4438 1.86562 11.6406C3.19687 12 8.53438 12 8.53438 12C8.53438 12 13.8719 12 15.2031 11.6406C15.9375 11.4438 16.5156 10.8844 16.7125 10.1469C17.0688 8.80625 17.0688 6.0125 17.0688 6.0125C17.0688 6.0125 17.0688 3.21875 16.7125 1.87812H16.7094ZM6.7875 8.55V3.475L11.2469 6.0125L6.7875 8.55Z" fill="#99A1AF" />
                </svg>
                </a>
              </div>
            </div>

            <div className="lg:col-span-2">
              <h3 className="font-semibold text-lg mb-5">Shop</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/products" className="text-gray-400 hover:text-main-color transition-colors text-sm">All Products</Link>
                </li>
                <li>
                  <Link href="/categories" className="text-gray-400 hover:text-main-color transition-colors text-sm">Categories</Link>
                </li>
                <li>
                  <Link href="/brands" className="text-gray-400 hover:text-main-color transition-colors text-sm">Brands</Link>
                </li>
                <li>
                  <Link href="/categories" className="text-gray-400 hover:text-main-color transition-colors text-sm">Electronics</Link>
                </li>
                <li>
                  <Link href="/categories" className="text-gray-400 hover:text-main-color transition-colors text-sm">Men's Fashion</Link>
                </li>
                <li>
                  <Link href="/categories" className="text-gray-400 hover:text-main-color transition-colors text-sm">Women's Fashion</Link>
                </li>
              </ul>
            </div>


            <div className="lg:col-span-2">
              <h3 className="font-semibold text-lg mb-5">Account</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/profile/addresses" className="text-gray-400 hover:text-main-color transition-colors text-sm">My Account</Link>
                </li>
                <li>
                  <Link href="/orders" className="text-gray-400 hover:text-main-color transition-colors text-sm">Order History</Link>
                </li>
                <li>
                  <Link href="/wishlist" className="text-gray-400 hover:text-main-color transition-colors text-sm">Wishlist</Link>
                </li>
                <li>
                  <Link href="/cart" className="text-gray-400 hover:text-main-color transition-colors text-sm">Shopping Cart</Link>
                </li>
                <li>
                  <Link href="/login" className="text-gray-400 hover:text-main-color transition-colors text-sm">Sign In</Link>
                </li>
                <li>
                  <Link href="/register" className="text-gray-400 hover:text-main-color transition-colors text-sm">Create Account</Link>
                </li>
              </ul>
            </div>

            <div className="lg:col-span-2">
              <h3 className="font-semibold text-lg mb-5">Support</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/contact" className="text-gray-400 hover:text-main-color transition-colors text-sm">Contact Us</Link>
                </li>
                <li>
                  <Link href="/help" className="text-gray-400 hover:text-main-color transition-colors text-sm">Help Center</Link>
                </li>
                <li>
                  <Link href="/wishlist" className="text-gray-400 hover:text-main-color transition-colors text-sm">Shipping Info</Link>
                </li>
                <li>
                  <Link href="/returns" className="text-gray-400 hover:text-main-color transition-colors text-sm">Returns & Refunds</Link>
                </li>
                <li>
                  <Link href="/login" className="text-gray-400 hover:text-main-color transition-colors text-sm">Track Order</Link>
                </li>
              </ul>
            </div>

            <div className="lg:col-span-2">
              <h3 className="font-semibold text-lg mb-5">Legal</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/privacy" className="text-gray-400 hover:text-main-color transition-colors text-sm">Privacy Policy</Link>
                </li>
                <li>
                  <Link href="/terms" className="text-gray-400 hover:text-main-color transition-colors text-sm">Terms of Service</Link>
                </li>
                <li>
                  <Link href="/wishlist" className="text-gray-400 hover:text-main-color transition-colors text-sm">Cookie Policy</Link>
                </li>
              </ul>
            </div>


          </div>
        </div>


        <div className="border-t border-gray-800">
          <div className="container mx-auto px-4 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-gray-500 text-sm text-center md:text-left">© 2026 FreshCart. All rights reserved.</p>
              <div className="flex items-center gap-4">

                <div className="flex items-center gap-2 text-gray-500 text-sm">
                  <svg width="14" height="11" viewBox="0 0 14 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 1.75V2.625H14V1.75C14 0.784766 13.2152 0 12.25 0H1.75C0.784766 0 0 0.784766 0 1.75ZM0 3.9375V8.75C0 9.71523 0.784766 10.5 1.75 10.5H12.25C13.2152 10.5 14 9.71523 14 8.75V3.9375H0ZM1.75 8.09375C1.75 7.73008 2.04258 7.4375 2.40625 7.4375H3.71875C4.08242 7.4375 4.375 7.73008 4.375 8.09375C4.375 8.45742 4.08242 8.75 3.71875 8.75H2.40625C2.04258 8.75 1.75 8.45742 1.75 8.09375ZM5.6875 8.09375C5.6875 7.73008 5.98008 7.4375 6.34375 7.4375H8.09375C8.45742 7.4375 8.75 7.73008 8.75 8.09375C8.75 8.45742 8.45742 8.75 8.09375 8.75H6.34375C5.98008 8.75 5.6875 8.45742 5.6875 8.09375Z" fill="#6A7282" />
                  </svg>

                  <span>Visa</span>
                </div>

                <div className="flex items-center gap-2 text-gray-500 text-sm">
                  <svg width="14" height="11" viewBox="0 0 14 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 1.75V2.625H14V1.75C14 0.784766 13.2152 0 12.25 0H1.75C0.784766 0 0 0.784766 0 1.75ZM0 3.9375V8.75C0 9.71523 0.784766 10.5 1.75 10.5H12.25C13.2152 10.5 14 9.71523 14 8.75V3.9375H0ZM1.75 8.09375C1.75 7.73008 2.04258 7.4375 2.40625 7.4375H3.71875C4.08242 7.4375 4.375 7.73008 4.375 8.09375C4.375 8.45742 4.08242 8.75 3.71875 8.75H2.40625C2.04258 8.75 1.75 8.45742 1.75 8.09375ZM5.6875 8.09375C5.6875 7.73008 5.98008 7.4375 6.34375 7.4375H8.09375C8.45742 7.4375 8.75 7.73008 8.75 8.09375C8.75 8.45742 8.45742 8.75 8.09375 8.75H6.34375C5.98008 8.75 5.6875 8.45742 5.6875 8.09375Z" fill="#6A7282" />
                  </svg>

                  <span>Mastercard</span>
                </div>

                <div className="flex items-center gap-2 text-gray-500 text-sm">
                  <svg width="14" height="11" viewBox="0 0 14 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 1.75V2.625H14V1.75C14 0.784766 13.2152 0 12.25 0H1.75C0.784766 0 0 0.784766 0 1.75ZM0 3.9375V8.75C0 9.71523 0.784766 10.5 1.75 10.5H12.25C13.2152 10.5 14 9.71523 14 8.75V3.9375H0ZM1.75 8.09375C1.75 7.73008 2.04258 7.4375 2.40625 7.4375H3.71875C4.08242 7.4375 4.375 7.73008 4.375 8.09375C4.375 8.45742 4.08242 8.75 3.71875 8.75H2.40625C2.04258 8.75 1.75 8.45742 1.75 8.09375ZM5.6875 8.09375C5.6875 7.73008 5.98008 7.4375 6.34375 7.4375H8.09375C8.45742 7.4375 8.75 7.73008 8.75 8.09375C8.75 8.45742 8.45742 8.75 8.09375 8.75H6.34375C5.98008 8.75 5.6875 8.45742 5.6875 8.09375Z" fill="#6A7282" />
                  </svg>

                  <span>PayPal</span>
                </div>

              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
