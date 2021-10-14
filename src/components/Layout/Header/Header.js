import React, { Fragment } from "react";

import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "../../../app/slices/uiSlice";

import {
    SButton,
    SFlex,
    SHeader,
    SHeaderFixed,
    SHeaderMain,
    SLogo,
    SLogoImage,
    SMenu,
    SMenuIcon,
    SMenuNav,
    SMenuTitle,
    SNav,
    SNavLink,
    SNavLinkContainer,
    SRelativeContainer,
} from "./styles";
import { logo } from "../../../assets";
import { useHistory, useLocation } from "react-router";
import DropDown from "./DropDown/DropDown";

const Header = ({ headerData }) => {
    const dispatch = useDispatch();
    const history = useHistory();
    const { pathname } = useLocation();
    const { menuOpen } = useSelector((state) => state.ui);

    return (
        <>
            <SHeader />
            <SHeaderFixed>
                <SHeaderMain>
                    <SFlex>
                        <SLogo to="/">
                            <SLogoImage src={logo} alt="Logo typing hands" />
                        </SLogo>
                    </SFlex>
                    <SFlex>
                        <SNav>
                            {headerData.navLinks.map(({ text, href, tree }, index) => {
                                return (
                                    <Fragment key={index}>
                                        <SNavLinkContainer>
                                            <SNavLink to={href} isActive={pathname === href}>
                                                {text}
                                            </SNavLink>
                                            {tree && (
                                                <DropDown
                                                    tree={tree}
                                                    navLinks={headerData.navLinks}
                                                    index={index}
                                                />
                                            )}
                                        </SNavLinkContainer>
                                    </Fragment>
                                );
                            })}
                        </SNav>
                    </SFlex>
                    <SFlex>
                        <SButton onClick={() => history.push(headerData.button.href)}>
                            {headerData.button.text}
                        </SButton>
                    </SFlex>
                    <SFlex>
                        <SMenuIcon onClick={() => dispatch(uiActions.menuToggle())} />
                    </SFlex>
                    {menuOpen && (
                        <SMenu>
                            <SMenuTitle>Navigation</SMenuTitle>
                            <SMenuNav>
                                {headerData.navLinks.map(({ text, href }, index) => (
                                    <SNavLinkContainer key={index}>
                                        <SNavLink to={href} isActive={pathname === href}>
                                            {text}
                                        </SNavLink>
                                    </SNavLinkContainer>
                                ))}
                            </SMenuNav>
                            <SButton onClick={() => history.push(headerData.button.href)}>
                                {headerData.button.text}
                            </SButton>
                        </SMenu>
                    )}
                </SHeaderMain>
            </SHeaderFixed>
        </>
    );
};

Header.defaultProps = {
    headerData: {
        button: {
            text: "Sign In",
            href: "/login",
        },
        navLinks: [
            {
                text: "Shop",
                href: "/shop",
                tree: [
                    {
                        text: "Services",
                        id: 1,
                        href: "/services",
                        branches: [
                            {
                                text: "Financial",
                                id: 2,
                                href: "/financial",
                                branches: [
                                    {
                                        text: "New",
                                        id: 3,
                                        href: "/new",
                                        branches: [],
                                    },
                                    {
                                        text: "Old",
                                        id: 4,
                                        href: "/old",
                                        branches: [],
                                    },
                                ],
                            },
                            {
                                text: "Agro",
                                id: 5,
                                href: "/agro",
                                branches: [],
                            },
                        ],
                    },
                    {
                        text: "Products",
                        id: 6,
                        href: "/products",
                        branches: [
                            {
                                text: "All",
                                id: 7,
                                href: "/all",
                                branches: [],
                            },
                            {
                                text: "Collections",
                                id: 8,
                                href: "/collections",
                                branches: [],
                            },
                        ],
                    },
                ],
            },
            {
                text: "Home",
                href: "/",
                tree: [
                    {
                        text: "Services",
                        id: 1,
                        href: "/services",
                        branches: [
                            {
                                text: "Financial",
                                id: 2,
                                href: "/financial",
                                branches: [
                                    {
                                        text: "New",
                                        id: 3,
                                        href: "/new",
                                        branches: [],
                                    },
                                    {
                                        text: "Old",
                                        id: 4,
                                        href: "/old",
                                        branches: [],
                                    },
                                ],
                            },
                            {
                                text: "Agro",
                                id: 5,
                                href: "/agro",
                                branches: [],
                            },
                        ],
                    },
                    {
                        text: "Products",
                        id: 6,
                        href: "/products",
                        branches: [
                            {
                                text: "All",
                                id: 7,
                                href: "/all",
                                branches: [],
                            },
                            {
                                text: "Collections",
                                id: 8,
                                href: "/collections",
                                branches: [],
                            },
                        ],
                    },
                ],
            },
            {
                text: "About",
                href: "/ranks",
                tree: [
                    {
                        text: "Services",
                        id: 1,
                        href: "/services",
                        branches: [
                            {
                                text: "Financial",
                                id: 2,
                                href: "/financial",
                                branches: [
                                    {
                                        text: "New",
                                        id: 3,
                                        href: "/new",
                                        branches: [],
                                    },
                                    {
                                        text: "Old",
                                        id: 4,
                                        href: "/old",
                                        branches: [],
                                    },
                                ],
                            },
                            {
                                text: "Agro",
                                id: 5,
                                href: "/agro",
                                branches: [],
                            },
                        ],
                    },
                    {
                        text: "Products",
                        id: 6,
                        href: "/products",
                        branches: [
                            {
                                text: "All",
                                id: 7,
                                href: "/all",
                                branches: [],
                            },
                            {
                                text: "Collections",
                                id: 8,
                                href: "/collections",
                                branches: [],
                            },
                        ],
                    },
                ],
            },
        ],
    },
};

export default Header;
