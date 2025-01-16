export type PRODUCT = {
  image: string;
  name: string;
  category: string;
  price: number;
  sold: number;
  profit: number;
};


export type Product = {
  _id: string;
  name: string;
  category: string;
  brand: string,
  price: number;
  offerPrice: number | null;
  description: string | null;
  isFeatured: boolean,
  stock: number;
  image: string;
}