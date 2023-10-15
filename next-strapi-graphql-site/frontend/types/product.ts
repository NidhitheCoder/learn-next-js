// Category
interface ProductCategoryField {
  attributes: {
    name: string;
    color: string;
  };
}

type IProductCategory = {
  data: ProductCategoryField[];
};

// Seller
interface ProductSellerField {
  attributes: {
    name: string;
  };
}

type IProductSeller = {
  data: ProductSellerField;
};

// Image
interface ProductImageAttributes {
  attributes: {
    formats: {
      thumbnail: { url: string };
    };
  };
}

type IProductImage = {
  data: ProductImageAttributes;
};

// Product
export interface IProductIdentification {
  id: number;
}

export interface IProductFields {
  categories: IProductCategory;
  name: string;
  seller: IProductSeller;
  imageURL: IProductImage;
}

export interface IProductAttributes {
  attributes: Partial<IProductFields> & Pick<IProductFields, "name">;
}

export interface IProduct extends IProductIdentification, IProductAttributes {}
