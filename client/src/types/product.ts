export default interface Product {
  id: number;
  media: {
    id: number;
    media: string;
    product: number;
  }[];
  variants: {
    attribute: string;
  }[];
  category: {
    name: string;
    url: string;
  };
  name: string;
  url: string;
  short_description: string;
  description: string;
  price_start_at: boolean;
  price: number;
  price_offer: number;
  service: boolean;
  show_online: boolean;
}
