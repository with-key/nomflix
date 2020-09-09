import React from "react";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";

const Header = styled.header`
  display: flex;
  color: #fff;
  width: 100%;
  height: 50px;
  position: fixed;
  top: 0px;
  left: 0px;
  z-index: 10;
  box-shadow: 0px 1px 5px 2px rgba(0, 0, 0, 0.8);
  background-color: rgba(20, 20, 20, 0.8);
`;
const List = styled.ul`
  display: flex;
  width: 20%;
  height: 100%;
  padding-left: 20px;
  justify-content: space-around;
  align-items: center;
`;

const SLink = styled(Link)`
  padding: 20px 0 20px 0;
`;

const WithHeader = withRouter((props) => (
  <Header>
    {console.log(props)}
    <List>
      <li>
        <SLink to="/">Movies</SLink>
      </li>
      <li>
        <SLink to="/tv">TV</SLink>
      </li>
      <li>
        <SLink to="/search">Search</SLink>
      </li>
      <li>
        <SLink to="/detail">Detail</SLink>
      </li>
    </List>
  </Header>
));

export default WithHeader;
