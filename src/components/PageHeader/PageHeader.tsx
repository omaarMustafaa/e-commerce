import Link from "next/link";
import React, { ReactNode } from "react";

interface PageHeaderProps {
  Links?: ReactNode[];
  pageName: string;
    iconPage?: ReactNode,
    title : string,
    body : string,
    bg: string
}

export default function PageHeader({
  Links,
  pageName,
  iconPage,
  title,
  body,
  bg
}: PageHeaderProps) {
  return (
    <div className={`${bg} text-white`}>
      <div className="container mx-auto px-4 py-10 sm:py-14">
        {/* Links */}
        <div className="flex items-center gap-2 text-sm text-white/70 mb-6 flex-wrap">
          <Link
            href="/"
            className="hover:text-white transition-colors font-medium"
          >
            Home
          </Link>
          {Links?.map(e => (e))}
          {/* target page */}
          <span className="text-white font-medium flex gap-2">
          <div className="text-white/40 font-medium">/</div>
            {pageName}
          </span>
        </div>
        {/* Content */}
        <div className="flex items-center gap-5">
            <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center shadow-xl ring-1 ring-white/30">
            {iconPage}
            </div>
            <div className="">
                <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">{title}</h1>
                <p className="text-white/80 mt-1">{body}</p>
            </div>
        </div>
      </div>
    </div>
  );
}