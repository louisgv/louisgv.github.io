import React, {
	PureComponent
} from "react";

import styled from 'styled-components';

import {
	Header,
	Divider,
	Responsive,
	Button
} from 'semantic-ui-react';

import {
	FlexColumnCenterDiv
} from 'utils/Layout';

import {RESUME as resume} from 'resume';

const StyledContainer = styled(FlexColumnCenterDiv)`
width: 100vw;
padding: 5vh;
background: black;
`

export default class Portfolio extends PureComponent {
	render() {
		return(
			<StyledContainer id={this.props.id}>
				<br/>
				<Header as="h2" inverted>
					RESUME
				</Header>
				<hr className='section-decorator'/>

				<Button
					content='Read on google doc' icon='bookmark outline'
					labelPosition='left' inverted as='a' color='red' size={'huge'} rel="noopener noreferrer" target="_blank" href={resume.external} />
				<Divider horizontal inverted>Or</Divider>
				<Responsive as={'iframe'}
						title='resume'
						style={{
							width:'81vw',
							height: '90vh'
						}}
						src={resume.embedded}
						minWidth={Responsive.onlyTablet.minWidth}/>
				<Responsive as={Header} inverted
						{...Responsive.onlyMobile}>
						Open this site on a desktop browser
				</Responsive>
			</StyledContainer>
		);
	}
}
