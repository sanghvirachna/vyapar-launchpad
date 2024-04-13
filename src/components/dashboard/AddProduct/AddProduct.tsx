import React from 'react';
import product from './AddProduct.svg';
import { Link } from 'react-router-dom';

const AddProduct: React.FC = () => {
  return (
    <div className="bg-[#F6E7BD] p-4 w-full mb-2 rounded-2xl overflow-hidden flex flex-col justify-center items-center">
      <img className="rounded-3xl  py-8" src={product} alt="Banner Image" />
      <Link to="/OnBoarding">
        <button className="bg-[#B8E1E2] mb-4 hover:bg-green-400 text-[#006A66] font-bold px-4 w-40 h-12 rounded">
          Add Products
        </button>
      </Link>
    </div>
  );
};

export default AddProduct;
