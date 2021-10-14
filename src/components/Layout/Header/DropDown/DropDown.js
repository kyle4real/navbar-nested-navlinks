import React, { Fragment, useState } from "react";

import {
    SArrowIcon,
    SBranchLabel,
    SBranchLink,
    SDropDown,
    STreeChildren,
    STreeItem,
} from "./styles";

const TreeItem = ({ onSelectCallback, label, children, level, href }) => {
    const [open, setOpen] = useState();

    return (
        <STreeItem>
            {children.length > 0 && (
                <SBranchLabel onClick={() => setOpen((p) => !p)}>
                    {label}
                    <SArrowIcon isopen={open} />
                </SBranchLabel>
            )}
            {children.length === 0 && (
                <SBranchLink onClick={(e) => onSelectCallback(e)} to={href}>
                    {label}
                </SBranchLink>
            )}
            <STreeChildren style={{ background: `rgba(30,30,30, .8)` }}>
                {open && children}
            </STreeChildren>
        </STreeItem>
    );
};

const DropDown = ({ tree, index }) => {
    const onSelectCallback = (e) => {
        console.log(e.target);
    };
    const createTree = (branch, level) =>
        branch.branches && (
            <TreeItem
                level={level}
                id={branch.id}
                key={branch.id}
                onSelectCallback={() => onSelectCallback(branch)}
                label={branch.text}
                href={branch.href}
            >
                {branch.branches.map((branch) => {
                    return <Fragment key={branch.id}>{createTree(branch, level + 1)}</Fragment>;
                })}
            </TreeItem>
        );

    return (
        <SDropDown className="dropdown" index={index}>
            {tree.map((branch, i) => (
                <div key={i}>{createTree(branch, 0)}</div>
            ))}
        </SDropDown>
    );
};

export default DropDown;
