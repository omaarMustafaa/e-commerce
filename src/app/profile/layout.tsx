
import PageHeader from '@/components/PageHeader/PageHeader';
import { ReactNode } from 'react';
import SidebarLink from './SidebarLink';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <><div className="bg-gray-50">

      <PageHeader
        Links={[]}
        pageName={'My Account'}
        iconPage={
          <svg data-prefix="fas" data-icon="user" className="w-10 h-10 text-3xl" role="img" viewBox="0 0 448 512" aria-hidden="true">
            <path fill="currentColor" d="M224 248a120 120 0 1 0 0-240 120 120 0 1 0 0 240zm-29.7 56C95.8 304 16 383.8 16 482.3 16 498.7 29.3 512 45.7 512l356.6 0c16.4 0 29.7-13.3 29.7-29.7 0-98.5-79.8-178.3-178.3-178.3l-59.4 0z"></path>
          </svg>
        }
        title={'My Account'}
        body={'Manage your addresses and account settings'}
        bg="bg-linear-to-br from-main-color via-[#22C55E] to-[#4ADE80]"
      />
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
          <aside className="w-full lg:w-72 shrink-0">
            <nav className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
              <div className="p-4 border-b border-gray-100">
                <h2 className="font-bold text-gray-900">My Account</h2>
              </div>
              <ul className="p-2 space-y-1">
                <li>
                  <SidebarLink
                    href="/profile/addresses"
                    icon={
                      <svg data-prefix="fas" data-icon="location-dot" className="w-4 h-4 text-sm" role="img" viewBox="0 0 384 512" aria-hidden="true">
                        <path fill="currentColor" d="M0 188.6C0 84.4 86 0 192 0S384 84.4 384 188.6c0 119.3-120.2 262.3-170.4 316.8-11.8 12.8-31.5 12.8-43.3 0-50.2-54.5-170.4-197.5-170.4-316.8zM192 256a64 64 0 1 0 0-128 64 64 0 1 0 0 128z"></path>
                      </svg>
                    }
                  >
                    My Addresses
                  </SidebarLink>
                </li>
                <li>
                  <SidebarLink
                    href="/profile/settings"
                    icon={
                      <svg data-prefix="fas" data-icon="gear" className="w-4 h-4 text-sm" role="img" viewBox="0 0 512 512" aria-hidden="true">
                        <path fill="currentColor" d="M195.1 9.5C198.1-5.3 211.2-16 226.4-16l59.8 0c15.2 0 28.3 10.7 31.3 25.5L332 79.5c14.1 6 27.3 13.7 39.3 22.8l67.8-22.5c14.4-4.8 30.2 1.2 37.8 14.4l29.9 51.8c7.6 13.2 4.9 29.8-6.5 39.9L447 233.3c.9 7.4 1.3 15 1.3 22.7s-.5 15.3-1.3 22.7l53.4 47.5c11.4 10.1 14 26.8 6.5 39.9l-29.9 51.8c-7.6 13.1-23.4 19.2-37.8 14.4l-67.8-22.5c-12.1 9.1-25.3 16.7-39.3 22.8l-14.4 69.9c-3.1 14.9-16.2 25.5-31.3 25.5l-59.8 0c-15.2 0-28.3-10.7-31.3-25.5l-14.4-69.9c-14.1-6-27.2-13.7-39.3-22.8L73.5 432.3c-14.4 4.8-30.2-1.2-37.8-14.4L5.8 366.1c-7.6-13.2-4.9-29.8 6.5-39.9l53.4-47.5c-.9-7.4-1.3-15-1.3-22.7s.5-15.3 1.3-22.7L12.3 185.8c-11.4-10.1-14-26.8-6.5-39.9L35.7 94.1c7.6-13.2 23.4-19.2 37.8-14.4l67.8 22.5c12.1-9.1 25.3-16.7 39.3-22.8L195.1 9.5zM256.3 336a80 80 0 1 0 -.6-160 80 80 0 1 0 .6 160z"></path>
                      </svg>
                    }
                  >
                    Settings
                  </SidebarLink>
                </li>
              </ul>
            </nav>
          </aside>

          <div className="flex-1 min-w-0">{children}</div>
        </div>
      </div>
    </div>
    </>
  );
}