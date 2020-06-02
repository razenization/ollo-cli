import React, { useState } from "react";
import "./BookiesRating.scss";

import pm from "./img/parimatch.svg";
import marathon from "./img/marathon.svg";
import gorilla from "./img/gorilla.svg";
import winline from "./img/winline.svg";
import leon from "./img/leon.svg";
import { ReactComponent as Star } from "./img/star.svg";
import { ReactComponent as EmptyStar } from "./img/star-empty.svg";
import { ReactComponent as LinkIcon } from "./img/link.svg";
import { ReactComponent as ReviewIcon } from "./img/review.svg";
import gift from "./img/gift.svg";
import AdjustButton from "../../../../../shared/components/UIElements/AdjustButton/AdjustButton";
import { v4 } from "uuid";

const DUMMY_BOOKIES = [
  {
    id: 1,
    logo: pm,
    stars: 5,
    bonus: 5000,
    href: "http://parimatch.com/",
    review: "bookies/parimatch/review",
  },
  {
    id: 2,
    logo: marathon,
    stars: 5,
    bonus: 5000,
    href: "http://parimatch.com/",
    review: "bookies/parimatch/review",
  },
  {
    id: 3,
    logo: gorilla,
    stars: 5,
    bonus: 5000,
    href: "http://parimatch.com/",
    review: "bookies/parimatch/review",
  },
  {
    id: 4,
    logo: winline,
    stars: 5,
    bonus: 5000,
    href: "http://parimatch.com/",
    review: "bookies/parimatch/review",
  },
  {
    id: 5,
    logo: leon,
    stars: 5,
    bonus: 5000,
    href: "http://parimatch.com/",
    review: "bookies/parimatch/review",
  },
  {
    id: 6,
    logo: pm,
    stars: 5,
    bonus: 5000,
    href: "http://parimatch.com/",
    review: "bookies/parimatch/review",
  },
  {
    id: 7,
    logo: pm,
    stars: 4,
    bonus: 5000,
    href: "http://parimatch.com/",
    review: "bookies/parimatch/review",
  },
];

const BookiesRating = () => {
  const [showHidden, setShowHidden] = useState(false);

  return (
    <div className="bookies-rating white-pd-rounded">
      <p className="bookies-rating__header header-blue">
        Рейтинг букмекеров от OLLO.GG
      </p>
      <div className="bookies-rating__items">
        {DUMMY_BOOKIES.map((bookie, i) => (
          <React.Fragment key={v4()}>
            {i === 5 && (
              <AdjustButton onClick={() => setShowHidden(!showHidden)} />
            )}
            <div
              key={i.toString()}
              className={`bookies-rating__item${
                i >= 5 && !showHidden ? " bookies-rating__item_hidden" : ""
              }`}
            >
              <img src={bookie.logo} alt="" className="bookies-item__logo" />
              <div className="bookies-item__stars">
                {Array.from(Array(5), (e, i) =>
                  i < bookie.stars ? (
                    <i key={i.toString()} className="bookies-item__star">
                      <Star />
                    </i>
                  ) : (
                    <i key={i.toString()} className="bookies-item__star">
                      <EmptyStar />
                    </i>
                  )
                )}
              </div>
              <div className="bookies-item__bonus">
                <img src={gift} alt="" className="bookies-item__bonus-gift" />
                <p className="bookies-item__bonus-text">{bookie.bonus}</p>
              </div>
              <div className="bookies-item__actions">
                <button className="bookies-item__link">
                  <LinkIcon />
                </button>
                <button className="bookies-item__review">
                  <ReviewIcon />
                </button>
              </div>
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default BookiesRating;
