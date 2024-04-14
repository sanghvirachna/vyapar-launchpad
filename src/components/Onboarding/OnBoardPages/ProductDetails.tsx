import React, { ChangeEvent } from 'react';
 // assuming RootState is defined in your Redux setup

const ProductDetails: React.FC = () => {
  
  let products: string[] = [];

  const handleProductChange = (event: ChangeEvent<HTMLInputElement>, productIndex: number) => {
    products[productIndex] = event.target.value;
  };

  const handleBlur = () => {
    
  };

  return (
    <div className='px-16'>
      <h1 className="text-[#170F49] text-2xl mb-2 font-poppins font-bold">Product details</h1>
      <p className="text-[#6F6C90] font-poppins text-md">Enter details of the product for listing.</p>
      <div className='mt-4 font-poppins'>
        <label className="block  text-[#170F49] text-md font-medium mb-2">Product Title </label>
        <input placeholder="Enter your product title..." className="w-full border-2 border-[#EFF0F6] rounded-2xl px-4 py-2" onChange={(event) => handleProductChange(event, 0)} onBlur={handleBlur} />
        <label className="block  text-[#170F49] text-md font-medium mb-2 mt-4">Pricing  </label>
        <input placeholder="Enter pricing of the product." className="w-full border-2 border-[#EFF0F6] rounded-2xl px-4 py-2" onChange={(event) => handleProductChange(event, 1)} onBlur={handleBlur} />
      </div>
    </div>
  );
};

export default ProductDetails;
