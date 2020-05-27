import React from "react";
import "./CsPrematch.scss";
import Sidebar from "../../../shared/components/UIElements/Sidebar/Sidebar";
import MatchHead from "../../components/main/head/MatchHead/MatchHead";
import MatchPicks from "../../components/main/picks/MatchPicks/MatchPicks";
import LiveStreams from "../../components/main/streams/LiveStreams/LiveStreams";
import StreamBody from "../../components/main/streams/StreamBody/StreamBody";
import BetsInfo from "../../components/main/bets/BetsInfo/BetsInfo";
import StatsContainer from "../../components/main/stats/StatsContainer/StatsContainer";

const CsPrematch = () => {
  return (
    <div className="pd-default">
      <Sidebar />
      <div className="col-lg-9">
        <MatchHead />
        <div className="row">
          <div className="col-lg-6">
            <MatchPicks />
          </div>
          <div className="col-lg-6">
            <LiveStreams />
          </div>
        </div>
        <StreamBody />
        <BetsInfo />
        <StatsContainer />
      </div>
      <div className="col-lg-3"></div>
    </div>
  );
};

export default CsPrematch;
