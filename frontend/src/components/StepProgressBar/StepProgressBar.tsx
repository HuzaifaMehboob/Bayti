import React from "react";

const StepProgressBar = ({ step, totalSteps = 6 }: any) => {
  const steps = Array.from({ length: totalSteps }, (_, i) => i + 1);

  return (
    <div className="relative w-full flex items-center justify-between mb-12 ">
      {steps.map((num, index) => (
        <div key={num} className="flex items-center w-full">
          {/* Circle */}
          <div
            className={`w-8 h-8 flex items-center justify-center rounded-full text-white text-sm font-semibold transition-all duration-500
              ${step >= num ? "bg-[#F66262] scale-105 shadow-lg" : "bg-gray-300"}
            `}
          >
            {num}
          </div>

          {/* Connector Bar */}
          {index < steps.length - 1 && (
            <div
              className={`flex-1 h-[3px] rounded-full transition-all duration-500 ${
                step > num ? "bg-[#F66262]" : "bg-gray-300"
              }`}
            ></div>
          )}
        </div>
      ))}
    </div>
  );
};

export default StepProgressBar;
