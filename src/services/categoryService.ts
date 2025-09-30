import api from "./axiosInstance";

type category = {
    id_category: number,
    category_name: string,
}

type subCategory = {
    id_sub_category: number,
    id_category:number,
    sub_category_name: string,
    image_url: string,
}

type Product = {
    id: number;
    title: string;
    description: string;
    category: string;
    price: number;
    discountPercentage: number;
    rating: number;
    stock: number;
    tags: string[];
    brand: string;
    sku: string;
    weight: number;
    dimensions: {
        width: number;
        height: number;
        depth: number;
    };
    warrantyInformation: string;
    shippingInformation: string;
    availabilityStatus: string;
    reviews: Array<{
        rating: number;
        comment: string;
        date: string;
        reviewerName: string;
        reviewerEmail: string;
    }>;
    returnPolicy: string;
    minimumOrderQuantity: number;
    meta: {
        createdAt: string;
        updatedAt: string;
        barcode: string;
        qrCode: string;
    };
    images: string[];
    thumbnail: string;
};

const Category:category[] = [
    {id_category: 1, category_name: 'Bags'},
    {id_category: 2, category_name: 'Travel'},
    {id_category: 3, category_name: 'Accessories'},
    {id_category: 4, category_name: 'Gifting'},
];

const SubCategory:subCategory[] = [
    {id_sub_category: 1, id_category: 1, sub_category_name: "All Bags", image_url: '/icons/bag1.png'},
    {id_sub_category: 2, id_category: 1, sub_category_name: "Vanity Pouch", image_url: '/icons/bag2.png'},
    {id_sub_category: 3, id_category: 1, sub_category_name: "Tote Bag", image_url: '/icons/bag3.png'},
    {id_sub_category: 4, id_category: 1, sub_category_name: "Duffle Bag", image_url: '/icons/bag4.png'},
    {id_sub_category: 5, id_category: 1, sub_category_name: "Laptop Sleeve", image_url: '/icons/bag5.png'},
    {id_sub_category: 6, id_category: 1, sub_category_name: "Messenger Bags", image_url: '/icons/bag6.png'},
    {id_sub_category: 7, id_category: 1, sub_category_name: "Slings Bags", image_url: '/icons/bag7.png'},
    {id_sub_category: 8, id_category: 1, sub_category_name: "Handbags", image_url: '/icons/bag8.png'},
    {id_sub_category: 9, id_category: 2, sub_category_name: "Beer", image_url: '/icons/beer.jpg'},
    {id_sub_category: 10, id_category: 3, sub_category_name: "Makeup", image_url: '/icons/makeup1.png'},
    {id_sub_category: 11, id_category: 4, sub_category_name: "Ribbons", image_url: '/icons/gifting.png'},
];

export async function updateCategorySubCategoryByNetwork() {
    let totalCategory = Category.length;
    let totalSubCategory = SubCategory.length;
    try {
         const response = await fetch("https://dummyjson.com/products");

        if (response.status === 200) {
            const data = await response.json();

            if (data.products && data.products.length > 0) {
                data.products.map((cat: Product) => {
                    if (!Category.find((val) => val.category_name === cat.category)) {
                        totalCategory++;
                        totalSubCategory++;
                        Category.push({ id_category: totalCategory, category_name: cat.category });
                        SubCategory.push({
                            id_sub_category: 0,
                            id_category: totalCategory,
                            sub_category_name: 'Default Subcategory',
                            image_url: '/not_found_img/no_category.png',
                        });
                    }
                });
            }
        } else {
            console.error("Failed to fetch data: ", response.statusText);
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

export async function getAllCategories() {
    await updateCategorySubCategoryByNetwork();
    return Category;
}

export async function getAllSubCategoryByCategoryId(idCategory:number) {
    return SubCategory.filter((subCat)=> subCat.id_category == idCategory)
}

export async function getDefaultSubCategoryNameByCategoryId(idCategory:number) {
    return SubCategory.find((subCat)=> subCat.id_category == idCategory)?.sub_category_name;
}

export async function getSubCategoryIdBySubCategoryName(subCategory:string) {
    return SubCategory.find((subCat)=> subCat.sub_category_name == subCategory)?.id_sub_category;
}

export async function getCategoryIdByCategoryName(categoryName:string) {
    return Category.find((cat)=> cat.category_name == categoryName)?.id_category;
}
