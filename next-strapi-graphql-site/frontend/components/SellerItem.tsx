import { useState } from "react";
import { ISeller } from "@/types/sellet";

interface SellerItemProps {
  seller: ISeller;
}

const SellerItem = ({ seller }: SellerItemProps) => {
  const [shouldExpand, setShouldExpand] = useState(false);
  const onItemClick = () => {
    if (shouldExpand) return;
    setShouldExpand(true);
  };
  const onCloseButtonClick = () => {
    if (!shouldExpand) return;
    setShouldExpand(false);
  };
  const sellerAttributes = seller.attributes;

  return (
    <>
      <div
        onClick={onItemClick}
        className="flex flex-col justify-center items-center p-6 bg-slate-700 border-2 border-solid border-slate-900 rounded max-h-fit"
      >
        <p>{sellerAttributes.TINNo}</p>
        <p>{sellerAttributes.name}</p>
        <p>{sellerAttributes.address}</p>
        <p>{sellerAttributes.contactNumber}</p>
      </div>
      {shouldExpand && (
        <div className="absolute inset-0 min-h-screen">
          <div className="bg-slate-700 rounded-lg p-8 h-3/4 w-3/4 m-auto">
            <div className="flex flex-row justify-between">
              <p>{sellerAttributes.name}</p>
              <button onClick={onCloseButtonClick}>X</button>
            </div>
            <p>{sellerAttributes.address}</p>
            <p>{sellerAttributes.contactNumber}</p>
            <p className="font-bold underline">Details</p>
            <p>{sellerAttributes.details}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default SellerItem;
