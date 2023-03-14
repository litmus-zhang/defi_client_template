import React from "react";
import { Divider } from "@chakra-ui/react";
import {
  DashboardIcon,
  PreferencesIcon,
  IntegrationIcon,
} from "@/components/Icons";

interface Props {}

function Sidebar(props: Props) {
  const {} = props;

  return (
    <div className="h-screen flex flex-col gap-2 p-2  items-center w-fit bg-gray-800 shadow-md shadow-gray-700">
          <p className="font-bold text-md">🦄 DeCrypt </p>
      <Divider className="bg-primary-1 "/>
      <DashboardIcon />
      <PreferencesIcon />
      <IntegrationIcon />
    </div>
  );
}

export default Sidebar;
