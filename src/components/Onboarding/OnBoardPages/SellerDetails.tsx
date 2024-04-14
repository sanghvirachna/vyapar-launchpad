import React, { useState } from 'react';
import Ecom from '../../../images/Onboarding/contact.svg';
import mail from '../../../images/Onboarding/mail.svg';
import Marketing from '../../../images/Onboarding/call.svg';
import Company from '../../../images/Onboarding/company.svg';
import { useDispatch, useSelector } from 'react-redux';
import { setSellerDetails } from '../../../redux/slice';
import { RootState } from '../../../redux/store';

const SellerDetails = () => {
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.userInfo);
  const [shopName, setShopName] = useState('');
  const [sellerState, setSellerState] = useState('');
  const [productLanguage, setProductLanguage] = useState('');
  const [productCategory, setProductCategory] = useState('');

  const handleSave = () => {
    dispatch(
      setSellerDetails({
        name: shopName,
        state: sellerState,
        language: productLanguage,
        category: productCategory,
      }),
    );
    console.log(user)
  };
  return (
    <div className="px-16 h-[20rem] ">
      <h1 className="text-[#170F49] text-2xl mb-2 font-poppins font-bold">
        Seller’s Detail
      </h1>
      <p className="text-[#6F6C90] font-poppins text-sm">
        {' '}
        Enter your virtual shop’s details.
      </p>
      <div className="flex font-poppins mt-8">
        <div className="w-3/4 relative">
          <label className="block text-[#170F49] text-sm font-medium mb-2">
            Shop Name
          </label>
          <div className="relative">
            <input
              type="text"
              placeholder="Aditya Mishra"
              value={shopName}
              onChange={(e) => setShopName(e.target.value)}
              onBlur={handleSave}
              className="w-full border-2 border-[#EFF0F6] rounded-3xl px-4 py-2"
            />
            <img
              src={Ecom}
              alt="Ecom"
              className="absolute top-1/2 transform -translate-y-1/2 right-4 h-6 w-5"
            />
          </div>
        </div>
        <div className="w-3/4 ml-4 relative">
          <label className="block text-[#170F49] text-sm font-medium mb-2">
            Seller’s state{' '}
          </label>
          <div className="relative">
            <input
              type="text"
              placeholder="Enter your state"
              value={sellerState}
              onBlur={handleSave}
              onChange={(e) => setSellerState(e.target.value)}
              className="w-full border-2 border-[#EFF0F6] rounded-3xl px-4 py-2"
            />
            <img
              src={mail}
              alt="Healthcare"
              className="absolute top-1/2 transform -translate-y-1/2 right-4 h-6 w-5"
            />
          </div>
        </div>
      </div>
      <div className="flex font-poppins mt-4">
        <div className="w-3/4 mr-4 relative">
          <label className="block text-[#170F49] text-sm font-medium mb-2">
            Product’s Language{' '}
          </label>
          <div className="relative">
            <input
              type="text"
              placeholder="Hindi"
              value={productLanguage}
              onBlur={handleSave}
              onChange={(e) => setProductLanguage(e.target.value)}
              className="w-full border-2 border-[#EFF0F6] rounded-3xl px-4 py-2"
            />
            <img
              src={Marketing}
              alt="Marketing"
              className="absolute top-1/2 transform -translate-y-1/2 right-4 h-6 w-5"
            />
          </div>
        </div>
        <div className="w-3/4 relative">
          <label className="block text-[#170F49] text-sm font-medium mb-2">
            Product Category
          </label>
          <div className="relative">
            <input
              type="text"
              placeholder="Product Category"
              value={productCategory}
              onBlur={handleSave}
              onChange={(e) => setProductCategory(e.target.value)}
              className="w-full border-2 border-[#EFF0F6] rounded-3xl px-4 py-2"
            />
            <img
              src={Company}
              alt="Settings"
              className="absolute top-1/2 transform -translate-y-1/2 right-4 h-6 w-5"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SellerDetails;
