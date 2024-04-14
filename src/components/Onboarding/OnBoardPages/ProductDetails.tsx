import React, { ChangeEvent ,useEffect,useState} from 'react';
import { useDispatch ,useSelector} from 'react-redux';
import { setProductDetails } from '../../../redux/slice';
import { RootState } from '../../../redux/store';

const ProductDetails: React.FC = () => {
  const dispatch = useDispatch();
  const [productTitle, setProductTitle] = useState('');
const [productPricing, setProductPricing] = useState(0);



const handleSave = () => {
  dispatch(setProductDetails({
    title: productTitle,
    pricing: productPricing,
    description: '', // set to empty string by default
    variations: '', // set to empty array by default
    images: [], // set to empty array by default
  }));
 
};

  return (
    <div className='px-16'>
      <h1 className="text-[#170F49] text-2xl mb-2 font-poppins font-bold">Product details</h1>
      <p className="text-[#6F6C90] font-poppins text-md">Enter details of the product for listing.</p>
      <div className='mt-4 font-poppins'>
        <label className="block  text-[#170F49] text-md font-medium mb-2">Product Title </label>
        <input
  placeholder="Enter your product title..."
  value={productTitle}
  onChange={(event) => setProductTitle(event.target.value)}
  onBlur={handleSave}
  className="w-full border-2 border-[#EFF0F6] rounded-2xl px-4 py-2"
/>
        <label className="block  text-[#170F49] text-md font-medium mb-2 mt-4">Pricing  </label>
        <input
  placeholder="Enter pricing of the product."
  value={productPricing}
  onChange={(event) => setProductPricing(Number(event.target.value))}
  onBlur={handleSave}
  className="w-full border-2 border-[#EFF0F6] rounded-2xl px-4 py-2"
/>
      </div>
    </div>
  );
};

export default ProductDetails;
