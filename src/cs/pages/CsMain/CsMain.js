import React from 'react';
import './CsMain.scss';
import Header from '../../../shared/components/UIElements/Header/Header';
import { Banner, MOTD, Forward, Giveaway, MatchList } from '../../components';

const CsMain = ({ location }) => {
  const VK = window.VK;
  return (
    <div className="pd-header header-margin">
      <Header active="csgo" activeSelection="Матчи" />
      <div className="grid nine-to-three">
        <div>
          <Banner />
          <MatchList />
        </div>
        <div>
          <MOTD />
          <Giveaway />
          <Forward />
          <div id="vk_groups"></div>
          <script type="text/javascript">
            {VK.Widgets.Group(
              'vk_groups',
              { mode: 3, width: 'auto' },
              187390956,
            )}
          </script>
        </div>
      </div>
      <h1>Cs Main</h1>
    </div>
  );
};

export default CsMain;
