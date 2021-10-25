import React from "react";
import { useLocation } from "react-router";
import AllPage from "../components/AllPage/AllPage";

const All = () => {
    const { pathname } = useLocation();

    return <AllPage title={pathname} />;
};

export default All;
