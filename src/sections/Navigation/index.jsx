import React from "react";

import styled from "styled-components";

import { Menu, Visibility } from "semantic-ui-react";

// import {
// 	NavLink
// } from "react-router-dom";

import { ScrollTo } from "react-scroll-to";

import { HeaderContainer } from "utils/Layout";

import { BASIC as basic, SECTIONS as menus } from "resume";

import Hero from "sections/Hero";

import { FixedMenu, MobileMenu } from "./Menu";

import { BottomLink, PulsingIcon } from "./BottomLink";

import "./index.css";

const { location } = window;

const StyledHeader = styled(HeaderContainer)`
  top: 0;
  width: 100%;
  height: 100%;
  justify-content: space-between;
  align-items: center;
  display: flex;
  flex-direction: column;
`;

const ScrollToLink = ({ id }) => (
  <ScrollTo>
    {/* {({ scrollTo }) => <a onClick={() => scrollTo({ id })} />} */}
  </ScrollTo>
);

export default class Navigation extends React.Component {
  state = {
    activeItem: location.hash ? location.hash.slice(1) : menus[0],
    visible: false,
    open: false
  };

  handleScroll = m => {
    this.setState({
      activeItem: m
    });
  };

  handleOnClick = (e, { to }) => {
    this.setState({
      activeItem: to,
      open: false
    });
  };

  handleSetActive = activeItem => {
    this.setState({
      open: false,
      activeItem
    });
  };

  render() {
    const { activeItem, open } = this.state;

    const MenuItems = menus.map((item, i) => (
      <Menu.Item
        as={ScrollToLink}
        to={item}
        key={i}
        smooth
        duration={450}
        ignoreCancelEvents
        active={activeItem === item}
        name={item}
        color="black"
      />
    ));

    return (
      <StyledHeader id={this.props.id}>
        {/* <Visibility>
          <FixedMenu>{MenuItems}</FixedMenu>
          <MobileMenu isOpen={open}>{MenuItems}</MobileMenu>
        </Visibility> */}
    
		    <Hero />

        {/* <Menu.Item
          as={BottomLink}
          to={menus[1]}
          smooth
          duration={450}
          onClick={this.handleOnClick}
          ignoreCancelEvents
        >
          <PulsingIcon src={basic.logo} size="mini" />
        </Menu.Item> */}
      </StyledHeader>
    );
  }
}
