import React, { useState } from "react";
import { buttons } from "../data/dashboard";
import DashboardMenu from "../components/pages/DashBoard/DashboardMenu";
import Compact from "../components/pages/DashBoard/Compact/Compact";
import Upload from "../components/pages/DashBoard/Upload/Upload";
import List from "../components/pages/DashBoard/List/List";

import Users from "../components/pages/DashBoard/Users/Users";

import { MyDataContext } from "../context/DataContext";
const DashBoard = () => {
  const { config, setConfig, choosenIcon, setChoosenIcon,newimages } = MyDataContext();

  return (
    <div className="border-0 border-lime-400">
      <DashboardMenu
        buttons={buttons}
        config={config}
        setConfig={setConfig}
        choosenIcon={choosenIcon}
        setChoosenIcon={setChoosenIcon}
      />
      {config.compact && <Compact newimages={newimages}/>}
      {config.upload && <Upload />}
      {config.list && <List newimages={newimages} />}
    
      {config.users && <Users />}
    
    </div>
  );
};

export default DashBoard;
