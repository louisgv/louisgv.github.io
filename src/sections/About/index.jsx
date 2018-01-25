import React, { PureComponent } from "react";

import styled from 'styled-components';

import {
	Reveal,
	Button as Label,
	Header,
	Segment,
	Grid,
	Image,
	Responsive,
	List,
	Divider
} from 'semantic-ui-react';

import {
	FlexColumnCenterDiv
} from 'utils/Layout';

import {
	CONTACT as contact,
	PHOTO as photo,
	INTERESTS as interests
} from 'resume';

const StyledContainer = styled(FlexColumnCenterDiv)`
width: 100vw;
padding: 5vh;
background: #222;
`

export default class About extends PureComponent {
	render() {
		return (
			<StyledContainer id={this.props.id}>
				<br/>
				<Header as='h2' inverted>
					ABOUT ME
				</Header>

				<hr className='section-decorator'/>

				<Grid container centered padded columns={2} verticalAlign={'middle'}>
					<Grid.Column computer={4} tablet={6} mobile={16} floated={'right'}>
						<Reveal animated='fade'>
						  <Reveal.Content visible>
							  <Responsive as={Image}
  										size='medium' rounded src={photo.normal}
  										minWidth={Responsive.onlyTablet.minWidth} />

  							<Responsive as={Image}
  										size='medium' rounded src={photo.small}
  										{...Responsive.onlyMobile}/>

						  </Reveal.Content>
						  <Reveal.Content hidden>
							  <Responsive as={Image}
							  			size='medium' rounded src={photo.normalInverted}
							  			minWidth={Responsive.onlyTablet.minWidth} />

							  <Responsive as={Image}
							  			size='medium' rounded src={photo.smallInverted}
							  			{...Responsive.onlyMobile}/>
						  </Reveal.Content>
						</Reveal>

					</Grid.Column>

					<Grid.Column textAlign={"justified"} stretched computer={8} tablet={10} mobile={16} floated={'left'}>

						<Segment inverted>
							<p>
								I automate my job as soon and as much as possible.
							</p>
						</Segment>
						{/* <Header inverted>
							Interests
						</Header> */}
						<Divider horizontal inverted>Interests</Divider>
						<List animated>
							{
								interests.map(({name, color, icon, url}, i) =>
									<List.Item key={i}>
										<Label as='a' rel="noopener noreferrer" target="_blank"
											fluid color={color} size={'huge'} href={url} labelPosition='left'
											icon={icon} content={name}/>
									</List.Item>
								)
							}
						</List>

						{/* <Header inverted>
							Contact Details
						</Header> */}
						<Divider horizontal inverted>Contact Details</Divider>

						<List animated>
							<List.Item>
								<Label as='a' fluid color='blue' labelPosition='left' size={'huge'}
									target='_blank' icon='map'
									href={contact.location.url}
									content={contact.location.name}/>
							</List.Item>

							<List.Item>
								<Label as='a' fluid color='teal' labelPosition='left' size={'huge'} icon='envelope'
									href={`mailto:${contact.email}`}
									content={contact.email} />
							</List.Item>
						</List>

					</Grid.Column>
				</Grid>


			</StyledContainer>
		);
	}
}
