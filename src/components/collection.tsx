import * as React from "react";

import Games from "./games";
import GameFilters from "./game-filters";
import IconButton from "./basics/icon-button";

import { IMeatProps } from "./meats/types";

import styled, * as styles from "./styles";
import { connect, Dispatchers } from "./connect";

import { actions } from "../actions";
import { Space } from "../helpers/space";
import urls from "../constants/urls";

const CollectionDiv = styled.div`
  ${styles.meat()};
`;

export class Collection extends React.PureComponent<IProps & IDerivedProps> {
  render() {
    const { tab } = this.props;

    return (
      <CollectionDiv>
        <GameFilters tab={tab}>
          <IconButton icon="repeat" onClick={this.onRepeat} />
          <IconButton
            icon="redo"
            hint={["browser.popout"]}
            hintPosition="bottom"
            onClick={this.popOutBrowser}
          />
        </GameFilters>
        <Games tab={tab} />
      </CollectionDiv>
    );
  }

  onRepeat = () => {
    this.props.tabReloaded({ tab: this.props.tab });
  };

  popOutBrowser = () => {
    const { tabData } = this.props;
    const sp = Space.fromData(tabData);
    const c = sp.collection();
    if (c) {
      // fill in a dummy slug, the app will redirect
      let url = `${urls.itchio}/c/${c.id}/hello`;
      this.props.openUrl({ url });
    }
  };
}

interface IProps extends IMeatProps {}

const actionCreators = {
  tabReloaded: actions.tabReloaded,
  openUrl: actions.openUrl,
};

type IDerivedProps = Dispatchers<typeof actionCreators>;

export default connect<IProps>(Collection, { actionCreators });
