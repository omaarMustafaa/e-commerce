'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ReactNode } from 'react';

interface SidebarLinkProps {
  href: string;
  children: ReactNode;
  icon: ReactNode;
}

export default function SidebarLink({ href, children, icon }: SidebarLinkProps) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group ${
        isActive
          ? 'bg-main-color/15 text-main-color font-semibold'
          : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
      }`}
    >
      <div
        className={`w-9 h-9 rounded-lg flex items-center justify-center transition-colors ${
          isActive
            ? 'bg-main-color text-white'
            : 'bg-gray-100 text-gray-500 group-hover:bg-gray-200'
        }`}
      >
        {icon}
      </div>
      <span className="font-medium flex-1">{children}</span>
      <svg
        data-prefix="fas"
        data-icon="chevron-right"
        className={`w-4 h-4 text-xs transition-transform ${
          isActive ? 'text-main-color' : 'text-gray-400'
        }`}
        role="img"
        viewBox="0 0 320 512"
        aria-hidden="true"
      >
        <path
          fill="currentColor"
          d="M311.1 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L243.2 256 73.9 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"
        ></path>
      </svg>
    </Link>
  );
}