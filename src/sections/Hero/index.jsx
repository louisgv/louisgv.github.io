import React, { PureComponent } from "react";

import styled from 'styled-components';
import mediaQuery from 'styled-media-query';

import {
	Header,
	Divider,
	Grid
} from 'semantic-ui-react';

import SocialMedia from 'components/SocialMedia';

import {
	DesktopHackerBanner,
	MobileHackerBanner
} from './HackerBanner';

import {FlexColumnCenterDiv} from 'utils/Layout';

import {
	BASIC as basic,
	SOCIALS as socials
} from 'resume';

const StyledContainer = styled(FlexColumnCenterDiv)`
	height: 99vh;

	${mediaQuery.lessThan('small')`
  	padding-top: 36vh;
  `}
`

export default class Hero extends PureComponent {
	render() {
		return (
			<StyledContainer id={this.props.id}>
				<Header
					as='h1'
					content={basic.name}
					inverted
					style={{ fontSize: '4.5em', fontWeight: 'normal'}}
				/>

				<DesktopHackerBanner/>
				<MobileHackerBanner/>

				<Divider horizontal inverted section/>

				 <Grid stretched padded doubling columns={socials.length}>
					{ socials.map(SocialMedia) }
				 </Grid>

			</StyledContainer>
		);
	}
}
