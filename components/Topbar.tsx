import React from "react";
import { FaUserCircle } from "react-icons/fa";

interface Props {}

function Topbar(props: Props) {
  const {} = props;

  return (
    <div className=" bg-gray-800 ml-2 p-3 w-screen">
      <p className="flex items-center  gap-1 ">
        <FaUserCircle /> Profile
      </p>
    </div>
  );
}

export default Topbar;
