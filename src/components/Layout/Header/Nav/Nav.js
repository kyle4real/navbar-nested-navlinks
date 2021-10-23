import React, { useState } from "react";
import Dropdown from "./Dropdown/Dropdown";
import { SArrowIcon, SNav, SNavLabel, SNavLink, SNavLinkContainer } from "./styles";

const Nav = ({ navLinks }) => {
    const [openDropdown, setOpenDropdown] = useState(null);

    const openDropdownHandler = (label) => {
        if (label === openDropdown) return setOpenDropdown(null);
        setOpenDropdown(label);
    };

    return (
        <SNav>
            {navLinks.map(({ label, link, tree }, index) => {
                const isOpen = openDropdown === label;
                return (
                    <SNavLinkContainer key={index} onClick={() => openDropdownHandler(label)}>
                        {link && <SNavLink to={link}>{label}</SNavLink>}
                        {!link && (
                            <>
                                <SNavLabel isOpen={isOpen}>{label}</SNavLabel>
                                <SArrowIcon isOpen={isOpen} />
                            </>
                        )}
                        {isOpen && <Dropdown tree={tree} />}
                    </SNavLinkContainer>
                );
            })}
        </SNav>
    );
};

Nav.defaultProps = {
    navLinks: [
        {
            label: "About",
            link: null,
            tree: [],
        },
        {
            label: "Shop",
            link: "/shop",
            tree: null,
        },
        {
            label: "Contact",
            link: null,
            tree: [],
        },
    ],
};

export default Nav;
