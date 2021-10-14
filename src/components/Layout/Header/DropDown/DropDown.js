import React from "react";
import { SNavLink, SNavLinkContainer } from "../styles";
import { SDropDown } from "./styles";

const DropDown = () => {
    return (
        <SDropDown className="dropdown">
            <SNavLink>HIII</SNavLink>
            <SNavLink>HIII</SNavLink>
            <SNavLinkContainer>
                <SNavLink>HIII</SNavLink>
            </SNavLinkContainer>
        </SDropDown>
    );
};

export default DropDown;
