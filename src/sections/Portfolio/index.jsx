import React, {
	Component
} from "react";

import styled from 'styled-components';

import {
	Button,
	Header,
	Grid,
	Image,
} from 'semantic-ui-react';

import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

import {
	FlexColumnCenterDiv
} from 'utils/Layout';

import {
	PORTFOLIOS as portfolios
} from 'resume';

import {
	ProjectDetailModal
} from './DetailModal';

const AutoPlaySwipeableViews = styled(autoPlay(SwipeableViews))`
width: 100vw;
.react-swipeable-view-container {
	min-height: 360px;
	cursor: grab;
}
`;

const StyledContainer = styled(FlexColumnCenterDiv)`
width: 100vw;
padding: 5vh;
background: #F9F9F9;
`

export default class Portfolio extends Component {
	state={ playing: true}

	toggleAutoPlay = () => {
		const {playing} = this.state;
		this.setState({
			playing: !playing,
		});
	}

	render() {
		const {
			playing
		} = this.state;

		return(
			<StyledContainer id={this.props.id}>
				<br/>
				<Header as="h2">
					PORTFOLIO
				</Header>

				<hr className='section-decorator'/>

				<Button labelPosition='left'
					size={'huge'}
					color={playing ? 'red' : 'orange'}
					icon={playing? 'stop' : 'play'}
					content={playing? 'Stop Slideshow' : 'Resume Slideshow'}
					onClick={this.toggleAutoPlay}/>
					<AutoPlaySwipeableViews autoplay={playing}
						animateHeight={false}
						enableMouseEvents
						interval={4500}
						onSwitching={this.onSlideChanged}
						slideStyle={{
							width: '100vw',
							display: 'flex',
							justifyContent: 'center',
							alignItems: 'flex-start',
							padding: '1em',
							overflow: 'hidden'
						}}>
						{
							portfolios.map((projectData, i) => {
								const  {
									name, type,
									description,
									image, technology, url
								} = projectData;
								return (
									<Grid container columns={2} key={i}>
										<Grid.Column computer={7} tablet={7} mobile={16} floated={'right'}>
											<Image size='medium' rounded src={image}/>
										</Grid.Column>

										<Grid.Column computer={9} tablet={9} mobile={16} floated={'left'}>
											<Header as='h2'>
												{name}
												<Header sub>
													{type}
												</Header>
											</Header>
											<p>
												{description}
											</p>

											<Header>
												Technology
											</Header>
											<p>
												{technology}
											</p>
											<ProjectDetailModal {...projectData} />

											<Button as='a' labelPosition='left' color='teal' size={'huge'} href={url} rel="noopener noreferrer" target="_blank" icon='external' content='Link' />

										</Grid.Column>
									</Grid>
								)
							}
						)
					}
				</AutoPlaySwipeableViews>

			</StyledContainer>
		);
	}
}
