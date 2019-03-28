import React from "react"

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
				size='massive'
				inverted pointing secondary
				// widths={children.length}
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
