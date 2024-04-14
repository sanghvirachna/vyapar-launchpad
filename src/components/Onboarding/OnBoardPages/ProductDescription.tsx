import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setProductDetails } from '../../../redux/slice';
import { RootState } from '../../../redux/store';

const ProductDescription: React.FC = () => {
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.userInfo);
  const productDetails = useSelector((state: RootState) => state.userInfo.productDetails);
  const [description, setDescription] = useState('');

  const handleSave = () => {
    dispatch(setProductDetails({
      ...productDetails,
      description: description,
    }));
  };

  
  return (
    <div className="px-16 h-[20rem]">
      <h1 className="text-[#170F49] text-2xl mb-2 font-poppins font-bold">
        Product details
      </h1>
      <p className="text-[#6F6C90] font-poppins text-sm">
        Enter details of the product for listing.
      </p>
      <div className="mt-4 font-poppins">
        <label className="block text-[#170F49] text-md font-medium mb-2">
          Product Description
        </label>
        <textarea
          placeholder="Enter the description of the product"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          onBlur={handleSave}
          className="w-full border-2 border-[#EFF0F6] rounded-2xl h-44 px-4 py-4"
        />
      </div>
    </div>
  );
};

export default ProductDescription;