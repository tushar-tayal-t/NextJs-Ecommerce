"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function NavbarClient({ categories }: { categories: any[] }) {
  const pathname = usePathname();
  const segments = pathname.split("/").filter(Boolean);
  let activeCategory = decodeURIComponent(segments[1]);
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="p-4 text-white">
      <div className="flex justify-between items-center p-2">
        <div className="lg:mx-5 font-normal text-[15px] lg:text-[20px] tracking-[0.55em]">
          <a href="/">TANN TRIM</a>
        </div>
        <div className="hidden sm:flex mx-5 gap-4">
          <img src="/svg/search.svg" className="cursor-pointer w-6 h-6" alt="search" />
          <img src="/svg/profile.svg" className="cursor-pointer w-6 h-6" alt="profile" />
          <img src="/svg/save.svg" className="cursor-pointer w-6 h-6" alt="save" />
          <img src="/svg/basket.svg" className="cursor-pointer w-6 h-6" alt="basket" />
        </div>
        <button
          className="sm:hidden flex flex-col gap-1 cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="block w-6 h-[2px] bg-white"></span>
          <span className="block w-6 h-[2px] bg-white"></span>
          <span className="block w-6 h-[2px] bg-white"></span>
        </button>
      </div>
      <div className="hidden lg:flex justify-center">
        <nav>
          <ul className="flex gap-4 lg:gap-8 h-10 lg:h-12">
            {categories.map((cat) => (
              <li key={cat.id_category} className={`transition-all duration-300 ${(cat.category_name == activeCategory) ? 'font-bold text-lg' : ''}`}>
                <Link href={`/categories/${cat.category_name}/${cat.defaultSubCategory}`}>
                  {cat.category_name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      {isOpen && (
        <div className="sm:hidden mt-4">
          <nav>
            <ul className="flex flex-col gap-4">
              {categories.map((cat) => (
                <li key={cat.id_category} className={`transition-all duration-300 ${(cat.category_name == activeCategory) ? 'font-bold text-lg' : ''}`}>
                  <Link
                    href={`/categories/${cat.category_name}/${cat.defaultSubCategory}`}
                    onClick={() => setIsOpen(false)}
                  >
                    {cat.category_name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="flex justify-around mt-4">
            <img src="/svg/search.svg" className="cursor-pointer w-6 h-6" alt="search" />
            <img src="/svg/profile.svg" className="cursor-pointer w-6 h-6" alt="profile" />
            <img src="/svg/save.svg" className="cursor-pointer w-6 h-6" alt="save" />
            <img src="/svg/basket.svg" className="cursor-pointer w-6 h-6" alt="basket" />
          </div>
        </div>
      )}   
      <div className="mt-5 lg:ms-10 lg:text-xl">{decodeURIComponent(segments[1])} &raquo; {decodeURIComponent(segments[2])}</div>
    </header>
  );
}
