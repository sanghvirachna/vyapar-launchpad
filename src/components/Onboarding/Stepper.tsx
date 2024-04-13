import React, { useState } from 'react';

const Stepper: React.FC = () => {
  const [progress, setProgress] = useState<number>(1);

  const stepCompleted = (stepNumber: number): boolean => {
    return stepNumber <= progress;
  };

  return (
    <div>
      <div className="w-full pt-4">
        <div className="flex">
          {[1, 2, 3, 4].map((stepNumber: number) => (
            <div key={stepNumber} className="w-1/4">
              <div className="relative">
                <div
                  className="absolute flex align-center items-center align-middle content-center"
                  style={{
                    width: 'calc(100% - 2.5rem - 1rem)',
                    top: '50%',
                    transform: 'translate(-50%, -50%)',
                  }}
                >
                  {stepCompleted(stepNumber - 1) && (
                    <div
                      className={`w-full bg-[#FCBD01] py-1 rounded ${
                        stepNumber === progress ? '' : 'bg-[#FCBD01]'
                      } `}
                      style={{ width: `${(stepNumber - 1) * 33.33}%` }}
                    />
                  )}
                </div>
                <div
                  className={`w-10 h-10 mx-auto ${
                    stepCompleted(stepNumber)
                      ? 'bg-[#FCBD01]'
                      : 'bg-gray-200 border-2 border-gray-200'
                  } rounded-full text-lg text-white flex items-center`}
                >
                  <span className="text-center text-white w-full">
                    {stepNumber}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Stepper;
