import React from "react";

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
                            {headerData.navLinks.map(
                                ({ text, href }, index) => {
                                    return (
                                        <SNavLinkContainer
                                            key={index}
                                            isActive={pathname === href}
                                        >
                                            <SNavLink to={href}>
                                                {text}
                                            </SNavLink>
                                            <DropDown></DropDown>
                                        </SNavLinkContainer>
                                    );
                                }
                            )}
                        </SNav>
                    </SFlex>
                    <SFlex>
                        <SButton
                            onClick={() => history.push(headerData.button.href)}
                        >
                            {headerData.button.text}
                        </SButton>
                    </SFlex>
                    <SFlex>
                        <SMenuIcon
                            onClick={() => dispatch(uiActions.menuToggle())}
                        />
                    </SFlex>
                    {menuOpen && (
                        <SMenu>
                            <SMenuTitle>Navigation</SMenuTitle>
                            <SMenuNav>
                                {headerData.navLinks.map(
                                    ({ text, href }, index) => (
                                        <SNavLinkContainer key={index}>
                                            <SNavLink
                                                to={href}
                                                isActive={pathname === href}
                                            >
                                                {text}
                                            </SNavLink>
                                        </SNavLinkContainer>
                                    )
                                )}
                            </SMenuNav>
                            <SButton
                                onClick={() =>
                                    history.push(headerData.button.href)
                                }
                            >
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
                href: "/stats",
            },
            {
                text: "Home",
                href: "/",
            },
            {
                text: "About",
                href: "/ranks",
            },
        ],
    },
};

export default Header;
