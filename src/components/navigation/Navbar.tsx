import { getAllCategories } from "@/services/categoryService";
import { getDefaultSubCategoryNameByCategoryId } from "@/services/categoryService";
import NavbarClient from "./NavbarClient";

export default async function Navbar() {
  const categories = await getAllCategories();
  let finalCategory = await Promise.all(categories.map(async (cat) => {
    let defaultSubCategoryName = await getDefaultSubCategoryNameByCategoryId(cat.id_category);
    return {...cat, defaultSubCategory: defaultSubCategoryName};
    })
  );
  return (
    <NavbarClient categories={finalCategory}/>
  );
}