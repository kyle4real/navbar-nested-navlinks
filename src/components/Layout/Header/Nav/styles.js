import styled, { css } from "styled-components";

import { v, b } from "../../../../styles/variables";

import { IoMdArrowDropdown } from "react-icons/io";
import { Link } from "react-router-dom";

const btnReset = css`
    cursor: pointer;
    background: none;
    border: none;
    outline: none;
    color: inherit;
    font-family: inherit;
    letter-spacing: inherit;
    font-size: inherit;
    padding: 0;
`;

export const SNav = styled.nav`
    width: auto;
    padding: ${v.mdSpacing};
    background: ${({ theme }) => theme.bg};
    border-radius: ${v.borderRadius};
    @media ${b.md} {
        background: none;
        padding: 0;
        height: 100%;
        display: flex;
    }
`;
export const SNavLinkContainer = styled.button`
    ${btnReset}

    position: relative;

    display: flex;
    align-items: center;
    width: 100%;
    justify-content: space-between;

    :not(:last-of-type) {
        margin-bottom: ${v.mdSpacing};
    }

    @media ${b.md} {
        :not(:last-of-type) {
            margin-bottom: 0;
            margin-right: ${v.mdSpacing};
        }
    }
`;
export const SArrowIcon = styled(IoMdArrowDropdown)`
    display: block;
    margin-left: 4px;
    color: ${({ isOpen, theme }) => (!isOpen ? "inherit" : theme.primary)};
    transform: ${({ isOpen }) => (!isOpen ? "rotate(-90deg)" : "none")};
`;
export const SNavLink = styled(Link)`
    text-decoration: none;
    color: inherit;
    :hover {
        color: ${({ theme }) => theme.primary};
    }
`;
export const SNavLabel = styled.span`
    color: ${({ isOpen, theme }) => (!isOpen ? "inherit" : theme.primary)};
`;
