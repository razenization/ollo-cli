import React from "react";
import "./StreamBody.scss";

const StreamBody = () => {
  return (
    <div className="stream-body white-pd-rounded">
      <iframe
        title="stream"
        src="https://player.twitch.tv/?channel=csgomc_ru&muted=true"
        height="606.5"
        width="100%"
        frameBorder="0"
        scrolling="no"
        allowFullScreen={true}
      />
    </div>
  );
};

export default StreamBody;
