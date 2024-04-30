import { Grid, Menu, Divider } from "semantic-ui-react";
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "semantic-ui-css/semantic.min.css";
import { acountingGroup } from "../constants/sidebarGroups/acountingGroup.js";
import { adminGroup } from "../constants/sidebarGroups/adminGroup.js";
import { kmsGroup } from "../constants/sidebarGroups/kmsGroup.js";
import { staffGroup } from "../constants/sidebarGroups/staffGroup.js";
import { storageGroup } from "../constants/sidebarGroups/storageGroup.js";
import './css/index.css'
function SideBarContainer() {
  const [groups, setGroups] = useState(acountingGroup);
  const location = useLocation();

  useEffect(() => {
    const isLocation = localStorage.getItem("isLocation");
    setGroups(getGroupsByLocation(isLocation));
  }, []);

  const getGroupsByLocation = (location) => {
    switch (location) {
      case "staff":
        return staffGroup;
      case "warehouse":
        return storageGroup;
      case "accounting":
        return acountingGroup;
      case "admin":
        return adminGroup;
      case "kms":
        return kmsGroup;
      default:
        return acountingGroup;
    }
  };

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
    const menuItems = Object.keys(groupFunctions).map((key) => {
      const link = groupFunctions[key].link;
      const text = groupFunctions[key].text;
      const isActive = location.pathname === link;
      return (
        <Menu.Item
          key={key}
          as={Link}
          to={link}
          active={isActive}
          style={{
            fontWeight: isActive ? "bold" : "normal", 
            fontSize: isActive ? "120%" : "normal",
            color: isActive ? "teal" : "black"  
          }}
        >
          {text}
        </Menu.Item>
      );
    });
  
    return menuItems;
  };
  


  return (
    <div className="App">
      <Grid padded>
        <div className="sidebar-container">
          <Menu vertical fluid text style={{ width: "100%" }}>
            {renderMenuItems()}
          </Menu>
        </div>
      </Grid>
    </div>
  );
}

export default SideBarContainer;
