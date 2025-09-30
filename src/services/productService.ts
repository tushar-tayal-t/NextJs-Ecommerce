import api from "./axiosInstance";
import {getCategoryIdByCategoryName} from "./categoryService";

type Product = {
  id_product: number,
  product_name: string,
  category_id?: number,
  sub_category_id: number,
  image_url: string,
  product_price:number
};

const products:Product[] = [
    { id_product: 1, product_name: "The Brown Metro Movers", category_id: 1, sub_category_id: 1, image_url: "/product_img/product1.png", product_price: 4899 },
    { id_product: 2, product_name: "The Metro Movers Black", category_id: 1, sub_category_id: 1, image_url: "/product_img/product2.png", product_price: 4899 },
    { id_product: 3, product_name: "The Metro Movers Black", category_id: 1, sub_category_id: 1, image_url: "/product_img/product3.png", product_price: 4899 },
    { id_product: 4, product_name: "The Metro Movers Black", category_id: 1, sub_category_id: 1, image_url: "/product_img/product4.png", product_price: 4899 },
    { id_product: 5, product_name: "The Brown Metro Movers", category_id: 1, sub_category_id: 1, image_url: "/product_img/product1.png", product_price: 4899 },
    { id_product: 6, product_name: "The Metro Movers Black", category_id: 1, sub_category_id: 1, image_url: "/product_img/product2.png", product_price: 4899 },
    { id_product: 7, product_name: "The Metro Movers Black", category_id: 1, sub_category_id: 1, image_url: "/product_img/product3.png", product_price: 4899 },
    { id_product: 8, product_name: "The Metro Movers Black", category_id: 1, sub_category_id: 1, image_url: "/product_img/product4.png", product_price: 4899 },
    { id_product: 9, product_name: "Beer 1", category_id: 2, sub_category_id: 9, image_url: "/product_img/beer.png", product_price: 4899 },
    { id_product: 10, product_name: "Beer 2", category_id: 2, sub_category_id: 9, image_url: "/product_img/beer.png", product_price: 4899 },
    { id_product: 11, product_name: "Lipstick 1", category_id: 3, sub_category_id: 10, image_url: "/product_img/lipstick.png", product_price: 4899 },
    { id_product: 12, product_name: "Lipstick 2", category_id: 3, sub_category_id: 10, image_url: "/product_img/lipstick.png", product_price: 4899 },
    { id_product: 13, product_name: "Ribbon 1", category_id: 4, sub_category_id: 11, image_url: "/product_img/ribbon.png", product_price: 4899 },
    { id_product: 14, product_name: "Ribbon 2", category_id: 4, sub_category_id: 11, image_url: "/product_img/ribbon.png", product_price: 4899 },
    { id_product: 17, product_name: "Vanity Bag 1", category_id: 1, sub_category_id: 2, image_url: "/product_img/vanitybag.png", product_price: 4899 },
    { id_product: 18, product_name: "Vanity Bag 2", category_id: 1, sub_category_id: 2, image_url: "/product_img/vanitybag.png", product_price: 4899 },
    { id_product: 19, product_name: "Tote Bag 1", category_id: 1, sub_category_id: 3, image_url: "/product_img/totebag.png", product_price: 4899 },
    { id_product: 20, product_name: "Tote Bag 2", category_id: 1, sub_category_id: 3, image_url: "/product_img/totebag.png", product_price: 4899 },
    { id_product: 21, product_name: "Duffle Bag 1", category_id: 1, sub_category_id: 4, image_url: "/product_img/dufflebag.png", product_price: 4899 },
    { id_product: 22, product_name: "Duffle Bag 2", category_id: 1, sub_category_id: 4, image_url: "/product_img/dufflebag.png", product_price: 4899 },
    { id_product: 23, product_name: "Laptop Sleeve 1", category_id: 1, sub_category_id: 5, image_url: "/product_img/laptopbag.png", product_price: 4899 },
    { id_product: 24, product_name: "Laptop Sleeve 2", category_id: 1, sub_category_id: 5, image_url: "/product_img/laptopbag.png", product_price: 4899 },
    { id_product: 25, product_name: "Messenger bag 1", category_id: 1, sub_category_id: 6, image_url: "/product_img/messengerbag.png", product_price: 4899 },
    { id_product: 26, product_name: "Messenger bag 2", category_id: 1, sub_category_id: 6, image_url: "/product_img/messengerbag.png", product_price: 4899 },
    { id_product: 27, product_name: "Slings Bag 1", category_id: 1, sub_category_id: 7, image_url: "/product_img/slingbag.png", product_price: 4899 },
    { id_product: 28, product_name: "Slings Bag 2", category_id: 1, sub_category_id: 7, image_url: "/product_img/slingbag.png", product_price: 4899 },
    { id_product: 29, product_name: "Hand bag 1", category_id: 1, sub_category_id: 8, image_url: "/product_img/handbag.png", product_price: 4899 },
    { id_product: 30, product_name: "Hand bag 2", category_id: 1, sub_category_id: 8, image_url: "/product_img/handbag.png", product_price: 4899 },
];

export async function updateProductsFromNetwork() {
    let totalProduct = products.length;
    try {
        const res = await api.get("/products");
        if (res.status == 200 && res.data.products && res.data.products.length > 0) {
            const networkData = res.data.products;
            for (const ele of networkData) {
              const catId = await getCategoryIdByCategoryName(ele.category);
              if (!products.find((val) => val.product_name === ele.title && catId === val.category_id)) {
                totalProduct++;
                products.push({id_product: totalProduct, product_name: ele.title, category_id: catId, sub_category_id: 0, image_url: ele.images[0], product_price: ele.price});
              }
            }
        }
    } catch(error: unknown) {
        if (error instanceof Error) {
            console.log("Error:", error.message);
        } else if (typeof error === "object" && error !== null && "response" in error) {
            const axiosError = error as { response?: { status: number } };
            console.log("Server error:", axiosError.response?.status);
        } else {
            console.log("Unknown error:", error);
        }
    }
}

export async function getProductsByCategoryId(category: number) {
  return products.filter((product) => product.category_id === category);
}

export async function getProductsByCategoryIdSubCategoryId(categoryId: number, subCategoryId: number) {
  await updateProductsFromNetwork();
  return products.filter((product) => product.category_id == categoryId && product.sub_category_id == subCategoryId);
}

export async function getDefaultSubCategoryProducts(categoryId: number) {
  await updateProductsFromNetwork();
  return products.filter((product) => product.category_id == categoryId);
}

export async function getProductById(id: number) {
  return products.find((product) => product.id_product === id);
}