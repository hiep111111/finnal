import React from "react";
import { Button } from "semantic-ui-react";
import { useNavigate } from "react-router-dom";

function AddingButton({ isLoading }) {
    const navigate = useNavigate();

    const handleClick = () => {
        const currentPath = window.location.pathname;
        const newPath = currentPath + "/0";
        navigate(newPath);
    };

    return (
        <Button primary loading={isLoading} style={{ height: "100%", width: "60%", display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "teal" }} onClick={handleClick}>
            <div className="three wide column">
                <i className="icon plus"></i>
            </div>
        </Button>
    );
}

function SeachingButton({ isLoading }) {
    return (
        <Button primary loading={isLoading} style={{ height: "100%", width: "60%", display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "teal" }}>
            <div className="three wide column">
                <i className="icon setting"></i>
            </div>
        </Button>
    );
}

function RefreshButton({ isLoading }) {
    const handleRefresh = () => {
        window.location.reload();  
    };

    return (
        <Button primary loading={isLoading} style={{ height: "100%", width: "60%", display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "teal" }} onClick={handleRefresh}>
            <div className="three wide column">
                <i className="refresh icon"></i>
            </div>
        </Button>
    );
}

export { AddingButton, SeachingButton, RefreshButton };
