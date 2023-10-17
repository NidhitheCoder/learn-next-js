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
        className="flex flex-col justify-center items-start p-6 bg-slate-700 border-2 border-solid border-slate-900 rounded max-h-fit gap-1"
      >
        <p className="text-2xl font-bold">{sellerAttributes.name}</p>
        <p>{sellerAttributes.address}</p>
        {sellerAttributes.contactNumber && (
          <p>{`Ph No: ${sellerAttributes.contactNumber}`}</p>
        )}
      </div>
      {shouldExpand && (
        <div className="absolute inset-0 min-h-screen flex justify-center items-center bg-slate-800/60">
          <div className="bg-slate-700 rounded p-8 h-3/4 w-3/5 m-auto overflow-y-auto overflow-x-hidden">
            <div className="flex flex-row justify-between">
              <p className="font-bold text-2xl mb-4 capitalize">{sellerAttributes.name}</p>
              <button className="font-bold h-full" onClick={onCloseButtonClick}>
                X
              </button>
            </div>
            <p className="capitalize">{sellerAttributes.address}</p>
            <p>Phone Number: {sellerAttributes.contactNumber}</p>
            <p className="font-bold underline mt-4">Details</p>
            <p>{sellerAttributes.details}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default SellerItem;
