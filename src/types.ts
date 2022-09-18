export type Picture = {
  id: number;
  medium: string;
};

export type Product = {
  brand: string;
  caption: string;
  id: number;
  name: string;
  pictures: Picture[];
  price: number;
};

export type ProductListDto = {
  data: {
    products: Product[];
  };
};
