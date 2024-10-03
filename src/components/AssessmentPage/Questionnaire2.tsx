import React, { useState } from "react";
import TickCircleIcon from "../../assets/images/tick-circle.svg";
import CircleIcon from "../../assets/images/Ellipse.svg";
import { useDispatch, useSelector } from "react-redux";
import { getSelectedAnswers, setSelectedAnswers } from "features/assessmentSlice";
const Questionnaire2: React.FC = () => {
    const dispatch = useDispatch();
    const selectedAnswers = useSelector(getSelectedAnswers);

  // Function to handle button selection (toggle on/off)
  const handleButtonClick = (label: string) => {
    if (selectedAnswers.includes(label)) {
      dispatch(setSelectedAnswers(selectedAnswers.filter((item) => item !== label))); // Deselect if already selected
    } else {
        dispatch(setSelectedAnswers([...selectedAnswers, label])); // Select if not selected
    }
  };
  console.log(selectedAnswers);
  return (
    <>
      <div className="flex-1 flex flex-col justify-start pt-10 gap-6 w-[500px] max-w-full">
        <div className="flex flex-col w-full gap-3 pb-16">
          <div className="text-[24px] text-black font-bold w-full text-center">
            Story "Jill went to the shop"
          </div>
          <div className="text-[14px] text-gray-600 w-full text-center py-3">
            Jill went to the shop to buy candies. Afterwards, instead of walking
            home, she took a cab.
          </div>

          <button
            onClick={() => handleButtonClick("candies")}
            className={`flex items-center w-full gap-6 px-4 py-5 rounded-[10px] border-[2px] ${
                selectedAnswers.includes("candies")
                ? " border-orange-500 bg-white"
                : "border-gray-200"
            }`}
            style={{
              boxShadow: selectedAnswers.includes("candies")
                ? "0px 24px 64px -10px #00000026"
                : "none",
            }}
          >
            {selectedAnswers.includes("candies") ? (
              <img
                src={TickCircleIcon}
                alt="tickcircle"
                className="size-6 flex-shrink-0 rounded-full"
              />
            ) : (
              <img
                src={CircleIcon}
                alt="circle"
                className="size-6 flex-shrink-0 rounded-full"
              />
            )}
            Jill bought candies.
          </button>

          <button
            onClick={() => handleButtonClick("dog")}
            className={`flex items-center w-full gap-6 px-4 py-5 rounded-[10px] border-[2px] ${
                selectedAnswers.includes("dog")
                ? "border-orange-500 bg-white"
                : "border-gray-200"
            }`}
            style={{
              boxShadow: selectedAnswers.includes("dog")
                ? "0px 24px 64px -10px #00000026"
                : "none",
            }}
          >
            {selectedAnswers.includes("dog") ? (
              <img
                src={TickCircleIcon}
                alt="tickcircle"
                className="size-6 flex-shrink-0 rounded-full"
              />
            ) : (
              <img
                src={CircleIcon}
                alt="circle"
                className="size-6 flex-shrink-0 rounded-full"
              />
            )}
            Jill has a dog as a pet.
          </button>

          <button
            onClick={() => handleButtonClick("cab")}
            className={`flex items-center w-full gap-6 px-4 py-5 rounded-[10px] border-[2px] ${
                selectedAnswers.includes("cab")
                ? "border-orange-500 bg-white"
                : "border-gray-200"
            }`}
            style={{
              boxShadow: selectedAnswers.includes("cab")
                ? "0px 24px 64px -10px #00000026"
                : "none",
            }}
          >
            {selectedAnswers.includes("cab") ? (
              <img
                src={TickCircleIcon}
                alt="tickcircle"
                className="size-6 flex-shrink-0 rounded-full"
              />
            ) : (
              <img
                src={CircleIcon}
                alt="circle"
                className="size-6 flex-shrink-0 rounded-full"
              />
            )}
            Jill took a cab.
          </button>
        </div>
      </div>
    </>
  );
};

export default Questionnaire2;
