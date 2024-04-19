import React from "react";
import { Link } from "react-router-dom";
import { Wrapper, Content, LogoImg } from "./Navbar.styles";

import Mountlogo from "../../image/Mountlogo.png";

const Navbar = () => {
  return (
    <Wrapper>
    <Content>
        <Link to="/">
            <LogoImg src={Mountlogo} alt="rmdb-logo" />
        </Link>
    </Content>
    </Wrapper>
  )
}

export default Navbar;