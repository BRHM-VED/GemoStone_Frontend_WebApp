export interface Product {
  id: string;
  name: string;
  price: string;
  imageUrl: string;
  certified?: boolean;
}

export interface NavItem {
  id: string;
  label: string;
  imageUrl: string;
  imageWidth: number;
  imageHeight: number;
  active?: boolean;
}

export interface Category {
  id: string;
  label: string;
}
