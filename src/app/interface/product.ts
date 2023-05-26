export interface Product{
  productID: number;
  productName: string;
  productDesc: string;
  price: number;
  productImgURL: string; // this will upload the file url to the server
  productImageFile: File | null; // This will store the file object selected by the user
  quantityInStock: number;
  category: Category;

  //shoppingCarts: ShoppingCart[];
}

export interface Category{
  categoryName: string,
  categoryID: number,
  parentCategory: Category | null;
}

