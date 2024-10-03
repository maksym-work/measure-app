import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import ArrowLeft from "../../assets/images/arrow-left.svg";
import Questionnaire1 from "./Questionnaire1";
import Questionnaire2 from "./Questionnaire2";
import Questionnaire3 from "./Questionnaire3";
import Questionnaire4 from "./Questionnaire4";
import Questionnaire5 from "./Questionnaire5";
import PageProgress from "./PageProgress";
import { useDispatch } from "react-redux";
import { clearSelected, clearSelectedAnswers, clearSelectedAnimals} from "features/assessmentSlice";

const AssessmentPage: React.FC = () => {
    const dispatch = useDispatch()
  const [pageIndex, setPageIndex] = useState(0);
  const handleContinue = () => {
    setPageIndex((prev) => prev < 4 ? prev + 1 : prev);
  };
  const handlePrev = () => {
    setPageIndex((prev) => prev - 1);
  };
  useEffect(() => {
    dispatch(clearSelected())
    dispatch(clearSelectedAnswers())
    dispatch(clearSelectedAnimals())
  }, [dispatch])
  return (
    <>
      <div className="w-full flex-1 flex flex-col px-3 py-6 pb-16 items-center min-h-screen">
        <div className="w-full flex items-center justify-between px-6">
          <Link className="flex gap-3 items-center flex-1" to="/new-assessment">
            <img
              src={ArrowLeft}
              alt="left"
              className="size-6 flex-shrink-0 rounded-full"
            />
            <div className="text-[18px] font-semibold text-left">
              Assessment
            </div>
          </Link>
        </div>
        <PageProgress pageIndex={pageIndex} />
        {pageIndex === 0 && <Questionnaire1 />}
        {pageIndex === 1 && <Questionnaire2 />}
        {pageIndex === 2 && <Questionnaire3 />}
        {pageIndex === 3 && <Questionnaire4 />}
        {pageIndex === 4 && <Questionnaire5 />}
        <div className="w-full flex justify-center items-center space-x-4">
          {pageIndex !== 0 ? (
            <button
              className={`flex justify-center items-center w-full rounded-full text-black py-3 px-4 text-[18px] border-[1px] border-gray-400 ${pageIndex === 4 ? "sm:w-[250px]":"sm:w-[80px]"}`}
              onClick={handlePrev}
            >
              {pageIndex === 4 ? "Back" :<img
              src={ArrowLeft}
              alt="left"
              className="size-6 flex-shrink-0 rounded-full"
            />}
            </button>
          ) : (
            <></>
          )}
          <button
            className={`w-full max-w-full rounded-full bg-black text-white py-3 px-4 text-[18px] ${
              pageIndex === 0 ? "sm:w-[500px]" : pageIndex === 4 ? "sm:w-[250px]":"sm:w-[400px]"
            }`}
            onClick={handleContinue}
          >
            {pageIndex===3? "Finish":pageIndex===4? "Print":"Continue"}
          </button>
        </div>
      </div>
    </>
  );
};

export default AssessmentPage;
