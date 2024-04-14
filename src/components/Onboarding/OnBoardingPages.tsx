import React, { useState } from 'react';
import Stepper from './Stepper';
import Contactdetails from './OnBoardPages/Contactdetails';
import Companydetails from './OnBoardPages/Companydetails';
import Companytype from './OnBoardPages/Companytype';
import Companyupload from './OnBoardPages/Companyupload';
import SearchLang from './OnBoardPages/SearchLang';
import ProductDetails from './OnBoardPages/ProductDetails';

interface CompanyInfoProps {
  subStep: number;
}

const CompanyInfo: React.FC<CompanyInfoProps> = ({ subStep }) => {
  return (
    <>
      {subStep === 1 && <Contactdetails />}
      {subStep === 2 && <Companydetails />}
      {subStep === 3 && <Companytype />}
      {subStep === 4 && <Companyupload />}
    </>
  );
};

const OnBoardingPages: React.FC = () => {
  const [step, setStep] = useState<number>(1);
  const [subStep, setSubStep] = useState<number>(1);

  const handleNext = () => {
    if (step === 2) {
      if (subStep < 4) {
        setSubStep(subStep + 1);
      } else {
        setStep(step + 1);
      }
    } else if (step < 4) {
      setStep(step + 1);
    }
  };

  const handlePrevious = () => {
    if (step === 2 && subStep > 1) {
      setSubStep(subStep - 1);
    } else if (step > 1) {
      setStep(step - 1);
    }
  };

  return (
    <div>
      <div className="flex items-center bg-[#FFE9A9] bg-opacity-40 justify-center h-screen">
        <div className="container w-2/5 bg-white border shadow-lg rounded-[59px] mx-auto">
          <header className="p-4">
            <Stepper currentStep={step} />
          </header>
          <main className="flex-grow p-4">
            {step === 1 && <SearchLang />}
            {step === 2 && <CompanyInfo subStep={subStep} />}
            {step === 3 && <ProductDetails />}
            {step === 4 && <ProductDetails />}
          </main>
          <footer className="flex font-poppins justify-between mx-14 p-4">
            <button
              onClick={handlePrevious}
              className={`bg-[#FCBD01] text-white border-2 font-bold border-[#FCBD01] rounded-3xl px-4 py-3 ${
                step === 1 ? 'invisible' : 'visible'
              }`}
            >
              Previous step
            </button>
            <button
              onClick={handleNext}
              className="bg-[#FCBD01] text-white border-2 font-bold rounded-3xl px-4 py-3"
            >
              Next step
            </button>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default OnBoardingPages;
