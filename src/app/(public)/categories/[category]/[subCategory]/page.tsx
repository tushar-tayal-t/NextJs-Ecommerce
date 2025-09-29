import { updateCategorySubCategoryByNetwork, getCategoryIdByCategoryName, getAllSubCategoryByCategoryId, getSubCategoryIdBySubCategoryName } from "@/services/categoryService";
import { getProductsByCategoryIdSubCategoryId, getDefaultSubCategoryProducts } from "@/services/productService";
import ClientSubCategory from "./components/clientSubCategory";
import ClientProductList from "./components/clientProductList";

export default async function CategoryPage({ params }: { params: { category: string, subCategory:string } }) {
  await updateCategorySubCategoryByNetwork();
  let { category, subCategory }  = await params;
  subCategory = decodeURIComponent(subCategory);
  category = decodeURIComponent(category);
  const categoryId = await getCategoryIdByCategoryName(category);
  const subCategoryId = await getSubCategoryIdBySubCategoryName(subCategory);
  const subCategories = categoryId ? await getAllSubCategoryByCategoryId(categoryId) : [];
  let categorySubCategoryProducts = [];
  if (subCategoryId == 1 && categoryId == 1) {
    categorySubCategoryProducts = (categoryId)? await getDefaultSubCategoryProducts(categoryId) : [];
  } else {
    categorySubCategoryProducts = (categoryId && (subCategoryId || subCategoryId == 0))? await getProductsByCategoryIdSubCategoryId(categoryId, subCategoryId) : [];
  }
  return (<>
      <div className="flex justify-center">
        <ClientSubCategory category = {category} categoryId={categoryId} subCategories={subCategories} />
      </div>
      <div className="my-3 lg:my-5 lg:p-10"> 
        <ClientProductList products = {categorySubCategoryProducts}/>
      </div>
    </>
  );
}

