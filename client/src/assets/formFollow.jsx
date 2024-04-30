import React, { useState, useEffect } from "react";
import "semantic-ui-css/semantic.min.css";
import { Divider, Grid, Table } from "semantic-ui-react";
import "./css/index.css";
import { AddingButton, SeachingButton, RefreshButton } from "./button";
import StateBar from "./statusBar";

function ContentFollowContainer() {
  const [isLoading, setIsLoading] = useState(false);
  const [sectionTitle, setSectionTitle] = useState("");
  const [data, setData] = useState([]);

  const currentPathname = () => {
    return window.location.pathname;
  };

  const ChecktoSetTitle = (currentPathname) => {
    switch (currentPathname) {
      case "/staff/timesheets/":
        setSectionTitle(`Daily Timesheets`);
        break;
      case "/staff/personalKPIReports/":
        setSectionTitle(`Personal KPI Reports`);
        break;
      case "/staff/leaveSlips/":
        setSectionTitle(`Leave Slips`);
        break;
      case "/staff/overtimes/":
        setSectionTitle(`Overtime Requests`);
        break;
      case "/staff/paymentRequisitions":
        setSectionTitle(`Payment Requisitions`);
        break;
      default:
        break;
    }
  };

  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:1235/api/timeSheet/get");
      const responseData = await response.json();
  
      const formattedData = responseData.map(item => ({
        timesheetCode: item.timesheetCode,
        timesheetName: item.timesheetName,
        createdByUserName: item.createdByUserName,
        state: item.state,
        workLocation: item.workLocation,
        createdAt: item.createdAt,
        updatedAt: item.updatedAt
      }));
  
      setData(formattedData);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    setIsLoading(true);
    fetchData();
    ChecktoSetTitle(currentPathname());
  }, []);

  const tableHeaders = {
    timesheetCode: 'Timesheet Code',
    timesheetName: 'Employee',
    createdByUserName: 'Created By',
    state: 'State',
    workLocation: 'Work Location',
    createdAt: 'Created At',
    updatedAt: 'Updated At'
  };

  const renderTableHeaders = () => {
    if (!data || data.length === 0) {
      return null;
    }  

    return (
      <Table.Header>
        <Table.Row>
          {Object.keys(tableHeaders).map((key) => (
            <Table.HeaderCell key={key}>{tableHeaders[key]}</Table.HeaderCell>
          ))}
        </Table.Row>
      </Table.Header>
    );
  };

  const renderTableBody = () => {
    if (!data || data.length === 0) {
      return null;
    }

    return (
      <Table.Body>
        {data.map((row, index) => (
          <Table.Row key={index}>
            {Object.values(row).map((value, idx) => (
              <Table.Cell key={idx}>{value}</Table.Cell>
            ))}
          </Table.Row>
        ))}
      </Table.Body>
    );
  };

  return (
    <div>
      <Grid padded>
        <Grid.Column computer={13} floated="right" id="content">
          <div className="content-container">
            <div className="content-header-header">
              <div className="content-header" style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <h1 dividing size="huge" as="h1" style={{ marginTop: "-20px", marginLeft: "1%", color: "black", backgroundColor: "white" }}>
                  {sectionTitle}
                  hhhhhhhhhhhhh
                </h1>
                <div className="content-button" style={{ marginTop: "-30px", display: "flex", flexDirection: "row" }}>
                  <AddingButton isLoading={isLoading} />
                  <SeachingButton isLoading={isLoading} />
                  <RefreshButton isLoading={isLoading} />
                </div>
              </div>
              <div style={{ marginTop: "-25px" }}>
                <Divider />
              </div>
            </div>
            <div className="content-content">
              <div style={{ padding: "1%" }}>
                <Table celled>
                  {renderTableHeaders()}
                  {renderTableBody()}
                </Table>
              </div>
            </div>
          </div>
        </Grid.Column>
      </Grid>
    </div>
  );
}

export default ContentFollowContainer;
