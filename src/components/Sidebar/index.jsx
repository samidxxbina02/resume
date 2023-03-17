import React, { useState } from "react";
import { Link } from "react-router-dom";

import { StyledSidebar } from "./styled";
import FavoriteIcon from "@mui/icons-material/Favorite";
import SwapHorizIcon from "@mui/icons-material/SwapHoriz";

import sidebarList from "./helpers";
import "./Sidebar.css";
import { StayPrimaryLandscape } from "@mui/icons-material";

const linkStyle = { color: "white", textDecoration: "none" };

const Sidebar = () => {
  const [isToggle, setIsToggle] = useState(false);

  const createNavClick = () => {
    setIsToggle((prev) => !prev);
  };

  return (
    <StyledSidebar.Block>
      <StyledSidebar.Wrapper isToggle={isToggle}>
        <StyledSidebar.Header>
          {!isToggle ? (
            <StyledSidebar.Logo className="logo">My Resume</StyledSidebar.Logo>
          ) : (
            <FavoriteIcon sx={{ color: "white" }} fontSize="large" />
          )}
        </StyledSidebar.Header>

        <StyledSidebar.Body>
          <StyledSidebar.List>
            {sidebarList()?.map((nav, idx) => (
              <StyledSidebar.ListItem key={idx}>
                <Link style={linkStyle} to={nav.href}>
                  <StyledSidebar.ListItemWrapper>
                    <StyledSidebar.ListItemIcon>
                      {nav.icon}
                    </StyledSidebar.ListItemIcon>
                    {!isToggle && (
                      <StyledSidebar.ListItemTitle>
                        {nav.title}
                      </StyledSidebar.ListItemTitle>
                    )}
                  </StyledSidebar.ListItemWrapper>
                </Link>
              </StyledSidebar.ListItem>
            ))}
          </StyledSidebar.List>
        </StyledSidebar.Body>
        <StyledSidebar.Footer>
          <SwapHorizIcon
            sx={{ color: "white" }}
            fontSize="large"
            onClick={createNavClick}
          />
        </StyledSidebar.Footer>
      </StyledSidebar.Wrapper>
    </StyledSidebar.Block>
  );
};

export default Sidebar;
