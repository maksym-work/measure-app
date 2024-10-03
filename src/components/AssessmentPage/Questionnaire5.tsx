import React, { useState } from "react";
import Chart from "../AssessmentPage/Chart"
const Questionnaire5: React.FC = () => {
  return (
    <>
      <div className="flex-1 flex flex-col justify-start pt-10 gap-6 w-[500px] max-w-full">
        <div className="flex flex-col w-full gap-3 pb-16">
          <div className="text-[24px] text-black text-bold w-full text-center">
            Confirm the results
          </div>

          <div className="flex flex-col justify-center items-center w-full px-4 rounded-[10px] border-[1px] border-[#DCE4EB]">
            <div className="p-10">
              <Chart value={12} />
            </div>
            <hr className="w-full" />
            <div className="w-full space-y-5 py-5">
              <div className="w-full flex justify-between items-center">
                <div className="font-medium">Question1</div>
                <div className="text-[#0C9A55] font-bold">Correct</div>
              </div>
              <div className="w-full flex justify-between items-center">
                <div className="font-medium">Question2</div>
                <div className="text-[#0C9A55] font-bold">Correct</div>
              </div>
              <div className="w-full flex justify-between items-center">
                <div className="font-medium">Question3</div>
                <div className="text-[#9A0C0C] font-bold">Incorrect</div>
              </div>
              <div className="w-full flex justify-between items-center">
                <div className="font-medium">Question4</div>
                <div className="text-[#0C9A55] font-bold">Correct</div>
              </div>
              <div className="w-full flex justify-start">
                <button className="text-orange-500 font-bold text-[14px]">
                  Show all
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Questionnaire5;
