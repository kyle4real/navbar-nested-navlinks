import styled from "styled-components";

import { v, b, s } from "./../../../styles/variables";

import { RiMenu5Line } from "react-icons/ri";
import { FaReact } from "react-icons/fa";
import { Link } from "react-router-dom";

export const SHeader = styled.div`
    height: ${v.headerHeight};
`;

export const SHeaderFixed = styled.div`
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1000;
    background: ${({ theme }) => theme.bg};
    box-shadow: 0 2px 2px ${({ theme }) => theme.bg2};
`;

export const SHeaderMain = styled.div`
    position: relative;
    color: ${({ theme }) => theme.text};
    transition: 0.3s ease padding;
    padding: 0 ${v.mdSpacing};
    @media ${b.lg} {
        padding: 0 ${v.smSpacing};
        margin: 0 auto;
        width: 100%;
        max-width: ${s.lg};
    }
    height: ${v.headerHeight};
    display: flex;
    align-items: center;
`;
export const SFlex = styled.div`
    height: 100%;
    flex: 1;
    :nth-child(1) {
        display: flex;
        align-items: center;
    }
    :nth-child(2) {
        flex: 3;
    }
    :nth-child(3) {
        display: none;
    }
    :nth-child(4) {
        display: flex;
        align-items: center;
        justify-content: flex-end;
    }
    @media ${b.md} {
        :nth-child(3) {
            display: flex;
            align-items: center;
            justify-content: flex-end;
        }
        :nth-child(4) {
            display: none;
        }
    }
`;

// LOGO /////////////
export const SLogo = styled(Link)`
    display: block;
    color: ${({ theme }) => theme.primary};
    width: calc(${v.headerHeight} - 24px);
`;

export const SLogoImage = styled(FaReact)`
    display: block;
    width: 100%;
    height: auto;
`;

// NAV /////////////
export const SNav = styled.nav`
    display: none;
    justify-content: center;
    align-items: flex-end;
    height: 100%;
    @media ${b.md} {
        display: flex;
    }
`;
// export const SRelativeContainer = styled.div`
//     height: 100%;
//     display: flex;
//     width: auto;
// `;
export const SNavLinkContainer = styled.div`
    height: 100%;
    z-index: 10;
    transition: all 0.3s ease;
    position: relative;

    :hover {
        .dropdown {
            transition: all 0.3s ease;
            display: initial;
        }
    }
`;
export const SNavLink = styled(Link)`
    color: inherit;
    text-decoration: none;
    cursor: pointer;
    text-decoration: none;
    text-transform: uppercase;
    font-weight: 400;
    font-size: 14px;
    padding: ${v.smSpacing} ${v.mdSpacing};
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${({ theme }) => theme.bg};
    position: relative;
    z-index: 10;
    transition: all 0.3s ease;

    :hover {
        color: ${({ theme }) => theme.primary};
    }
    color: ${({ theme, isActive }) => (!isActive ? "inherit" : theme.primary)};
    @media ${b.md} {
        box-shadow: inset 0 -2px 0 ${({ theme, isActive }) => (!isActive ? "transparent" : theme.primary)};
        :hover {
            box-shadow: inset 0 ${({ isActive }) => (isActive ? "-2px" : "-1px")} 0
                ${({ theme }) => theme.primary};
        }
    }
`;

// BUTTON /////////////

export const SButton = styled.button`
    border: none;
    background: ${({ theme }) => theme.primary};
    padding: calc(${v.smSpacing} - 2px) ${v.lgSpacing};
    color: ${({ theme }) => theme.textInvert};
    border-radius: ${v.borderRadius};
    font-weight: 400;
    font-size: 14px;
    font-family: inherit;
    cursor: pointer;
    /* text-transform: uppercase; */
`;

// MENU //////////////

export const SMenuIcon = styled(RiMenu5Line)`
    color: ${({ theme }) => theme.primary};
    display: block;
    font-size: 32px;
    cursor: pointer;
`;
export const SMenu = styled.div`
    user-select: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: absolute;
    top: ${v.headerHeight};
    right: 0;
    left: 0;
    width: 100%;
    min-height: 10vh;
    background: ${({ theme }) => theme.bg2};
    padding: ${v.lgSpacing};
    box-shadow: 0 2px 2px ${({ theme }) => theme.bg2};
    color: ${({ theme }) => theme.text};
    @media ${b.md} {
        display: none;
    }
`;
export const SMenuTitle = styled.span`
    display: block;
    font-size: 18px;
    font-weight: 600;
    margin-bottom: ${v.lgSpacing};
    text-transform: uppercase;
`;
export const SMenuNav = styled.div`
    width: 100%;
    margin-bottom: ${v.lgSpacing};
`;
