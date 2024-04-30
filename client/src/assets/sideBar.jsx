import React from "react";
import { Grid, Menu, Divider } from "semantic-ui-react";
import { Link } from "react-router-dom";
import {acountingGroup} from "../constants/sidebarGroups/acountingGroup.js"

function SideBarContainer() {
  const groups = acountingGroup;

  const renderMenuItems = () => {
    return groups.map((group, index) => (
      <React.Fragment key={index}>
        <Menu.Header style={{ fontWeight: "bold" }}>{group.groupName}</Menu.Header>
        {renderGroupItems(group.functions)}
        {index < groups.length - 1 && <Divider />}
      </React.Fragment>
    ));
  };

  const renderGroupItems = (groupFunctions) => {
    return Object.keys(groupFunctions).map((key) => (
      <Menu.Item key={key} as={Link} to={groupFunctions[key].link}>
        {groupFunctions[key].text}
      </Menu.Item>
    ));
  };

  return (
    <div className="App">
      <Grid padded>
        <div className="sidebar-container">
          <Menu vertical fluid text style={{ width: '100%' }}>
            {renderMenuItems()}
          </Menu>
        </div>
      </Grid>
    </div>
  );
}

export default SideBarContainer;
