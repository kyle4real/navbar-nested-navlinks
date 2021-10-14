import { Link } from "react-router-dom";
import styled from "styled-components";

import { v } from "../../../../styles/variables";

import { AiOutlineRight } from "react-icons/ai";

export const SDropDown = styled.div`
    position: absolute;
    width: 300%;
    top: ${v.headerHeight};
    left: 0;
    display: none;
    transition: 0.3s ease all;
    user-select: none;
    background: ${({ theme }) => theme.bg};
    padding: ${v.smSpacing} 0;
`;

export const STreeItem = styled.div`
    padding: ${v.smSpacing};
`;

export const STreeChildren = styled.div``;

export const SBranchLabel = styled.span`
    padding: ${v.mdSpacing} ${v.mdSpacing};
    display: flex;
    justify-content: space-between;
    align-items: center;
    :hover {
        background: ${({ theme }) => theme.primary};
    }
`;

// export const SIconContainer = styled.span`
//     display: block;
//     padding: ${v.smSpacing} ${v.mdSpacing};
// `;
export const SArrowIcon = styled(AiOutlineRight)`
    display: block;
    margin-left: ${v.smSpacing};
    cursor: pointer;
    transform: ${({ isopen }) => (!isopen ? `none` : `rotate(90deg)`)};
`;

export const SBranchLink = styled(Link)`
    color: inherit;
    text-decoration: none;
    cursor: pointer;
    text-transform: uppercase;
    font-weight: 400;
    font-size: 14px;
    padding: ${v.smSpacing} ${v.mdSpacing};
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    /* background: ${({ theme }) => theme.bg}; */
    position: relative;
    z-index: 10;
    transition: all 0.3s ease;

    :hover {
        color: ${({ theme }) => theme.primary};
    }
`;
