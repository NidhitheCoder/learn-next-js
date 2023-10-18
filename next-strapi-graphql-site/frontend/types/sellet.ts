export interface ISellerFields {
  name: string;
  address: string;
  contactNumber: number;
  TINNo: string;
  details: string;
}

export interface ISellerAttributes {
  attributes: Partial<ISellerFields> &
    Pick<ISellerFields, "name" | "address" | "contactNumber">;
}

export interface ISellerIdentification {
  id: number;
}

export interface ISeller extends ISellerIdentification, ISellerAttributes {}
