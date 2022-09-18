export type Product = {
  name: string;
  brand: string;
  id: number;
};

export type ProductListDto = {
  data: {
    products: Product[];
  };
};
