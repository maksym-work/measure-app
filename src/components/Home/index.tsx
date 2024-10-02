import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectUser, clearUser } from "../../features/userSlice";
import { auth } from "../../firebase";
import { Link } from "react-router-dom";
import Icon from "../../assets/images/1.png";
import Avatar from "../../assets/images/avatar.jpg";

const Home: React.FC = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  const handleSignOut = () => {
    auth.signOut();
    dispatch(clearUser());
  };

  return (
    <>
      <div className="w-full flex-1 flex flex-col px-3 py-6 items-center">
        <div className="w-full flex items-center justify-between">
          <div className="flex gap-3 items-center">
            <img
              src={Avatar}
              alt="user"
              className="size-8 flex-shrink-0 rounded-full"
            />
            <div>
              <div className="text-gray-600">Welcome Back</div>
              <div className="text-[16px] font-semibold text-left">
                Dr. Johnson
              </div>
            </div>
          </div>
          <div>
            <div className="text-gray-600">Welcome Back</div>
            <div className="text-[16px] font-semibold text-right">
              Dr. Johnson
            </div>
          </div>
        </div>
        <div className="flex-1 flex flex-col justify-center gap-2 w-[500px] max-w-full">
          <div className="w-full flex justify-between items-center">
            <strong>Recent assessment</strong>
            <Link
              to={"#"}
              className="text-[12px] text-gray-600 gap-3 flex items-center"
            >
              <span>See more</span>
              <img src={Icon} alt="arrow" className="size-3 flex-shrink-0" />
            </Link>
          </div>
          <button className="rounded-2xl bg-white flex items-center gap-6 px-4 py-2">
            <div className="bg-orange-100 text-orange-500 px-3 py-1.5 rounded-full flex-1 text-left">
                <strong className="uppercase">cognition</strong> * SLUMS
            </div>
            <img src={Icon} alt="arrow" className="size-6 flex-shrink-0 rounded-full"/>
          </button>
          <button className="rounded-2xl bg-white flex items-center gap-6 px-4 py-2">
            <div className="bg-orange-100 text-orange-500 px-3 py-1.5 rounded-full flex-1 text-left">
                <strong className="uppercase">cognition</strong> * SLUMS
            </div>
            <img src={Icon} alt="arrow" className="size-6 flex-shrink-0 rounded-full"/>
          </button>
          <button className="rounded-2xl bg-white flex items-center gap-6 px-4 py-2">
            <div className="bg-orange-100 text-orange-500 px-3 py-1.5 rounded-full flex-1 text-left">
                <strong className="uppercase">cognition</strong> * SLUMS
            </div>
            <img src={Icon} alt="arrow" className="size-6 flex-shrink-0 rounded-full"/>
          </button>
          <div></div>
          <div></div>
        </div>
        <div className="w-full flex justify-end">
          <Link
          to={"/new"}
            className="w-full sm:w-[300px] max-w-full rounded-full bg-black text-white py-2 px-4"
            style={{ boxShadow: "0px 0px 4px 4px #4839" }}
          >
            +New assessment
          </Link>
        </div>
      </div>
      <div className="w-full flex justify-around sm:justify-center sm:gap-6">
        <Link
          to="#"
          className="flex flex-col items-center gap-1 justify-center"
        >
          <img src={Icon} alt="home" className="size-6 flex-shrink-0" />
          <span>Home</span>
        </Link>
        <Link
          to="#"
          className="flex flex-col items-center gap-1 justify-center"
        >
          <img src={Icon} alt="home" className="size-6 flex-shrink-0" />
          <span>Patients</span>
        </Link>
        <Link
          to="#"
          className="flex flex-col items-center gap-1 justify-center"
        >
          <img src={Icon} alt="home" className="size-6 flex-shrink-0" />
          <span>History</span>
        </Link>
        <Link
          to="#"
          className="flex flex-col items-center gap-1 justify-center"
        >
          <img src={Icon} alt="home" className="size-6 flex-shrink-0" />
          <span>Settings</span>
        </Link>
      </div>
    </>
  );
};

export default Home;
