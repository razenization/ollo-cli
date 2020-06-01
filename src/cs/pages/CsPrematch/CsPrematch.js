import React from "react";
import "./CsPrematch.scss";
import Sidebar from "../../../shared/components/UIElements/Sidebar/Sidebar";
import MatchHead from "../../components/main/head/MatchHead/MatchHead";
import MatchPicks from "../../components/main/picks/MatchPicks/MatchPicks";
import LiveStreams from "../../components/main/streams/LiveStreams/LiveStreams";
import StreamBody from "../../components/main/streams/StreamBody/StreamBody";
import BetsInfo from "../../components/main/bets/BetsInfo/BetsInfo";
import StatsContainer from "../../components/main/stats/StatsContainer/StatsContainer";
import CommentsContainer from "../../components/main/comments/CommentsContainer/CommentsContainer";
import Footer from "../../../shared/components/UIElements/Footer/Footer";
import LiveOptions from "../../components/main/utilbar/LiveOptions/LiveOptions";
import BookiesRating from "../../components/main/utilbar/BookiesRating/BookiesRating";
import SocialNets from "../../components/main/utilbar/SocialNets/SocialNets";
import GiveAway from "../../components/main/utilbar/GiveAway/GiveAway";

const CsPrematch = () => {
  return (
    <div className="pd-default grid nine-to-three">
      <Sidebar />
      <div>
        <MatchHead />
        <div className="grid grid-half">
          <MatchPicks />
          <LiveStreams />
        </div>
        <StreamBody />
        <BetsInfo />
        <StatsContainer />
        <CommentsContainer />
      </div>
      <div>
        <LiveOptions />
        <BookiesRating />
        <SocialNets />
        <GiveAway />
      </div>
      <Footer />
    </div>
  );
};

export default CsPrematch;
