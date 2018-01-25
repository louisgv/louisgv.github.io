import React, { PureComponent } from "react";

import styled from 'styled-components';

import {
	Label,
	Icon,
	Header,
	Segment,
	Grid,
	Image,
	Responsive
} from 'semantic-ui-react';

import {
	FlexColumnCenterDiv
} from 'utils/Layout';

const StyledContainer = styled(FlexColumnCenterDiv)`
width: 100vw;
padding: 5vh;
background: #F9F9F9;
`

export default class Work extends PureComponent {
	render() {
		return (
			<StyledContainer id={this.props.id}>


			</StyledContainer>
		);
	}
}
