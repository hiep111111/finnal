import React from "react";
import { Divider, Grid, Table } from "semantic-ui-react";
import { useData } from "../context/previewKpiPerStaffContext";
import '../assets/css/index.css'
import { AddingButton, SeachingButton, RefreshButton } from "../assets/button";

function PreviewKpiPerStaffForm() {
  const { data, isLoading } = useData();

  const renderTableHeaders = () => {
    const tableHeaders = [
      'STT',
      ' ',
      'Tên',
      'Mã nhân viên',
      'Chức vụ',
      'Email',
      'Bộ phận',
      'Ngày tạo'
     ];

    return (
      <Table.Header>
        <Table.Row>
          {tableHeaders.map((header, idx) => (
            <Table.HeaderCell key={idx}>{header}</Table.HeaderCell>
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
            <Table.Cell>{index + 1}</Table.Cell> 
            <Table.Cell>
              <input type="checkbox" /> 
            </Table.Cell>
            {Object.values(row).map((value, idx) => (
              <Table.Cell key={idx + 2}>{value}</Table.Cell>
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
                  DASBOARD
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
export default PreviewKpiPerStaffForm;
