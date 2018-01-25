import React, {Component} from "react";

import {
	Button,
	Header,
	Image,
	Modal,
} from 'semantic-ui-react';

export class ProjectDetailModal extends Component {
  state = { modalOpen: false }

  handleOpen = () => this.setState({ modalOpen: true })

  handleClose = () => this.setState({ modalOpen: false })

  render() {
		const {
			name, type, color,
			role, status, description,
			image, technology, url, license
		} = this.props;
    return (
			<Modal
				open={this.state.modalOpen}
				onClose={this.handleClose}
				dimmer={'blurring'}
				trigger={
					<Button onClick={this.handleOpen} labelPosition='left' color={color}
						size={'huge'} icon='window maximize' content='More' />
				}>
				<Modal.Header>
					{name} - {type}
				</Modal.Header>
				<Modal.Content image scrolling>
					<Image size='medium' src={image} wrapped rounded/>

					<Modal.Description>
						<Header>Summary</Header>
						<p>{description}</p>

						<Header>Technology</Header>
						<p>{technology}</p>

						<Header>Role</Header>
						<p>{role}</p>

						<Header>Status</Header>
						<p>{status}</p>

						<Header>License</Header>
						<p className='rainbow mobile'>{license}</p>

					</Modal.Description>
				</Modal.Content>
				<Modal.Actions>
						<Button as='a' labelPosition='left' color='teal' href={url} rel="noopener noreferrer" target="_blank" icon='external' content='Open Project Link' />
					<Button onClick={this.handleClose} negative
						labelPosition='right' icon='close' content='Close'/>
				</Modal.Actions>
			</Modal>
    )
  }
}
