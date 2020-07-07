import React from 'react';
import './MatchList.scss';

const DUMMY_MATCHES = [
  {
    teams: [
      { name: 'Natus Vincere', tag: 'NaVi', score: 1, lead: false },
      { name: 'Natus Vincere', tag: 'NaVi', score: 2, lead: true },
    ],
  },
];

export const MatchList = () => {
  return (
    <div className="matches-container">
      {DUMMY_MATCHES.map((match, idx) => (
        <div key={idx} className="match-item">
          <img src="" alt="event" className="match-event" />
          <div className="match-item__content">
            {match.teams.map((team, idx) => {
              let content = [
                <div key={idx} className="match-team">
                  <p className="match-team__name">{team.name}</p>
                  <p
                    className={`match-team__score${
                      team.lead ? ' score-lead' : ''
                    }`}
                  >
                    {team.score}
                  </p>
                </div>,
              ];
              if (idx === 0) {
                content.push(<div className="match-delim"></div>);
              }
              return content;
            })}
          </div>
          <div className="match-extras">
            <button className="match-fav"></button>
            <button className="match-watch"></button>
            <button className="match-other"></button>
          </div>
        </div>
      ))}
    </div>
  );
};
