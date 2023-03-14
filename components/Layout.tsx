import React from "react";
import { DashboardIcon, IntegrationIcon, PreferencesIcon } from "./Icons";
import { Divider, Input } from "@chakra-ui/react";
import { FaUserCircle, FaSearch } from "react-icons/fa";

interface Props {
  children: React.ReactNode;
}

function Layout(props: Props) {
  const {} = props;

  return (
    <div className="flex text-inherit">
      <div className="h-screen w-1/5 flex flex-col gap-2 p-2  items-center bg-gray-800 shadow-md shadow-gray-700">
        <p className="font-bold text-md">🦄 DeCrypt </p>
        <Divider className="bg-primary-1 " />
        <DashboardIcon />
        <PreferencesIcon />
        <IntegrationIcon />
      </div>
      <main className="ml-2 w-4/5">
        <div className=" bg-gray-800 p-3 w-full">
          <ul className="flex justify-between gap-1 items-center ">
            <li>
              <input placeholder={`Search... `} className="p-1 pl-2 bg-gray-700 rounded-md focus:outline-none" />
            </li>
            <li className="flex items-center gap-1 self-end">
              {" "}
              <FaUserCircle /> Profile
            </li>
          </ul>
        </div>
        {props.children}
      </main>
    </div>
  );
}

export default Layout;
