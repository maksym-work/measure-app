import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectUser, clearUser } from "../../features/userSlice";
import { auth } from "../../firebase";
import { Link } from "react-router-dom";
import ArrowRightIcon from "../../assets/images/arrow-right.svg";
import UserGroupIcon from "../../assets/images/ic-user-group.svg"
import CircleRightIcon from "../../assets/images/sr-chevron-circle-right.svg"
import HomeIcon from "../../assets/images/ic-home.svg"
import HistoryIcon from "../../assets/images/history.svg"
import SettingIcon from "../../assets/images/setting.svg"


import Avatar from "../../assets/images/avatar.jpg";

const Home: React.FC = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  const handleSignOut = () => {
    auth.signOut();
    dispatch(clearUser());
  };

  return (
    <div className="min-h-screen w-full flex flex-col">
      <div className="w-full flex-1 flex flex-col px-3 py-6 items-center">
        <div className="w-full flex items-center justify-between px-6">
          <div className="flex gap-3 items-center flex-1">
            <img
              src={Avatar}
              alt="user"
              className="size-10 flex-shrink-0 rounded-full"
            />
            <div>
              <div className="text-[#6C7278] text-[14px]">Welcome Back</div>
              <div className="text-[16px] font-semibold text-left">
                {user?.email}
              </div>
            </div>
          </div>
          <div className="flex flex-col items-end justify-center px-5">
            <div className="text-[#6C7278] text-[14px]">Monday</div>
            <div className="text-[16px] font-semibold text-right">
              16 April, 2024
            </div>
          </div>
          <button onClick={handleSignOut} className="bg-gray-700 rounded-[8px] py-2 px-1 text-[14px] text-white">Sign Out</button>
        </div>
        <div className="flex-1 flex flex-col justify-center gap-3 w-[700px] max-w-full">
          <div className="w-full flex justify-between items-center">
            <strong style={{fontSize:18}}>Recent assessments</strong>
            <Link
              to={"#"}
              className="text-[12px] text-[#6C7278] gap-3 flex items-center"
            >
              <span>See more</span>
              <img src={ArrowRightIcon} alt="arrow" className="size-3 flex-shrink-0" />
            </Link>
          </div>
          <button className="rounded-2xl bg-white flex items-center gap-6 px-4 py-2" style={{boxShadow: "0px 21px 18.8px -19px #00000026"}}>
            <div className="bg-[#E7974D1F] text-orange-500 px-3 py-1.5 rounded-full flex-1 text-left">
                <strong className="uppercase">cognition</strong> * SLUMS
            </div>
            <img src={CircleRightIcon} alt="arrow" className="size-6 flex-shrink-0 rounded-full"/>
          </button>
          <button className="rounded-2xl bg-white flex items-center gap-6 px-4 py-2" style={{boxShadow: "0px 21px 18.8px -19px #00000026"}}>
            <div className="bg-[#E7974D1F] text-orange-500 px-3 py-1.5 rounded-full flex-1 text-left">
                <strong className="uppercase">Z00.00</strong> * Physical Examination
            </div>
            <img src={CircleRightIcon} alt="arrow" className="size-6 flex-shrink-0 rounded-full"/>
          </button>
          <button className="rounded-2xl bg-white flex items-center gap-6 px-4 py-2" style={{boxShadow: "0px 21px 18.8px -19px #00000026"}}>
            <div className="bg-[#E7974D1F] text-orange-500 px-3 py-1.5 rounded-full flex-1 text-left">
                <strong className="uppercase">Z01.89</strong> * Diagnostic Tests
            </div>
            <img src={CircleRightIcon} alt="arrow" className="size-6 flex-shrink-0 rounded-full"/>
          </button>
        </div>
        <div className="w-full flex justify-center">
          <Link
          to={"/new-assessment"}
            className="w-full sm:w-[400px] max-w-full rounded-full bg-black text-white py-3 px-4 text-[18px]"
            style={{ boxShadow: "0px 0px 4px 4px #4839" }}
          >
            + New assessment
          </Link>
        </div>
      </div>
      <div className="w-full flex justify-around sm:justify-center sm:gap-6 py-6">
        <Link
          to="#"
          className="flex flex-col items-center gap-1 justify-center"
        >
          <img src={HomeIcon} alt="home" className="size-6 flex-shrink-0" />
          <span className="text-[12px] text-orange-600">Home</span>
        </Link>
        <Link
          to="#"
          className="flex flex-col items-center gap-1 justify-center"
        >
          <img src={UserGroupIcon} alt="home" className="size-6 flex-shrink-0" />
          <span className="text-[12px] text-gray-600">Patients</span>
        </Link>
        <Link
          to="#"
          className="flex flex-col items-center gap-1 justify-center"
        >
          <img src={HistoryIcon} alt="home" className="size-6 flex-shrink-0" />
          <span className="text-[12px] text-gray-600">History</span>
        </Link>
        <Link
          to="#"
          className="flex flex-col items-center gap-1 justify-center"
        >
          <img src={SettingIcon} alt="home" className="size-6 flex-shrink-0" />
          <span className="text-[12px] text-gray-600">Settings</span>
        </Link>
      </div>
    </div>
  );
};

export default Home;
