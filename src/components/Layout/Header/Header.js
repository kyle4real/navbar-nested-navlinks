import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "../../../app/slices/uiSlice";
import Nav from "./Nav/Nav";
import {
    SArrowIcon,
    SCenter,
    SCloseIcon,
    SCTAButton,
    SHeader,
    SHeaderFixed,
    SHeaderHeight,
    SLeft,
    SLogo,
    SLogoLink,
    SMenu,
    SMenuIcon,
    SMenuToggleButton,
    SNav,
    SNavLink,
    SNavLinkContainer,
    SRight,
} from "./styles";

const Header = () => {
    const dispatch = useDispatch();
    const { menuOpen } = useSelector((state) => state.ui);

    const menuToggleHander = () => {
        dispatch(uiActions.menuToggle());
    };

    return (
        <>
            <SHeaderHeight />
            <SHeaderFixed>
                <SHeader>
                    <SLeft>
                        <SLogoLink to="/">
                            <SLogo />
                        </SLogoLink>
                    </SLeft>
                    <SCenter>
                        <Nav />
                    </SCenter>
                    <SRight>
                        <SCTAButton>Sign In</SCTAButton>
                        <SMenuToggleButton onClick={menuToggleHander}>
                            {!menuOpen ? <SMenuIcon /> : <SCloseIcon />}
                        </SMenuToggleButton>
                    </SRight>
                </SHeader>
            </SHeaderFixed>
            <SMenu style={menuOpen ? { left: 0 } : {}}>
                <Nav />
            </SMenu>
        </>
    );
};

export default Header;
