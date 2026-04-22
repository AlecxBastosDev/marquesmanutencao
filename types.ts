
export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  specifications?: string[];
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  priceEstimate?: string;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}
