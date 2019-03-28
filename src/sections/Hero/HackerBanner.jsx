import React from "react";

import {
	Header,
	Responsive
} from 'semantic-ui-react';

import {
	BASIC as basic
} from 'resume';

const HackerBanner =({anchorClass})=> (
	<a target="_blank" rel="noopener noreferrer" className={anchorClass} href={basic.taglineUrl}>
		<Header
			as='h1'
			content={basic.tagline}
			inverted
			style={{ fontSize: '36px', fontWeight: 'normal' }}
		/>
	</a>
)

export const MobileHackerBanner =()=> (
	<Responsive
		as={HackerBanner}
		anchorClass="rainbow"
		{...Responsive.onlyMobile}
	/>
)

export const DesktopHackerBanner =()=> (
	<Responsive
		as={HackerBanner}
		anchorClass="rainbow"
		minWidth={Responsive.onlyTablet.minWidth}
	/>
)
