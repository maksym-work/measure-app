import React, { useState } from "react";
import { Link } from "react-router-dom";

import ArrowLeft from "../../assets/images/arrow-left.svg";

const NewAssessment: React.FC = () => {
  const [cognitiveStatus, setCognitiveStatus] = useState<string>("");
  const [selectedMeasure, setSelectedMeasure] = useState<string>("");
  const [patientName, setPatientName] = useState<string>("");

  return (
    <>
      <div className="w-full flex-1 flex flex-col px-3 py-6 items-center min-h-screen">
        <div className="w-full flex items-center justify-between px-6">
          <Link className="flex gap-3 items-center flex-1" to="/home">
            <img
              src={ArrowLeft}
              alt="left"
              className="size-6 flex-shrink-0 rounded-full"
            />
            <div className="text-[18px] font-semibold text-left">
              New assessment
            </div>
          </Link>
        </div>
        <div className="flex-1 flex flex-col justify-center gap-6 w-[700px] max-w-full">
          <div className="w-full">
            <div className="text-[14px] text-gray-600 w-full text-left py-1">
              Congnitive status
            </div>
            <select
              className="bg-white flex items-center w-full gap-6 px-4 py-4 rounded-[6px] border-gray-200 border-[1px]"
              value={cognitiveStatus}
              onChange={(e) => setCognitiveStatus(e.target.value)}
            >
              <option value="" selected disabled>
                Select cognitive status
              </option>
              <option value="volvo">Volvo</option>
              <option value="saab">Saab</option>
              <option value="opel">Opel</option>
              <option value="audi">Audi</option>
            </select>
          </div>
          <div className="w-full">
            <div className="text-[14px] text-gray-600 w-full text-left py-1">
              Applicable measures
            </div>
            <select
              className="bg-white flex items-center w-full gap-6 px-4 py-4 rounded-[6px] border-gray-200 border-[1px]"
              disabled={!cognitiveStatus}
              value={selectedMeasure}
              onChange={(e) => setSelectedMeasure(e.target.value)}
            >
              <option value="" selected disabled>
                Select applicable measures
              </option>
              <option value="volvo">Volvo</option>
              <option value="saab">Saab</option>
              <option value="opel">Opel</option>
              <option value="audi">Audi</option>
            </select>
          </div>
          <div className="w-full">
            <div className="text-[14px] text-gray-600 w-full text-left py-1">
              Patient
            </div>
            <input
              className="bg-white flex items-center w-full gap-6 px-4 py-4 rounded-[6px] border-gray-200 border-[1px]"
              placeholder="Enter patient name or ID"
              disabled={!cognitiveStatus || !selectedMeasure}
              value={patientName}
              onChange={(e) => setPatientName(e.target.value)}
            />
          </div>
        </div>
        <div className="w-full flex justify-center py-20">
          <Link
            to={cognitiveStatus && selectedMeasure && patientName? "/assessment-page" : ""}
            className={`w-full sm:w-[400px] max-w-full rounded-full bg-black text-white py-3 px-4 text-[18px] ${!cognitiveStatus || !selectedMeasure || !patientName? "opacity-50 cursor-default": ""}`}
          >
            Start assessment
          </Link>
        </div>
      </div>
    </>
  );
};

export default NewAssessment;
