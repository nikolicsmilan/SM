import React, { useState } from "react";
import { buttons } from "../data/dashboard";
import DashboardMenu from "../components/pages/DashBoard/Menu/DashboardMenu";
import Compact from "../components/pages/DashBoard/Compact/Compact";
import Upload from "../components/pages/DashBoard/Upload/Upload";
import List from "../components/pages/DashBoard/List/List";
import Users from "../components/pages/DashBoard/Users/Users";
import Calendar from "../components/pages/DashBoard/Calendar/Calendar";
import Messages from "../components/pages/DashBoard/Messages/Messages";
import SliderAdv from "../components/pages/DashBoard/SliderConf/SliderAdv";
import { MyDataContext } from "../context/DataContext";

import useErrorModal from "../hooks/useErrorModal";
const DashBoard = () => {
  const { config, setConfig, choosenIcon, setChoosenIcon, newimages, error2 } =
    MyDataContext();
  const { error, showErrorModal, hideErrorModal } = useErrorModal();
  return (
    <div className="border-0 border-lime-400">
      <DashboardMenu
        buttons={buttons}
        config={config}
        setConfig={setConfig}
        choosenIcon={choosenIcon}
        setChoosenIcon={setChoosenIcon}
      />
      {config?.compact && <Compact newimages={newimages} />}
      {config?.upload && <Upload setConfig={setConfig} />}
      {config?.list && <List newimages={newimages} />}
      {config?.users && <Users />}
      {config?.calendar && <Calendar />}
     {config?.messages && <Messages />}
     {config?.slider && <SliderAdv />}
    
    </div>
  );
};

export default DashBoard;
/*
  <button
        className="border-2 border-sky-400 rounded w-32 p-2 m-5"
        onClick={() => {
          showErrorModal("Most tesztelem a Modelem");
        }}
      >
        teszt model
      </button>

*/