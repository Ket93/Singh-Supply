import React from "react";
import { SidebarContainer, Icon, CloseIcon, SidebarLink, SideBtnWrap, SidebarRoute, SidebarWrapper, SidebarMenu } from "./sidebarElements.js";

const Sidebar = ({ isOpen, toggle }) => {

    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>

            <SidebarWrapper>
                <SidebarMenu>

                    <SidebarLink to="/">
                        Home
                    </SidebarLink>

                    <SidebarLink to="jordans">
                        Jordan
                    </SidebarLink>

                    <SidebarLink to="/nike">
                        Nike
                    </SidebarLink>

                    <SidebarLink to="/addidas">
                        Addidas
                    </SidebarLink>

                </SidebarMenu>

                <SideBtnWrap>
                    <SidebarRoute to="/contact">
                        Contact Us
                    </SidebarRoute>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    )

}

export default Sidebar;