import React, { useState } from "react";
import "semantic-ui-css/semantic.min.css";
import { Divider, Grid } from "semantic-ui-react";
import "./css/index.css";
import { AddingButton, SeachingButton, RefreshButton } from "./adddingButton";
import StateBar from "./statusBar";

function ContentCreateContainer() {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div>
      <Grid padded>
        <Grid.Column computer={13} floated="right" id="content">
          <div className="content-container">
            <div className="content-header-header">
              <div className="content-header" style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <h1 dividing size="huge" as="h1" style={{ marginTop: "-20px", marginLeft: "1%", color: "black", backgroundColor: "white" }}>
                  Section title
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
              <StateBar/> 
              <div style={{ marginTop: "10px" }}>
                <Divider />
              </div>
            </div>

            <div className="content-content" style={{ marginLeft: "0.5%", color: "black", backgroundColor: "white" }}>
              <Grid.Row>
                CREATE HERE
              </Grid.Row>
            </div>
          </div>
        </Grid.Column>
      </Grid>
    </div>
  );
}

export default ContentCreateContainer;
