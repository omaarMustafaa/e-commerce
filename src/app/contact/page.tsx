import PageHeader from "@/components/PageHeader/PageHeader";
import Link from "next/link";
import ContactForm from "./ContactForm";

export default function page() {
  return (
    <>
    <PageHeader pageName="Contact Us" title="Contact Us" body="We'd love to hear from you. Get in touch with our team." iconPage={<svg data-prefix="fas" data-icon="headset" className="w-8 h-8 text-3xl" role="img" viewBox="0 0 448 512" aria-hidden="true"><path fill="currentColor" d="M224 64c-79 0-144.7 57.3-157.7 132.7 9.3-3 19.3-4.7 29.7-4.7l16 0c26.5 0 48 21.5 48 48l0 96c0 26.5-21.5 48-48 48l-16 0c-53 0-96-43-96-96l0-64C0 100.3 100.3 0 224 0S448 100.3 448 224l0 168.1c0 66.3-53.8 120-120.1 120l-87.9-.1-32 0c-26.5 0-48-21.5-48-48s21.5-48 48-48l32 0c26.5 0 48 21.5 48 48l0 0 40 0c39.8 0 72-32.2 72-72l0-20.9c-14.1 8.2-30.5 12.8-48 12.8l-16 0c-26.5 0-48-21.5-48-48l0-96c0-26.5 21.5-48 48-48l16 0c10.4 0 20.3 1.6 29.7 4.7-13-75.3-78.6-132.7-157.7-132.7z"></path></svg>} bg="bg-linear-to-br from-main-color via-[#22C55E] to-[#4ADE80]"/>

    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">


        <div className="lg:col-span-1 space-y-6">

          <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-main-color/10 flex items-center justify-center shrink-0"><svg data-prefix="fas" data-icon="phone" className="w-4 h-4 text-main-color text-lg" role="img" viewBox="0 0 512 512" aria-hidden="true"><path fill="currentColor" d="M160.2 25C152.3 6.1 131.7-3.9 112.1 1.4l-5.5 1.5c-64.6 17.6-119.8 80.2-103.7 156.4 37.1 175 174.8 312.7 349.8 349.8 76.3 16.2 138.8-39.1 156.4-103.7l1.5-5.5c5.4-19.7-4.7-40.3-23.5-48.1l-97.3-40.5c-16.5-6.9-35.6-2.1-47 11.8l-38.6 47.2C233.9 335.4 177.3 277 144.8 205.3L189 169.3c13.9-11.3 18.6-30.4 11.8-47L160.2 25z"></path></svg></div>
              <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Phone</h3>
                  <p className="text-gray-500 text-sm mb-2">Mon-Fri from 8am to 6pm</p>
                  <a href="tel:+18001234567" className="text-main-color font-medium hover:underline">+1 (800) 123-4567</a>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-main-color/10 flex items-center justify-center shrink-0"><svg data-prefix="fas" data-icon="envelope" className="w-4 h-4 text-main-color text-lg" role="img" viewBox="0 0 512 512" aria-hidden="true"><path fill="currentColor" d="M48 64c-26.5 0-48 21.5-48 48 0 15.1 7.1 29.3 19.2 38.4l208 156c17.1 12.8 40.5 12.8 57.6 0l208-156c12.1-9.1 19.2-23.3 19.2-38.4 0-26.5-21.5-48-48-48L48 64zM0 196L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-188-198.4 148.8c-34.1 25.6-81.1 25.6-115.2 0L0 196z"></path></svg></div>
              <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                  <p className="text-gray-500 text-sm mb-2">We'll respond within 24 hours</p>
                  <a href="mailto:support@freshcart.com" className="text-main-color font-medium hover:underline">support@freshcart.com</a>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-main-color/10 flex items-center justify-center shrink-0"><svg data-prefix="fas" data-icon="location-dot" className="w-4 h-4 text-main-color text-lg" role="img" viewBox="0 0 384 512" aria-hidden="true"><path fill="currentColor" d="M0 188.6C0 84.4 86 0 192 0S384 84.4 384 188.6c0 119.3-120.2 262.3-170.4 316.8-11.8 12.8-31.5 12.8-43.3 0-50.2-54.5-170.4-197.5-170.4-316.8zM192 256a64 64 0 1 0 0-128 64 64 0 1 0 0 128z"></path></svg></div>
              <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Office</h3>
                  <p className="text-gray-500 text-sm mb-2">123 Commerce Street <br/>New York, NY 10001 <br/> United States</p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-main-color/10 flex items-center justify-center shrink-0"><svg data-prefix="fas" data-icon="clock" className="w-4 h-4 text-main-color text-lg" role="img" viewBox="0 0 512 512" aria-hidden="true"><path fill="currentColor" d="M256 0a256 256 0 1 1 0 512 256 256 0 1 1 0-512zM232 120l0 136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2 280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24z"></path></svg></div>
              <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Business Hours</h3>
                  <p className="text-gray-500 text-sm mb-2">Monday - Friday: 8am - 6pm<br/>Saturday: 9am - 4pm <br/>Sunday: Closed</p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm">
            <h3 className="font-semibold text-gray-900 mb-4">Follow Us</h3>
            <div className="flex items-center gap-3">
              <a href="https://www.facebook.com/omar.mostafa.751685/?locale=ar_AR" target="_blank" className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-main-color-hover hover:text-white transition-colors"><svg data-prefix="fab" data-icon="facebook-f" className="w-4 h-4" role="img" viewBox="0 0 320 512" aria-hidden="true"><path fill="currentColor" d="M80 299.3l0 212.7 116 0 0-212.7 86.5 0 18-97.8-104.5 0 0-34.6c0-51.7 20.3-71.5 72.7-71.5 16.3 0 29.4 .4 37 1.2l0-88.7C291.4 4 256.4 0 236.2 0 129.3 0 80 50.5 80 159.4l0 42.1-66 0 0 97.8 66 0z"></path></svg></a>
              
              <a href="https://www.x.com" target="_blank" className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-main-color-hover hover:text-white transition-colors"><svg data-prefix="fab" data-icon="twitter" className="w-4 h-4" role="img" viewBox="0 0 512 512" aria-hidden="true"><path fill="currentColor" d="M459.4 151.7c.3 4.5 .3 9.1 .3 13.6 0 138.7-105.6 298.6-298.6 298.6-59.5 0-114.7-17.2-161.1-47.1 8.4 1 16.6 1.3 25.3 1.3 49.1 0 94.2-16.6 130.3-44.8-46.1-1-84.8-31.2-98.1-72.8 6.5 1 13 1.6 19.8 1.6 9.4 0 18.8-1.3 27.6-3.6-48.1-9.7-84.1-52-84.1-103l0-1.3c14 7.8 30.2 12.7 47.4 13.3-28.3-18.8-46.8-51-46.8-87.4 0-19.5 5.2-37.4 14.3-53 51.7 63.7 129.3 105.3 216.4 109.8-1.6-7.8-2.6-15.9-2.6-24 0-57.8 46.8-104.9 104.9-104.9 30.2 0 57.5 12.7 76.7 33.1 23.7-4.5 46.5-13.3 66.6-25.3-7.8 24.4-24.4 44.8-46.1 57.8 21.1-2.3 41.6-8.1 60.4-16.2-14.3 20.8-32.2 39.3-52.6 54.3z"></path></svg></a>
              <a href="https://www.instagram.com/_omar_mustafaa/" target="_blank" className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-main-color-hover hover:text-white transition-colors"><svg data-prefix="fab" data-icon="instagram" className="w-4 h-4" role="img" viewBox="0 0 448 512" aria-hidden="true"><path fill="currentColor" d="M224.3 141a115 115 0 1 0 -.6 230 115 115 0 1 0 .6-230zm-.6 40.4a74.6 74.6 0 1 1 .6 149.2 74.6 74.6 0 1 1 -.6-149.2zm93.4-45.1a26.8 26.8 0 1 1 53.6 0 26.8 26.8 0 1 1 -53.6 0zm129.7 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM399 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path></svg></a>

              <a href="https://www.linkedin.com/in/omar-mostafa-586152384/" target="_blank" className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-main-color-hover hover:text-white transition-colors"><svg data-prefix="fab" data-icon="linkedin-in" className="w-4 h-4" role="img" viewBox="0 0 448 512" aria-hidden="true"><path fill="currentColor" d="M100.3 448l-92.9 0 0-299.1 92.9 0 0 299.1zM53.8 108.1C24.1 108.1 0 83.5 0 53.8 0 39.5 5.7 25.9 15.8 15.8s23.8-15.8 38-15.8 27.9 5.7 38 15.8 15.8 23.8 15.8 38c0 29.7-24.1 54.3-53.8 54.3zM447.9 448l-92.7 0 0-145.6c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7l0 148.1-92.8 0 0-299.1 89.1 0 0 40.8 1.3 0c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3l0 164.3-.1 0z"></path></svg></a>
            </div>
          </div>

        </div>

        <div className="lg:col-span-2">

          <div className="bg-white rounded-2xl border border-gray-100 p-6 lg:p-8 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-main-color/10 flex items-center justify-center">
              <svg data-prefix="fas" data-icon="headset" className="w-4 h-4 text-main-color text-lg" role="img" viewBox="0 0 448 512" aria-hidden="true"><path fill="currentColor" d="M224 64c-79 0-144.7 57.3-157.7 132.7 9.3-3 19.3-4.7 29.7-4.7l16 0c26.5 0 48 21.5 48 48l0 96c0 26.5-21.5 48-48 48l-16 0c-53 0-96-43-96-96l0-64C0 100.3 100.3 0 224 0S448 100.3 448 224l0 168.1c0 66.3-53.8 120-120.1 120l-87.9-.1-32 0c-26.5 0-48-21.5-48-48s21.5-48 48-48l32 0c26.5 0 48 21.5 48 48l0 0 40 0c39.8 0 72-32.2 72-72l0-20.9c-14.1 8.2-30.5 12.8-48 12.8l-16 0c-26.5 0-48-21.5-48-48l0-96c0-26.5 21.5-48 48-48l16 0c10.4 0 20.3 1.6 29.7 4.7-13-75.3-78.6-132.7-157.7-132.7z"></path></svg>
              </div>
              <div className="">
                <h2 className="text-xl font-bold text-gray-900">Send us a Message</h2>
                <p className="text-gray-500 text-sm">Fill out the form and we'll get back to you</p>
              </div>
            </div>

            {/* Form */}
            <ContactForm/>

          </div>


          <div className="mt-6 bg-main-color/15 rounded-2xl p-6 border border-primary-100">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center shrink-0 shadow-sm">
                <svg data-prefix="fas" data-icon="circle-question" className="w-4 h-4 text-main-color text-xl" role="img" viewBox="0 0 512 512" aria-hidden="true"><path fill="currentColor" d="M256 512a256 256 0 1 0 0-512 256 256 0 1 0 0 512zm0-336c-17.7 0-32 14.3-32 32 0 13.3-10.7 24-24 24s-24-10.7-24-24c0-44.2 35.8-80 80-80s80 35.8 80 80c0 47.2-36 67.2-56 74.5l0 3.8c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-8.1c0-20.5 14.8-35.2 30.1-40.2 6.4-2.1 13.2-5.5 18.2-10.3 4.3-4.2 7.7-10 7.7-19.6 0-17.7-14.3-32-32-32zM224 368a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"></path></svg>
              </div>
              <div className="">
                <h3 className="font-semibold text-gray-900 mb-1">Looking for quick answers?</h3>
                <p className="text-gray-600 text-sm mb-3">Check out our Help Center for frequently asked questions about orders, shipping, returns, and more.</p>
                <Link href={'/help'} className="text-main-color font-medium text-sm hover:underline inline-flex items-center gap-1">Visit Help Center →</Link>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>

    </>
  )
}
