import React from "react";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";

const Header = styled.header`
  display: flex;
  align-items: center;
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
  margin-left: 20px;
`;

const SLink = styled(Link)`
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Item = styled.li`
  display: flex;
  justify-content: center;
  width: 80px;
  height: 50px;
  border-bottom: 5px solid ${(props) => (props.current ? "red" : "transparent")};
  transition: border-bottom 400ms ease-in-out;
`;

const WithHeader = withRouter(({ location: { pathname } }) => (
  <Header>
    <List>
      <Item current={pathname === "/"}>
        <SLink to="/">Movies</SLink>
      </Item>
      <Item current={pathname === "/tv"}>
        <SLink to="/tv">TV</SLink>
      </Item>
      <Item current={pathname === "/search"}>
        <SLink to="/search">Search</SLink>
      </Item>
      <Item current={pathname === "/detail"}>
        <SLink to="/detail">Detail</SLink>
      </Item>
    </List>
  </Header>
));

export default WithHeader;
