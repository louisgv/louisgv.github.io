import React, { PureComponent } from "react";

import styled from 'styled-components';

import Navigation from "sections/Navigation";
import Footer from "sections/Footer";

import About from 'sections/About';

import Portfolio from 'sections/Portfolio';

import Resume from 'sections/Resume';

import {
	LongPage
} from 'utils/Layout';

const Container = styled(LongPage)`
  justify-content: space-between;
  align-items: center;
	background: #1b1c1d;
`

export default class Home extends PureComponent {
	render() {
		return (
			<Container>
				<Navigation id="Top"/>
				<About id="About"/>
				<Portfolio id="Portfolio"/>
				<Resume id="Resume"/>
				<Footer />
			</Container>
		);
	}
}
