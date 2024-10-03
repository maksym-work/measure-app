import { getSelected, setSelected } from "features/assessmentSlice";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

const Questionnaire1: React.FC = () => {
  const dispatch = useDispatch();
  const selected = useSelector(getSelected);

  return (
    <>
      <div className="flex-1 flex flex-col justify-start pt-10 gap-6 w-[500px] max-w-full">
        <div className="flex flex-col w-full gap-3 pb-16">
          <div className="text-[24px] text-black font-bold w-full text-center">
            How many fingers do you see?
          </div>
          <div className="text-[14px] text-gray-600 w-full text-center py-3">
            Please show the patient a certain amount of fingers and follow their
            reaction.
          </div>

          <button
            onClick={() => dispatch(setSelected("correct"))}
            className={`flex items-center w-full gap-6 px-4 py-5 rounded-[10px] border-[2px] ${
              selected === "correct"
                ? " border-orange-500 bg-white"
                : " border-gray-200"
            }`}
            style={{
              boxShadow:
                selected === "correct"
                  ? "0px 24px 64px -10px #00000026"
                  : "none",
            }}
          >
            Correct
          </button>

          <button
            onClick={() => dispatch(setSelected("incorrect"))}
            className={`flex items-center w-full gap-6 px-4 py-5 rounded-[10px] border-[2px] ${
              selected === "incorrect"
                ? " border-orange-500 bg-white"
                : " border-gray-200"
            }`}
            style={{
              boxShadow:
                selected === "incorrect"
                  ? "0px 24px 64px -10px #00000026"
                  : "none",
            }}
          >
            Incorrect
          </button>
        </div>
      </div>
    </>
  );
};

export default Questionnaire1;
