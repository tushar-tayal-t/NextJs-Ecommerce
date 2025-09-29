type SubCategoryCardProps = {
  subCategory: {
    id_sub_category?: number,
    id_category?: number,
    sub_category_name?: string,
    image_url?: string
  },
  activeSubCategory:string
};

export default function SubCategoryCard({subCategory, activeSubCategory}: SubCategoryCardProps) {
  return (
    <div 
      className={`flex flex-col items-center justify-center ${
        (activeSubCategory == subCategory.sub_category_name) ? 'scale-125 transition-all duration-300' : ''}
      `}>
      <img src={`${subCategory.image_url}`} className="w-[50px] lg:w-[80px] rounded-xl" alt="Category Image"/>
      <h5 className={`text-[10px] lg:text-sm font-semibold mt-2 text-white text-center ${(activeSubCategory == subCategory.sub_category_name) ? 'font-extrabold':''}`}>{subCategory.sub_category_name}</h5>
    </div>
  );
}
