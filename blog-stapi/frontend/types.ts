export interface BlogAttribute {
  createdAt: string;
  description: string;
  rating: number;
  title: string;
  updatedAt: string;
  slug: string;
}

export interface Blog {
  id: number;
  attributes: BlogAttribute;
}
