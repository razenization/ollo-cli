import React from "react";
import "./CsPrematch.scss";
import Sidebar from "../../../shared/components/UIElements/Sidebar/Sidebar";
import MatchHead from "../../components/main/MatchHead/MatchHead";

const CsPrematch = () => {
  return (
    <div className="pd-default">
      <Sidebar />
      <div className="col-lg-9">
        <MatchHead />
      </div>
      <div className="col-lg-3"></div>
    </div>
  );
};

export default CsPrematch;
