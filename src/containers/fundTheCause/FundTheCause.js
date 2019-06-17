import React, { Component, Fragment } from "react";
import Navigation from "components/navigation/navigation";

import { fundTheCauseSections } from "../../data";

import "./section.scss";

class FundTheCause extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <Fragment>
        <Navigation />
        <div className="fundTheCauseContainer" id="fundTheCause">
          {fundTheCauseSections.map(({ Container, props }) => (
            <Container key={props.sectionName} {...props} />
          ))}
        </div>
      </Fragment>
    );
  }
}

export default FundTheCause;
