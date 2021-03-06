import React, { useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRightToBracket,
  faAlignJustify,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { faApple } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

const menuList = [
  {
    id: "1",
    name: "Pokemon",
  },
  {
    id: "2",
    name: "Keroro",
  },
  {
    id: "3",
    name: "Onepiece",
  },
];

const toggleList = [
  {
    id: "1",
    name: "Github",
  },
  {
    id: "2",
    name: "Notion",
  },
];

const Nav = () => {
  const [isToggle, setisToggle] = useState(false);
  return (
    <>
      <NavBar>
        <Toggle
          onClick={() => {
            setisToggle(!isToggle);
          }}
        >
          <FontAwesomeIcon icon={faAlignJustify} size="2x" color="white" />
        </Toggle>
        <Link to="/">
          <FontAwesomeIcon icon={faApple} size="3x" color="white" />
        </Link>
        <MenuList>
          {menuList.map(({ id, name }) => (
            <List key={id}>
              <Item href="/#">{name}</Item>
            </List>
          ))}
        </MenuList>
        <div>
          <FontAwesomeIcon
            icon={faArrowRightToBracket}
            size="2x"
            color="white"
          />
        </div>
      </NavBar>
      {isToggle ? (
        <TggleList>
          <Search>
            <Img>
              <FontAwesomeIcon
                icon={faMagnifyingGlass}
                size="2x"
                color="black"
              />
            </Img>
            <Input type="text" placeholder="search" />
          </Search>
          {menuList.map(({ id, name }) => (
            <List key={id}>
              <Item href="/#" fontSize="30px">
                {name}
              </Item>
              <hr />
            </List>
          ))}
          <Contact>Contact me</Contact>
          {toggleList.map(({ id, name }) => (
            <List key={id}>
              <Item href="/#" fontSize="30px">
                {name}
              </Item>
              <hr />
            </List>
          ))}
        </TggleList>
      ) : (
        <></>
      )}
    </>
  );
};

export default Nav;

const NavBar = styled.div`
  height: 130px;
  background-color: #333333;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 12px;
  @media screen and (max-width: 1510px) {
    justify-content: space-between;
    padding: 12px 60px;
  }
`;
const List = styled.li``;

const Toggle = styled.div`
  display: none;

  @media screen and (max-width: 1510px) {
    display: flex;
  }
`;
const TggleList = styled.ul`
  margin-top: 0px;
  padding: 30px;
  list-style: none;
  background-color: black;
  display: flex;
  flex-direction: column;
  height: 100%;
  ${List} {
    margin-top: 60px;
    margin-bottom: 60px;
  }
  @media screen and (min-width: 1510px) {
    display: none;
  }
`;

const MenuList = styled.ul`
  display: flex;
  list-style: none;
  justify-content: space-around;
  width: 50%;
  font-size: 2rem;
  @media screen and (max-width: 1510px) {
    display: none;
  }
`;

const Item = styled.a`
  font-size: ${(props) => props.fontSize};
  color: #d6d6d6;
  text-decoration: none;
`;

const Search = styled.div`
  display: flex;
  position: relative;
`;

const Input = styled.input`
  width: 100%;
  height: 2em;
  border: none;
  padding: 0.5em;
  background: lightgray;
  font-size: 20px;
`;

const Img = styled.div`
  position: absolute;
  width: 17px;
  top: 10px;
  right: 12px;
  margin-right: 10px;
`;

const Contact = styled.div`
  margin-top: 60px;
  text-align: center;
  font-size: 30px;
  font-weight: bold;
  color: white;
`;
