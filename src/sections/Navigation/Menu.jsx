import React from "react"

import styled from "styled-components";

import {
	stack as BurgerMenu
} from 'react-burger-menu'

import {
	Menu,
	Responsive,
} from 'semantic-ui-react'

export const FixedMenu = ({children}) => (
	<Responsive as={Menu}
				fixed='top'
				size='large'
				style={{background:'black'}}
				inverted pointing secondary
				widths={children.length}
				minWidth={Responsive.onlyTablet.minWidth}>
    	{children}
	</Responsive>
)

const CenteredMenu = styled(Menu)`
	display: flex;
	justify-content: center;
`

export const DesktopMenu = ({children}) => (
	<Responsive as={CenteredMenu}
				inverted pointing secondary
				size='massive'
				minWidth={Responsive.onlyTablet.minWidth}>
			{children}
	</Responsive>
)

export const MobileMenu =({isOpen, children})=> (
	<Responsive as={BurgerMenu}
			isOpen={isOpen}
			{...Responsive.onlyMobile}
			right>
  		{children}
	</Responsive>
)
