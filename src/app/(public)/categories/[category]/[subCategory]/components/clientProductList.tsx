"use client"
import ProductCard from "@/components/products/ProductCard";
import Link from "next/link";
type productObjType = {
    id_product: number,
    product_name: string,
    category_id?: number,
    sub_category_id?: number,
    image_url: string,
    product_price:number
}
 
export default function ClientProductElement({products}: {products: productObjType[]}) {
  if (!products) return <p>Products Not found not found</p>;
  return (
    <div className="flex justify-center items-center">
      <div className="grid grid-cols-2 lg:grid-cols-4 lg:gap-10">
        {products && products.length > 0 ? (
          products.map((product) => {
          return <div key={product.id_product+`${product.product_name}`}>
              <Link href="#">
                <ProductCard product = {product}/>
              </Link>
            </div>;
        })
        ) : (
          <p>No Product Found</p>
        )}
      </div>
    </div>
  );
}