import React from "react";
import ToggleButton from "../AssessmentPage/Toggle/";
import { useDispatch, useSelector } from "react-redux";
import {
  getSelectedAnimals,
  setSelectedAnimals,
} from "features/assessmentSlice";

const Questionnaire4: React.FC = () => {
  // Initialize state to track selected animals
  const dispatch = useDispatch();
  const selectedAnimals = useSelector(getSelectedAnimals);

  // Handle click to toggle the selection of an animal
  const handleClick = (animal: string) => {
    dispatch(
      setSelectedAnimals(
        selectedAnimals.includes(animal)
          ? selectedAnimals.filter((item) => item !== animal) // Remove animal if already selected
          : [...selectedAnimals, animal] // Add animal if not selected
      )
    );
  };

  return (
    <>
      <div className="flex-1 flex flex-col justify-between pt-10 gap-6 w-[500px] max-w-full">
        <div className="flex flex-col w-full gap-3">
          <div className="text-[24px] text-black text-bold w-full text-center">
            Identify the animals
          </div>
          <div className="text-[14px] text-gray-600 w-full text-center py-3">
            Please show the patient the following animals and check their
            response.
          </div>
          <hr />
          <div className="flex items-center w-full gap-6 px-4 rounded-[10px]">
            <div className="size-[67px] rounded-[70px] border-[1px] border-[#DCE4E8] text-center flex flex-col justify-center text-[24px]">
              🐓
            </div>
            <div className="flex flex-1 font-bold">Chicken</div>
            <ToggleButton
              value={selectedAnimals.includes("Chicken")}
              handleClick={() => handleClick("Chicken")}
            />
          </div>
          <hr />
          <div className="flex items-center w-full gap-6 px-4 rounded-[10px]">
            <div className="size-[67px] rounded-[70px] border-[1px] border-[#DCE4E8] text-center flex flex-col justify-center text-[24px]">
              🐎
            </div>
            <div className="flex flex-1 font-bold">Horse</div>
            <ToggleButton
              value={selectedAnimals.includes("Horse")}
              handleClick={() => handleClick("Horse")}
            />
          </div>
          <hr />
          <div className="flex items-center w-full gap-6 px-4 rounded-[10px]">
            <div className="size-[67px] rounded-[70px] border-[1px] border-[#DCE4E8] text-center flex flex-col justify-center text-[24px]">
              🐕
            </div>
            <div className="flex flex-1 font-bold">Dog</div>
            <ToggleButton
              value={selectedAnimals.includes("Dog")}
              handleClick={() => handleClick("Dog")}
            />
          </div>
        </div>
        <div className="flex text-center justify-center items-center">
          <div className="pb-5 text-orange-500 font-bold">
            {selectedAnimals.length} correct
          </div>
        </div>
      </div>
    </>
  );
};

export default Questionnaire4;
