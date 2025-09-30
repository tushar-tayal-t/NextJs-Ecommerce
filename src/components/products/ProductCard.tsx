type productObjType = {
  id_product: number,
  product_name: string,
  category_id?: number,
  sub_category_id?: number,
  image_url: string,
  product_price:number
}

export default function ProductCard({ product }: { product: productObjType }) {
  return (
    <div className="flex flex-col justify-between p-3 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className="relative">
        <img
          src="/product_img/save.svg"
          className="absolute top-6 right-2 lg:right-4 w-5 lg:w-6 cursor-pointer"
          alt="Save Product"
        />
      </div>
      <img
        src={product.image_url}
        className="w-full max-w-[220px] sm:max-w-[180px] lg:max-w-[200px] mx-auto object-contain"
        alt={product.product_name}
      />
      <h5 className="text-sm sm:text-base lg:text-lg font-semibold mt-2 text-white text-center truncate">
        {product.product_name}
      </h5>
      <div className="flex justify-between items-center mt-2 p-1 lg:p-2">
        <div className="text-left flex flex-wrap items-center gap-1">
          <span className="text-white text-sm lg:text-lg font-semibold">₹{product.product_price}</span>
          <span className="text-[10px] sm:text-xs line-through text-[#E5DFD9]">8999</span>
          <span className="text-[10px] sm:text-xs block lg:inline text-[#2FC14F]">(50% Off)</span>
        </div>
        <div>
          <img
            src="/product_img/add_to_cart.svg"
            className="w-6 lg:w-8 cursor-pointer"
            alt="Add to Cart"
          />
        </div>
      </div>
    </div>
  );
}
