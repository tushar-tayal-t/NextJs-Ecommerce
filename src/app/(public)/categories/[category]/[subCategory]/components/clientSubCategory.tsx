"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import SubCategoryCard from "@/components/subCategory/SubCategoryCard";

type subCategoryObjType = {
    id_sub_category?: number,
    id_category?: number,
    sub_category_name: string,
    image_url: string,
}
type SubCateogyType = {
    category?: string,
    subCategories: subCategoryObjType[]
}

export default function ClientCategoryElement({category, subCategories }: SubCateogyType) {
  const pathname = usePathname();
  if (!category) return <p>Category not found</p>;
  const segments = pathname.split("/").filter(Boolean);
  const activeSubCategory = decodeURIComponent(segments[2]);
  return (
    <div className="w-screen flex justify-center">
      <div 
        className="flex gap-10 lg:gap-14 flex-nowrap overflow-x-auto space-x-4 py-4 w-full max-w-[85%] small-scrollbar scroll-smooth"
        onWheel={(e) => {
          e.currentTarget.scrollLeft += e.deltaY;
        }}
      >
        {subCategories && subCategories.length > 0 ? (
          subCategories.map((sub) => {
          return <div className="flex" key={sub.id_category+sub.sub_category_name}>
              <Link
                href={`/categories/${category}/${sub.sub_category_name}`}
                className="flex-shrink-0 p-4 hover:shadow-md transition "
              >
                <SubCategoryCard subCategory = {sub} activeSubCategory = {activeSubCategory}/>
              </Link>
            </div>;
        })
        ) : (
          <p className="text-center text-white">No SubCategory Found</p>
        )}
      </div>
    </div>
  );
}