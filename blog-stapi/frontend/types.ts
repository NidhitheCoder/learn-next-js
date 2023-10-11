export interface BlogAttribute {
  createdAt: string;
  description: string;
  rating: number;
  title: string;
  updatedAt: string;
}

export interface Blog {
  id: number;
  attributes: BlogAttribute;
}
