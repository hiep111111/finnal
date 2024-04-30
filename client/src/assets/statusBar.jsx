import React, { useState, useEffect } from "react";
import { timeSheetState } from "../constants/statesConstants/timeSheetState";
import { workState } from "../constants/statesConstants/workState";

function getCurrentPathname() {
  return window.location.pathname.split('/')[1];
}

const StateBar = () => {
  const [stateGroup, setStateGroup] = useState([]);

  useEffect(() => {
    const pathname = getCurrentPathname();
    if (pathname === 'staff') {
      setStateGroup(timeSheetState);
    } else {
      setStateGroup(workState);
    }
  }, []);  

  return (
    <div style={{ marginLeft: "1%", marginRight: "1%", backgroundColor: "white", height: "calc(35% + 5px)", borderRadius: "5px", border: "1px solid rgba(0, 0, 0)", opacity: "0.5", display: "flex", justifyContent: "space-between" }}>
      {stateGroup.map((group) => (
        Object.keys(group.functions).map((key) => (
          <div key={key} style={{ flex: 1, borderRight: "1px solid rgba(0, 0, 0)", display: "flex", justifyContent: "center", alignItems: "center" }}>{group.functions[key].text}</div>
        ))
      ))}
    </div>
  );
}

export default StateBar;
