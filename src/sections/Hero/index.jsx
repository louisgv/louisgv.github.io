import React, { PureComponent } from "react";

import styled from 'styled-components';
import mediaQuery from 'styled-media-query';

import {
	Header,
	Divider,
	Grid
} from 'semantic-ui-react';

import SocialMedia from 'components/SocialMedia';
import WorkSample from 'components/WorkSample';

import {
	DesktopHackerBanner,
	MobileHackerBanner
} from './HackerBanner';

import {FlexColumnCenterDiv} from 'utils/Layout';

import {
	BASIC as basic,
	SOCIALS as socials,
	WORK_SAMPLES as workSamples
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

				 <Grid stretched padded doubling columns={workSamples.length}>
					{ workSamples.map(WorkSample) }
				 </Grid>

			</StyledContainer>
		);
	}
}
